"use client";

import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

export default function Architecture() {
  const { t } = useLang();
  const layers = t.arch.layers;

  return (
    <section id="architecture" className="bg-[#050505] py-32 px-6 border-y border-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-cyan-500 mb-2">{t.arch.sectionLabel}</h2>
          <div className="h-[1px] w-24 bg-cyan-500/50" />
        </div>
        <div className="space-y-4">
          {layers.map((layer, idx) => (
            <motion.div key={layer.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className={`p-8 border rounded-sm transition-all group ${idx === 2 ? 'border-cyan-500/30 bg-cyan-500/[0.02]' : idx === 4 ? 'border-violet-500/30 bg-violet-500/[0.02]' : 'border-zinc-900 bg-zinc-950/30 hover:border-zinc-700'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-[10px] text-zinc-700 mt-1">[{layer.id}]</span>
                  <div>
                    <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${idx === 2 ? 'text-cyan-400' : idx === 4 ? 'text-violet-400' : 'text-zinc-200'}`}>{layer.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed max-w-lg">{layer.desc}</p>
                  </div>
                </div>
                {idx === 2 && <div className="px-3 py-1 border border-cyan-500/20 rounded-full bg-cyan-500/5 text-[9px] font-mono text-cyan-500 uppercase tracking-tighter">{t.arch.activeDev}</div>}
                {idx === 4 && <div className="px-3 py-1 border border-violet-500/20 rounded-full bg-violet-500/5 text-[9px] font-mono text-violet-400 uppercase tracking-tighter">LLM — v1.1 Live</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
