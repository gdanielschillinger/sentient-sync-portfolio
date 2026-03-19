"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ThreatEntry {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  knownRansomwareCampaignUse: string;
  cwes: string[];
  owaspCategory: string;
  dueDate: string;
}

interface ThreatData {
  totalVulnerabilities: number;
  catalogVersion: string;
  dateReleased: string;
  recent: ThreatEntry[];
  categoryCounts: Record<string, number>;
}

const OWASP_COLORS: Record<string, string> = {
  "A01:2021 - Broken Access Control": "text-red-400 border-red-900/50 bg-red-950/20",
  "A02:2021 - Cryptographic Failures": "text-orange-400 border-orange-900/50 bg-orange-950/20",
  "A03:2021 - Injection": "text-yellow-400 border-yellow-900/50 bg-yellow-950/20",
  "A04:2021 - Insecure Design": "text-purple-400 border-purple-900/50 bg-purple-950/20",
  "A05:2021 - Security Misconfiguration": "text-blue-400 border-blue-900/50 bg-blue-950/20",
  "A06:2021 - Vulnerable & Outdated Components": "text-cyan-400 border-cyan-900/50 bg-cyan-950/20",
  "A07:2021 - Auth Failures": "text-pink-400 border-pink-900/50 bg-pink-950/20",
  "A08:2021 - Data Integrity Failures": "text-emerald-400 border-emerald-900/50 bg-emerald-950/20",
  "A09:2021 - Logging Failures": "text-zinc-400 border-zinc-700/50 bg-zinc-900/20",
  "A10:2021 - SSRF": "text-indigo-400 border-indigo-900/50 bg-indigo-950/20",
  "Unclassified": "text-zinc-500 border-zinc-800/50 bg-zinc-900/10",
};

function owaspColor(cat: string): string {
  return OWASP_COLORS[cat] ?? "text-zinc-500 border-zinc-800/50 bg-zinc-900/10";
}

function RansomwareBadge({ value }: { value: string }) {
  const isKnown = value === "Known";
  return (
    <span className={`text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-sm border ${
      isKnown
        ? "border-red-800 bg-red-950/40 text-red-400"
        : "border-zinc-800 bg-zinc-900/30 text-zinc-600"
    }`}>
      {isKnown ? "Ransomware" : "No Ransomware"}
    </span>
  );
}

function SkeletonRow() {
  return (
    <div className="animate-pulse flex items-start gap-4 py-4 border-b border-zinc-900">
      <div className="h-3 w-24 bg-zinc-800 rounded" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-3/4 bg-zinc-800 rounded" />
        <div className="h-2 w-1/2 bg-zinc-900 rounded" />
      </div>
    </div>
  );
}

