"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TABS = ["Stack", "Components", "API", "Security", "Standards"] as const;
type Tab = typeof TABS[number];

const STACK = [
  { layer: "Framework",     tech: "Next.js",         version: "16.1.6",   purpose: "Full-stack React framework with App Router & serverless API routes" },
  { layer: "Language",      tech: "TypeScript",      version: "5.x",      purpose: "Type-safe component and API development" },
  { layer: "Styling",       tech: "Tailwind CSS",    version: "4.x",      purpose: "Utility-first CSS — zero custom stylesheets" },
  { layer: "Animation",     tech: "Framer Motion",   version: "12.x",     purpose: "Viewport-triggered transitions and micro-interactions" },
  { layer: "AI SDK",        tech: "Gemini 2.5 Pro",  version: "0.21",     purpose: "AI-powered code remediation via AutoFixer" },
  { layer: "Email",         tech: "Resend",          version: "4.x",      purpose: "Transactional email for clearance OTP system" },
  { layer: "Build",         tech: "Turbopack",       version: "—",        purpose: "Next.js 16 default bundler — faster incremental builds" },
  { layer: "Deployment",    tech: "Vercel",          version: "—",        purpose: "CI/CD via GitHub main branch push → auto-deploy" },
  { layer: "Source Control","tech": "GitHub",        version: "—",        purpose: "Version control and deployment trigger" },
];

const COMPONENTS = [
  { id: "01", name: "Navbar",        type: "Client",  desc: "Fixed navigation with live dual-timezone clock (NYC / FRA), updated every second." },
  { id: "02", name: "Hero",          type: "Client",  desc: "Full-viewport landing section. Framer Motion entry animations. Identity grid with Core Focus list." },
  { id: "03", name: "Architecture",  type: "Client",  desc: "4-layer system visualization. Animated on scroll. Highlights AUDIT-03 as active development." },
  { id: "04", name: "BentoGrid",     type: "Client",  desc: "3×2 CSS grid of 5 module cards + live terminal spanning rows. Each card cycles logs every 3s." },
  { id: "05", name: "ThreatFeed",    type: "Client",  desc: "Live CISA KEV data mapped to OWASP Top 10 2021. Bar chart, filter pills, expandable CVE rows." },
  { id: "06", name: "Roadmap",       type: "Server",  desc: "3-column strategic timeline with cyan dot markers. Phases: FEB → MAR → APR 2026." },
  { id: "07", name: "Terminal",      type: "Client",  desc: "Simulated security log stream with NYC timestamps. Cycling HMAC / collusion / integrity messages." },
  { id: "08", name: "ModuleCard",    type: "Client",  desc: "Reusable card with animated log cycling and alert state. Red badge triggers on FAIL / ALERT." },
  { id: "09", name: "Footer",        type: "Server",  desc: "LinkedIn, GitHub, email links. Miami, FL location. NYC // FRA timezone display." },
];

const API_ROWS = [
  { field: "Endpoint",       value: "GET /api/threats" },
  { field: "Data Source",    value: "CISA Known Exploited Vulnerabilities Catalog (live JSON)" },
  { field: "Cache",          value: "Server-side revalidation — 1 hour (Next.js ISR)" },
  { field: "Returns",        value: "Top 10 most recently added CVEs + OWASP category counts" },
  { field: "OWASP Mapping",  value: "CWE → OWASP Top 10 2021 via full lookup table (290+ CWE entries)" },
  { field: "CVE Fields",     value: "cveID, vendor, product, description, dateAdded, CWEs, owaspCategory, dueDate, ransomware flag" },
  { field: "Error: 502",     value: "CISA upstream unreachable" },
  { field: "Error: 500",     value: "Internal server error" },
];

