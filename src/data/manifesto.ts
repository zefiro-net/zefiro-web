import type { PageContent, ValoreManifesto } from './types';
import type { Locale } from '@/i18n';

export const manifestoPageIT: PageContent = {
  id: 11,
  title: 'Il Nostro Manifesto',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'I principi fondativi e la carta dei valori che guidano ogni decisione strategica, tecnologica e umana di Zefiro Net. Connettere l\'Italia dietro le quinte con integrità, equità e sostenibilità.',
    preambolo:
      'Crediamo in un\'Italia connessa, senza barriere geografiche né divari tecnologici. Operiamo come abilitatore invisibile ma indispensabile: attraverso la condivisione virtuosa delle infrastrutture radiomobili, trasformiamo l\'accesso alla connettività ultra-broadband in un diritto concreto e condiviso per tutte le comunità.',
  },
};

export const manifestoPageEN: PageContent = {
  id: 11,
  title: 'Our Manifesto',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'The foundational principles and core value charter steering every strategic, technical, and human choice at Zefiro Net. Connecting Italy behind the scenes with integrity, equity, and sustainability.',
    preambolo:
      'We believe in a seamlessly connected Italy, free from geographical barriers and technological divides. We act as an invisible yet vital enabler: through responsible mobile network sharing, we turn ultra-broadband access into an equitable, tangible reality for every community.',
  },
};

export const valoriManifestoIT: ValoreManifesto[] = [
  {
    id: 101,
    numero: '01',
    ambito: 'Equità & Comunità',
    titolo: 'Inclusione Digitale per i Territori',
    descrizione:
      'Crediamo in un Paese in cui ogni borgo rurale, vallata e comunità locale abbia le stesse opportunità digitali dei grandi centri metropolitani. Gestiamo l\'infrastruttura radiomobile che copre il 70% del territorio nazionale per azzerare il digital divide e garantire a 16 milioni di residenti una connessione 5G e 4G veloce e moderna.',
    impegno: 'Nessuna comunità esclusa dalla transizione digitale',
    coloreIcona: 'cyan',
  },
  {
    id: 102,
    numero: '02',
    ambito: 'Ambiente & Paesaggio',
    titolo: 'Sostenibilità Ambientale & Decarbonizzazione',
    descrizione:
      'Tuteliamo il territorio riducendo al minimo l\'impronta ecologica e preservando il paesaggio. Attraverso il modello virtuoso del RAN sharing evitiamo la duplicazione superflua di tralicci e antenne, ottimizziamo i consumi energetici complessivi e perseguiamo obiettivi certificati di efficienza (ISO 14001, EcoVadis) e circolarità.',
    impegno: 'Infrastrutture condivise a basso impatto e target Net Zero',
    coloreIcona: 'teal',
  },
  {
    id: 103,
    numero: '03',
    ambito: 'People & Benessere',
    titolo: 'Centralità della Persona, Equità & Crescita',
    descrizione:
      'Le persone rappresentano la vera forza motrice di Zefiro Net. Promuoviamo un ambiente professionale inclusivo e sicuro, fondato sulle pari opportunità, sulla salute e sicurezza sul lavoro (ISO 45001), sull\'ascolto reciproco e su percorsi continui di sviluppo delle competenze, welfare e crescita integrata.',
    impegno: 'Pari opportunità, sicurezza certificata e valorizzazione dei talenti',
    coloreIcona: 'cyan',
  },
  {
    id: 104,
    numero: '04',
    ambito: 'Tecnologia & Futuro',
    titolo: 'Innovazione Responsabile & Sinergie 5G',
    descrizione:
      'Progettiamo e sviluppiamo architetture radiomobili avanzate per massimizzare le sinergie industriali tra i nostri soci. Portiamo la potenza delle frequenze 5G di ultima generazione anche nei contesti territoriali più complessi, sempre nel pieno rispetto della sicurezza crittografica e della privacy dei dati.',
    impegno: 'Tecnologie di frontiera al servizio dello sviluppo collettivo',
    coloreIcona: 'teal',
  },
  {
    id: 105,
    numero: '05',
    ambito: 'Etica & Trasparenza',
    titolo: 'Integrità, Trasparenza & Governance Etica',
    descrizione:
      'La lealtà, la conformità alle regole e la chiarezza guidano ogni nostra relazione societaria, contrattuale e operativa. Abbiamo adottato il Modello Organizzativo 231 con Organismo di Vigilanza autonomo e applichiamo standard certificati di Gestione per la Qualità (ISO 9001) per una gestione trasparente e solida.',
    impegno: 'Etica senza compromessi, conformità rigorosa e fiducia reciproca',
    coloreIcona: 'cyan',
  },
  {
    id: 106,
    numero: '06',
    ambito: 'Affidabilità Wholesale',
    titolo: 'Eccellenza Operativa & Resilienza di Rete',
    descrizione:
      'Come fornitore wholesale puro per i nostri partner soci, la nostra missione è garantire prestazioni di rete impeccabili e affidabilità senza interruzioni. I nostri centri operativi presidiano i siti 24/7 per assicurare continuità del segnale, robustezza contro i guasti e standard di servizio di livello critico.',
    impegno: 'Continuità di trasmissione, monitoraggio h24 e massima resilienza',
    coloreIcona: 'teal',
  },
];

