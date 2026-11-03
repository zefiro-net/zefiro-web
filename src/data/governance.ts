import type { Locale } from '@/i18n';

export interface GovernancePrincipio {
  numero: string;
  titolo: string;
  descrizione: string;
}

export interface GovernanceDocumento {
  titolo: string;
  descrizione: string;
  data: string;
  dimensione: string;
  fileUrl: string;
}

export interface GovernanceData {
  hero: {
    badge: string;
    titolo: string;
    titoloAccento: string;
    sottotitolo: string;
  };
  ancore: {
    codiceEtico: string;
    modello231: string;
    whistleblowing: string;
  };
  codiceEtico: {
    badge: string;
    titolo: string;
    delibera: string;
    descrizione: string;
    sottotitoloPrincipi: string;
    principi: GovernancePrincipio[];
    documento: GovernanceDocumento;
  };
  modello231: {
    badge: string;
    titolo: string;
    edizioni: string;
    descrizione: string;
    sottotitoloPilastri: string;
    pilastri: GovernancePrincipio[];
    odv: {
      titolo: string;
      descrizione: string;
      email: string;
      sede: string;
    };
    documento: GovernanceDocumento;
  };
  whistleblowing: {
    badge: string;
    titolo: string;
    normativa: string;
    descrizione: string;
    tutele: Array<{ titolo: string; descrizione: string }>;
    piattaforma: {
      titolo: string;
      fornitore: string;
      descrizione: string;
      caratteristiche: string[];
      link: string;
      ctaText: string;
    };
    canali: {
      titolo: string;
      descrizione: string;
      email: string;
      posta: string;
    };
    documenti: GovernanceDocumento[];
  };
}

