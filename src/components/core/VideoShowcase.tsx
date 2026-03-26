"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function VideoShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLang();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="demo" className="bg-[#050505] py-32 px-6 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-cyan-500 mb-2">
              {t.video.sectionLabel}
            </h2>
            <div className="h-[1px] w-24 bg-cyan-500/50" />
          </div>

          <p className="text-zinc-400 text-sm font-mono mb-8 max-w-xl">
            {t.video.description}
          </p>

          <div className="relative rounded-sm overflow-hidden border border-zinc-800 bg-black group">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-800 bg-zinc-950">
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-cyan-500/40" />
              <span className="ml-3 text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                {t.video.terminalLabel}
              </span>
            </div>

            <video
              ref={videoRef}
              src="/sentient-sync-intro.mp4"
              controls
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="w-full aspect-video object-cover"
            />

            {!playing && (
              <button
                onClick={handlePlay}
                aria-label={t.video.playLabel}
                className="absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/40 transition-colors cursor-pointer"
                style={{ top: "2.25rem" }}
              >
                <div className="w-14 h-14 rounded-full border border-cyan-500/50 bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-cyan-400 ml-0.5" aria-hidden="true">
                    <path d="M6 4.75L19.25 12L6 19.25V4.75Z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          <p className="mt-4 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
            {t.video.caption}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
