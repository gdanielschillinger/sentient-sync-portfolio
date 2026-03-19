"use client";

import { motion } from "framer-motion";

const phases = [
  { date: "FEB 2026", task: "Development: Sentient Sync Core", detail: "Finalizing auditor.py with cryptographic signing." },
  { date: "MAR 2026", task: "Academic Finalization", detail: "Completion of BS Cybersecurity (Champlain College)." },
  { date: "APR 2026", task: "eMerge Americas Launch", detail: "Official deployment of AGI/Cybersecurity portfolio." },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-black py-24 px-6 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500 mb-16 text-center">Strategic Roadmap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative p-6 border-l border-zinc-800">
              <div className="absolute top-0 -left-[5px] w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]" />
              <span className="block font-mono text-[10px] text-cyan-500/70 mb-4">{phase.date}</span>
              <h3 className="text-xs font-bold text-zinc-200 uppercase tracking-widest mb-2">{phase.task}</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{phase.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
