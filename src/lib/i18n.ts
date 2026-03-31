export type Lang = "en" | "de";

export const translations = {
  en: {
    // ── NAVBAR ──────────────────────────────────────────────────────────
    nav: {
      architecture: "Architecture",
      modules:      "Modules",
      threats:      "Threats",
      docs:         "Docs",
      demo:         "Demo",
      roadmap:      "Roadmap",
      hireMe:       "Hire Me",
      version:      "v1.0.4",
    },

    // ── HERO ────────────────────────────────────────────────────────────
    hero: {
      statusBadge:    "System Status: Operational // Node-Alpha-01",
      protocolBadge:  "Protocol: AGI-Sync-Secure",
      emergeBadge:    "eMerge Americas",
      emergeLocation: "Apr 23 · Miami",
      credentials:    "AGI Cybersecurity Architect  //  BS Cybersecurity, Champlain College (Oct 2023 – Present · 4.0 GPA)  //  Visa Inc. GenAI Ambassador+",
      title1:         "The",
      title2:         "Sentient Sync",
      title3:         "Engine",
      subtitle:       "Bridging autonomous AGI architecture with zero-trust cryptographic protocols. Custom-engineered for secure machine intelligence.",
      ctaDocs:        "View Documentation",
      ctaGithub:      "GitHub Repository",
      scroll:         "Scroll",
      identityLabel:  "G. Daniel Schillinger // AGI Cybersecurity Architect",
      identityP1:     "I built Visa's first in-house LLM from scratch — trained on production-grade, compliance-controlled sensitive data, deployed at enterprise scale. Case summarization accuracy went from 37% to over 90% in under 30 days. That system delivered OFAC compliance automations across one of the world's largest payment networks.",
      identityP2:     "Over 3.5 years at Visa Inc., I was hand-selected as GenAI Ambassador+ and recognized with the 2024 Client Care Excellence Award. As a certified SME, I led full-cycle re-training, bias audits, and enterprise-wide rollout — not just the architecture, but the humans adopting it.",
      identityP3:     "Now completing a BS Cybersecurity at Champlain College (Oct 2023 – Present · 4.0 GPA) and architecting the Sentient Sync Engine — a production-grade AGI collusion detection framework aligned to OWASP LLM Top 10, NIST CSF, and IEEE standards. Featured at eMerge Americas, April 23, 2026.",
      coreFocusLabel: "Core Focus",
      focus: [
        "Security Automation",
        "AGI Orchestration",
        "Zero-Trust Systems",
        "NIST / OWASP",
      ],
    },

    // ── ARCHITECTURE ────────────────────────────────────────────────────
    arch: {
      sectionLabel: "System Architecture // Flow-v1",
      activeDev:    "V2 Scope // Q3 2026",
      layers: [
        { id: "LOG-01",  title: "Secure Ingestion Layer",   desc: "Deterministic log parsing and regex-based anomaly detection engine." },
        { id: "CORE-02", title: "Agent Orchestration",      desc: "LangGraph logic gates utilizing collusion detection for secure task delegation." },
        { id: "AUDIT-03",title: "Cryptographic Signing",    desc: "Implementation of auditor.py for immutable action-trail validation." },
        { id: "GOV-04",  title: "NIST-Aligned Governance",  desc: "Persistence layer ensuring traceability and zero-trust protocol enforcement." },
      ],
    },

    // ── BENTO / MODULES ─────────────────────────────────────────────────
    modules: {
      sectionLabel: "Core Modules // v1.0",
      items: [
        { id: "01", title: "Sentient Sync Core",  description: "Autonomous AGI architecture for deterministic orchestration." },
        { id: "02", title: "Security Auditor",    description: "v1 Active — single-model collusion detection, HMAC-SHA256 signed. v2 (Q3 2026) — multi-model LLM pipeline expansion." },
        { id: "03", title: "CryptoGuard AI",      description: "Forensic monitoring for smart contract integrity." },
        { id: "04", title: "NIST Compliance",     description: "Zero-trust logic gates and incident response alignment." },
        { id: "05", title: "Audit Persistence",   description: "SQLite-backed storage for AGI transparency." },
      ],
    },

    // ── VIDEO ───────────────────────────────────────────────────────────
    video: {
      sectionLabel:  "System Demo // v1.0",
      description:   "Live architecture walkthrough — agent collusion detection, HMAC signing, and real-time threat response.",
      terminalLabel: "sentient-sync-engine // demo.v1",
      caption:       "Sentient Sync Engine  ·  Architecture Demo  ·  eMerge Americas 2026",
      playLabel:     "Play demo video",
    },

    // ── ROADMAP ─────────────────────────────────────────────────────────
    roadmap: {
      sectionLabel: "Strategic Roadmap",
      complete:     "✓ Complete",
      active:       "▶ Active",
      phases: [
        { date: "FEB 2026", task: "Development: Sentient Sync Core",  detail: "auditor.py cryptographic signing and HMAC-SHA256 interaction logging — complete." },
        { date: "MAR 2026", task: "Academic Finalization",             detail: "BS Cybersecurity, Champlain College (Oct 2023 – Present) — 4.0 GPA. CMIT-235 Advanced Python and MGMT-260 Project Management — active through April 22, 2026." },
        { date: "APR 2026", task: "eMerge Americas Launch",            detail: "Live portfolio deployment featured at eMerge Americas, Miami — April 23, 2026." },
        { date: "Q2 2026",  task: "AI Security Engineer Role",         detail: "Targeting AI Security Engineer, AGI Security Architect, and AI-adjacent Cybersecurity roles at enterprise and high-growth AI firms." },
        { date: "Q3 2026",  task: "Collusion Detection v2",            detail: "Expand agent collusion detection to multi-model LLM pipelines. Integrate LLM04 (Model DoS) and LLM08 (Excessive Agency) mitigations into auditor.py." },
        { date: "Q4 2026",  task: "Open-Source Release",               detail: "Public release of the Sentient Sync Engine framework under an open-source license. Documentation, contribution guidelines, and security disclosure policy." },
        { date: "2027",     task: "AGI Security Research",             detail: "Publish peer-reviewed research on multi-agent collusion vectors and real-time detection architectures. Target IEEE S&P and USENIX Security." },
      ],
    },

    // ── CONTACT ─────────────────────────────────────────────────────────
    contact: {
      sectionLabel:   "Contact // Hire Me",
      headline1:      "Actively targeting",
      headline2:      "AI Security",
      headline3:      "roles.",
      roles:          "AI Security Engineer  ·  AGI Security Architect  ·  AI-Adjacent Cybersecurity",
      availability:   "Available immediately. Based in Miami / Fort Lauderdale. Open to remote and hybrid.",
      openBadge:      "Open to Opportunities",
      linkedin:       "LinkedIn",
      linkedinSub:    "g-daniel-schillinger",
      email:          "Email",
      emailSub:       "gdaniel.schillinger@gmail.com",
      resume:         "Download Resume",
      resumeSub:      "GDanielSchillinger_Resume.pdf · One click",
      github:         "GitHub",
      githubSub:      "gdanielschillinger",
    },

    // ── FOOTER ──────────────────────────────────────────────────────────
    footer: {
      builtBy:    "Built by Daniel Schillinger // Miami, FL",
      copyright:  "© 2026 Sentient Sync // Secured Terminal",
      linkedin:   "LinkedIn",
      github:     "GitHub",
    },
  },

  // ════════════════════════════════════════════════════════════════════════
  // GERMAN
  // ════════════════════════════════════════════════════════════════════════
  de: {
    // ── NAVBAR ──────────────────────────────────────────────────────────
    nav: {
      architecture: "Architektur",
      modules:      "Module",
      threats:      "Bedrohungen",
      docs:         "Dokumentation",
      demo:         "Demo",
      roadmap:      "Roadmap",
      hireMe:       "Kontakt",
      version:      "v1.0.4",
    },

    // ── HERO ────────────────────────────────────────────────────────────
    hero: {
      statusBadge:    "Systemstatus: Operativ // Node-Alpha-01",
      protocolBadge:  "Protokoll: AGI-Sync-Secure",
      emergeBadge:    "eMerge Americas",
      emergeLocation: "23. Apr · Miami",
      credentials:    "AGI-Cybersicherheitsarchitekt  //  B.Sc. Cybersicherheit, Champlain College (Okt. 2023 – aktuell · 4,0 GPA)  //  Visa Inc. GenAI-Botschafter+",
      title1:         "Die",
      title2:         "Sentient Sync",
      title3:         "Engine",
      subtitle:       "Verknüpfung autonomer AGI-Architektur mit Zero-Trust-Kryptografieprotokollen. Maßgefertigt für sichere maschinelle Intelligenz.",
      ctaDocs:        "Dokumentation ansehen",
      ctaGithub:      "GitHub-Repository",
      scroll:         "Scrollen",
      identityLabel:  "G. Daniel Schillinger // AGI-Cybersicherheitsarchitekt",
      identityP1:     "Ich habe Visas erstes internes LLM von Grund auf entwickelt — trainiert auf produktionsreifen, compliance-kontrollierten sensiblen Daten, im Unternehmensmaßstab eingesetzt. Die Genauigkeit der Fallzusammenfassung stieg in unter 30 Tagen von 37 % auf über 90 %. Dieses System lieferte OFAC-Compliance-Automatisierungen für eines der größten Zahlungsnetzwerke der Welt.",
      identityP2:     "In 3,5 Jahren bei Visa Inc. wurde ich als GenAI-Botschafter+ ausgewählt und mit dem 2024 Client Care Excellence Award ausgezeichnet — nicht nur für den Aufbau des Systems, sondern für die Führung der Menschen, die es einsetzen. Als zertifizierter Fachexperte (SME) leitete ich vollständige Nachschulungszyklen, Bias-Audits und den unternehmensweiten Rollout.",
      identityP3:     "Aktuell schließe ich einen B.Sc. in Cybersicherheit am Champlain College ab (Okt. 2023 – aktuell · 4,0 GPA) und entwickle die Sentient Sync Engine — ein produktionsreifes Framework zur AGI-Kollisionserkennung, das auf OWASP LLM Top 10, NIST CSF und IEEE-Standards ausgerichtet ist. Präsentation auf der eMerge Americas, 23. April 2026.",
      coreFocusLabel: "Schwerpunkte",
      focus: [
        "Sicherheitsautomatisierung",
        "AGI-Orchestrierung",
        "Zero-Trust-Systeme",
        "NIST / OWASP",
      ],
    },

    // ── ARCHITECTURE ────────────────────────────────────────────────────
    arch: {
      sectionLabel: "Systemarchitektur // Flow-v1",
      activeDev:    "V2-Scope // Q3 2026",
      layers: [
        { id: "LOG-01",  title: "Sichere Eingabeschicht",       desc: "Deterministisches Log-Parsing und Regex-basierte Anomalieerkennung." },
        { id: "CORE-02", title: "Agentenorchestrierung",         desc: "LangGraph-Logikgatter mit Kollisionserkennung für sichere Aufgabenverteilung." },
        { id: "AUDIT-03",title: "Kryptografische Signierung",   desc: "Implementierung von auditor.py für unveränderliche Aktions-Trail-Validierung." },
        { id: "GOV-04",  title: "NIST-konforme Governance",     desc: "Persistenzschicht zur Nachvollziehbarkeit und Zero-Trust-Protokollerzwingung." },
      ],
    },

    // ── BENTO / MODULES ─────────────────────────────────────────────────
    modules: {
      sectionLabel: "Kernmodule // v1.0",
      items: [
        { id: "01", title: "Sentient Sync Core",   description: "Autonome AGI-Architektur für deterministische Orchestrierung." },
        { id: "02", title: "Sicherheits-Auditor",  description: "v1 Aktiv — Einzel-Modell-Kollisionserkennung, HMAC-SHA256-signiert. v2 (Q3 2026) — Erweiterung auf Multi-Modell-LLM-Pipelines." },
        { id: "03", title: "CryptoGuard AI",        description: "Forensische Überwachung der Smart-Contract-Integrität." },
        { id: "04", title: "NIST-Konformität",      description: "Zero-Trust-Logikgatter und Ausrichtung an der Incident-Response." },
        { id: "05", title: "Audit-Persistenz",      description: "SQLite-gestützte Speicherung für AGI-Transparenz." },
      ],
    },

    // ── VIDEO ───────────────────────────────────────────────────────────
    video: {
      sectionLabel:  "System-Demo // v1.0",
      description:   "Live-Architektur-Walkthrough — Agenten-Kollisionserkennung, HMAC-Signierung und Echtzeit-Bedrohungsreaktion.",
      terminalLabel: "sentient-sync-engine // demo.v1",
      caption:       "Sentient Sync Engine  ·  Architektur-Demo  ·  eMerge Americas 2026",
      playLabel:     "Demo-Video abspielen",
    },

    // ── ROADMAP ─────────────────────────────────────────────────────────
    roadmap: {
      sectionLabel: "Strategische Roadmap",
      complete:     "✓ Abgeschlossen",
      active:       "▶ Aktiv",
      phases: [
        { date: "Feb. 2026", task: "Entwicklung: Sentient Sync Core",        detail: "auditor.py mit kryptografischer Signierung und HMAC-SHA256-Interaktionsprotokollierung — abgeschlossen." },
        { date: "Mär. 2026", task: "Akademischer Abschluss",                  detail: "B.Sc. Cybersicherheit, Champlain College (Okt. 2023 – aktuell) — 4,0 GPA. CMIT-235 Advanced Python und MGMT-260 Projektmanagement — aktiv bis 22. April 2026." },
        { date: "Apr. 2026", task: "eMerge Americas Launch",                   detail: "Live-Portfolio-Präsentation auf der eMerge Americas, Miami — 23. April 2026." },
        { date: "Q2 2026",   task: "KI-Sicherheitsstelle",                     detail: "Zielanstellungen: AI Security Engineer, AGI Security Architect und KI-nahe Cybersicherheitspositionen bei Unternehmen und wachstumsstarken KI-Firmen." },
        { date: "Q3 2026",   task: "Kollisionserkennung v2",                   detail: "Erweiterung der Agenten-Kollisionserkennung auf Multi-Modell-LLM-Pipelines. Integration von LLM04 (Model DoS) und LLM08 (Excessive Agency) in auditor.py." },
        { date: "Q4 2026",   task: "Open-Source-Veröffentlichung",             detail: "Öffentliche Veröffentlichung des Sentient Sync Engine Frameworks unter einer Open-Source-Lizenz. Dokumentation, Beitragsrichtlinien und Sicherheitsrichtlinie." },
        { date: "2027",      task: "AGI-Sicherheitsforschung",                 detail: "Veröffentlichung peer-reviewter Forschung zu Multi-Agenten-Kollisionsvektoren und Echtzeit-Erkennungsarchitekturen. Zielkonferenzen: IEEE S&P und USENIX Security." },
      ],
    },

    // ── CONTACT ─────────────────────────────────────────────────────────
    contact: {
      sectionLabel:   "Kontakt // Einstellen",
      headline1:      "Aktiv auf der Suche nach",
      headline2:      "KI-Sicherheit",
      headline3:      "Stellen.",
      roles:          "KI-Sicherheitsingenieur  ·  AGI-Sicherheitsarchitekt  ·  KI-nahe Cybersicherheit",
      availability:   "Sofort verfügbar. Standort: Miami / Fort Lauderdale. Offen für Remote und Hybrid. Arbeitsberechtigung: USA & EU.",
      openBadge:      "Offen für Angebote",
      linkedin:       "LinkedIn",
      linkedinSub:    "g-daniel-schillinger",
      email:          "E-Mail",
      emailSub:       "gdaniel.schillinger@gmail.com",
      resume:         "Lebenslauf herunterladen",
      resumeSub:      "GDanielSchillinger_Resume.pdf · Ein Klick",
      github:         "GitHub",
      githubSub:      "gdanielschillinger",
    },

    // ── FOOTER ──────────────────────────────────────────────────────────
    footer: {
      builtBy:    "Entwickelt von Daniel Schillinger // Miami, FL",
      copyright:  "© 2026 Sentient Sync // Gesichertes Terminal",
      linkedin:   "LinkedIn",
      github:     "GitHub",
    },
  },
} as const;

export type Translations = typeof translations.en;
