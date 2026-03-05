import AutoFixer from './AutoFixer';

interface AuditProps {
  status: 'CLEARED' | 'FLAG';
  hash: string;
  score: string;
  code: string; // Add code prop
}

const AuditCard = ({ status, hash, score, code }: AuditProps) => {
  const isFlagged = status === 'FLAG';
  
  return (
    <div className={`p-4 border-l-2 ${isFlagged ? 'border-red-600 bg-red-950/10' : 'border-emerald-600 bg-emerald-950/10'} mb-3 backdrop-blur-sm`}>
      <div className="flex justify-between items-center mb-2">
        {/* Using the new glow classes from globals.css */}
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isFlagged ? 'text-red-500 bg-red-500/10 glow-red' : 'text-emerald-500 bg-emerald-500/10 glow-green'}`}>
          {status}
        </span>
        <span className="text-[9px] text-zinc-600 font-mono tracking-widest uppercase">
          {new Date().toLocaleTimeString()}
        </span>
      </div>
      <p className="text-[11px] text-zinc-300 truncate font-mono bg-black/40 p-1.5 rounded-sm border border-zinc-800/50">
        ID: {hash}
      </p>
      {isFlagged && (
        <div className="mt-2">
          <AutoFixer code={code} />
        </div>
      )}
      <div className="flex justify-between items-center mt-2">
        <p className="text-[9px] text-zinc-500 uppercase tracking-tighter">Similarity Index</p>
        <p className={`text-xs font-mono ${isFlagged ? 'text-red-400' : 'text-zinc-300'}`}>{score}</p>
      </div>
    </div>
  );
};

export default AuditCard;