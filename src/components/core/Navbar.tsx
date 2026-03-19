"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

        <div className="flex items-center gap-8">
          {["Architecture", "Modules", "Threats", "Roadmap"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
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
          <span className="text-[10px] font-mono text-zinc-600 uppercase">v1.0.4</span>
        </div>
      </div>
    </nav>
  );
}
