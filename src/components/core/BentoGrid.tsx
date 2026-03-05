"use client";

import ModuleCard from './ModuleCard';
import TerminalLog from '../components/Terminal';

const tiles = [
  { id: "01", title: "Sentient Sync Core", description: "Autonomous AGI architecture for deterministic orchestration.", type: "auditor", size: "col-span-1 row-span-1" },
  { id: "02", title: "Security Auditor", description: "Collusion detection & cryptographic signing via auditor.py.", type: "auditor", size: "col-span-1 row-span-1" },
  { id: "03", title: "Live Terminal", description: "Real-time stream of the Sentient_Sync engine's cognitive processes.", type: "terminal", size: "md:col-span-2 md:row-span-2", component: <TerminalLog /> },
  { id: "04", title: "CryptoGuard AI", description: "Forensic monitoring for smart contract integrity.", type: "crypto", size: "col-span-1 row-span-1" },
  { id: "05", title: "NIST Compliance", description: "Zero-trust logic gates and incident response alignment.", type: "nist", size: "col-span-1 row-span-1" },
  { id: "06", title: "Audit Persistence", description: "SQLite-backed storage for AGI transparency.", type: "auditor", size: "col-span-1 row-span-1" }
];

export default function BentoGrid() {
  return (
    <section id="modules" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12">Core Modules // v1.0</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-auto">
          {tiles.map((tile, index) => (
            <div key={index} className={tile.size}>
              {tile.component ? (
                <div className="h-full w-full">{tile.component}</div>
              ) : (
                <ModuleCard
                  id={tile.id}
                  title={tile.title}
                  description={tile.description}
                  type={tile.type}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}