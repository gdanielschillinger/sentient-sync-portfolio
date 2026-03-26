"use client";

import { motion } from "framer-motion";

const phases = [
  { date: "FEB 2026", task: "Development: Sentient Sync Core", detail: "auditor.py cryptographic signing and HMAC-SHA256 interaction logging — complete.", complete: true },
  { date: "MAR 2026", task: "Academic Finalization", detail: "BS Cybersecurity, Champlain College — 4.0 GPA. CMIT-235 Advanced Python and MGMT-260 Project Management completed.", complete: true },
  { date: "APR 2026", task: "eMerge Americas Launch", detail: "Live portfolio deployment featured at eMerge Americas, Miami — April 23, 2026.", complete: false },
  { date: "Q2 2026", task: "AI Security Engineer Role", detail: "Targeting AI Security Engineer, AGI Security Architect, and AI-adjacent Cybersecurity roles at enterprise and high-growth AI firms.", complete: false },
  { date: "Q3 2026", task: "Collusion Detection v2", detail: "Expand agent collusion detection to multi-model LLM pipelines. Integrate LLM04 (Model DoS) and LLM08 (Excessive Agency) mitigations into auditor.py.", complete: false },
  { date: "Q4 2026", task: "Open-Source Release", detail: "Public release of the Sentient Sync Engine framework under an open-source license. Documentation, contribution guidelines, and security disclosure policy.", complete: false },
  { date: "2027", task: "AGI Security Research", detail: "Publish peer-reviewed research on multi-agent collusion vectors and real-time detection architectures. Target IEEE S&P and USENIX Security.", complete: false },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-black py-24 px-6 border-t border-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500 mb-16 text-center">Strategic Roadmap</h2>
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
                phase.complete
                  ? 'bg-green-500 shadow-[0_0_8px_#22c55e]'
                  : idx === 2
                  ? 'bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse'
                  : 'bg-zinc-700'
              }`} />
              <span className="block font-mono text-[10px] text-cyan-500/70 mb-4">{phase.date}</span>
              {phase.complete && (
                <span className="inline-block font-mono text-[9px] text-green-500/70 uppercase tracking-widest mb-2">✓ Complete</span>
              )}
              {!phase.complete && idx === 2 && (
                <span className="inline-block font-mono text-[9px] text-cyan-400/80 uppercase tracking-widest mb-2">▶ Active</span>
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
