
import React, { useState } from 'react';

interface AutoFixerProps {
  code: string;
}

const AutoFixer: React.FC<AutoFixerProps> = ({ code }) => {
  const [fixing, setFixing] = useState(false);
  const [fixedCode, setFixedCode] = useState('');

  const fixCode = async () => {
    setFixing(true);
    setFixedCode(''); // Clear previous results

    try {
      const response = await fetch('/api/fix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) {
        throw new Error('Failed to fix code');
      }

      const data = await response.json();
      setFixedCode(data.fixedCode);
    } catch (error) {
      console.error('Error fixing code:', error);
      // Handle errors appropriately in a real app
    } finally {
      setFixing(false);
    }
  };

  return (
    <div className="mt-4">
      <button 
        onClick={fixCode} 
        disabled={fixing}
        className="w-full text-center py-2 text-[10px] font-bold border border-sky-500/20 bg-sky-950/30 text-sky-400 rounded-sm hover:bg-sky-950/60 transition-colors duration-200"
      >
        {fixing ? 'Fixing...' : 'Auto Fix'}
      </button>
      {fixedCode && (
        <div className="mt-4">
          <h3 className="text-[10px] uppercase text-zinc-500 tracking-widest mb-2">Fixed Code</h3>
          <pre className="bg-black/40 p-2 rounded-sm border border-zinc-800/50 text-xs text-zinc-300 overflow-x-auto">
            <code>{fixedCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default AutoFixer;
