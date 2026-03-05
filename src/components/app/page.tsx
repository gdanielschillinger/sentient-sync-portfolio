"use client";
import { useState } from 'react';
import Gatekeeper from '@/components/Gatekeeper';
import ClearanceTerminal from '@/components/ClearanceTerminal';

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <main className="bg-black min-h-screen flex items-center justify-center">
      {isUnlocked ? (
        <Gatekeeper />
      ) : (
        <ClearanceTerminal onUnlock={handleUnlock} />
      )}
    </main>
  );
}