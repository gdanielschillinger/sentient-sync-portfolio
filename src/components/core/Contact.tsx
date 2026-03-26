"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050505] py-32 px-6 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section label */}
          <div className="mb-12">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-cyan-500 mb-2">
              Contact // Hire Me
            </h2>
            <div className="h-[1px] w-24 bg-cyan-500/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left — positioning statement */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-6">
                Actively targeting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  AI Security
                </span>{" "}
                roles.
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                AI Security Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AGI Security Architect&nbsp;&nbsp;·&nbsp;&nbsp;AI-Adjacent Cybersecurity
              </p>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Available immediately. Based in Miami / Fort Lauderdale. Open to remote and hybrid.
              </p>

              {/* Status indicator */}
              <div className="flex items-center gap-2 mt-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[10px] font-mono text-green-500/80 uppercase tracking-[0.3em]">
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Right — contact links */}
            <div className="flex flex-col gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/g-daniel-schillinger-97a7423b4"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 border border-zinc-800 hover:border-cyan-500/40 hover:bg-cyan-500/[0.03] transition-all rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-zinc-700 group-hover:border-cyan-500/40 rounded-sm transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors uppercase tracking-widest">LinkedIn</p>
                    <p className="text-[10px] font-mono text-zinc-600">g-daniel-schillinger</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zinc-700 group-hover:text-cyan-500 transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:gdaniel.schillinger@gmail.com"
                className="group flex items-center justify-between p-5 border border-zinc-800 hover:border-cyan-500/40 hover:bg-cyan-500/[0.03] transition-all rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-zinc-700 group-hover:border-cyan-500/40 rounded-sm transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors uppercase tracking-widest">Email</p>
                    <p className="text-[10px] font-mono text-zinc-600">gdaniel.schillinger@gmail.com</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zinc-700 group-hover:text-cyan-500 transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Resume Download */}
              <a
                href="https://github.com/gdanielschillinger/sentient-sync-portfolio#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 border border-cyan-500/20 bg-cyan-500/[0.03] hover:border-cyan-500/50 hover:bg-cyan-500/[0.07] transition-all rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 rounded-sm transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-cyan-500 group-hover:text-cyan-300 transition-colors">
                      <path d="M12 16l-4-4h3V4h2v8h3l-4 4zM4 20h16v2H4v-2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors uppercase tracking-widest">Resume / Portfolio Docs</p>
                    <p className="text-[10px] font-mono text-zinc-600">Technical documentation + project writeup</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-cyan-700 group-hover:text-cyan-400 transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/gdanielschillinger"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 border border-zinc-800 hover:border-cyan-500/40 hover:bg-cyan-500/[0.03] transition-all rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-zinc-700 group-hover:border-cyan-500/40 rounded-sm transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors uppercase tracking-widest">GitHub</p>
                    <p className="text-[10px] font-mono text-zinc-600">gdanielschillinger</p>
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-zinc-700 group-hover:text-cyan-500 transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
