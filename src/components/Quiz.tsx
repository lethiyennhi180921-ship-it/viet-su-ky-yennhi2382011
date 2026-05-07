import { useRef, useState } from "react";
import { quizQuestions, getRank } from "@/data/quiz";
import { Progress } from "@/components/ui/progress";
import { Award, Check, X, RotateCcw, Trophy } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { checkAndAward } from "@/lib/badges";
import { toast } from "@/hooks/use-toast";
import quizBg from "@/assets/quiz-bg.jpg";

const Quiz = () => {
  const { user } = useAuth();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const startedAt = useRef(Date.now());
  const saved = useRef(false);

  const q = quizQuestions[current];
  const progress = ((current + (picked !== null ? 1 : 0)) / quizQuestions.length) * 100;

  const handlePick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
  };

  const finish = async (finalScore: number) => {
    setDone(true);
    if (!user || saved.current) return;
    saved.current = true;
    const duration = Math.floor((Date.now() - startedAt.current) / 1000);
    const { error } = await supabase.from("scores").insert({
      user_id: user.id, game_type: "trang_nguyen",
      score: finalScore, total: quizQuestions.length, duration_seconds: duration,
    });
    if (error) toast({ title: "Lỗi lưu điểm", description: error.message, variant: "destructive" });
    else toast({ title: "Đã ghi danh bảng vàng!", description: `${finalScore}/${quizQuestions.length} điểm` });
    await checkAndAward(user.id, "trang_nguyen", finalScore, quizQuestions.length);
  };

  const next = () => {
    if (current + 1 >= quizQuestions.length) {
      finish(score + (picked === q.answer ? 0 : 0));
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  };

  const reset = () => {
    setCurrent(0); setScore(0); setPicked(null); setDone(false);
    startedAt.current = Date.now(); saved.current = false;
  };

  if (done) {
    const rank = getRank(score);
    const isTop = rank.name === "Trạng Nguyên";
    return (
      <section id="quiz" className="py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="paper-scroll rounded-lg p-10 text-center animate-scale-in relative overflow-hidden">
            {isTop && (
              <div className="absolute inset-0 pointer-events-none animate-glow-pulse" />
            )}
            <Trophy className={`w-20 h-20 mx-auto mb-4 ${isTop ? "text-gold animate-float" : "text-primary"}`} />
            <p className="font-display tracking-[0.3em] uppercase text-primary mb-2">Bảng Vàng</p>
            <h3 className="font-display text-5xl md:text-6xl font-black text-primary mb-4">{rank.name}</h3>
            <p className="font-display italic text-ink/80 mb-6 text-lg">{rank.desc}</p>
            <div className="text-2xl font-display text-ink mb-8">
              Điểm: <span className="text-primary font-bold">{score}</span> / {quizQuestions.length}
            </div>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-display tracking-wider bg-primary text-primary-foreground border border-gold transition-all hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink"
            >
              <RotateCcw className="w-4 h-4" /> Thi lại
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quiz"
      className="py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(180deg, hsl(var(--background) / 0.85), hsl(var(--background) / 0.9)), url(${quizBg})`,
      }}
    >
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-10 animate-fade-in-up">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-display">Khoa thi đình</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-3">
            Trở Thành Trạng Nguyên
          </h2>
          <p className="text-muted-foreground">20 câu hỏi — vượt qua để vinh quy bái tổ.</p>
        </div>

        <div className="bg-card border-2 border-gold/40 rounded-lg p-6 md:p-8 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between mb-2 text-sm font-display">
            <span className="text-muted-foreground">Câu {current + 1} / {quizQuestions.length}</span>
            <span className="text-gold flex items-center gap-1"><Award className="w-4 h-4" /> {score} điểm</span>
          </div>
          <Progress value={progress} className="h-2 mb-6" />

          <h3 className="font-display text-xl md:text-2xl text-primary mb-6 leading-snug">{q.q}</h3>

          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              const isCorrect = idx === q.answer;
              const isPicked = picked === idx;
              const showState = picked !== null;
              return (
                <button
                  key={idx}
                  onClick={() => handlePick(idx)}
                  disabled={picked !== null}
                  className={`w-full text-left px-5 py-4 rounded-md border-2 font-body transition-all flex items-center justify-between
                    ${!showState ? "border-gold/30 hover:border-gold hover:bg-gold/10 bg-card" : ""}
                    ${showState && isCorrect ? "border-green-600 bg-green-50 text-green-900" : ""}
                    ${showState && isPicked && !isCorrect ? "border-destructive bg-red-50 text-destructive" : ""}
                    ${showState && !isPicked && !isCorrect ? "border-muted opacity-60" : ""}
                  `}
                >
                  <span>{opt}</span>
                  {showState && isCorrect && <Check className="w-5 h-5" />}
                  {showState && isPicked && !isCorrect && <X className="w-5 h-5" />}
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div className="mt-6 animate-fade-in">
              <div className="p-4 rounded-md bg-muted/60 border-l-4 border-gold">
                <p className="font-display text-sm text-gold uppercase tracking-wider mb-1">Lời bình</p>
                <p className="text-foreground/90">{q.explain}</p>
              </div>
              <button
                onClick={next}
                className="mt-5 w-full py-3 rounded-md font-display tracking-wider bg-primary text-primary-foreground border border-gold transition-all hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink"
              >
                {current + 1 >= quizQuestions.length ? "Xem bảng vàng" : "Câu tiếp theo →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
