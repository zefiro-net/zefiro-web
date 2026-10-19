import type { PageContent } from './types';
import type { Locale } from '@/i18n';

export interface ValoreAziendale {
  id: number;
  numero: string;
  titolo: string;
  descrizione: string;
  dettaglio?: string;
}

export const valoriAziendaliIT: ValoreAziendale[] = [
  {
    id: 1,
    numero: '01',
    titolo: 'Centralità della Persona & Equità',
    descrizione:
      'Crediamo nel valore unico di ciascun collaboratore. Promuoviamo un ambiente di lavoro inclusivo, basato sul rispetto, sulle pari opportunità, sulla sicurezza sul lavoro (ISO 45001) e su percorsi di crescita professionale continua con feedback a 360° e Buddy Program.',
    dettaglio: 'Company Development Program • Pari Opportunità • Sicurezza sul Lavoro'
  },
  {
    id: 2,
    numero: '02',
    titolo: 'Sostenibilità & Decarbonizzazione',
    descrizione:
      'Operiamo riducendo al minimo l\'impronta ambientale. Attraverso il modello del RAN sharing evitiamo la proliferazione di antenne, riduciamo i consumi energetici e perseguiamo obiettivi ambiziosi di decarbonizzazione e gestione responsabile dei rifiuti (ISO 14001, EcoVadis).',
    dettaglio: 'Efficienza Energetica • Tutela del Paesaggio • Economia Circolare'
  },
  {
    id: 3,
    numero: '03',
    titolo: 'Integrità, Trasparenza & Governance',
    descrizione:
      'La correttezza e la chiarezza guidano ogni nostra scelta societaria e contrattuale. Abbiamo adottato il Modello 231 con Organismo di Vigilanza autonomo e applichiamo standard certificati di Gestione per la Qualità (ISO 9001).',
    dettaglio: 'Modello 231 • Qualità Certificata • Trasparenza Istituzionale'
  },
  {
    id: 4,
    numero: '04',
    titolo: 'Innovazione Responsabile & RAN Sharing',
    descrizione:
      'Progettiamo e gestiamo architetture radio avanzate per massimizzare le sinergie tecnologiche tra gli operatori soci, accelerando il dispiegamento delle reti 5G di ultima generazione a beneficio delle comunità locali.',
    dettaglio: 'Tecnologia 5G • Sinergie Industriali • Architetture di Rete Condivise'
  },
  {
    id: 5,
    numero: '05',
    titolo: 'Inclusione Digitale per i Territori',
    descrizione:
      'Le aree meno popolate meritano le stesse opportunità dei grandi centri urbani. La nostra presenza copre il 70% del territorio nazionale per colmare il digital divide e garantire un accesso equo alla banda ultra-larga.',
    dettaglio: 'Copertura Rurale • Digital Divide • Connettività Ultra-Broadband'
  },
];

export const valoriAziendaliEN: ValoreAziendale[] = [
  {
    id: 1,
    numero: '01',
    titolo: 'People Centrality & Equality',
    descrizione:
      'We believe in the unique potential of every colleague. We nurture an inclusive, safe, and collaborative workplace based on equal opportunities, occupational safety (ISO 45001), and continuous professional growth with 360° feedback and Buddy onboarding.',
    dettaglio: 'Company Development Program • Equal Opportunity • Workplace Safety'
  },
  {
    id: 2,
    numero: '02',
    titolo: 'Sustainability & Decarbonization',
    descrizione:
      'We manage our network with minimal environmental and visual footprint. Through RAN sharing we prevent tower duplication, cut energy consumption, and advance toward ambitious decarbonization and circular economy targets (ISO 14001, EcoVadis).',
    dettaglio: 'Energy Efficiency • Landscape Protection • Circular Economy'
  },
  {
    id: 3,
    numero: '03',
    titolo: 'Integrity, Transparency & Governance',
    descrizione:
      'Integrity and transparency underpin all corporate decisions. We have adopted the 231 Organizational Model with an autonomous Supervisory Body and operate under certified ISO 9001 Quality Management standards.',
    dettaglio: 'Model 231 Compliance • Certified Quality • Transparent Governance'
  },
  {
    id: 4,
    numero: '04',
    titolo: 'Responsible Innovation & RAN Sharing',
    descrizione:
      'We design and operate state-of-the-art radio architectures that maximize technological synergies between partner operators, rapidly rolling out next-generation 5G networks for rural communities.',
    dettaglio: '5G Connectivity • Industrial Synergies • Shared Network Architectures'
  },
  {
    id: 5,
    numero: '05',
    titolo: 'Digital Inclusion for Communities',
    descrizione:
      'Lower-density regions deserve the exact same digital opportunities as major metropolitan hubs. Our infrastructure covers 70% of Italian national territory to overcome the digital divide and ensure equal ultra-broadband access.',
    dettaglio: 'Rural Coverage • Bridging Digital Divide • Ultra-Broadband'
  },
];

