import { useEffect, useMemo, useState, useRef } from "react";
import SiteHeader from "@/components/SiteHeader";
import { challengeQuestions } from "@/data/challenge";
import { Progress } from "@/components/ui/progress";
import { Heart, Trophy, RotateCcw, Check, X, Clock, LogIn } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { checkAndAward } from "@/lib/badges";
import { toast } from "@/hooks/use-toast";
import challengeBg from "@/assets/challenge-bg.jpg";
import challengeGirl from "@/assets/challenge-girl.png";
import challengeBoy from "@/assets/challenge-boy.png";

const bgStyle = {
  backgroundImage: `linear-gradient(180deg, hsl(var(--background) / 0.85), hsl(var(--background) / 0.9)), url(${challengeBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed" as const,
};

const TOTAL = 30;
const TIME_PER_Q = 20; // seconds

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Challenge = () => {
  const { user } = useAuth();
  const nav = useNavigate();
  const [questions, setQuestions] = useState(() => shuffle(challengeQuestions).slice(0, TOTAL));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_Q);
  const startedAt = useRef(Date.now());
  const saved = useRef(false);

  const q = questions[current];

  useEffect(() => {
    if (done || picked !== null) return;
    if (timeLeft <= 0) { handlePick(-1); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, picked, done]);

  const handlePick = (idx: number) => {
    if (picked !== null || done) return;
    setPicked(idx);
    if (idx === q.answer) setScore((s) => s + 1);
    else setLives((l) => l - 1);
  };

  const next = () => {
    const newLives = picked !== null && picked !== q.answer ? lives : lives;
    if (newLives <= 0 || current + 1 >= questions.length) {
      finish();
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
      setTimeLeft(TIME_PER_Q);
    }
  };

  const finish = async () => {
    setDone(true);
    if (!user || saved.current) return;
    saved.current = true;
    const duration = Math.floor((Date.now() - startedAt.current) / 1000);
    const { error } = await supabase.from("scores").insert({
      user_id: user.id, game_type: "thu_thach", score, total: TOTAL, duration_seconds: duration,
    });
    if (error) toast({ title: "Lỗi lưu điểm", description: error.message, variant: "destructive" });
    else toast({ title: "Đã lưu vào bảng vàng!", description: `${score} / ${TOTAL} điểm` });
    await checkAndAward(user.id, "thu_thach", score, TOTAL);
  };

  const reset = () => {
    setQuestions(shuffle(challengeQuestions).slice(0, TOTAL));
    setCurrent(0); setScore(0); setLives(3); setPicked(null); setDone(false);
    setTimeLeft(TIME_PER_Q); startedAt.current = Date.now(); saved.current = false;
  };

  const progress = (current / TOTAL) * 100;

  if (done) {
    const perfect = score === TOTAL;
    return (
      <main className="min-h-screen bg-background" style={bgStyle}>
        <SiteHeader />
        <section className="pt-28 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="paper-scroll rounded-lg p-10 text-center animate-scale-in">
              <Trophy className={`w-20 h-20 mx-auto mb-4 ${perfect ? "text-gold animate-float" : "text-primary"}`} />
              <h2 className="font-display text-4xl md:text-5xl font-black text-primary mb-3">
                {perfect ? "Tinh Thông Sử Việt!" : lives <= 0 ? "Đã hết mạng" : "Hoàn Thành"}
              </h2>
              <div className="text-2xl font-display text-ink mb-2">
                Điểm: <span className="text-primary font-bold">{score}</span> / {TOTAL}
              </div>
              <p className="text-ink/80 italic mb-6">
                {!user ? "Đăng nhập để lưu điểm vào Bảng Vàng!" : "Điểm của bạn đã được lưu."}
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button onClick={reset} className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-display tracking-wider bg-primary text-primary-foreground border border-gold transition-all hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink">
                  <RotateCcw className="w-4 h-4" /> Chơi lại
                </button>
                <Link to="/leaderboard" className="px-6 py-3 rounded-md font-display tracking-wider glass-imperial text-paper transition-all hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink">
                  Xem Bảng Vàng
                </Link>
                {!user && (
                  <button onClick={() => nav("/auth")} className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-display tracking-wider bg-secondary text-secondary-foreground border border-gold hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink">
                    <LogIn className="w-4 h-4" /> Đăng nhập
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background" style={bgStyle}>
      <SiteHeader />
      <section className="pt-28 pb-20 px-4 relative">
        <img
          src={challengeGirl}
          alt="Bé gái suy nghĩ"
          className="hidden lg:block absolute left-4 top-32 w-40 xl:w-52 pointer-events-none select-none animate-float"
        />
        <img
          src={challengeBoy}
          alt="Bé trai thắc mắc"
          className="hidden lg:block absolute right-4 top-32 w-40 xl:w-52 pointer-events-none select-none animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8 animate-fade-in-up">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-2 font-display">4000 năm lịch sử</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">Thử Thách Lịch Sử</h1>
            <p className="text-foreground/80 text-sm">30 câu ngẫu nhiên · 3 mạng · 20 giây mỗi câu</p>
          </div>

          <div className="bg-card border-2 border-gold/40 rounded-lg p-6 md:p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between mb-3 text-sm font-display flex-wrap gap-2">
              <span className="text-muted-foreground">Câu {current + 1} / {TOTAL}</span>
              <div className="flex items-center gap-4">
                <span className="text-gold flex items-center gap-1"><Trophy className="w-4 h-4" /> {score}</span>
                <span className="flex items-center gap-1 text-destructive">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <Heart key={i} className={`w-4 h-4 ${i < lives ? "fill-destructive" : "opacity-30"}`} />
                  ))}
                </span>
                <span className={`flex items-center gap-1 ${timeLeft <= 5 ? "text-destructive animate-pulse" : "text-gold"}`}>
                  <Clock className="w-4 h-4" /> {timeLeft}s
                </span>
              </div>
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
                <button onClick={next} className="mt-5 w-full py-3 rounded-md font-display tracking-wider bg-primary text-primary-foreground border border-gold transition-all hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink">
                  {lives <= 0 ? "Kết thúc" : current + 1 >= TOTAL ? "Xem kết quả" : "Câu tiếp theo →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Challenge;
