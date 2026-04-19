import { dynasties } from "@/data/dynasties";
import SiteHeader from "@/components/SiteHeader";

const Dynasties = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-display">Niên biểu các triều đại</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">Các Triều Đại Việt Nam</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Hành trình bốn nghìn năm — từ Hồng Bàng đến hiện đại.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dynasties.map((d, i) => (
              <article
                key={d.id}
                className="bg-card border-2 border-gold/40 rounded-lg overflow-hidden hero-card animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
              >
                <div className="bg-gradient-to-r from-crimson-deep to-crimson p-6 border-b-2 border-gold/60">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl text-gold-glow font-bold">{d.name}</h2>
                      <p className="text-paper/90 mt-1">{d.summary}</p>
                    </div>
                    <div className="text-right text-paper/90 text-sm">
                      <div className="font-display text-gold text-lg">{d.period}</div>
                      <div>Kinh đô: {d.capital}</div>
                      <div>Khai sáng: {d.founder}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-gold uppercase tracking-wider text-sm mb-4">Sự kiện tiêu biểu</h3>
                  <ul className="space-y-3">
                    {d.events.map((e, idx) => (
                      <li key={idx} className="flex gap-4 group">
                        <span className="font-display text-gold font-bold min-w-[100px]">{e.year}</span>
                        <span className="text-foreground/90 border-l-2 border-gold/40 pl-4 group-hover:border-gold transition-colors">
                          {e.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dynasties;
