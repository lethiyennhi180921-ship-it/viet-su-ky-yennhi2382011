import heroBg from "@/assets/hero-lac-bird.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Chim Lạc bay trên trời — biểu tượng dân tộc Việt"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <div className="inline-block mb-6 px-5 py-1.5 glass-imperial rounded-full">
          <span className="text-sm tracking-[0.3em] uppercase text-gold font-display">
            Bốn nghìn năm văn hiến
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
          <span className="text-gradient-gold drop-shadow-[0_4px_20px_rgba(184,134,11,0.5)]">
            Sử Việt Ký
          </span>
        </h1>

        <p className="font-display italic text-2xl md:text-3xl text-gold-glow/95 mb-3 drop-shadow-lg">
          “Dân ta phải biết sử ta”
        </p>
        <p className="text-base md:text-lg text-paper/80 mb-10 max-w-2xl mx-auto">
          Hành trình qua bốn nghìn năm dựng nước và giữ nước — nơi anh hùng, sử thi và những trang vàng chói lọi sống mãi.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#timeline"
            className="px-8 py-3 rounded-md font-display tracking-wider text-primary-foreground bg-primary border border-gold/60 transition-all duration-300 hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink hover:shadow-[0_0_30px_hsl(var(--gold-glow)/0.6)]"
          >
            Khám phá dòng thời gian
          </a>
          <a
            href="#heroes"
            className="px-8 py-3 rounded-md font-display tracking-wider glass-imperial text-paper transition-all duration-300 hover:bg-gradient-to-r hover:from-gold hover:to-gold-glow hover:text-ink"
          >
            Hành lang anh hùng
          </a>
        </div>
      </div>

      {/* Floating ornament */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float text-gold/70">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 5 L20 35 M10 25 L20 35 L30 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
