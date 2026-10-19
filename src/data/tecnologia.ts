import type { Locale } from '@/i18n';

export interface TecnologiaFeature {
  id: number;
  titolo: string;
  descrizione: string;
  icona: 'cost' | 'leaf' | 'speed' | 'resilience' | 'antenna' | 'share';
}

export interface TecnologiaData {
  hero: {
    badge: string;
    titolo: string;
    titoloAccento: string;
    sottotitolo: string;
  };
  ranSharing: {
    badge: string;
    titolo: string;
    sottotitolo: string;
    descrizione1: string;
    descrizione2: string;
    architetturaPunti: {
      titolo: string;
      descrizione: string;
    }[];
  };
  vantaggi: {
    titolo: string;
    sottotitolo: string;
    items: TecnologiaFeature[];
  };
  copertura: {
    badge: string;
    titolo: string;
    sottotitolo: string;
    descrizione: string;
    statistiche: {
      valore: string;
      label: string;
      dettaglio: string;
    }[];
  };
}

export const tecnologiaDataIT: TecnologiaData = {
  hero: {
    badge: 'Infrastruttura & Rete',
    titolo: 'Tecnologia ',
    titoloAccento: '- IT',
    sottotitolo:
      'Soluzioni avanzate di RAN Sharing e gestione dell\'infrastruttura radiomobile per accelerare la connettività 5G in Italia, abbattere i costi e ridurre l\'impatto ambientale.',
  },
  ranSharing: {
    badge: 'Architettura di Rete',
    titolo: 'Come funziona il RAN Sharing',
    sottotitolo: 'La condivisione intelligente dell\'accesso radio per un\'Italia senza disuguaglianze digitali.',
    descrizione1:
      'Il Radio Access Network (RAN) Sharing è un modello di cooperazione tecnologica in cui due o più operatori mobili condividono fisicamente l\'infrastruttura della rete di accesso: tralicci, torri, antenne, apparati ricetrasmittenti, sistemi di alimentazione ausiliaria e rilegamento (backhauling).',
    descrizione2:
      'Le reti Core (Core Network), i server di autenticazione e le piattaforme di servizio dei soci (WINDTRE e Iliad) rimangono rigorosamente indipendenti e separati. In questo modo ciascun operatore gestisce in piena autonomia le proprie offerte, il traffico e i servizi commerciali, sfruttando un\'infrastruttura di accesso unificata, efficiente e sostenibile.',
    architetturaPunti: [
      {
        titolo: 'Apparati Radio Condivisi',
        descrizione: 'Antenne multibanda e apparati di trasmissione di ultima generazione operativi su frequenze 4G e 5G.',
      },
      {
        titolo: 'Infrastruttura Passiva Unica',
        descrizione: 'Un solo palo/traliccio, un solo cabinet tecnologico e un\'unica alimentazione elettrica per più operatori.',
      },
      {
        titolo: 'Core Network Indipendenti',
        descrizione: 'Ciascun socio gestisce autonomamente il proprio nucleo di rete, la tariffazione, la privacy e i servizi al cliente.',
      },
    ],
  },
  vantaggi: {
    titolo: 'Perché Zefiro Net adotta il RAN Sharing',
    sottotitolo: 'I quattro pilastri che rendono il nostro modello industriale vantaggioso e sostenibile.',
    items: [
      {
        id: 1,
        titolo: 'Abbattimento dei Costi (CapEx & OpEx)',
        descrizione:
          'Elimina la duplicazione degli investimenti infrastrutturali e dimezza i costi operativi (manutenzione, canoni di locazione del suolo, fornitura elettrica), rendendo sostenibili gli investimenti nelle aree a minore densità.',
        icona: 'cost',
      },
      {
        id: 2,
        titolo: 'Sostenibilità & Minore Impatto Ambientale',
        descrizione:
          'Dimezzare il numero di antenne fisiche salvaguarda il paesaggio naturale dei borghi italiani, abbatte i consumi energetici complessivi e riduce l\'impatto elettromagnetico cumulativo.',
        icona: 'leaf',
      },
      {
        id: 3,
        titolo: 'Accelerazione 5G nelle Aree Rurali',
        descrizione:
          'Permette di portare la connettività ultra-broadband e le frequenze 5G nelle aree a fallimento di mercato con una rapidità impensabile con singole reti concorrenti duplicate.',
        icona: 'speed',
      },
      {
        id: 4,
        titolo: 'Resilienza e Monitoraggio 24/7',
        descrizione:
          'La rete è gestita con un presidio continuativo dei KPI prestazionali (copertura, disponibilità, latenza) con interventi operativi tempestivi per la massima continuità di servizio.',
        icona: 'resilience',
      },
    ],
  },
  copertura: {
    badge: 'Capillarità Nazionale',
    titolo: 'Copertura del 70% del Territorio Italiano',
    sottotitolo: 'Garantiamo la connettività mobile nelle zone a minore densità abitativa del Paese.',
    descrizione:
      'Zefiro Net gestisce tecnicamente gli impianti radiomobili in un\'area che si estende su circa il 70% della superficie geografica italiana, raggiungendo le comunità locali, i piccoli comuni e le aree montane in cui risiede circa il 26,8% della popolazione (oltre 16 milioni di cittadini). Attraverso circa 7.000 siti attivi, assicuriamo che la transizione digitale sia equa e accessibile ovunque.',
    statistiche: [
      {
        valore: '70%',
        label: 'Territorio Italiano Coperto',
        dettaglio: 'Focalizzato su aree rurali e meno densamente popolate',
      },
      {
        valore: '~7.000',
        label: 'Siti & Torri Radiomobili',
        dettaglio: 'Impianti attivi costantemente modernizzati con tecnologia 5G',
      },
      {
        valore: '26,8%',
        label: 'Popolazione Residente Servita',
        dettaglio: 'Circa 16 milioni di persone connesse alla banda ultra-larga',
      },
    ],
  },
};

