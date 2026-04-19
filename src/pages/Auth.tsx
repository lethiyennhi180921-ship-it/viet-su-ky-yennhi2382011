import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Scroll } from "lucide-react";

const signupSchema = z.object({
  display_name: z.string().trim().min(2, "Tên ít nhất 2 ký tự").max(40, "Tối đa 40 ký tự"),
  email: z.string().trim().email("Email không hợp lệ").max(255),
  password: z.string().min(6, "Mật khẩu ít nhất 6 ký tự").max(72),
});
const signinSchema = z.object({
  email: z.string().trim().email("Email không hợp lệ").max(255),
  password: z.string().min(1, "Nhập mật khẩu").max(72),
});

const Auth = () => {
  const nav = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [form, setForm] = useState({ display_name: "", email: "", password: "" });
  const [busy, setBusy] = useState(false);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const parsed = signupSchema.safeParse(form);
        if (!parsed.success) { toast({ title: "Lỗi", description: parsed.error.issues[0].message, variant: "destructive" }); return; }
        const { error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { display_name: parsed.data.display_name },
          },
        });
        if (error) throw error;
        toast({ title: "Chào mừng tân khoa!", description: "Tài khoản đã tạo. Vào ngay khoa thi nào." });
        nav("/");
      } else {
        const parsed = signinSchema.safeParse(form);
        if (!parsed.success) { toast({ title: "Lỗi", description: parsed.error.issues[0].message, variant: "destructive" }); return; }
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) throw error;
        toast({ title: "Bái kiến!", description: "Đăng nhập thành công." });
        nav("/");
      }
    } catch (err: any) {
      toast({ title: "Không thành công", description: err.message ?? "Thử lại nhé.", variant: "destructive" });
    } finally { setBusy(false); }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-6 font-display text-3xl text-gradient-gold">
          Sử Việt Ký
        </Link>

        <div className="bg-card border-2 border-gold/50 rounded-lg p-8 shadow-[var(--shadow-card)]">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-br from-gold to-gold-glow">
              <Scroll className="w-7 h-7 text-ink" />
            </div>
          </div>
          <h1 className="font-display text-3xl text-center text-primary mb-1">
            {mode === "signin" ? "Bái Kiến" : "Ghi Danh Tân Khoa"}
          </h1>
          <p className="text-center text-muted-foreground mb-6 text-sm">
            {mode === "signin" ? "Đăng nhập tiếp tục hành trình" : "Tạo tài khoản để dự khoa thi"}
          </p>

          <form onSubmit={handle} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label className="font-display text-sm text-gold mb-1 block">Đạo hiệu (tên hiển thị)</label>
                <input
                  type="text" required maxLength={40}
                  value={form.display_name}
                  onChange={(e) => setForm({ ...form, display_name: e.target.value })}
                  className="w-full px-4 py-2 rounded-md bg-background border-2 border-gold/30 focus:border-gold outline-none text-foreground"
                />
              </div>
            )}
            <div>
              <label className="font-display text-sm text-gold mb-1 block">Email</label>
              <input
                type="email" required maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-background border-2 border-gold/30 focus:border-gold outline-none text-foreground"
              />
            </div>
            <div>
              <label className="font-display text-sm text-gold mb-1 block">Mật khẩu</label>
              <input
                type="password" required minLength={6} maxLength={72}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 rounded-md bg-background border-2 border-gold/30 focus:border-gold outline-none text-foreground"
              />
            </div>

            <button
              type="submit" disabled={busy}
              className="w-full py-3 rounded-md font-display tracking-wider bg-primary text-primary-foreground border border-gold transition-all hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink disabled:opacity-50"
            >
              {busy ? "Đang xử lý..." : mode === "signin" ? "Đăng Nhập" : "Đăng Ký"}
            </button>
          </form>

          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="w-full mt-4 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            {mode === "signin" ? "Chưa có tài khoản? Ghi danh ngay →" : "Đã có tài khoản? Đăng nhập →"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Auth;
