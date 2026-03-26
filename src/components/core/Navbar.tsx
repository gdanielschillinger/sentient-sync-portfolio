"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";

function useDualClock() {
  const [times, setTimes] = useState({ nyc: "", fra: "" });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const fmt = (tz: string) =>
        now.toLocaleTimeString("en-US", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
      setTimes({ nyc: fmt("America/New_York"), fra: fmt("Europe/Berlin") });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return times;
}

export default function Navbar() {
  const { nyc, fra } = useDualClock();
  const { lang, setLang, t } = useLang();

  const navItems = [
    { key: "architecture", label: t.nav.architecture },
    { key: "modules",      label: t.nav.modules },
    { key: "threats",      label: t.nav.threats },
    { key: "docs",         label: t.nav.docs },
    { key: "demo",         label: t.nav.demo },
    { key: "roadmap",      label: t.nav.roadmap },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="Return to top" className="flex items-center gap-4 group">
          <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center rounded-sm group-hover:border-cyan-500/50 transition-colors">
            <span className="text-cyan-500 font-mono text-xs font-bold">S</span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-400 uppercase hidden sm:block group-hover:text-zinc-200 transition-colors">
            Sentient // Sync
          </span>
        </a>

        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors hidden lg:block"
            >
              {item.label}
            </a>
          ))}

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-sm hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all"
          >
            {t.nav.hireMe}
          </a>

          <div className="h-4 w-[1px] bg-zinc-800" />

          {/* EN / DE Language Toggle */}
          <div className="flex items-center gap-1 border border-zinc-800 rounded-sm overflow-hidden">
            <button
              onClick={() => setLang("en")}
              aria-label="Switch to English"
              className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest transition-all ${
                lang === "en"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              <span className="text-xs leading-none">🇺🇸</span>
              <span className="hidden sm:inline">EN</span>
            </button>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <button
              onClick={() => setLang("de")}
              aria-label="Zu Deutsch wechseln"
              className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest transition-all ${
                lang === "de"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              <span className="text-xs leading-none">🇩🇪</span>
              <span className="hidden sm:inline">DE</span>
            </button>
          </div>

          <div className="h-4 w-[1px] bg-zinc-800" />

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">NYC</span>
              <span className="text-[10px] font-mono text-cyan-600 tabular-nums">{nyc || "──:──:──"}</span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800" />
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">FRA</span>
              <span className="text-[10px] font-mono text-cyan-600 tabular-nums">{fra || "──:──:──"}</span>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800" />
          </div>
          <span className="text-[10px] font-mono text-zinc-600 uppercase">{t.nav.version}</span>
        </div>
      </div>
    </nav>
  );
}
