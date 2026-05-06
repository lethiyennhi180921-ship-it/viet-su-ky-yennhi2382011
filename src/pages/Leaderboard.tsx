import { useEffect, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, Crown, Medal } from "lucide-react";
import leaderboardBg from "@/assets/leaderboard-bg.jpg";

interface Row {
  id: string;
  score: number;
  total: number;
  duration_seconds: number;
  created_at: string;
  user_id: string;
  display_name: string;
}

const tabs = [
  { key: "thu_thach", label: "Thử Thách Lịch Sử (30 câu)" },
  { key: "trang_nguyen", label: "Trạng Nguyên (20 câu)" },
] as const;

const Leaderboard = () => {
  const [tab, setTab] = useState<typeof tabs[number]["key"]>("thu_thach");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data: scores } = await supabase
        .from("scores")
        .select("id, user_id, score, total, duration_seconds, created_at")
        .eq("game_type", tab)
        .order("score", { ascending: false })
        .order("duration_seconds", { ascending: true })
        .limit(50);

      const ids = Array.from(new Set((scores ?? []).map((s) => s.user_id)));
      let nameMap = new Map<string, string>();
      if (ids.length) {
        const { data: profs } = await supabase
          .from("profiles").select("user_id, display_name").in("user_id", ids);
        (profs ?? []).forEach((p: any) => nameMap.set(p.user_id, p.display_name));
      }

      setRows((scores ?? []).map((s: any) => ({ ...s, display_name: nameMap.get(s.user_id) ?? "Ẩn danh" })));
      setLoading(false);
    })();
  }, [tab]);

  return (
    <main
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--background) / 0.88), hsl(var(--background) / 0.94)), url(${leaderboardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <SiteHeader />
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 animate-fade-in-up">
            <Trophy className="w-12 h-12 text-gold mx-auto mb-3 animate-float" />
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-2 font-display">Vinh Danh</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">Bảng Vàng</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-2 rounded-md font-display tracking-wider text-sm border-2 transition-all
                  ${tab === t.key
                    ? "bg-gradient-to-r from-gold to-gold-glow text-ink border-gold shadow-[0_0_20px_hsl(var(--gold-glow)/0.4)]"
                    : "bg-card border-gold/30 text-foreground hover:border-gold"}`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="paper-scroll rounded-lg p-6 md:p-8">
            {loading ? (
              <p className="text-center text-ink py-10">Đang tải...</p>
            ) : rows.length === 0 ? (
              <p className="text-center text-ink py-10 italic">Chưa có ai ghi danh — hãy là người đầu tiên!</p>
            ) : (
              <ol className="space-y-2">
                {rows.map((r, i) => {
                  const rank = i + 1;
                  const medal = rank === 1 ? Crown : rank <= 3 ? Medal : null;
                  const Medalish = medal;
                  return (
                    <li
                      key={r.id}
                      className={`flex items-center gap-4 px-4 py-3 rounded-md border-l-4 transition-all
                        ${rank === 1 ? "border-gold bg-gold/15 animate-glow-pulse" : ""}
                        ${rank === 2 ? "border-gold/70 bg-gold/10" : ""}
                        ${rank === 3 ? "border-gold/50 bg-gold/5" : ""}
                        ${rank > 3 ? "border-ink/20 bg-ink/5" : ""}`}
                    >
                      <div className="font-display text-2xl font-bold text-primary min-w-[40px] text-center flex items-center justify-center">
                        {Medalish ? <Medalish className="w-6 h-6" /> : rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-lg text-ink truncate">{r.display_name}</div>
                        <div className="text-xs text-ink/60">
                          {new Date(r.created_at).toLocaleDateString("vi-VN")} · {r.duration_seconds}s
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-2xl font-bold text-primary">{r.score}<span className="text-ink/60 text-base">/{r.total}</span></div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Leaderboard;
