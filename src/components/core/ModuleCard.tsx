import React, { useState, useEffect } from 'react';

const ModuleCard = ({ id, title, description, logs }: any) => {
  const [activeLog, setActiveLog] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  // Simulate "Work" for each specific module
  useEffect(() => {
    let logIndex = 0;
    const interval = setInterval(() => {
      if (logs && logs.length > 0) {
        const nextLog = logs[logIndex % logs.length];
        logIndex++;
        setActiveLog(nextLog);
        setIsAlert(nextLog.includes("FAIL") || nextLog.includes("ALERT"));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [logs]);

  return (
    <div className="bg-zinc-950 border border-zinc-900 p-5 rounded-2xl group hover:border-emerald-500/30 transition-all h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-mono text-zinc-600">[{id}]</span>
          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${isAlert ? 'border-red-900 bg-red-950/30' : 'border-emerald-900 bg-emerald-950/30'}`}>
            <div className={`h-1 w-1 rounded-full animate-pulse ${isAlert ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
            <span className={`text-[8px] font-bold uppercase tracking-tighter ${isAlert ? 'text-red-400' : 'text-emerald-400'}`}>
              {isAlert ? 'Alert' : 'Active'}
            </span>
          </div>
        </div>

        <h3 className="text-sm font-bold text-zinc-200 mb-2">{title}</h3>
        <p className="text-[11px] text-zinc-500 leading-relaxed mb-4">{description}</p>
      </div>

      {/* The "Show the Work" Terminal Section */}
      <div className="bg-black/50 rounded-lg p-3 border border-zinc-900/50 min-h-[40px] flex items-center mt-auto">
        <span className="text-[9px] font-mono text-zinc-600 mr-2">{'>'}</span>
        <span className={`text-[9px] font-mono tracking-tight ${isAlert ? 'text-red-400' : 'text-zinc-400'}`}>
          {activeLog || "INITIALIZING_NODE..."}
        </span>
      </div>
    </div>
  );
};

export default ModuleCard;
