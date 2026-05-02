import { useState } from "react";
import { heroes, type Hero } from "@/data/heroes";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Quote, User, Globe2, Trophy, Heart, Award, Users } from "lucide-react";

const SECTIONS: { key: keyof Hero; label: string; icon: any }[] = [
  { key: "personal", label: "Thân thế & gia đình", icon: User },
  { key: "context", label: "Bối cảnh thời đại", icon: Globe2 },
  { key: "career", label: "Cơ đồ và sự kiện lịch sử chính", icon: Trophy },
  { key: "character", label: "Tính cách & phẩm chất", icon: Heart },
  { key: "legacy", label: "Tác động & di sản", icon: Award },
  { key: "relations", label: "Mối quan hệ cùng thời", icon: Users },
];

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
            Mười một bậc anh hùng làm rạng danh non sông Việt Nam — bấm vào để xem tiểu sử đầy đủ.
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
        <DialogContent className="max-w-4xl bg-card border-2 border-gold/60 max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl md:text-4xl text-primary">{selected.name}</DialogTitle>
                <p className="text-gold font-display tracking-wider">
                  {selected.era} · {selected.title}
                </p>
              </DialogHeader>

              <div className="grid md:grid-cols-[260px_1fr] gap-6 mt-2">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden ornate-border">
                    <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="paper-scroll rounded-md p-4 relative">
                    <Quote className="absolute top-2 left-2 w-5 h-5 text-primary/40" />
                    <p className="font-display italic text-ink text-sm pl-6 leading-relaxed">
                      {selected.quote}
                    </p>
                  </div>
                </div>

                <div className="space-y-5 text-foreground/90">
                  <div>
                    <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-1 flex items-center gap-2">
                      <Trophy className="w-4 h-4" /> Chiến công nổi bật
                    </h4>
                    <p className="leading-relaxed">{selected.achievement}</p>
                  </div>

                  <div className="border-t border-gold/20 pt-4">
                    <p className="leading-relaxed italic text-foreground/80">{selected.story}</p>
                  </div>

                  {SECTIONS.map(({ key, label, icon: Icon }) => (
                    <div key={key} className="border-t border-gold/20 pt-4">
                      <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
                        <Icon className="w-4 h-4" /> {label}
                      </h4>
                      <p className="leading-relaxed whitespace-pre-line text-sm md:text-base">
                        {selected[key] as string}
                      </p>
                    </div>
                  ))}
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
