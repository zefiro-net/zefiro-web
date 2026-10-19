import type { Locale } from '@/i18n';

export interface DocumentoSostenibilita {
  id: string;
  titolo: string;
  codice?: string;
  categoria: string;
  descrizione: string;
  fileUrl?: string;
  dimensione?: string;
  inArrivo?: boolean;
}

export interface PilastroPianoESG {
  numero: string;
  titolo: string;
  descrizione: string;
  obiettivi: string[];
}

export interface SostenibilitaData {
  hero: {
    badge: string;
    titolo: string;
    titoloAccento: string;
    sottotitolo: string;
  };
  certificazioni: {
    badge: string;
    titolo: string;
    sottotitolo: string;
    items: DocumentoSostenibilita[];
  };
  politiche: {
    badge: string;
    titolo: string;
    sottotitolo: string;
    items: DocumentoSostenibilita[];
  };
  pianoEsg: {
    badge: string;
    titolo: string;
    sottotitolo: string;
    pilastri: PilastroPianoESG[];
  };
  bilancio: {
    badge: string;
    titolo: string;
    anno: string;
    sottotitolo: string;
    descrizione: string;
    fileUrl: string;
    dimensione: string;
  };
}

export const sostenibilitaDataIT: SostenibilitaData = {
  hero: {
    badge: 'Responsabilità ESG',
    titolo: 'La Nostra ',
    titoloAccento: 'sostenibilità',
    sottotitolo:
      'L\'impegno di Zefiro Net per uno sviluppo digitale sostenibile, inclusivo e trasparente. Integriamo i principi ESG in ogni livello operativo e strategico.',
  },
  certificazioni: {
    badge: 'Standard Internazionali',
    titolo: 'Certificazioni Aziendali',
    sottotitolo: 'Sistemi di gestione certificati da primari enti accreditati a garanzia dell\'eccellenza qualitativa, ambientale e di sicurezza.',
    items: [
      {
        id: 'ecovadis',
        titolo: 'Scorecard EcoVadis',
        codice: 'Rating CSR & ESG',
        categoria: 'Sostenibilità Globale',
        descrizione:
          'Valutazione indipendente delle performance di sostenibilità aziendale, responsabilità sociale, acquisti sostenibili ed etica di business rilasciata dalla piattaforma internazionale EcoVadis.',
        fileUrl: '/documents/certificazioni/scorecard-ecovadis.pdf',
        dimensione: '2.7 MB',
      },
      {
        id: 'iso9001',
        titolo: 'Certificazione ISO 9001:2015',
        codice: 'Certificato IT347177',
        categoria: 'Sistema di Gestione Qualità',
        descrizione:
          'Standard internazionale che attesta l\'adozione di processi rigorosi, orientati al miglioramento continuo e alla massima affidabilità nella gestione dell\'infrastruttura radiomobile.',
        fileUrl: '/documents/certificazioni/certificato-iso-9001.pdf',
        dimensione: '1.5 MB',
      },
      {
        id: 'iso14001',
        titolo: 'Certificazione ISO 14001:2015',
        codice: 'Certificato IT347176',
        categoria: 'Sistema di Gestione Ambientale',
        descrizione:
          'Riconoscimento dell\'impegno attivo nella riduzione degli impatti ecologici, nell\'efficienza energetica degli apparati e nella gestione sostenibile dei rifiuti e delle risorse.',
        fileUrl: '/documents/certificazioni/certificato-iso-14001.pdf',
        dimensione: '1.5 MB',
      },
      {
        id: 'iso45001',
        titolo: 'Certificazione ISO 45001:2018',
        codice: 'Certificato IT347178',
        categoria: 'Salute e Sicurezza sul Lavoro',
        descrizione:
          'Sistema certificato di tutela dell\'integrità psicofisica di dipendenti e collaboratori nei cantieri, sui siti radiomobili e negli uffici, con prevenzione attiva degli infortuni.',
        fileUrl: '/documents/certificazioni/certificato-iso-45001.pdf',
        dimensione: '1.5 MB',
      },
      {
        id: 'unipdr125',
        titolo: 'Certificazione UNI/PdR 125:2022',
        codice: 'Parità di Genere',
        categoria: 'Diversity, Equity & Inclusion',
        descrizione:
          'Linee guida per la parità di genere, l\'equità retributiva e la valorizzazione delle diversità in azienda. Percorso di certificazione attualmente in corso di perfezionamento.',
        inArrivo: true,
      },
    ],
  },
  politiche: {
    badge: 'Linee Guida Societarie',
    titolo: 'Politiche in Ambito ESG',
    sottotitolo: 'I documenti programmatici approvati dagli organi sociali che disciplinano l\'operato quotidiano di Zefiro Net.',
    items: [
      {
        id: 'politica-sostenibilita',
        titolo: 'Politica di Sostenibilità',
        categoria: 'Strategia ESG',
        descrizione:
          'Definisce i principi e le priorità strategiche di Zefiro Net verso la transizione ecologica, l\'innovazione tecnologica condivisa e il contributo agli Obiettivi di Sviluppo Sostenibile (SDGs) ONU.',
        fileUrl: '/documents/politiche/politica-sostenibilita.pdf',
        dimensione: '1.9 MB',
      },
      {
        id: 'politica-sicurezza',
        titolo: 'Politica di Salute e Sicurezza sul Lavoro',
        categoria: 'Prevenzione & Persone',
        descrizione:
          'L\'impegno formale per garantire ambienti di lavoro sicuri e salubri, la formazione continua sui rischi operativi e la promozione del benessere per tutti i collaboratori.',
        fileUrl: '/documents/politiche/politica-salute-e-sicurezza.pdf',
        dimensione: '391 KB',
      },
      {
        id: 'politica-dei',
        titolo: 'Politica Diversity, Equity & Inclusion (DEI)',
        categoria: 'Equità & Inclusione',
        descrizione:
          'Linee guida per la valorizzazione del talento senza distinzioni di genere, età, orientamento o background culturale, promuovendo parità di opportunità e conciliazione vita-lavoro.',
        fileUrl: '/documents/politiche/politica-diversity-equity-inclusion.pdf',
        dimensione: '414 KB',
      },
    ],
  },
  pianoEsg: {
    badge: 'Piano Strategico di Sostenibilità',
    titolo: 'Il Nostro Piano ESG',
    sottotitolo: '5 direttrici strategiche, 15 obiettivi ESG e 25 azioni operative per orientare il futuro sostenibile dell\'azienda.',
    pilastri: [
      {
        numero: '01',
        titolo: 'Decarbonizzazione e Rispetto per l\'Ambiente',
        descrizione:
          'Riduzione dell\'impatto ambientale di Zefiro Net attraverso soluzioni energetiche eco-efficienti, target di neutralità carbonica (Scope 1 e 2 al 2030) e gestione responsabile delle risorse.',
        obiettivi: [
          'Target di Carbon Neutrality Scope 1 e 2 al 2030',
          'Ottimizzazione dei consumi energetici per singolo sito radio',
          'Adozione di criteri ambientali rigorosi per i fornitori e uso di materiali riciclati',
        ],
      },
      {
        numero: '02',
        titolo: 'Sostenibilità e Innovazione',
        descrizione:
          'Sviluppo di soluzioni innovative attraverso l\'aggiornamento tecnologico continuo e partnership di condivisione di rete (RAN Sharing).',
        obiettivi: [
          'Diffusione delle tecnologie radiomobili 5G più avanzate ed efficienti',
          'Collaborazione con atenei, centri di ricerca e consorzi tecnologici',
          'Coinvolgimento attivo degli stakeholder mediante standard AA1000',
        ],
      },
      {
        numero: '03',
        titolo: 'Relazioni con le Comunità e Inclusione',
        descrizione:
          'Centralità delle comunità locali per garantire accessibilità, sviluppo territoriale e azzeramento del divario digitale nelle aree rurali.',
        obiettivi: [
          'Copertura del 70% del territorio nazionale e abbattimento del digital divide',
          'Sviluppo di infrastrutture a basso impatto visivo e paesaggistico',
          'Canali aperti di comunicazione con gli enti locali e i territori serviti',
        ],
      },
      {
        numero: '04',
        titolo: 'Centralità della Persona',
        descrizione:
          'Valorizzazione dei talenti, promozione della diversità, pari opportunità e benessere sul luogo di lavoro.',
        obiettivi: [
          'Conseguimento delle certificazioni UNI/PdR 125 ed Equal Salary',
          'Piani di formazione continua su competenze tecniche e ambiti ESG',
          'Rafforzamento dei servizi di welfare aziendale e Buddy Program per i neoassunti',
        ],
      },
      {
        numero: '05',
        titolo: 'Etica e Integrità',
        descrizione:
          'Cultura aziendale basata su trasparenza, conformità legislativa e responsabilità lungo tutta la catena del valore.',
        obiettivi: [
          'Presidio costante del Modello 231 e governance ESG integrata negli MBO',
          'Adozione di strumenti evoluti per la business continuity e la sicurezza informativa',
          'Requisito ISO 45001 per il 100% dei fornitori strategici di cantiere',
        ],
      },
    ],
  },
  bilancio: {
    badge: 'Reporting Ufficiale',
    titolo: 'Bilancio di Sostenibilità',
    anno: '2025',
    sottotitolo: 'Trasparenza, dati e traguardi raggiunti nella rendicontazione non finanziaria.',
    descrizione:
      'Il Bilancio di Sostenibilità 2025 illustra i progressi concreti compiuti da Zefiro Net nell\'integrazione dei fattori ambientali, sociali e di governance. Include la rendicontazione dei consumi energetici, le iniziative di welfare per le persone e i risultati del modello wholesale condiviso.',
    fileUrl: '/documents/bilanci/bilancio-sostenibilita-2025.pdf',
    dimensione: '942 KB',
  },
};

