import { useEffect, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { BADGES } from "@/lib/badges";
import { Award } from "lucide-react";

interface BadgeRow { code: string; name: string; description: string; earned_at: string; }
interface ScoreRow { game_type: string; score: number; total: number; created_at: string; }

const Profile = () => {
  const { user, loading, signOut } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [badges, setBadges] = useState<BadgeRow[]>([]);
  const [scores, setScores] = useState<ScoreRow[]>([]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: p }, { data: b }, { data: s }] = await Promise.all([
        supabase.from("profiles").select("*").eq("user_id", user.id).maybeSingle(),
        supabase.from("badges").select("code, name, description, earned_at").eq("user_id", user.id).order("earned_at", { ascending: false }),
        supabase.from("scores").select("game_type, score, total, created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20),
      ]);
      setProfile(p); setBadges(b ?? []); setScores(s ?? []);
    })();
  }, [user]);

  if (loading) return null;
  if (!user) return <Navigate to="/auth" replace />;

  const earnedCodes = new Set(badges.map((b) => b.code));
  const allBadges = Object.values(BADGES);

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border-2 border-gold/50 rounded-lg p-8 mb-8 text-center animate-fade-in-up">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold to-gold-glow flex items-center justify-center mb-4">
              <span className="font-display text-3xl text-ink font-bold">
                {(profile?.display_name?.[0] ?? "?").toUpperCase()}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl text-primary font-bold">{profile?.display_name ?? "..."}</h1>
            <p className="text-muted-foreground text-sm mt-1">{user.email}</p>
            <button
              onClick={signOut}
              className="mt-4 px-5 py-2 rounded-md text-sm font-display tracking-wider border-2 border-gold/40 text-foreground hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-all"
            >
              Đăng xuất
            </button>
          </div>

          <div className="bg-card border-2 border-gold/40 rounded-lg p-8 mb-8">
            <h2 className="font-display text-2xl text-primary mb-1 flex items-center gap-2">
              <Award className="w-6 h-6 text-gold" /> Huy Hiệu ({badges.length}/{allBadges.length})
            </h2>
            <p className="text-sm text-muted-foreground mb-6">Sưu tập huy hiệu qua các thành tích.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {allBadges.map((b) => {
                const earned = earnedCodes.has(b.code);
                return (
                  <div key={b.code} className={`p-4 rounded-md border-2 text-center transition-all ${earned ? "border-gold bg-gold/10 shadow-[0_0_20px_hsl(var(--gold)/0.3)]" : "border-muted opacity-50 grayscale"}`}>
                    <div className="text-4xl mb-2">{b.icon}</div>
                    <div className="font-display font-bold text-primary text-sm">{b.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{b.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card border-2 border-gold/40 rounded-lg p-8">
            <h2 className="font-display text-2xl text-primary mb-4">Lịch Sử Chơi</h2>
            {scores.length === 0 ? (
              <p className="text-muted-foreground italic">Chưa có ván nào — hãy thử thi đi!</p>
            ) : (
              <ul className="space-y-2">
                {scores.map((s, i) => (
                  <li key={i} className="flex justify-between items-center px-4 py-3 rounded-md bg-muted/40 border-l-4 border-gold/60">
                    <div>
                      <div className="font-display text-foreground">
                        {s.game_type === "trang_nguyen" ? "Trạng Nguyên" : "Thử Thách Lịch Sử"}
                      </div>
                      <div className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleString("vi-VN")}</div>
                    </div>
                    <div className="font-display text-xl text-gold font-bold">{s.score}/{s.total}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