export const valoriManifestoEN: ValoreManifesto[] = [
  {
    id: 101,
    numero: '01',
    ambito: 'Equity & Communities',
    titolo: 'Digital Inclusion for Local Communities',
    descrizione:
      'We believe every rural village, mountain valley, and local municipality deserves the exact same digital opportunities as major metropolitan hubs. We manage mobile infrastructure covering 70% of Italy to eradicate the digital divide and provide 16 million residents with cutting-edge 5G and 4G connectivity.',
    impegno: 'No community left behind in the nationwide digital transition',
    coloreIcona: 'cyan',
  },
  {
    id: 102,
    numero: '02',
    ambito: 'Environment & Landscape',
    titolo: 'Environmental Sustainability & Decarbonization',
    descrizione:
      'We safeguard our territory by minimizing our environmental footprint and protecting natural landscapes. Through RAN sharing, we prevent unnecessary tower duplication, cut overall energy consumption, and pursue certified sustainability benchmarks (ISO 14001, EcoVadis) and circular economy targets.',
    impegno: 'Low-impact shared infrastructure and Net Zero trajectory',
    coloreIcona: 'teal',
  },
  {
    id: 103,
    numero: '03',
    ambito: 'People & Well-Being',
    titolo: 'People Centrality, Equity & Continuous Growth',
    descrizione:
      'People are the core driving force of Zefiro Net. We nurture an inclusive, safe, and collaborative workplace grounded in equal opportunity, occupational health and safety (ISO 45001), active listening, and continuous professional growth pathways and welfare.',
    impegno: 'Equal opportunity, certified safety, and continuous professional development',
    coloreIcona: 'cyan',
  },
  {
    id: 104,
    numero: '04',
    ambito: 'Technology & Future',
    titolo: 'Responsible Innovation & 5G Synergies',
    descrizione:
      'We engineer state-of-the-art radio architectures to unlock substantial industrial synergies between our partner operators. We rapidly roll out next-generation 5G frequencies into complex geographical territories, strictly adhering to high-grade security, data privacy, and encryption standards.',
    impegno: 'Next-generation radio engineering serving collective progress',
    coloreIcona: 'teal',
  },
  {
    id: 105,
    numero: '05',
    ambito: 'Ethics & Compliance',
    titolo: 'Integrity, Transparency & Ethical Governance',
    descrizione:
      'Fairness, regulatory compliance, and clarity steer all corporate, contractual, and technical relations. We have implemented Organizational Model 231 with an autonomous Supervisory Body and operate under certified ISO 9001 Quality Management standards.',
    impegno: 'Uncompromising corporate ethics, strict compliance, and mutual trust',
    coloreIcona: 'cyan',
  },
  {
    id: 106,
    numero: '06',
    ambito: 'Wholesale Reliability',
    titolo: 'Operational Excellence & Network Resilience',
    descrizione:
      'As a dedicated wholesale operator for our partner shareholders, our mandate is delivering seamless transmission performance and uninterrupted reliability. Our operational teams monitor sites 24/7 to ensure signal continuity, fault tolerance, and critical-infrastructure resilience.',
    impegno: 'Uninterrupted transmission, 24/7 monitoring, and mission-critical SLAs',
    coloreIcona: 'teal',
  },
];

export function getManifestoData(lang: Locale = 'it') {
  return {
    pagina: lang === 'en' ? manifestoPageEN : manifestoPageIT,
    valori: lang === 'en' ? valoriManifestoEN : valoriManifestoIT,
  };
}
