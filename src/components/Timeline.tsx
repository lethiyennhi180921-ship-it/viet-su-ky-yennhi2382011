import { useState } from "react";
import { timelineEvents, type TimelineEvent } from "@/data/timeline";
import { Sword } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import timelineBg from "@/assets/timeline-bg.jpg";

const Timeline = () => {
  const [selected, setSelected] = useState<TimelineEvent | null>(null);

  return (
    <section
      id="timeline"
      className="py-24 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(180deg, hsl(0 60% 14% / 0.55), hsl(0 55% 18% / 0.6)), url(${timelineBg})`,
      }}
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3 font-display">Trục thời gian</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4">
            Mốc Son Chói Lọi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Horizontal scroll timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-gold to-transparent -translate-y-1/2 z-0" />

          <div className="relative overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-6 min-w-max px-4 py-12">
              {timelineEvents.map((ev, i) => (
                <button
                  key={ev.year}
                  onClick={() => setSelected(ev)}
                  className="snap-center group relative flex-shrink-0 w-64 animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms`, opacity: 0 }}
                >
                  {/* Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-glow flex items-center justify-center shadow-[0_0_20px_hsl(var(--gold-glow)/0.6)] group-hover:scale-125 transition-transform duration-300 border-2 border-primary">
                      <Sword className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Card alternating */}
                  <div className={`${i % 2 === 0 ? "mt-32" : "mt-32"} bg-card border-2 border-gold/40 rounded-lg p-5 hero-card text-left group-hover:border-gold bg-[#141457]`}>
                    <div className="text-gold font-display text-2xl font-bold mb-2">{ev.year}</div>
                    <div className="font-display text-lg text-primary font-semibold leading-snug">{ev.title}</div>
                    <div className="text-xs text-muted-foreground mt-2 italic">Bấm để xem chi tiết →</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-card border-2 border-gold/60 max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <div className="text-gold font-display text-3xl font-bold">{selected.year}</div>
                <DialogTitle className="font-display text-3xl text-primary">{selected.title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground italic">
                  Nhân vật: {selected.who}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 text-foreground/90 mt-2">
                <div>
                  <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-1">Sự kiện</h4>
                  <p>{selected.what}</p>
                </div>
                <div>
                  <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-1">Diễn biến</h4>
                  <p>{selected.how}</p>
                </div>
                <div>
                  <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-1">Kết cục</h4>
                  <p>{selected.outcome}</p>
                </div>
                <div className="border-t border-gold/30 pt-4 mt-2 bg-gold/5 -mx-6 px-6 py-4 rounded">
                  <h4 className="font-display text-gold uppercase tracking-wider text-sm mb-2 flex items-center gap-2">
                    ★ Ý nghĩa lịch sử
                  </h4>
                  <p className="italic leading-relaxed">{selected.meaning}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Timeline;
