"use client";

import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-[#050505] py-16 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em] mb-2">{t.footer.builtBy}</p>
          <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-widest mt-1">
            NYC&nbsp;·&nbsp;America/New_York&nbsp;&nbsp;//&nbsp;&nbsp;FRA&nbsp;·&nbsp;Europe/Berlin
          </p>
          <p className="text-[9px] font-mono text-zinc-800 uppercase">{t.footer.copyright}</p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/g-daniel-schillinger-97a7423b4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-zinc-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            {t.footer.linkedin}
          </a>
          <a
            href="https://github.com/gdanielschillinger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-zinc-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            {t.footer.github}
          </a>
          <a
            href="mailto:gdaniel.schillinger@gmail.com"
            className="text-[10px] font-mono text-zinc-500 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            gdaniel.schillinger@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
