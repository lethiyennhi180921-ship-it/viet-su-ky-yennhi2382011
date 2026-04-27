import SiteHeader from "@/components/SiteHeader";
import { eventVideos } from "@/data/eventVideos";
import { Film } from "lucide-react";

const EventVideos = () => {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/15 border border-gold/40 mb-4">
              <Film className="w-7 h-7 text-gold" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-3">
              Video Sự Kiện Lịch Sử
            </h1>
            <p className="text-paper/80 max-w-2xl mx-auto">
              Tuyển tập video tư liệu về những mốc son chói lọi trong lịch sử dân tộc Việt Nam.
            </p>
          </header>

          {eventVideos.length === 0 ? (
            <div className="glass-imperial rounded-lg p-10 text-center text-paper/70">
              <p className="font-display text-xl text-gold-glow mb-2">Chưa có video nào</p>
              <p className="text-sm">
                Hãy thêm sự kiện và link YouTube vào tệp{" "}
                <code className="px-1.5 py-0.5 rounded bg-ink/40 text-gold">
                  src/data/eventVideos.ts
                </code>
                .
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {eventVideos.map((v) => (
                <article
                  key={v.id}
                  className="glass-imperial rounded-lg overflow-hidden border border-gold/30 hover:border-gold transition-all"
                >
                  <div className="aspect-video w-full bg-ink">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${v.youtubeId}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-display text-xl text-gold-glow font-bold mb-1">
                      {v.title}
                    </h2>
                    {v.description && (
                      <p className="text-paper/80 text-sm">{v.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <footer className="py-8 px-4 text-center border-t border-gold/30 bg-crimson-deep text-paper/80">
        <p className="text-sm">Sử Việt Ký © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
};

export default EventVideos;
