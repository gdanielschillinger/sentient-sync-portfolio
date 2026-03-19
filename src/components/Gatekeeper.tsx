'use client';

import React, { useEffect, useState } from 'react';
import AuditCard from '@/components/AuditCard';
import NeuralVisualizer from '@/components/NeuralVisualizer';

const SentientSyncCore = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootStatus, setBootStatus] = useState("INITIALIZING_CORE...");

  useEffect(() => {
    const steps = [
      { msg: "ESTABLISHING_ENCRYPTED_TUNNEL...", delay: 400 },
      { msg: "SYNCING_ED25519_KEYS...", delay: 800 },
      { msg: "MOUNTING_SQLITE_VAULT...", delay: 1200 },
      { msg: "GATEKEEPER_LIVE.", delay: 1500 }
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setBootStatus(step.msg);
        if (i === steps.length - 1) setTimeout(() => setIsBooting(false), 500);
      }, step.delay);
    });
  }, []);

  const [logs, setLogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching the live audit pulses from your SQLite database
  const fetchAuditLogs = async () => {
    try {
      const response = await fetch('/api/audit');
      const data = await response.json();
      setLogs(Array.isArray(data) ? data : []);
      setIsLoading(false);
    } catch (error) {
      console.error("Audit sync failed:", error);
    }
  };

  useEffect(() => {
    if (isBooting) return;
    fetchAuditLogs();
    const interval = setInterval(fetchAuditLogs, 5000); // Polling every 5 seconds
    return () => clearInterval(interval);
  }, [isBooting]);

  if (isBooting) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono text-neon-blue">
        <div className="text-[10px] tracking-[0.3em] animate-pulse mb-2">{bootStatus}</div>
        <div className="w-48 h-[1px] bg-zinc-900 overflow-hidden">
          <div className="h-full bg-neon-blue animate-load-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-400 font-mono p-6 relative">
      <header className="mb-10 border-b border-zinc-800 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-xl tracking-widest text-white uppercase">Sentient Sync // Gatekeeper v1.0</h1>
          <p className="text-[10px] mt-1 text-zinc-500 uppercase tracking-tighter">
            System Identity: <span className="text-neon-blue">ED25519_V2_PROD_SH_001</span>
          </p>
        </div>
        <div className="text-right">
          <p className="text-[9px] text-zinc-600 uppercase">Persistence Status</p>
          <p className="text-[10px] text-emerald-500 glow-green px-2 py-0.5 bg-emerald-500/10 rounded-full">Active</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="md:col-span-2 md:row-span-2 bg-zinc-950 border border-zinc-900 rounded-sm relative h-[500px]">
           <NeuralVisualizer />
        </div>

        {/* Live Audit Stream */}
        <div className="bg-zinc-950 border border-zinc-900 p-4 rounded-sm h-[500px] flex flex-col">
          <h2 className="text-[10px] uppercase mb-4 text-zinc-500 tracking-widest border-b border-zinc-800 pb-2">Verified Audit Stream</h2>
          <div className="space-y-2 overflow-y-auto flex-1 pr-2 custom-scrollbar">
            {isLoading ? (
              <p className="text-[10px] animate-pulse">Syncing with vault...</p>
            ) : logs.length > 0 ? (
              logs.map((log, index) => (
                <AuditCard 
                  key={index}
                  status={log.security_flag ? "FLAG" : "CLEARED"} 
                  hash={log.integrity_hash?.substring(0, 12) || "NULL_HASH"} 
                  score={log.collusion_score || "0.00"}
                  code={log.code || ""}
                />
              ))
            ) : (
              <p className="text-[10px] text-zinc-700 italic">No active audit pulses detected.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentientSyncCore;
