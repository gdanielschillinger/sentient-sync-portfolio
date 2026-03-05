"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden py-32">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #22d3ee 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="flex items-center gap-2 mb-4 justify-center">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-mono text-cyan-500/80 uppercase tracking-[0.3em]">System Status: Operational // Node-Alpha-01</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 mb-6 border border-cyan-500/30 bg-cyan-500/10 rounded-full">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Protocol: AGI-Sync-Secure</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Sentient Sync</span> Engine
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-10">
          Bridging autonomous AGI architecture with zero-trust cryptographic protocols. Custom-engineered for secure machine intelligence.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-24">
          <button className="px-8 py-3 bg-zinc-100 text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors rounded-sm">View Documentation</button>
          <button className="px-8 py-3 border border-zinc-800 text-zinc-400 font-mono text-xs uppercase tracking-widest hover:text-white hover:border-zinc-500 transition-all rounded-sm">GitHub Repository</button>
        </motion.div>

        {/* Strategic Positioning Copy */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-left border-t border-zinc-900 pt-16">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 mb-8">Identity // Lead Systems Architect</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <p className="text-zinc-300 text-lg leading-relaxed mb-6">Cybersecurity-focused systems builder with enterprise-scale experience and a disciplined approach to AI architecture.</p>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">Daniel designs secure automation frameworks prioritizing traceability and deterministic execution. His work bridges security engineering with forward-looking AGI orchestration.</p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-cyan-500/80">Core Focus</h3>
              <ul className="text-[11px] font-mono text-zinc-400 space-y-2 uppercase tracking-tighter">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Security Automation</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> AGI Orchestration</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> Zero-Trust Systems</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full" /> NIST / OWASP</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}