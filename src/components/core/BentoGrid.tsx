"use client";

import { motion } from 'framer-motion';
import { Shield, Brain, Lock, Activity, Cpu, Terminal } from 'lucide-react';
import TerminalLog from '../components/Terminal';

const tiles = [
  { id: "01", title: "Sentient Sync Core", desc: "Autonomous AGI architecture for deterministic orchestration.", icon: <Brain size={20} className="text-cyan-500" />, size: "col-span-1 row-span-1", status: "ACTIVE" },
  { id: "02", title: "Security Auditor", desc: "Collusion detection & cryptographic signing via auditor.py.", icon: <Shield size={20} className="text-emerald-500" />, size: "col-span-1 row-span-1" },
  { id: "03", title: "Live Terminal", desc: "Real-time stream of the Sentient_Sync engine's cognitive processes.", icon: <Terminal size={20} className="text-emerald-500" />, size: "md:col-span-2 md:row-span-2", component: <TerminalLog /> },
  { id: "04", title: "CryptoGuard AI", desc: "Forensic monitoring for smart contract integrity.", icon: <Lock size={20} className="text-purple-500" />, size: "col-span-1 row-span-1" },
  { id: "05", title: "NIST Compliance", desc: "Zero-trust logic gates and incident response alignment.", icon: <Cpu size={20} className="text-blue-500" />, size: "col-span-1 row-span-1" },
  { id: "06", title: "Audit Persistence", desc: "SQLite-backed storage for AGI transparency.", icon: <Activity size={20} className="text-zinc-500" />, size: "col-span-1 row-span-1" }
];

export default function BentoGrid() {
  return (
    <section id="modules" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12">Core Modules // v1.0</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {tiles.map((tile, index) => (
            <motion.div key={index} whileHover={{ y: -2 }} className={`${tile.size} group relative ${tile.component ? 'rounded-3xl' : 'p-6 rounded-sm border border-zinc-900 hover:border-zinc-700 flex flex-col justify-between'} bg-zinc-950/50 transition-all overflow-hidden`}>
              {tile.component ? (
                <div className="absolute inset-0">
                  {tile.component}
                </div>
              ) : (
                <>
                  <span className="absolute top-4 right-6 font-mono text-[10px] text-zinc-800 group-hover:text-zinc-600">[{tile.id}]</span>
                  <div className="z-10">
                    <div className="mb-4 inline-block p-2 bg-zinc-900/50 rounded-sm border border-zinc-800">{tile.icon}</div>
                    <h3 className="text-sm font-bold text-zinc-200 tracking-tight uppercase mb-2">{tile.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed max-w-[240px]">{tile.desc}</p>
                  </div>
                  {tile.status && <div className="mt-4 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" /><span className="text-[9px] font-mono text-cyan-500/70 tracking-tighter">{tile.status}</span></div>}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}