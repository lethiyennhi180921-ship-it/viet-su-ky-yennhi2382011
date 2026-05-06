import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import HeroesGallery from "@/components/HeroesGallery";
import Poetry from "@/components/Poetry";
import SiteHeader from "@/components/SiteHeader";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />

      <Timeline />
      <HeroesGallery />
      <Poetry />

      <footer className="py-10 px-4 text-center border-t border-gold/30 bg-crimson-deep text-paper/80">
        <p className="font-display italic text-gold">"Dân ta phải biết sử ta — Cho tường gốc tích nước nhà Việt Nam."</p>
        <p className="text-sm mt-2">Sử Việt Ký © {new Date().getFullYear()}</p>
        <p className="font-display text-gold-glow mt-3 tracking-wider">Tác giả: Lê Thị Yến Nhi · Lớp 9/2</p>
      </footer>
    </main>
  );
};

export default Index;
