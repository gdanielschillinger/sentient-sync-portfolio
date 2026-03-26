"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

export default function Roadmap() {
  const { t } = useLang();
  const phases = t.roadmap.phases;

  return (
    <section id="roadmap" className="bg-black py-24 px-6 border-t border-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500 mb-16 text-center">
          {t.roadmap.sectionLabel}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="relative p-6 border-l border-zinc-800"
            >
              <div className={`absolute top-0 -left-[5px] w-2 h-2 rounded-full ${
                idx < 2
                  ? 'bg-green-500 shadow-[0_0_8px_#22c55e]'
                  : idx === 2
                  ? 'bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse'
                  : 'bg-zinc-700'
              }`} />
              <span className="block font-mono text-[10px] text-cyan-500/70 mb-4">{phase.date}</span>
              {idx < 2 && (
                <span className="inline-block font-mono text-[9px] text-green-500/70 uppercase tracking-widest mb-2">
                  {t.roadmap.complete}
                </span>
              )}
              {idx === 2 && (
                <span className="inline-block font-mono text-[9px] text-cyan-400/80 uppercase tracking-widest mb-2">
                  {t.roadmap.active}
                </span>
              )}
              <h3 className="text-xs font-bold text-zinc-200 uppercase tracking-widest mb-2">{phase.task}</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{phase.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
