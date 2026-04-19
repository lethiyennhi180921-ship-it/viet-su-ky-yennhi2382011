import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export interface BadgeDef {
  code: string;
  name: string;
  description: string;
  icon: string; // emoji
}

export const BADGES: Record<string, BadgeDef> = {
  trang_nguyen: { code: "trang_nguyen", name: "Trạng Nguyên", icon: "🏆", description: "Đạt 20/20 điểm thi Trạng Nguyên." },
  anh_hung_dan_toc: { code: "anh_hung_dan_toc", name: "Anh Hùng Dân Tộc", icon: "⚔️", description: "Đạt 25+ điểm Thử Thách Lịch Sử." },
  bach_chien: { code: "bach_chien", name: "Bách Chiến", icon: "🛡️", description: "Hoàn thành 5 ván chơi." },
  hoc_gia: { code: "hoc_gia", name: "Học Giả", icon: "📜", description: "Đạt 15+ điểm trong bất kỳ trò chơi nào." },
  tien_si: { code: "tien_si", name: "Tiến Sĩ", icon: "🎓", description: "Đạt 18+ điểm thi Trạng Nguyên." },
  tinh_thong: { code: "tinh_thong", name: "Tinh Thông Sử Việt", icon: "🐉", description: "Hoàn hảo Thử Thách 30/30." },
};

export async function awardBadge(userId: string, code: keyof typeof BADGES) {
  const def = BADGES[code];
  if (!def) return;
  const { error } = await supabase.from("badges").insert({
    user_id: userId,
    code: def.code,
    name: def.name,
    description: def.description,
  });
  if (!error) {
    toast({
      title: `${def.icon} Huy hiệu mới: ${def.name}`,
      description: def.description,
    });
  }
}

export async function checkAndAward(
  userId: string,
  game: "trang_nguyen" | "thu_thach",
  score: number,
  total: number
) {
  const newCodes: (keyof typeof BADGES)[] = [];
  if (game === "trang_nguyen" && score === 20) newCodes.push("trang_nguyen");
  if (game === "trang_nguyen" && score >= 18) newCodes.push("tien_si");
  if (game === "thu_thach" && score >= 25) newCodes.push("anh_hung_dan_toc");
  if (game === "thu_thach" && score === total) newCodes.push("tinh_thong");
  if (score >= 15) newCodes.push("hoc_gia");

  // Get existing
  const { data: existing } = await supabase
    .from("badges").select("code").eq("user_id", userId);
  const have = new Set((existing ?? []).map((b) => b.code));

  for (const c of newCodes) if (!have.has(c)) await awardBadge(userId, c);

  // Bach chien — count plays
  const { count } = await supabase
    .from("scores").select("*", { count: "exact", head: true }).eq("user_id", userId);
  if ((count ?? 0) >= 5 && !have.has("bach_chien")) await awardBadge(userId, "bach_chien");
}
