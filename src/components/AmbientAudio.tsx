import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

/**
 * Nhạc nền không lời, mang âm hưởng ngũ cung phương Đông.
 * Dùng Web Audio API tự sinh — không cần file mp3, không phát sinh phí băng thông.
 * Các nốt được chơi theo thang ngũ cung (C, D, F, G, A) như đàn tranh / sáo trúc Việt Nam.
 */
const PENTATONIC: number[] = [
  // Tần số (Hz) các nốt ngũ cung — 3 quãng tám
  261.63, 293.66, 349.23, 392.0, 440.0,
  523.25, 587.33, 698.46, 783.99, 880.0,
  1046.5,
];

const AmbientAudio = () => {
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(0.25);

  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  const playNote = (freq: number, time: number, duration: number) => {
    const ctx = ctxRef.current!;
    const master = masterRef.current!;

    // Mỗi "nốt sáo" gồm 1 sine carrier + tiếng leng keng (đàn tranh) bằng triangle nhẹ
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    osc1.type = "sine";
    osc2.type = "triangle";
    osc1.frequency.value = freq;
    osc2.frequency.value = freq * 2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.18, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    const mix = ctx.createGain();
    mix.gain.value = 0.35;

    osc1.connect(gain);
    osc2.connect(mix);
    mix.connect(gain);
    gain.connect(master);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + duration + 0.05);
    osc2.stop(time + duration + 0.05);
  };

  const scheduleLoop = () => {
    const ctx = ctxRef.current!;
    let t = ctx.currentTime + 0.1;
    const tick = () => {
      if (!ctxRef.current) return;
      const now = ctx.currentTime;
      // Lên lịch ~6 giây nhạc tiếp theo
      while (t < now + 6) {
        const note = PENTATONIC[Math.floor(Math.random() * PENTATONIC.length)];
        const dur = 0.6 + Math.random() * 1.2;
        playNote(note, t, dur);
        // Thỉnh thoảng chơi 1 quãng hài hoà
        if (Math.random() < 0.3) {
          const harmony = PENTATONIC[Math.floor(Math.random() * 5)];
          playNote(harmony / 2, t, dur * 1.2);
        }
        t += 0.7 + Math.random() * 0.8;
      }
      timerRef.current = window.setTimeout(tick, 3000);
    };
    tick();
  };

  const start = async () => {
    if (!ctxRef.current) {
      const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
      const ctx = new Ctx();
      const master = ctx.createGain();
      master.gain.value = volume;

      // Reverb-ish nhẹ bằng convolver giả lập (dùng filter thay thế cho gọn)
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 2200;

      master.connect(filter);
      filter.connect(ctx.destination);

      ctxRef.current = ctx;
      masterRef.current = master;
    }
    await ctxRef.current.resume();
    scheduleLoop();
  };

  const stop = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (ctxRef.current) {
      ctxRef.current.suspend();
    }
  };

  useEffect(() => {
    if (enabled) start();
    else stop();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  useEffect(() => {
    if (masterRef.current) {
      masterRef.current.gain.value = volume;
    }
  }, [volume]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {enabled && (
        <div className="bg-crimson-deep/90 backdrop-blur-md border-2 border-gold/60 rounded-full px-3 py-2 flex items-center gap-2 shadow-lg animate-fade-in-up">
          <Music className="w-4 h-4 text-gold" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 accent-gold"
            aria-label="Âm lượng"
          />
        </div>
      )}
      <button
        onClick={() => setEnabled((v) => !v)}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-glow text-ink shadow-xl hover:scale-110 transition-transform border-2 border-crimson-deep flex items-center justify-center"
        aria-label={enabled ? "Tắt nhạc nền" : "Bật nhạc nền"}
        title={enabled ? "Tắt nhạc nền dân tộc" : "Bật nhạc nền dân tộc"}
      >
        {enabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default AmbientAudio;
