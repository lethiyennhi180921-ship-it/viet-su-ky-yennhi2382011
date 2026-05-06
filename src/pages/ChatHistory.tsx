import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Send, ScrollText, Mic, MicOff, Loader2, Sparkles } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import chatRobot from "@/assets/chat-robot.jpg";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-history`;

const SUGGESTIONS = [
  "Hai Bà Trưng khởi nghĩa năm nào và ý nghĩa ra sao?",
  "Kể về trận Bạch Đằng năm 938 của Ngô Quyền",
  "Vua Quang Trung đại phá quân Thanh thế nào?",
  "Triều đại nhà Trần có gì đặc biệt?",
  "Chiến thắng Điện Biên Phủ diễn ra ra sao?",
  "Nguyễn Trãi là ai và đóng góp gì?",
];

const ChatHistory = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Kính chào bạn! Tôi là **Sử Gia AI** — sẵn lòng cùng bạn ngược dòng *4000 năm lịch sử Việt Nam*. Hãy hỏi tôi về bất kỳ sự kiện, nhân vật hay triều đại nào bạn muốn tìm hiểu. 📜",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    if (!user) {
      toast.error("Vui lòng đăng nhập để trò chuyện với Sử Gia AI.");
      return;
    }

    const userMsg: Msg = { role: "user", content: trimmed };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && last.content === assistantSoFar.slice(0, last.content.length) === false) {
          // fallthrough — handled below
        }
        if (last?.role === "assistant" && prev.length === history.length + 1) {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m,
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData.session?.access_token;
      if (!accessToken) {
        toast.error("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
        setIsLoading(false);
        return;
      }
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          messages: history.slice(-20).map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) })),
        }),
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 401) {
          toast.error("Bạn cần đăng nhập để tiếp tục.");
        } else if (resp.status === 429) {
          toast.error("Quá nhiều yêu cầu, vui lòng thử lại sau ít phút.");
        } else if (resp.status === 402) {
          toast.error("Đã hết tín dụng AI. Vui lòng nạp thêm.");
        } else {
          toast.error("Có lỗi khi gọi Sử Gia AI. Vui lòng thử lại.");
        }
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsert(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsert(content);
          } catch {
            /* ignore */
          }
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Mất kết nối với Sử Gia AI.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleVoice = () => {
    const SR =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      toast.error("Trình duyệt không hỗ trợ nhận diện giọng nói. Hãy dùng Chrome/Edge.");
      return;
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SR();
    recognition.lang = "vi-VN";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setInput(transcript);
    };
    recognition.onerror = (e: any) => {
      console.error("Speech error", e);
      toast.error("Không nhận được giọng nói. Vui lòng thử lại.");
      setIsListening(false);
    };
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
    setIsListening(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SiteHeader />

      {/* Floating mascot robot */}
      <img
        src={chatRobot}
        alt="Trợ lý Sử Gia AI"
        aria-hidden="true"
        className="hidden lg:block pointer-events-none select-none absolute top-32 right-6 w-56 xl:w-72 opacity-80 drop-shadow-[0_10px_30px_rgba(184,134,11,0.35)] animate-float mix-blend-luminosity hover:mix-blend-normal transition-all"
        style={{ maskImage: "radial-gradient(circle, black 60%, transparent 100%)", WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)" }}
      />

      <main className="container mx-auto px-4 pt-28 pb-12 max-w-4xl relative z-10">
        <div className="text-center mb-8 animate-fade-in-up">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-display">
            Sử Gia AI
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-3 flex items-center justify-center gap-3">
            <ScrollText className="w-9 h-9 text-gold" />
            Trò Chuyện Lịch Sử
          </h1>
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            Hỏi đáp cùng AI về 4000 năm dựng nước & giữ nước. Bạn có thể gõ chữ hoặc nói trực tiếp bằng giọng Việt.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Chat panel */}
        <div className="bg-card border-2 border-gold/40 rounded-lg shadow-[0_0_40px_hsl(var(--gold)/0.1)] overflow-hidden flex flex-col h-[65vh]">
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-3 ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground border border-gold/40"
                      : "bg-background border-2 border-gold/30"
                  }`}
                >
                  {m.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2 text-gold text-xs font-display uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      Sử Gia AI
                    </div>
                  )}
                  <div className="prose prose-sm max-w-none prose-strong:text-gold prose-em:text-gold/90 text-foreground/90 leading-relaxed">
                    <ReactMarkdown>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start animate-fade-in-up">
                <div className="bg-background border-2 border-gold/30 rounded-lg px-4 py-3 flex items-center gap-2 text-gold">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm italic">Sử Gia đang ngẫm nghĩ...</span>
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div className="px-4 md:px-6 pb-3 flex flex-wrap gap-2 border-t border-gold/20 pt-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full border border-gold/40 text-foreground/80 hover:bg-gold/10 hover:border-gold transition-colors"
                  disabled={isLoading}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="p-4 border-t-2 border-gold/30 bg-background/50 flex gap-2"
          >
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={toggleVoice}
              className={`shrink-0 border-gold/50 ${isListening ? "bg-primary text-primary-foreground animate-pulse" : ""}`}
              title={isListening ? "Dừng ghi âm" : "Nói bằng giọng Việt"}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                isListening ? "Đang nghe... hãy nói câu hỏi của bạn" : "Hỏi về một sự kiện hay nhân vật lịch sử..."
              }
              disabled={isLoading}
              className="border-gold/40 focus-visible:ring-gold"
            />
            <Button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground border border-gold"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground italic mt-4">
          ⚠️ Sử Gia AI có thể đôi lúc nhầm lẫn — hãy đối chiếu thông tin quan trọng với tài liệu chính thống.
        </p>
      </main>
    </div>
  );
};

export default ChatHistory;
