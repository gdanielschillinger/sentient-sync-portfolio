import React, { useState, useEffect } from "react";

const getNYCTime = () =>
  new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

const TerminalLog = () => {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Initializing Sentient_Sync_v1...",
    "[AUTH] NIST-800-53 Compliance: ACTIVE",
    "[NODE] SovereignAuditor: READY",
  ]);

  useEffect(() => {
    const messages = [
      "Scanning data pulse for collusion...",
      "Generating HMAC-SHA256 signature...",
      "Integrity Verified: No anomalies detected.",
      "Risk Score: 0.02 [NOMINAL]",
      "Alert: Semantic overlap detected in Node_B.",
      "Triggering Self-Correction Protocol...",
    ];

    const interval = setInterval(() => {
      const entry = messages[Math.floor(Math.random() * messages.length)];
      setLogs((prev) => [...prev.slice(-8), `[${getNYCTime()} NYC] ${entry}`]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-zinc-800 rounded-3xl p-6 font-mono text-[11px] h-full flex flex-col shadow-2xl shadow-emerald-500/5">
      <div className="flex gap-1.5 mb-4">
        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
        <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
      </div>
      <div className="flex-1 space-y-1 overflow-hidden">
        {logs.map((log, i) => (
          <div
            key={i}
            className={`${
              log.includes("Alert") ? "text-red-400" : log.includes("Integrity Verified") ? "text-emerald-400" : "text-zinc-500"
            } animate-in fade-in slide-in-from-bottom-1`}
          >
            {log}
          </div>
        ))}
        <div className="w-2 h-4 bg-emerald-500/50 animate-pulse inline-block ml-1"></div>
      </div>
    </div>
  );
};

export default TerminalLog;
