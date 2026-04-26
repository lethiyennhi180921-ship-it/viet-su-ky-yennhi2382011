import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

/**
 * Nhạc nền: "Two Steps From Hell — Victory"
 * Phát qua YouTube IFrame API (ẩn) để tránh vấn đề bản quyền khi host file MP3.
 */
const YOUTUBE_VIDEO_ID = "Dx5Y2bGEZSI"; // Two Steps From Hell - Victory (official)

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const AmbientAudio = () => {
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(40);
  const [ready, setReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerId = "yt-victory-player";

  // Load YouTube IFrame API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setReady(true);
      return;
    }
    const existing = document.getElementById("yt-iframe-api");
    if (!existing) {
      const tag = document.createElement("script");
      tag.id = "yt-iframe-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      setReady(true);
    };
  }, []);

  // Create player when API ready
  useEffect(() => {
    if (!ready || playerRef.current) return;
    playerRef.current = new window.YT.Player(containerId, {
      height: "0",
      width: "0",
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        loop: 1,
        playlist: YOUTUBE_VIDEO_ID,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: (e: any) => {
          e.target.setVolume(volume);
        },
      },
    });
  }, [ready]);

  // Toggle play/pause
  useEffect(() => {
    const p = playerRef.current;
    if (!p || !p.playVideo) return;
    if (enabled) p.playVideo();
    else p.pauseVideo();
  }, [enabled]);

  // Volume changes
  useEffect(() => {
    const p = playerRef.current;
    if (p && p.setVolume) p.setVolume(volume);
  }, [volume]);

  return (
    <>
      <div id={containerId} style={{ position: "fixed", left: -9999, top: -9999 }} />
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        {enabled && (
          <div className="bg-crimson-deep/90 backdrop-blur-md border-2 border-gold/60 rounded-full px-3 py-2 flex items-center gap-2 shadow-lg animate-fade-in-up">
            <Music className="w-4 h-4 text-gold" />
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-24 accent-gold"
              aria-label="Âm lượng"
            />
          </div>
        )}
        <button
          onClick={() => setEnabled((v) => !v)}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-glow text-ink shadow-xl hover:scale-110 transition-transform border-2 border-crimson-deep flex items-center justify-center"
          aria-label={enabled ? "Tắt nhạc" : "Bật nhạc"}
          title={enabled ? "Tắt — Two Steps From Hell: Victory" : "Bật nhạc — Two Steps From Hell: Victory"}
        >
          {enabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
};

export default AmbientAudio;