const SECURITY = [
  { module: "Agent Collusion Detection", status: "In Development", desc: "auditor.py detects semantic overlap between AGI agent interactions using similarity scoring and HMAC-SHA256 signing." },
  { module: "Cryptographic Signing",     status: "Active",         desc: "Interaction hashes signed via HMAC-SHA256. Immutable action trail stored in AES-256 encrypted SQLite vault." },
  { module: "Zero-Trust Gate",           status: "Active",         desc: "No implicit trust between components. Each agent action is validated before delegation." },
  { module: "ClearanceTerminal",         status: "Experimental",   desc: "Email OTP identity verification via Resend SDK. Server-side verification migration pending." },
  { module: "AutoFixer",                 status: "Experimental",   desc: "Flagged code sent to Gemini 2.5 Pro for AI-powered remediation suggestions on audit alert." },
  { module: "ThreatFeed",                status: "Live",           desc: "Real-time CVE intelligence from CISA KEV mapped to OWASP categories. No mock data — all production." },
];

const STANDARDS = [
  { standard: "OWASP Top 10",     version: "2021",       application: "ThreatFeed CWE→OWASP mapping engine, architecture design principles" },
  { standard: "NIST CSF",         version: "1.1",        application: "Governance layer design, zero-trust protocol reference" },
  { standard: "NIST SP 800-53",   version: "Rev. 5",     application: "Module 04 compliance layer, control AC-2 reference" },
  { standard: "NIST SP 800-61",   version: "Rev. 2",     application: "Incident response methodology and forensic protocol reference" },
  { standard: "CISA KEV Catalog", version: "Live",       application: "ThreatFeed primary data source — real-time CVE tracking" },
  { standard: "IEEE",             version: "General",    application: "Coding and architecture alignment standards" },
  { standard: "PEP 8",            version: "—",          application: "Python code style compliance for auditor.py" },
];

const STATUS_STYLE: Record<string, string> = {
  "Active":         "border-emerald-900 bg-emerald-950/30 text-emerald-400",
  "Live":           "border-cyan-900 bg-cyan-950/30 text-cyan-400",
  "In Development": "border-yellow-900 bg-yellow-950/30 text-yellow-400",
  "Experimental":   "border-zinc-700 bg-zinc-900/30 text-zinc-400",
};

const TYPE_STYLE: Record<string, string> = {
  "Client": "border-cyan-900/50 text-cyan-600",
  "Server": "border-zinc-700 text-zinc-500",
};

