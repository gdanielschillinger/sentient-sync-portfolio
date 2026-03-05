"use client";

import ModuleCard from './ModuleCard';
import TerminalLog from '../components/Terminal';

const MODULE_DATA = [
  {
    id: "01",
    type: "core",
    title: "Sentient Sync Core",
    description: "Autonomous AGI architecture for deterministic orchestration.",
    logs: [
      "SYNCHRONIZING_NODES...",
      "REASONING_ENGINE: ACTIVE",
      "EXECUTING_AGI_LOOP...",
      "STATE_RESTORED_FROM_GRAPH",
      "ORCHESTRATION_SYNC: 100%"
    ]
  },
  {
    id: "02",
    type: "auditor",
    title: "Security Auditor",
    description: "Collusion detection & cryptographic signing via auditor.py.",
    logs: [
      "SCANNING_LOG_PULSE...",
      "COLLUSION_CHECK: PASS",
      "HMAC_SIGNATURE: 0x8a2...f",
      "ALERT: SEMANTIC_OVERLAP",
      "SIGNING_INTERACTION_HASH"
    ]
  },
  {
    id: "03",
    type: "crypto",
    title: "CryptoGuard AI",
    description: "Forensic monitoring for smart contract integrity.",
    logs: [
      "LEDGER_SCAN: NOMINAL",
      "VERIFYING_MERKLE_PROOF...",
      "ANOMALY_DETECTION: OFF",
      "BLOCK_HEIGHT: 24,019,202",
      "INTEGRITY_SHIELD: ACTIVE"
    ]
  },
  {
    id: "04",
    type: "nist",
    title: "NIST Compliance",
    description: "Zero-trust logic gates and incident response alignment.",
    logs: [
      "ENFORCING_NIST_800-53...",
      "CONTROL_AC-2: VERIFIED",
      "ZERO_TRUST_GATE: LOCKED",
      "AUTH_TOKEN_ENCRYPTION",
      "COMPLIANCE_LEVEL: HIGH"
    ]
  },
  {
    id: "05",
    type: "persistence",
    title: "Audit Persistence",
    description: "SQLite-backed storage for AGI transparency.",
    logs: [
      "WRITING_TO_SQLITE...",
      "DB_ENCRYPTION: AES-256",
      "ARCHIVING_TRACE_DATA",
      "SQL_INTEGRITY_CHECK...",
      "V_LOG_STORED_SUCCESSFULLY"
    ]
  }
];

export default function BentoGrid() {
  return (
    <section id="modules" className="bg-black py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-12">Core Modules // v1.0</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-auto">
          {MODULE_DATA.map((module) => (
            <div key={module.id} className="col-span-1 row-span-1">
              <ModuleCard
                id={module.id}
                title={module.title}
                description={module.description}
                logs={module.logs}
              />
            </div>
          ))}
          <div className="md:col-span-2 md:row-span-2 col-span-1">
            <div className="h-full w-full rounded-2xl overflow-hidden">
              <TerminalLog />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}