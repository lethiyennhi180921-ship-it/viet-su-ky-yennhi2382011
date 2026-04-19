import { useState } from "react";
import { heroes, type Hero } from "@/data/heroes";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Quote } from "lucide-react";

const HeroesGallery = () => {
  const [selected, setSelected] = useState<Hero | null>(null);

  return (
    <section id="heroes" className="py-24 px-4 bg-gradient-to-b from-background via-muted/40 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-display">Anh hùng dân tộc</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
            Hành Lang Anh Hùng
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mười bậc anh hùng làm rạng danh non sông Việt Nam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {heroes.map((hero, i) => (
            <button
              key={hero.id}
              onClick={() => setSelected(hero)}
              className="group relative bg-card rounded-lg overflow-hidden hero-card border-2 border-gold/30 hover:border-gold animate-fade-in-up text-left"
              style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                <img
                  src={hero.image}
                  alt={hero.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crimson-deep via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 right-3 px-2 py-1 bg-gold/90 text-ink text-xs font-display rounded">
                  {hero.era}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-primary mb-1">{hero.name}</h3>
                <p className="text-sm text-muted-foreground italic">{hero.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl bg-card border-2 border-gold/60 max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-4xl text-primary">{selected.name}</DialogTitle>
                <p className="text-gold font-display tracking-wider">{selected.era} · {selected.title}</p>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6 mt-2">
                <div className="rounded-lg overflow-hidden ornate-border">
                  <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4 text-foreground/90">
                  <div>
                    <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-1">Chiến công</h4>
                    <p>{selected.achievement}</p>
                  </div>
                  <div>
                    <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-1">Câu chuyện</h4>
                    <p>{selected.story}</p>
                  </div>
                  <div className="paper-scroll rounded-md p-4 relative">
                    <Quote className="absolute top-2 left-2 w-5 h-5 text-primary/40" />
                    <p className="font-display italic text-ink text-lg pl-6 leading-relaxed">
                      {selected.quote}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroesGallery;