export const tecnologiaDataEN: TecnologiaData = {
  hero: {
    badge: 'Infrastructure & Network',
    titolo: 'Technology ',
    titoloAccento: '- IT',
    sottotitolo:
      'Advanced RAN Sharing solutions and mobile infrastructure management accelerating 5G deployment across Italy, optimizing capital expenditure, and reducing environmental footprint.',
  },
  ranSharing: {
    badge: 'Network Architecture',
    titolo: 'How RAN Sharing Works',
    sottotitolo: 'Intelligent radio access sharing for an Italy without digital divides.',
    descrizione1:
      'Radio Access Network (RAN) Sharing is a technological cooperation framework where telecom operators physically share access network infrastructure: towers, masts, antennas, transceiver equipment, backup power, and backhaul transmission.',
    descrizione2:
      'Core Networks, authentication servers, and customer service platforms of partner operators (WINDTRE and Iliad) remain strictly autonomous and separated. Each partner maintains full independence over commercial offerings and subscriber services while operating on a unified, highly efficient, and sustainable access layer.',
    architetturaPunti: [
      {
        titolo: 'Shared Radio Equipment',
        descrizione: 'Multiband antennas and state-of-the-art transceivers operating on 4G and 5G spectrum.',
      },
      {
        titolo: 'Unified Passive Infrastructure',
        descrizione: 'A single mast/tower, single tech shelter, and shared power grid serving multiple operators.',
      },
      {
        titolo: 'Independent Core Networks',
        descrizione: 'Each operator independently manages core services, routing, privacy, and retail subscribers.',
      },
    ],
  },
  vantaggi: {
    titolo: 'Why Zefiro Net Adopts RAN Sharing',
    sottotitolo: 'The four cornerstones of our industrially efficient and sustainable model.',
    items: [
      {
        id: 1,
        titolo: 'Cost Optimization (CapEx & OpEx)',
        descrizione:
          'Eliminating duplicate infrastructure capital expenditure while drastically lowering operational costs (maintenance, land lease, power consumption) across lower-density territories.',
        icona: 'cost',
      },
      {
        id: 2,
        titolo: 'Sustainability & Environmental Protection',
        descrizione:
          'Halving the number of physical towers preserves natural landscapes, cuts overall grid power consumption, and reduces cumulative electromagnetic footprint.',
        icona: 'leaf',
      },
      {
        id: 3,
        titolo: 'Accelerated 5G in Rural Regions',
        descrizione:
          'Enables ultra-broadband connectivity and 5G spectrum rollout across market-failure regions at a pace unattainable via standalone duplicate networks.',
        icona: 'speed',
      },
      {
        id: 4,
        titolo: 'Resilience & 24/7 Monitoring',
        descrizione:
          'The entire radio network is monitored round the clock for key performance indicators (coverage, availability, latency) ensuring maximum operational continuity.',
        icona: 'resilience',
      },
    ],
  },
  copertura: {
    badge: 'National Reach',
    titolo: '70% Italian Territorial Coverage',
    sottotitolo: 'Delivering mobile connectivity across Italy\'s less densely populated regions.',
    descrizione:
      'Zefiro Net technically oversees mobile radio infrastructure spanning approximately 70% of Italian geographical territory, reaching rural towns, mountain areas, and communities where 26.8% of the national population resides (over 16 million citizens). Through roughly 7,000 active sites, we ensure Italy\'s digital transition leaves no area behind.',
    statistiche: [
      {
        valore: '70%',
        label: 'Italian Territory Covered',
        dettaglio: 'Dedicated to rural and lower-density areas',
      },
      {
        valore: '~7,000',
        label: 'Active Sites & Towers',
        dettaglio: 'Continuously upgraded mobile sites enabled with 5G technology',
      },
      {
        valore: '26.8%',
        label: 'Resident Population Served',
        dettaglio: 'Over 16 million citizens connected to ultra-broadband',
      },
    ],
  },
};

export function getTecnologiaData(lang: Locale = 'it'): TecnologiaData {
  return lang === 'en' ? tecnologiaDataEN : tecnologiaDataIT;
}