export default function ThreatFeed() {
  const [data, setData] = useState<ThreatData | null>(null);
  const [error, setError] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  useEffect(() => {
    fetch("/api/threats")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setError(true));
  }, []);

  const topCategories = data
    ? Object.entries(data.categoryCounts)
        .filter(([k]) => k !== "Unclassified")
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
    : [];

  const filtered =
    activeFilter === "ALL"
      ? data?.recent ?? []
      : (data?.recent ?? []).filter((t) => t.owaspCategory === activeFilter);

  const uniqueCategories = data
    ? Array.from(new Set(data.recent.map((t) => t.owaspCategory)))
    : [];

  return (
    <section id="threats" className="bg-[#050505] py-32 px-6 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500 mb-3">
              Live Threat Intelligence // CISA KEV
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg leading-relaxed">
              Real-time feed from the{" "}
              <a
                href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:underline"
              >
                CISA Known Exploited Vulnerabilities Catalog
              </a>
              , mapped to OWASP Top 10 2021 categories.
            </p>
          </div>
          {data && (
            <div className="flex flex-col items-end gap-1">
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                Catalog v{data.catalogVersion}
              </span>
              <span className="text-[9px] font-mono text-zinc-700">
                {data.totalVulnerabilities.toLocaleString()} total CVEs tracked
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
                </span>
                <span className="text-[8px] font-mono text-cyan-600 uppercase tracking-widest">
                  Feed Active
                </span>
              </div>
            </div>
          )}
        </div>

        {/* OWASP Category Bar Chart */}
        {topCategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 p-5 border border-zinc-900 bg-zinc-950 rounded-2xl"
          >
            <h3 className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-5">
              Top OWASP Categories in KEV Catalog
            </h3>
            <div className="space-y-3">
              {topCategories.map(([cat, count]) => {
                const max = topCategories[0][1];
                const pct = Math.round((count / max) * 100);
                const colorClass = owaspColor(cat).split(" ")[0];
                return (
                  <div key={cat} className="flex items-center gap-3">
                    <span className={`text-[9px] font-mono w-52 shrink-0 truncate ${colorClass}`}>
                      {cat}
                    </span>
                    <div className="flex-1 h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`h-full rounded-full ${colorClass.replace("text-", "bg-")}`}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-600 w-8 text-right">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Filter Pills */}
        {uniqueCategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveFilter("ALL")}
              className={`text-[9px] font-mono uppercase tracking-widest px-3 py-1 rounded-sm border transition-all ${
                activeFilter === "ALL"
                  ? "border-cyan-500/50 bg-cyan-950/30 text-cyan-400"
                  : "border-zinc-800 text-zinc-600 hover:border-zinc-600"
              }`}
            >
              All
            </button>
            {uniqueCategories.map((cat) => {
              const [textColor] = owaspColor(cat).split(" ");
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat === activeFilter ? "ALL" : cat)}
                  className={`text-[9px] font-mono uppercase tracking-tighter px-3 py-1 rounded-sm border transition-all ${
                    activeFilter === cat
                      ? owaspColor(cat)
                      : "border-zinc-800 text-zinc-600 hover:border-zinc-600"
                  }`}
                >
                  {cat.split(" - ")[0]}
                </button>
              );
            })}
          </div>
        )}

        {/* CVE List */}
        <div className="border border-zinc-900 rounded-2xl overflow-hidden bg-zinc-950">
          <div className="grid grid-cols-12 gap-2 px-5 py-3 border-b border-zinc-900 bg-black">
            <span className="col-span-2 text-[8px] font-mono uppercase tracking-widest text-zinc-700">CVE ID</span>
            <span className="col-span-3 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Vendor / Product</span>
            <span className="col-span-3 text-[8px] font-mono uppercase tracking-widest text-zinc-700">OWASP Category</span>
            <span className="col-span-2 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Added</span>
            <span className="col-span-2 text-[8px] font-mono uppercase tracking-widest text-zinc-700">Risk</span>
          </div>

          {error && (
            <div className="px-5 py-8 text-center text-[11px] font-mono text-red-500">
              FEED_ERROR: Unable to reach CISA KEV endpoint.
            </div>
          )}

          {!data && !error && (
            <div className="px-5 divide-y divide-zinc-900">
              {Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)}
            </div>
          )}

          {data && filtered.map((threat, idx) => {
            const isOpen = expanded === threat.cveID;
            const colorClasses = owaspColor(threat.owaspCategory);
            const [textColor] = colorClasses.split(" ");

            return (
              <motion.div
                key={threat.cveID}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : threat.cveID)}
                  className="w-full text-left grid grid-cols-12 gap-2 px-5 py-4 border-b border-zinc-900 hover:bg-zinc-900/40 transition-colors group"
                >
                  <span className="col-span-2 text-[10px] font-mono text-cyan-500 group-hover:text-cyan-400 transition-colors">
                    {threat.cveID}
                  </span>
                  <div className="col-span-3">
                    <span className="block text-[10px] font-mono text-zinc-300">{threat.vendorProject}</span>
                    <span className="block text-[9px] font-mono text-zinc-600">{threat.product}</span>
                  </div>
                  <div className="col-span-3">
                    <span className={`text-[9px] font-mono ${textColor}`}>
                      {threat.owaspCategory}
                    </span>
                  </div>
                  <span className="col-span-2 text-[10px] font-mono text-zinc-500">
                    {threat.dateAdded}
                  </span>
                  <div className="col-span-2 flex items-center">
                    <RansomwareBadge value={threat.knownRansomwareCampaignUse} />
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-black/60 px-5 py-5 border-b border-zinc-900"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <p className="text-[11px] font-mono text-zinc-400 leading-relaxed mb-3">
                          {threat.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {threat.cwes.map((cwe) => (
                            <span
                              key={cwe}
                              className="text-[8px] font-mono uppercase tracking-widest px-2 py-0.5 border border-zinc-800 text-zinc-500 rounded-sm"
                            >
                              {cwe}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-700 block mb-1">
                            Remediation Due
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400">{threat.dueDate}</span>
                        </div>
                        <div>
                          <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-700 block mb-1">
                            OWASP Mapping
                          </span>
                          <span className={`text-[10px] font-mono ${textColor}`}>
                            {threat.owaspCategory}
                          </span>
                        </div>
                        <a
                          href={`https://nvd.nist.gov/vuln/detail/${threat.cveID}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[9px] font-mono uppercase tracking-widest text-cyan-600 hover:text-cyan-400 border border-cyan-900/50 hover:border-cyan-500/50 px-3 py-1.5 rounded-sm transition-all mt-2"
                        >
                          NVD Details →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <p className="mt-4 text-[9px] font-mono text-zinc-700 text-right">
          Source: CISA Known Exploited Vulnerabilities Catalog · OWASP Top 10 2021 · Refreshed hourly
        </p>
      </div>
    </section>
  );
}
