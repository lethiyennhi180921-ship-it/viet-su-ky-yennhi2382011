import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import HeroesGallery from "@/components/HeroesGallery";
import Quiz from "@/components/Quiz";
import Poetry from "@/components/Poetry";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50 glass-imperial">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <a href="#" className="font-display text-xl md:text-2xl font-bold text-gradient-gold">
            Sử Việt Ký
          </a>
          <nav className="hidden md:flex gap-6 font-display text-sm tracking-wider text-paper">
            <a href="#timeline" className="hover:text-gold transition-colors">Dòng thời gian</a>
            <a href="#heroes" className="hover:text-gold transition-colors">Anh hùng</a>
            <a href="#quiz" className="hover:text-gold transition-colors">Trạng Nguyên</a>
            <a href="#poetry" className="hover:text-gold transition-colors">Sử qua thơ</a>
          </nav>
        </div>
      </header>

      <Hero />
      <Timeline />
      <HeroesGallery />
      <Quiz />
      <Poetry />

      <footer className="py-10 px-4 text-center border-t border-gold/30 bg-crimson-deep text-paper/80">
        <p className="font-display italic text-gold">“Dân ta phải biết sử ta — Cho tường gốc tích nước nhà Việt Nam.”</p>
        <p className="text-sm mt-2">Sử Việt Ký © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
};

export default Index;