export const chiSiamoDataIT: PageContent = {
  id: 10,
  title: 'Chi Siamo',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'Zefiro Net S.r.l. nasce il <strong>1° gennaio 2023</strong> come joint venture italiana paritetica tra <strong>Iliad Italia S.p.A.</strong> e <strong>WINDTRE S.p.A.</strong>, nata per gestire e sviluppare congiuntamente la rete mobile nelle aree meno densamente popolate d\'Italia.',
    storia_testo_1:
      'Zefiro Net è attiva nel settore delle infrastrutture per le telecomunicazioni e gestisce gli apparati di trasmissione radio per servizi di telefonia mobile limitatamente alle aree rurali e meno densamente popolate del territorio italiano.',
    storia_testo_2:
      'La società si occupa della gestione tecnica, per conto dei Soci, dell’infrastruttura fisica che consente la fornitura di servizi radiomobili in un’area pari a circa il <strong>70% del territorio italiano</strong>, che comprende le zone meno densamente popolate in cui risiede circa il <strong>26,8% della popolazione nazionale</strong>.',
    storia_testo_3:
      'La condivisione delle tecnologie (RAN sharing) consente di sfruttare sinergie industriali rilevanti, accelerando la diffusione di tecnologie di ultima generazione (5G e 4G) con concreti benefici per gli abitanti e le imprese locali in termini di disponibilità di connettività a banda ultra-larga.',
    sezione_missione_titolo: 'La Nostra Missione',
    sezione_missione_testo:
      'Abbattere il digital divide in Italia garantendo a tutto il territorio nazionale l\'accesso a reti di telecomunicazione radiomobili moderne, affidabili e ad altissime prestazioni. Attraverso la condivisione virtuosa delle infrastrutture fisiche di accesso (RAN sharing), ottimizziamo gli investimenti di rete e acceleriamo la copertura capillare con le più avanzate tecnologie 5G.',
    sezione_visione_titolo: 'La Nostra Visione',
    sezione_visione_testo:
      'Essere il punto di riferimento tecnologico e infrastrutturale per una connettività mobile equa, inclusiva e ambientalmente sostenibile, dove nessun territorio e nessuna comunità rimangano esclusi dalla transizione digitale del Paese.',
    sezione_wholesale_titolo: 'Operatore Wholesale Condiviso B2B',
    sezione_wholesale_testo:
      'Zefiro Net opera esclusivamente come fornitore di infrastrutture fisiche di rete all\'ingrosso (wholesale) per i propri soci. Non eroghiamo servizi di connettività diretta B2C al pubblico; abilitiamo i nostri soci operatori a offrire il più alto livello di servizio ai propri clienti finali, poggiandosi su un\'infrastruttura resiliente, sicura, costantemente monitorata e all\'avanguardia tecnologica.',
  },
};

export const chiSiamoDataEN: PageContent = {
  id: 10,
  title: 'About Us',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'Zefiro Net S.r.l. was established on <strong>January 1st, 2023</strong> as a 50/50 joint venture between <strong>Iliad Italia S.p.A.</strong> and <strong>WINDTRE S.p.A.</strong>, created to jointly manage and deploy mobile networks in Italy\'s less densely populated areas.',
    storia_testo_1:
      'Zefiro Net operates in the telecommunications infrastructure sector, managing radio transmission equipment for mobile services specifically in rural and sparsely populated areas of the Italian territory.',
    storia_testo_2:
      'The company oversees the technical management of the physical infrastructure providing mobile radio connectivity across an area equal to approximately <strong>70% of Italian national territory</strong>, serving rural regions where around <strong>26.8% of Italy\'s population</strong> resides.',
    storia_testo_3:
      'Technology sharing (RAN sharing) enables substantial industrial synergies, accelerating the rollout of cutting-edge technologies (5G and 4G) with tangible advantages for local citizens and enterprises in terms of ultra-broadband access.',
    sezione_missione_titolo: 'Our Mission',
    sezione_missione_testo:
      'Bridge the digital divide across Italy by ensuring equal access to modern, resilient, and high-performance mobile networks. Through shared physical access infrastructure (RAN sharing), we optimize investments and accelerate widespread coverage with state-of-the-art 5G technology.',
    sezione_visione_titolo: 'Our Vision',
    sezione_visione_testo:
      'Serve as the national technological benchmark for equitable, inclusive, and environmentally conscious mobile connectivity, ensuring that no community is left behind in Italy\'s digital transformation.',
    sezione_wholesale_titolo: 'B2B Shared Wholesale Operator',
    sezione_wholesale_testo:
      'Zefiro Net operates exclusively as a wholesale network infrastructure provider for its partners. We do not provide direct B2C retail connectivity; instead, we enable partner telecom operators to offer best-in-class services to their subscribers supported by a resilient, secure, and continuously supervised shared network.',
  },
};

export function getChiSiamoData(lang: Locale = 'it'): PageContent {
  return lang === 'en' ? chiSiamoDataEN : chiSiamoDataIT;
}

export function getValoriAziendali(lang: Locale = 'it'): ValoreAziendale[] {
  return lang === 'en' ? valoriAziendaliEN : valoriAziendaliIT;
}