export default function SystemDocs() {
  const [active, setActive] = useState<Tab>("Stack");

  return (
    <section id="docs" className="bg-black py-32 px-6 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 mb-3">
            System Documentation // v1.0.4
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            Simplified technical breakdown of the Sentient Sync Engine — stack, components, API, security modules, and compliance standards.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex gap-1 mb-8 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-[9px] font-mono uppercase tracking-[0.3em] px-4 py-2 border transition-all rounded-sm ${
                active === tab
                  ? "border-cyan-500/50 bg-cyan-950/30 text-cyan-400"
                  : "border-zinc-800 text-zinc-600 hover:border-zinc-600 hover:text-zinc-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* STACK TAB */}
        {active === "Stack" && (
          <motion.div
            key="stack"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border border-zinc-900 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-12 px-5 py-3 bg-black border-b border-zinc-900">
              <span className="col-span-2 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Layer</span>
              <span className="col-span-2 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Technology</span>
              <span className="col-span-1 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Version</span>
              <span className="col-span-7 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Purpose</span>
            </div>
            {STACK.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-12 px-5 py-4 border-b border-zinc-900 last:border-0 hover:bg-zinc-900/30 transition-colors"
              >
                <span className="col-span-2 text-[10px] font-mono text-zinc-600">{row.layer}</span>
                <span className="col-span-2 text-[10px] font-mono text-cyan-400">{row.tech}</span>
                <span className="col-span-1 text-[10px] font-mono text-zinc-600">{row.version}</span>
                <span className="col-span-7 text-[10px] font-mono text-zinc-400 leading-relaxed">{row.purpose}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* COMPONENTS TAB */}
        {active === "Components" && (
          <motion.div
            key="components"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border border-zinc-900 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-12 px-5 py-3 bg-black border-b border-zinc-900">
              <span className="col-span-1 text-[8px] font-mono uppercase tracking-widest text-zinc-700">ID</span>
              <span className="col-span-2 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Component</span>
              <span className="col-span-1 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Type</span>
              <span className="col-span-8 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Description</span>
            </div>
            {COMPONENTS.map((c, i) => (
              <div
                key={i}
                className="grid grid-cols-12 items-center px-5 py-4 border-b border-zinc-900 last:border-0 hover:bg-zinc-900/30 transition-colors"
              >
                <span className="col-span-1 text-[10px] font-mono text-zinc-700">[{c.id}]</span>
                <span className="col-span-2 text-[10px] font-mono text-white font-bold">{c.name}</span>
                <span className="col-span-1">
                  <span className={`text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 border rounded-sm ${TYPE_STYLE[c.type]}`}>
                    {c.type}
                  </span>
                </span>
                <span className="col-span-8 text-[10px] font-mono text-zinc-400 leading-relaxed">{c.desc}</span>
              </div>
            ))}
          </motion.div>
        )}

        {/* API TAB */}
        {active === "API" && (
          <motion.div
            key="api"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {/* Endpoint badge */}
            <div className="flex items-center gap-3 px-5 py-4 border border-cyan-500/20 bg-cyan-950/10 rounded-2xl">
              <span className="text-[9px] font-mono px-2 py-0.5 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 rounded-sm uppercase tracking-widest">GET</span>
              <span className="text-sm font-mono text-white">/api/threats</span>
              <span className="ml-auto text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Cache: 1hr · ISR</span>
            </div>

            {/* Field table */}
            <div className="border border-zinc-900 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-12 px-5 py-3 bg-black border-b border-zinc-900">
                <span className="col-span-3 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Field</span>
                <span className="col-span-9 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Value</span>
              </div>
              {API_ROWS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 px-5 py-4 border-b border-zinc-900 last:border-0 ${
                    row.field.startsWith("Error") ? "bg-red-950/10" : "hover:bg-zinc-900/30"
                  } transition-colors`}
                >
                  <span className={`col-span-3 text-[10px] font-mono ${row.field.startsWith("Error") ? "text-red-500" : "text-zinc-500"}`}>
                    {row.field}
                  </span>
                  <span className="col-span-9 text-[10px] font-mono text-zinc-300 leading-relaxed">{row.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SECURITY TAB */}
        {active === "Security" && (
          <motion.div
            key="security"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {SECURITY.map((s, i) => (
              <div
                key={i}
                className="p-5 border border-zinc-900 bg-zinc-950 rounded-2xl hover:border-zinc-700 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-widest leading-tight">
                    {s.module}
                  </span>
                  <span className={`shrink-0 text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 border rounded-full ${STATUS_STYLE[s.status]}`}>
                    {s.status}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* STANDARDS TAB */}
        {active === "Standards" && (
          <motion.div
            key="standards"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="border border-zinc-900 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-12 px-5 py-3 bg-black border-b border-zinc-900">
              <span className="col-span-3 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Standard</span>
              <span className="col-span-1 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Version</span>
              <span className="col-span-8 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Application in Project</span>
            </div>
            {STANDARDS.map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-12 items-center px-5 py-4 border-b border-zinc-900 last:border-0 hover:bg-zinc-900/30 transition-colors"
              >
                <span className="col-span-3 text-[10px] font-mono text-cyan-400">{s.standard}</span>
                <span className="col-span-1 text-[10px] font-mono text-zinc-600">{s.version}</span>
                <span className="col-span-8 text-[10px] font-mono text-zinc-400 leading-relaxed">{s.application}</span>
              </div>
            ))}
          </motion.div>
        )}

        <p className="mt-6 text-[9px] font-mono text-zinc-700 text-right">
          Sentient Sync Engine // v1.0.4 · gdanielschillinger.com · Full documentation available on request
        </p>
      </div>
    </section>
  );
}
