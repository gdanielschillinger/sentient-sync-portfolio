"use client";
import React, { useState } from 'react';

const ClearanceTerminal = ({ onUnlock }: any) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [serverCode, setServerCode] = useState("");

  const handleSendCode = async () => {
    const res = await fetch('/api/send-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data.success) {
      setServerCode(data.otp);
      setStep(2);
    }
  };

  const handleVerify = () => {
    if (code === serverCode) {
      onUnlock(); // This function will unlock the rest of your portfolio
    } else {
      alert("INVALID_CLEARANCE_CODE");
    }
  };

  return (
    <div className="bg-black border border-zinc-800 p-8 rounded-3xl max-w-md mx-auto font-mono">
      <div className="mb-6">
        <p className="text-emerald-500 text-[10px] mb-2">/ ACCESS_GATE /</p>
        <h2 className="text-white text-xl">Identity Verification</h2>
      </div>

      {step === 1 ? (
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="ENTER_RECRUITER_EMAIL..."
            className="w-full bg-zinc-900 border border-zinc-800 p-3 text-zinc-300 text-sm focus:border-emerald-500 outline-none transition-all"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            onClick={handleSendCode}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs py-3 uppercase font-bold transition-colors"
          >
            Request Clearance
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-xs text-zinc-500 italic">Verification code transmitted to {email}</p>
          <input 
            type="text" 
            placeholder="000-000"
            className="w-full bg-zinc-900 border border-zinc-800 p-3 text-center text-xl tracking-[10px] text-emerald-500 outline-none"
            onChange={(e) => setCode(e.target.value)}
          />
          <button 
            onClick={handleVerify}
            className="w-full bg-white text-black text-xs py-3 uppercase font-bold"
          >
            Verify Integrity
          </button>
        </div>
      )}
    </div>
  );
};

export default ClearanceTerminal;
