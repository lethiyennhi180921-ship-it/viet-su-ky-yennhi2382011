import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import HeroesGallery from "@/components/HeroesGallery";
import Quiz from "@/components/Quiz";
import Poetry from "@/components/Poetry";
import SiteHeader from "@/components/SiteHeader";
import { Link } from "react-router-dom";
import { Swords, Trophy, Scroll } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />

      {/* Quick links to other pages */}
      <section className="py-16 px-4 border-y border-gold/30 bg-crimson-deep/40">
        <div className="container mx-auto grid sm:grid-cols-3 gap-6 max-w-4xl">
          {[
            { to: "/dynasties", icon: Scroll, title: "Các Triều Đại", desc: "16 triều đại từ Hồng Bàng đến hiện đại." },
            { to: "/challenge", icon: Swords, title: "Thử Thách Lịch Sử", desc: "30 câu hỏi xuyên suốt 4000 năm." },
            { to: "/leaderboard", icon: Trophy, title: "Bảng Vàng", desc: "Vinh danh các bậc trạng nguyên online." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group glass-imperial rounded-lg p-6 hover:border-gold transition-all hover:-translate-y-1">
              <c.icon className="w-8 h-8 text-gold mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl text-gold-glow font-bold mb-1">{c.title}</h3>
              <p className="text-paper/80 text-sm">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <Timeline />
      <HeroesGallery />
      <Quiz />
      <Poetry />

      <footer className="py-10 px-4 text-center border-t border-gold/30 bg-crimson-deep text-paper/80">
        <p className="font-display italic text-gold">"Dân ta phải biết sử ta — Cho tường gốc tích nước nhà Việt Nam."</p>
        <p className="text-sm mt-2">Sử Việt Ký © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
};

export default Index;
