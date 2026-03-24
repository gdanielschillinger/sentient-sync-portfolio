"use client";

import { motion } from "framer-motion";

const phases = [
  { date: "FEB 2026", task: "Development: Sentient Sync Core", detail: "auditor.py cryptographic signing — complete.", complete: true },
  { date: "MAR 2026", task: "Academic Finalization", detail: "BS Cybersecurity (Champlain College, 4.0 GPA) — in progress.", complete: true },
  { date: "APR 2026", task: "eMerge Americas Launch", detail: "Live deployment of AGI/Cybersecurity portfolio — eMerge Americas, April 23, 2026.", complete: false },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-black py-24 px-6 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500 mb-16 text-center">Strategic Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative p-6 border-l border-zinc-800">
              <div className={`absolute top-0 -left-[5px] w-2 h-2 rounded-full shadow-[0_0_10px_#22d3ee] ${phase.complete ? 'bg-green-500' : 'bg-cyan-500'}`} />
              <span className="block font-mono text-[10px] text-cyan-500/70 mb-4">{phase.date}</span>
              {phase.complete && <span className="inline-block font-mono text-[9px] text-green-500/70 uppercase tracking-widest mb-2">✓ Complete</span>}
              <h3 className="text-xs font-bold text-zinc-200 uppercase tracking-widest mb-2">{phase.task}</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{phase.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
