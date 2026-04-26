import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Drum } from "lucide-react";

/**
 * Tiếng TRỐNG ĐỒNG khí thế — tự sinh bằng Web Audio API.
 * Mô phỏng âm sắc trống đồng Đông Sơn: tiếng "tom" trầm + tiếng "ting" kim loại
 * vang ngân, đánh theo nhịp hành quân hào hùng.
 */
const AmbientAudio = () => {
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(0.4);

  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  /** Tiếng "TOM" trầm — mặt trống đồng đánh giữa */
  const playDrum = (time: number, strength = 1) => {
    const ctx = ctxRef.current!;
    const master = masterRef.current!;

    // Sóng sin tần thấp giảm dần — thân trống
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(55, time + 0.25);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.9 * strength, time + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.55);

    osc.connect(gain);
    gain.connect(master);
    osc.start(time);
    osc.stop(time + 0.6);

    // Tiếng đập tay (noise burst ngắn) — tạo cảm giác da trống
    const bufferSize = ctx.sampleRate * 0.08;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 800;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.45 * strength;
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(master);
    noise.start(time);
  };

  /** Tiếng "TING" kim loại ngân — vành trống đồng */
  const playRim = (time: number, strength = 0.5) => {
    const ctx = ctxRef.current!;
    const master = masterRef.current!;

    // Tổ hợp nhiều sóng hài tạo âm sắc đồng kim loại
    const fundamental = 520;
    const partials = [1, 2.3, 3.7, 5.1];
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.25 * strength, time + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.4);

    partials.forEach((p, i) => {
      const o = ctx.createOscillator();
      o.type = "triangle";
      o.frequency.value = fundamental * p;
      const g = ctx.createGain();
      g.gain.value = 1 / (i + 1.5);
      o.connect(g);
      g.connect(gain);
      o.start(time);
      o.stop(time + 1.5);
    });

    gain.connect(master);
  };

  /** Lập lịch nhịp trống — pattern hành quân khí thế:
   *  TOM . tom tom TOM . tom . | TOM TOM . ting tom . TOM .
   */
  const scheduleLoop = () => {
    const ctx = ctxRef.current!;
    const bpm = 96;
    const beat = 60 / bpm; // 1 nhịp đen
    const sixteenth = beat / 2;

    // Pattern (16 ô): 1 = mạnh, 0.6 = vừa, 0.3 = nhẹ, "r" = ting, "" = nghỉ
    const pattern: (number | "r" | "")[] = [
      1,   "",  0.4, 0.6,  1,   "",  0.4, "",
      1,   1,   "",  "r",  0.5, "",  1,   "r",
    ];

    let bar = 0;
    let nextTime = ctx.currentTime + 0.15;

    const scheduleBar = () => {
      if (!ctxRef.current) return;
      pattern.forEach((step, i) => {
        const t = nextTime + i * sixteenth;
        if (step === "r") {
          playRim(t, 0.8);
        } else if (typeof step === "number" && step > 0) {
          playDrum(t, step);
        }
      });
      // Mỗi 4 ô nhịp thêm tiếng ting vang xa cho hùng tráng
      if (bar % 2 === 1) {
        playRim(nextTime + 12 * sixteenth, 1);
      }
      nextTime += pattern.length * sixteenth;
      bar++;

      const delayMs = (nextTime - ctx.currentTime) * 1000 - 300;
      timerRef.current = window.setTimeout(scheduleBar, Math.max(50, delayMs));
    };
    scheduleBar();
  };

  const start = async () => {
    if (!ctxRef.current) {
      const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
      const ctx = new Ctx();
      const master = ctx.createGain();
      master.gain.value = volume;

      // Tăng tiếng bass + thêm chút "không gian" bằng filter
      const filter = ctx.createBiquadFilter();
      filter.type = "lowshelf";
      filter.frequency.value = 200;
      filter.gain.value = 6;

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
          <Drum className="w-4 h-4 text-gold" />
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
        aria-label={enabled ? "Tắt trống đồng" : "Bật trống đồng"}
        title={enabled ? "Tắt tiếng trống đồng" : "Bật tiếng trống đồng khí thế"}
      >
        {enabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default AmbientAudio;