const GOVERNANCE_DATA_IT: GovernanceData = {
  hero: {
    badge: 'Integrità, Etica & Conformità',
    titolo: 'Corporate ',
    titoloAccento: 'Governance',
    sottotitolo:
      'Il sistema di governo societario, le regole di condotta deontologica e i presidi di controllo interno che assicurano la massima trasparenza, legalità e responsabilità nella gestione dell\'infrastruttura condivisa di Zefiro Net.',
  },
  ancore: {
    codiceEtico: 'Codice Etico',
    modello231: 'Modello 231',
    whistleblowing: 'Whistleblowing',
  },
  codiceEtico: {
    badge: 'Carta dei Valori & Deontologia',
    titolo: 'Il Codice Etico',
    delibera: 'Approvato con delibera del Consiglio di Amministrazione in data 27 marzo 2023',
    descrizione:
      'Il Codice Etico esprime gli impegni e le responsabilità etico-sociali di Zefiro Net S.r.l. nella conduzione degli affari e delle attività aziendali. Si configura come una vera e propria "Carta dei diritti e dei doveri fondamentali", vincolante per gli organi sociali, il management, tutti i dipendenti, i collaboratori, i due soci industriali (WINDTRE e Iliad Italia), i fornitori e chiunque operi per conto della Società.',
    sottotitoloPrincipi: 'I Principi Fondamentali di Condotta Aziendale',
    principi: [
      {
        numero: '01',
        titolo: 'Integrità & Legalità del Business',
        descrizione:
          'Rispetto rigoroso delle normative nazionali, comunitarie e internazionali, della Dichiarazione Universale dei Diritti Umani, delle convenzioni OIL e dei principi del Global Compact ONU. In nessun caso l\'interesse della Società può giustificare condotte contrarie alla legge.',
      },
      {
        numero: '02',
        titolo: 'Lotta alla Corruzione & Conflitto di Interessi',
        descrizione:
          'Tolleranza zero per qualsiasi forma di corruzione o vantaggio indebito verso terzi o pubblici ufficiali. Prevenzione attiva dei conflitti di interesse personali o professionali per salvaguardare l\'imparzialità e l\'onorabilità aziendale.',
      },
      {
        numero: '03',
        titolo: 'Concorrenza Leale & Neutralità dai Soci',
        descrizione:
          'Zefiro Net opera in totale indipendenza rispetto ai due soci Iliad Italia e WINDTRE, che continuano a competere nel mercato retail. Massima tutela della concorrenza leale, rispetto della normativa antitrust e presidio rigoroso dei flussi informativi.',
      },
      {
        numero: '04',
        titolo: 'Trasparenza Contabile & Tutela del Capitale',
        descrizione:
          'Tenuta delle scritture contabili secondo verità, accuratezza e conformità normativa. Rigorosa salvaguardia del patrimonio sociale, integrità del capitale sociale (€ 20.000 i.v.) e garanzia di veridicità nelle comunicazioni sociali verso soci e creditori.',
      },
      {
        numero: '05',
        titolo: 'Valorizzazione delle Persone & Inclusione',
        descrizione:
          'Promozione della dignità individuale, delle pari opportunità e del merito. Rifiuto categorico di qualsiasi forma di discriminazione, molestia o sfruttamento del lavoro, garantendo contratti trasparenti, orari equi e tutela delle disabilità.',
      },
      {
        numero: '06',
        titolo: 'Salute, Sicurezza, Ambiente & Cyber-Security',
        descrizione:
          'Ambienti di lavoro sicuri e conformi alla norma ISO 45001, impegno continuo per la decarbonizzazione e la tutela ambientale (ISO 14001), ed uso etico e protetto dei sistemi informatici aziendali e dei dati personali (GDPR).',
      },
    ],
    documento: {
      titolo: 'Codice Etico Zefiro Net S.r.l.',
      descrizione:
        'Documento ufficiale che formalizza l\'insieme dei valori fondamentali e delle regole di condotta aziendale adottate dal Consiglio di Amministrazione.',
      data: '27 marzo 2023',
      dimensione: '284 KB',
      fileUrl: '/documents/governance/codice-etico.pdf',
    },
  },
  modello231: {
    badge: 'Sistema di Prevenzione & Controllo',
    titolo: 'Modello di Organizzazione e Gestione 231',
    edizioni:
      'Prima edizione: CdA 4.07.2023 • Seconda edizione: CdA 26.06.2024 • Terza edizione: CdA 9.04.2026',
    descrizione:
      'In ottemperanza al Decreto Legislativo 8 giugno 2001 n. 231, Zefiro Net ha adottato e mantiene costantemente aggiornato un Modello di Organizzazione, Gestione e Controllo (MOG 231) idoneo a prevenire la commissione dei reati presupposto. Il Modello definisce un sistema organico di presidi, protocolli decisionali, segregazione delle funzioni e controlli preventivi, elaborato in piena coerenza con le Linee Guida di Confindustria.',
    sottotitoloPilastri: 'I Pilastri del Sistema di Controllo Interno',
    pilastri: [
      {
        numero: '01',
        titolo: 'Mappatura delle Attività a Rischio & Protocolli',
        descrizione:
          'Identificazione analitica dei processi aziendali sensibili e definizione di specifici protocolli procedurali vincolanti per programmare e tracciare la formazione e l\'attuazione delle decisioni societarie.',
      },
      {
        numero: '02',
        titolo: 'Principi di Controllo & Segregazione delle Funzioni',
        descrizione:
          'Tracciabilità documentale e informatica degli atti, oggettivazione dei processi decisionali, rispetto rigoroso della separazione dei compiti e livelli autorizzativi supportati da un formale sistema di deleghe e procure.',
      },
      {
        numero: '03',
        titolo: 'Organismo di Vigilanza (OdV) Indipendente',
        descrizione:
          'Istituzione di un Organismo di Vigilanza monocratico dotato di autonomi poteri di iniziativa e controllo, con competenze professionali consulenziali e linea di reporting diretto e periodico verso il Consiglio di Amministrazione.',
      },
      {
        numero: '04',
        titolo: 'Sistema Disciplinare & Meccanismi Sanzionatori',
        descrizione:
          'Apparato sanzionatorio graduale e proporzionato per violazioni del Modello o delle tutele del segnalante: sanzioni giuslavoristiche per dipendenti/dirigenti e risoluzione contrattuale per giusta causa (artt. 1453/1456 c.c.) per fornitori e consulenti.',
      },
    ],
    odv: {
      titolo: 'Organismo di Vigilanza (OdV)',
      descrizione:
        'L\'Organismo di Vigilanza di Zefiro Net S.r.l. vigila sul funzionamento e sull\'osservanza del Modello 231 e cura le proposte di aggiornamento al Consiglio di Amministrazione.',
      email: 'odvzefironet@gmail.com',
      sede: 'All\'attenzione dell\'Organismo di Vigilanza di Zefiro Net S.r.l., Via Gattamelata, 34 — 20149 Milano (MI)',
    },
    documento: {
      titolo: 'Modello 231 — Parte Generale (Estratto)',
      descrizione:
        'Estratto della Parte Generale del Modello di Organizzazione, Gestione e Controllo ex D.Lgs. 231/2001 (Terza Edizione aggiornata al 9 aprile 2026), comprensivo del catalogo dei reati presupposto.',
      data: '9 aprile 2026',
      dimensione: '338 KB',
      fileUrl: '/documents/governance/modello-231-parte-generale.pdf',
    },
  },
  whistleblowing: {
    badge: 'Canali di Segnalazione Interna & Tutela del Segnalante',
    titolo: 'Whistleblowing & Piattaforma Integrity Line',
    normativa:
      'Attuazione del D.Lgs. 24/2023 (Direttiva UE 2019/1937) e Linee Guida ANAC',
    descrizione:
      'Zefiro Net promuove una cultura aziendale trasparente e responsabile, incoraggiando dipendenti, collaboratori, amministratori, fornitori, tirocinanti e partner a segnalare tempestivamente comportamenti illeciti, irregolarità o violazioni del Modello 231 e del Codice Etico. La Società garantisce la massima riservatezza dell\'identità del segnalante e vieta categoricamente qualsiasi forma di ritorsione, discriminazione o penalizzazione.',
    tutele: [
      {
        titolo: 'Riservatezza & Anonimato Assoluto',
        descrizione:
          'È possibile effettuare segnalazioni sia in forma nominativa che in forma totalmente anonima. L\'identità del segnalante e i dati acquisiti sono protetti da crittografia all\'avanguardia e trattati in conformità al GDPR.',
      },
      {
        titolo: 'Divieto di Ritorsioni per Legge',
        descrizione:
          'Nullità automatica di qualsiasi misura ritorsiva o discriminatoria: divieto di licenziamento, demansionamento, trasferimento o mutamento sfavorevole delle condizioni di lavoro collegato alla segnalazione in buona fede.',
      },
      {
        titolo: 'Gestione Qualificata & Tempi Certi',
        descrizione:
          'Le segnalazioni sono gestite dal General Counsel (e dall\'OdV per profili 231) con il supporto di esperti indipendenti: invio dell\'avviso di ricezione entro 7 giorni e riscontro motivato sugli esiti entro 3 mesi.',
      },
    ],
    piattaforma: {
      titolo: 'Piattaforma Sicura "Integrity Line"',
      fornitore: 'Soluzione tecnologica certificata fornita da EQS Group',
      descrizione:
        'Canale web prioritario accessibile da qualsiasi dispositivo, progettato per consentire segnalazioni scritte e vocali con il massimo livello di protezione della privacy.',
      caratteristiche: [
        'Opzione di segnalazione 100% anonima con cancellazione automatica dei metadati',
        'Registrazione di messaggi vocali con camuffamento automatico del timbro vocale',
        'Caricamento sicuro di documenti e file allegati protetti da cifratura crittografica',
        'Generazione di Codice Segnalazione univoco e password per accedere all\'Inbox Sicura bidirezionale',
      ],
      link: 'https://zefironet.integrityline.com/',
      ctaText: 'Accedi alla Piattaforma Integrity Line',
    },
    canali: {
      titolo: 'Canali di Segnalazione Dedicati all\'Organismo di Vigilanza',
      descrizione:
        'Le segnalazioni riguardanti violazioni del Modello 231 o del Codice Etico possono essere trasmesse anche attraverso i canali diretti dell\'OdV:',
      email: 'odvzefironet@gmail.com',
      posta:
        'Invio di posta cartacea recante la dicitura "All\'attenzione dell\'Organismo di Vigilanza di Zefiro Net S.r.l." presso la Sede Legale: Via Gattamelata, 34 — 20149 Milano (MI).',
    },
    documenti: [
      {
        titolo: 'Procedura per la Gestione delle Segnalazioni (Whistleblowing Policy)',
        descrizione:
          'Procedura ufficiale parte integrante del Modello 231 di Zefiro Net S.r.l., emanata ai sensi del D.Lgs. 24/2023 per disciplinare ricezione, istruttoria e tutele delle segnalazioni.',
        data: '15 dicembre 2023',
        dimensione: '181 KB',
        fileUrl: '/documents/governance/procedura-whistleblowing.pdf',
      },
      {
        titolo: 'Istruzioni Piattaforma Integrity Line (Guida Segnalanti)',
        descrizione:
          'Guida operativa illustrata passo-passo per l\'utilizzo dell\'applicazione web Integrity Line: invio, anonimato, registrazione vocale e gestione dell\'Inbox Sicura.',
        data: '15 dicembre 2023',
        dimensione: '445 KB',
        fileUrl: '/documents/governance/guida-piattaforma-whistleblowing.pdf',
      },
    ],
  },
};

