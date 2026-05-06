import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogIn, User as UserIcon, Menu } from "lucide-react";
import { useState } from "react";

const SiteHeader = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Trang chủ" },
    { to: "/dynasties", label: "Triều đại" },
    { to: "/challenge", label: "Thử thách" },
    { to: "/quiz", label: "Trạng nguyên" },
    { to: "/videos", label: "Video sự kiện" },
    { to: "/chat", label: "Trò chuyện" },
    { to: "/leaderboard", label: "Bảng vàng" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-imperial">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 gap-4">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold text-gradient-gold whitespace-nowrap">
          Sử Việt Ký
        </Link>

        <nav className="hidden md:flex gap-5 font-display text-sm tracking-wider text-paper">
          {links.map((l) => (
            <NavLink
              key={l.to} to={l.to} end={l.to === "/"}
              className={({ isActive }) => `transition-colors ${isActive ? "text-gold" : "hover:text-gold"}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <Link to="/profile" className="p-2 rounded-md text-paper hover:text-gold hover:bg-gold/10 transition-all" aria-label="Hồ sơ">
              <UserIcon className="w-5 h-5" />
            </Link>
          ) : (
            <Link to="/auth" className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-md text-sm font-display tracking-wider border-2 border-gold/60 text-paper hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink transition-all">
              <LogIn className="w-4 h-4" /> Đăng nhập
            </Link>
          )}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-paper" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gold/30 px-4 py-3 flex flex-col gap-2 bg-crimson-deep/90">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)}
              className={({ isActive }) => `font-display text-sm py-1 ${isActive ? "text-gold" : "text-paper"}`}>
              {l.label}
            </NavLink>
          ))}
          {!user && (
            <Link to="/auth" onClick={() => setOpen(false)} className="font-display text-sm py-1 text-gold">
              Đăng nhập
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
