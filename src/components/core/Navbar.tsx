"use client";

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center rounded-sm">
            <span className="text-cyan-500 font-mono text-xs font-bold">S</span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-400 uppercase hidden sm:block">
            Sentient // Sync
          </span>
        </div>

        <div className="flex items-center gap-8">
          {['Architecture', 'Modules', 'Roadmap'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-zinc-800" />
          <span className="text-[10px] font-mono text-zinc-600 uppercase">v1.0.4</span>
        </div>
      </div>
    </nav>
  );
}