const GOVERNANCE_DATA_EN: GovernanceData = {
  hero: {
    badge: 'Integrity, Ethics & Compliance',
    titolo: 'Corporate ',
    titoloAccento: 'Governance',
    sottotitolo:
      'The corporate governance framework, deontological rules, and internal control mechanisms ensuring transparency, legal compliance, and responsibility across Zefiro Net\'s shared mobile network infrastructure.',
  },
  ancore: {
    codiceEtico: 'Code of Ethics',
    modello231: 'Model 231',
    whistleblowing: 'Whistleblowing',
  },
  codiceEtico: {
    badge: 'Values Charter & Deontology',
    titolo: 'Code of Ethics',
    delibera: 'Approved by resolution of the Board of Directors on March 27, 2023',
    descrizione:
      'The Code of Ethics embodies Zefiro Net S.r.l.\'s ethical and social commitments in conducting its business operations. Functioning as a foundational "Charter of Fundamental Rights and Duties", it binds corporate bodies, executive leadership, all employees, contractors, the two industrial shareholders (WINDTRE and Iliad Italia), vendors, and partners.',
    sottotitoloPrincipi: 'Core Corporate Conduct Principles',
    principi: [
      {
        numero: '01',
        titolo: 'Business Integrity & Strict Legality',
        descrizione:
          'Strict compliance with domestic, European, and international laws, the Universal Declaration of Human Rights, ILO conventions, and UN Global Compact principles. Corporate interest can never justify unlawful practices.',
      },
      {
        numero: '02',
        titolo: 'Anti-Corruption & Conflict Prevention',
        descrizione:
          'Zero tolerance for bribery, unlawful perks, or improper advantages involving third parties or public officials. Active mitigation of conflicts of interest to safeguard corporate impartiality.',
      },
      {
        numero: '03',
        titolo: 'Fair Competition & Partner Neutrality',
        descrizione:
          'Zefiro Net operates independently from shareholders Iliad Italia and WINDTRE, who compete as retail operators. Rigorous antitrust compliance, fair market principles, and controlled information flows.',
      },
      {
        numero: '04',
        titolo: 'Accounting Transparency & Capital Protection',
        descrizione:
          'Financial records kept according to principles of truth, precision, and compliance. Safeguarding corporate assets, preserving share capital (€ 20,000 paid-up), and ensuring accurate reporting.',
      },
      {
        numero: '05',
        titolo: 'People Empowerment & Inclusive Culture',
        descrizione:
          'Promoting human dignity, equal opportunities, and merit. Total rejection of discrimination, harassment, or unlawful labor practices, ensuring fair employment contracts and accessibility.',
      },
      {
        numero: '06',
        titolo: 'Occupational Health, Safety & Cyber-Security',
        descrizione:
          'Safe workplaces compliant with ISO 45001, continuous environmental commitment (ISO 14001), and ethical, responsible management of IT infrastructure and data privacy (GDPR).',
      },
    ],
    documento: {
      titolo: 'Zefiro Net S.r.l. Code of Ethics',
      descrizione:
        'Official charter formalizing corporate values and rules of conduct adopted by the Board of Directors.',
      data: 'March 27, 2023',
      dimensione: '284 KB',
      fileUrl: '/documents/governance/codice-etico.pdf',
    },
  },
  modello231: {
    badge: 'Internal Prevention & Control System',
    titolo: 'Organizational & Management Model 231',
    edizioni:
      'First edition: BoD 4.07.2023 • Second edition: BoD 26.06.2024 • Third edition: BoD 9.04.2026',
    descrizione:
      'Pursuant to Italian Legislative Decree no. 231 of June 8, 2001, Zefiro Net has adopted and continuously updates an Organizational, Management, and Control Model (Model 231) designed to prevent predicate offenses. The Model establishes decision-making protocols, segregation of duties, and internal controls aligned with Confindustria Guidelines.',
    sottotitoloPilastri: 'Core Pillars of the Internal Control System',
    pilastri: [
      {
        numero: '01',
        titolo: 'Risk Mapping & Operational Protocols',
        descrizione:
          'Systematic assessment of sensitive operational processes and establishment of binding protocols to regulate and document corporate decision-making.',
      },
      {
        numero: '02',
        titolo: 'Control Principles & Segregation of Duties',
        descrizione:
          'Comprehensive traceability of actions, structured decision stages, functional segregation of roles, and authorization limits supported by powers of attorney.',
      },
      {
        numero: '03',
        titolo: 'Independent Supervisory Body (OdV)',
        descrizione:
          'Establishment of an independent, monocratic Supervisory Body endowed with autonomous powers of oversight and reporting directly to the Board of Directors.',
      },
      {
        numero: '04',
        titolo: 'Disciplinary System & Penalties',
        descrizione:
          'Proportional sanctions for violations of the Model or whistleblower protections: disciplinary measures for employees and contract termination clauses (Civil Code arts. 1453/1456) for third parties.',
      },
    ],
    odv: {
      titolo: 'Supervisory Body (Organismo di Vigilanza - OdV)',
      descrizione:
        'The Supervisory Body oversees the operation, compliance, and periodic updating of Model 231, reporting directly to the Board of Directors.',
      email: 'odvzefironet@gmail.com',
      sede: 'Attn: Supervisory Body of Zefiro Net S.r.l., Via Gattamelata, 34 — 20149 Milan, Italy',
    },
    documento: {
      titolo: 'Model 231 — General Part (Extract)',
      descrizione:
        'Extract of the General Section of Model 231 (Third Edition updated on April 9, 2026), including the catalog of predicate offenses.',
      data: 'April 9, 2026',
      dimensione: '338 KB',
      fileUrl: '/documents/governance/modello-231-parte-generale.pdf',
    },
  },
  whistleblowing: {
    badge: 'Internal Reporting Channels & Whistleblower Protection',
    titolo: 'Whistleblowing & Integrity Line Platform',
    normativa:
      'Implementation of Italian Leg. Decree 24/2023 (EU Directive 2019/1937) & ANAC Guidelines',
    descrizione:
      'Zefiro Net fosters a culture of transparency and accountability, encouraging employees, directors, vendors, interns, and partners to report unlawful behavior or violations of Model 231 and the Code of Ethics. The Company guarantees strict confidentiality of identity and prohibits any form of retaliation.',
    tutele: [
      {
        titolo: 'Confidentiality & Anonymity',
        descrizione:
          'Reports can be submitted either named or completely anonymously. Whistleblower identities and investigation records are encrypted and protected under GDPR.',
      },
      {
        titolo: 'Legal Protection Against Retaliation',
        descrizione:
          'Automatic nullity of any retaliatory action: dismissal, demotion, transfer, or adverse workplace changes tied to good-faith reporting are legally invalid.',
      },
      {
        titolo: 'Qualified Handling & Defined Timelines',
        descrizione:
          'Reports are handled by the General Counsel (and the Supervisory Body for 231 matters) with independent counsel: acknowledgment within 7 days and final follow-up within 3 months.',
      },
    ],
    piattaforma: {
      titolo: 'Secure "Integrity Line" Platform',
      fornitore: 'Certified technological solution powered by EQS Group',
      descrizione:
        'Primary online channel accessible from any browser or device, engineered for encrypted written and voice reporting with maximum privacy safeguards.',
      caratteristiche: [
        '100% anonymous submission option with metadata stripping',
        'Voice recording capability with automated pitch distortion',
        'Secure file upload for encrypted supporting documentation',
        'Unique case ID and personal password to access the two-way Secure Inbox',
      ],
      link: 'https://zefironet.integrityline.com/',
      ctaText: 'Access the Integrity Line Platform',
    },
    canali: {
      titolo: 'Dedicated Supervisory Body Reporting Channels',
      descrizione:
        'Reports regarding breaches of Model 231 or the Code of Ethics may also be submitted directly to the Supervisory Body:',
      email: 'odvzefironet@gmail.com',
      posta:
        'Postal mail marked "Confidential — Attn: Supervisory Body of Zefiro Net S.r.l." to Registered HQ: Via Gattamelata, 34 — 20149 Milan, Italy.',
    },
    documenti: [
      {
        titolo: 'Whistleblowing Management Procedure (Policy)',
        descrizione:
          'Official procedure integrated into Model 231, enacted under Decree 24/2023 to regulate reporting workflows, investigation, and protection.',
        data: 'December 15, 2023',
        dimensione: '181 KB',
        fileUrl: '/documents/governance/procedura-whistleblowing.pdf',
      },
      {
        titolo: 'Integrity Line Platform Instructions (User Guide)',
        descrizione:
          'Step-by-step illustrated guide for reporters using the Integrity Line web portal: filing, anonymity, voice recording, and secure inbox communication.',
        data: 'December 15, 2023',
        dimensione: '445 KB',
        fileUrl: '/documents/governance/guida-piattaforma-whistleblowing.pdf',
      },
    ],
  },
};

export function getGovernance(lang: Locale = 'it'): GovernanceData {
  return lang === 'en' ? GOVERNANCE_DATA_EN : GOVERNANCE_DATA_IT;
}