export const sostenibilitaDataEN: SostenibilitaData = {
  hero: {
    badge: 'ESG Responsibility',
    titolo: 'Our ',
    titoloAccento: 'sustainability',
    sottotitolo:
      'Zefiro Net\'s commitment to sustainable, inclusive, and transparent digital progress. We integrate ESG principles into every strategic and operational decision.',
  },
  certificazioni: {
    badge: 'International Standards',
    titolo: 'Corporate Certifications',
    sottotitolo: 'Management systems certified by leading accredited institutions ensuring quality, safety, and environmental excellence.',
    items: [
      {
        id: 'ecovadis',
        titolo: 'EcoVadis Scorecard',
        codice: 'CSR & ESG Rating',
        categoria: 'Global Sustainability',
        descrizione:
          'Independent assessment of corporate sustainability, social responsibility, sustainable procurement, and business ethics certified by EcoVadis.',
        fileUrl: '/documents/certificazioni/scorecard-ecovadis.pdf',
        dimensione: '2.7 MB',
      },
      {
        id: 'iso9001',
        titolo: 'ISO 9001:2015 Certification',
        codice: 'Certificate IT347177',
        categoria: 'Quality Management System',
        descrizione:
          'International standard validating rigorous processes, continuous improvement, and utmost reliability across our mobile radio infrastructure operations.',
        fileUrl: '/documents/certificazioni/certificato-iso-9001.pdf',
        dimensione: '1.5 MB',
      },
      {
        id: 'iso14001',
        titolo: 'ISO 14001:2015 Certification',
        codice: 'Certificate IT347176',
        categoria: 'Environmental Management System',
        descrizione:
          'Formal recognition of active commitment to minimizing ecological impact, enhancing energy efficiency, and responsibly managing materials and waste.',
        fileUrl: '/documents/certificazioni/certificato-iso-14001.pdf',
        dimensione: '1.5 MB',
      },
      {
        id: 'iso45001',
        titolo: 'ISO 45001:2018 Certification',
        codice: 'Certificate IT347178',
        categoria: 'Occupational Health & Safety',
        descrizione:
          'Certified management safeguarding workers and contractors on mobile sites, installations, and offices through comprehensive accident prevention.',
        fileUrl: '/documents/certificazioni/certificato-iso-45001.pdf',
        dimensione: '1.5 MB',
      },
      {
        id: 'unipdr125',
        titolo: 'UNI/PdR 125:2022 Certification',
        codice: 'Gender Equality',
        categoria: 'Diversity, Equity & Inclusion',
        descrizione:
          'Guidelines for gender equality, wage parity, and diversity empowerment across corporate functions. Certification process currently underway.',
        inArrivo: true,
      },
    ],
  },
  politiche: {
    badge: 'Corporate Guidelines',
    titolo: 'ESG Corporate Policies',
    sottotitolo: 'Official policy frameworks approved by corporate leadership guiding daily activities and stakeholder relationships.',
    items: [
      {
        id: 'politica-sostenibilita',
        titolo: 'Sustainability Policy',
        categoria: 'ESG Strategy',
        descrizione:
          'Outlines Zefiro Net\'s strategic roadmap toward ecological transition, shared tech innovation, and tangible contribution to UN SDGs.',
        fileUrl: '/documents/politiche/politica-sostenibilita.pdf',
        dimensione: '1.9 MB',
      },
      {
        id: 'politica-sicurezza',
        titolo: 'Occupational Health & Safety Policy',
        categoria: 'Prevention & People',
        descrizione:
          'Corporate commitment to safe, healthy working conditions, continuous safety training, and personal wellbeing across all company activities.',
        fileUrl: '/documents/politiche/politica-salute-e-sicurezza.pdf',
        dimensione: '391 KB',
      },
      {
        id: 'politica-dei',
        titolo: 'Diversity, Equity & Inclusion (DEI) Policy',
        categoria: 'Equity & Inclusion',
        descrizione:
          'Guidelines fostering an inclusive environment free from bias, valuing all forms of diversity, equal pay, and balanced work-life quality.',
        fileUrl: '/documents/politiche/politica-diversity-equity-inclusion.pdf',
        dimensione: '414 KB',
      },
    ],
  },
  pianoEsg: {
    badge: 'Strategic Sustainability Roadmap',
    titolo: 'Our ESG Plan',
    sottotitolo: '5 strategic pillars, 15 ESG objectives, and 25 actionable initiatives guiding our responsible evolution.',
    pilastri: [
      {
        numero: '01',
        titolo: 'Decarbonization & Environmental Protection',
        descrizione:
          'Reducing environmental footprint through energy-efficient infrastructure, Scope 1 and 2 carbon neutrality targets by 2030, and responsible resource stewardship.',
        obiettivi: [
          'Scope 1 and 2 Carbon Neutrality target by 2030',
          'Energy consumption optimization per mobile site',
          'Strict sustainable procurement criteria and use of recycled materials',
        ],
      },
      {
        numero: '02',
        titolo: 'Sustainability & Innovation',
        descrizione:
          'Fostering innovative telecom solutions via continuous technology upgrading and network sharing partnerships (RAN Sharing).',
        obiettivi: [
          'Deployment of energy-efficient 5G radio solutions',
          'Active collaborations with universities and research consortia',
          'Structured stakeholder engagement grounded in AA1000 standards',
        ],
      },
      {
        numero: '03',
        titolo: 'Community Relations & Digital Inclusion',
        descrizione:
          'Placing local communities at the center of network operations to overcome the digital divide across rural Italy.',
        obiettivi: [
          'Coverage across 70% of Italian territory bridging digital disparities',
          'Low visual and environmental impact site design',
          'Transparent dialogue with local municipalities and territories',
        ],
      },
      {
        numero: '04',
        titolo: 'Centrality of the Person',
        descrizione:
          'Valuing talent, nurturing diversity, ensuring equal opportunities, and prioritizing employee wellbeing.',
        obiettivi: [
          'Attainment of UNI/PdR 125 and Equal Salary certifications',
          'Guaranteed ESG and technical training programs for all personnel',
          'Strengthened corporate welfare and dedicated Buddy Program',
        ],
      },
      {
        numero: '05',
        titolo: 'Ethics & Integrity',
        descrizione:
          'Corporate governance based on transparency, rigorous legal compliance, and responsibility across the value chain.',
        obiettivi: [
          'Model 231 supervision and ESG targets integrated into MBOs',
          'Advanced business continuity and cybersecurity frameworks',
          'Mandatory ISO 45001 certification for all key site contractors',
        ],
      },
    ],
  },
  bilancio: {
    badge: 'Official Reporting',
    titolo: 'Sustainability Report',
    anno: '2025',
    sottotitolo: 'Transparent reporting of non-financial metrics, performance, and milestones.',
    descrizione:
      'The 2025 Sustainability Report highlights Zefiro Net\'s progress in embedding environmental, social, and governance factors into its wholesale network operations.',
    fileUrl: '/documents/bilanci/bilancio-sostenibilita-2025.pdf',
    dimensione: '942 KB',
  },
};

export function getSostenibilitaData(lang: Locale = 'it'): SostenibilitaData {
  return lang === 'en' ? sostenibilitaDataEN : sostenibilitaDataIT;
}
