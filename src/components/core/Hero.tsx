"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

function useCountdown(targetDate: Date) {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const emerge = useCountdown(new Date("2026-04-23T09:00:00-04:00"));
  const { t } = useLang();

  return (
    <section className="relative min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden py-32">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 0)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto px-6 z-10 text-center">
        {/* Status badge */}
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-[0.3em]">{t.hero.statusBadge}</span>
        </div>

        {/* Protocol badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-cyan-500/30 bg-cyan-500/10 rounded-full">
          <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">{t.hero.protocolBadge}</span>
        </div>

        {/* eMerge Americas countdown badge */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-amber-500/40 bg-amber-500/[0.06] rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-[0.25em]">{t.hero.emergeBadge}</span>
            <span className="h-3 w-[1px] bg-amber-500/30" />
            <div className="flex items-baseline gap-1 font-mono text-[10px] tabular-nums">
              <span className="text-white font-bold">{String(emerge.days).padStart(2,"0")}</span>
              <span className="text-amber-500/60">d</span>
              <span className="text-white font-bold ml-1">{String(emerge.hours).padStart(2,"0")}</span>
              <span className="text-amber-500/60">h</span>
              <span className="text-white font-bold ml-1">{String(emerge.minutes).padStart(2,"0")}</span>
              <span className="text-amber-500/60">m</span>
              <span className="text-white font-bold ml-1">{String(emerge.seconds).padStart(2,"0")}</span>
              <span className="text-amber-500/60">s</span>
            </div>
            <span className="h-3 w-[1px] bg-amber-500/30" />
            <span className="text-[10px] font-mono text-amber-500/60 uppercase tracking-widest">{t.hero.emergeLocation}</span>
          </div>
        </motion.div>

        {/* Name + credentials lockup */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-5"
        >
          <p className="text-sm md:text-base font-mono font-bold text-white tracking-widest uppercase">G. Daniel Schillinger</p>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mt-1">{t.hero.credentials}</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
        >
          {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{t.hero.title2}</span> {t.hero.title3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="https://github.com/gdanielschillinger/sentient-sync-portfolio#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-zinc-100 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors rounded-sm"
          >
            {t.hero.ctaDocs}
          </a>
          <a
            href="https://github.com/gdanielschillinger/sentient-sync-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-zinc-800 text-zinc-400 font-mono text-xs uppercase tracking-widest hover:text-white hover:border-zinc-500 transition-all rounded-sm"
          >
            {t.hero.ctaGithub}
          </a>
        </motion.div>

        {/* Scroll-down indicator */}
        <motion.a
          href="#architecture"
          aria-label="Scroll to Architecture"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="inline-flex flex-col items-center gap-1 mb-16 group"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-700 group-hover:text-zinc-500 transition-colors">{t.hero.scroll}</span>
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            width="12" height="8" viewBox="0 0 12 8" fill="none"
            className="text-zinc-700 group-hover:text-cyan-500 transition-colors"
          >
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        </motion.a>

        {/* Identity / Strategic Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-left border-t border-zinc-900 pt-16"
        >
          <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 mb-8">{t.hero.identityLabel}</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="text-zinc-300 text-lg leading-relaxed mb-4">{t.hero.identityP1}</p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">{t.hero.identityP2}</p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">{t.hero.identityP3}</p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-cyan-500/80">{t.hero.coreFocusLabel}</h3>
              <ul className="text-[11px] font-mono text-zinc-400 space-y-2 uppercase tracking-tighter">
                {t.hero.focus.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
