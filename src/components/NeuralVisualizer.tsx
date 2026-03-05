import React from 'react';
import { motion } from 'framer-motion';

const NeuralVisualizer = () => {
  // Simulating the 3x2 grid nodes of your LangGraph
  const nodes = [
    { id: 1, label: 'INPUT', x: '10%', y: '50%' },
    { id: 2, label: 'AUDITOR', x: '50%', y: '20%' },
    { id: 3, label: 'ENFORCER', x: '50%', y: '80%' },
    { id: 4, label: 'VAULT', x: '90%', y: '50%' },
  ];

  return (
    <div className="relative w-full h-full bg-zinc-950 rounded-sm overflow-hidden border border-zinc-900">
      <div className="scanline" />
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <svg className="absolute inset-0 w-full h-full">
        {/* Animated Connection Lines */}
        <motion.path
          d="M 10% 50% L 50% 20% L 90% 50% L 50% 80% Z"
          fill="none"
          stroke="#27272a"
          strokeWidth="1"
        />
        {/* The Data Pulse */}
        <motion.circle
          r="3"
          fill="#00d2ff"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: "path('M 10 50 L 50 20 L 90 50 L 50 80 Z')", offsetRotate: "0deg" }}
        />
      </svg>

      {/* Interactive Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute z-10 flex flex-col items-center justify-center"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] glow-blue"></div>
          <span className="text-[9px] mt-2 text-zinc-500 font-mono tracking-tighter">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default NeuralVisualizer;