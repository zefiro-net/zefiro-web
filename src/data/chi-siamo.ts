import type { PageContent } from './types';
import type { Locale } from '@/i18n';

export const chiSiamoDataIT: PageContent = {
  id: 10,
  title: 'Chi Siamo',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'Zefiro Net SRL è la joint venture paritetica creata da <strong>WINDTRE</strong> e <strong>Iliad Italia</strong>, nata per gestire e sviluppare congiuntamente la rete di telefonia mobile nelle aree meno densamente popolate d\'Italia.',
    sezione_missione_titolo: 'La nostra missione',
    sezione_missione_testo:
      'La nostra missione è abbattere il digital divide, garantendo a tutto il territorio nazionale l\'accesso a reti di telecomunicazione moderne e performanti. Attraverso la condivisione delle infrastrutture (RAN sharing), ottimizziamo gli investimenti e acceleriamo la copertura delle aree rurali e suburbane con le più recenti tecnologie, a partire dal <strong>5G</strong>.',
    sezione_wholesale_titolo: 'Operatore Wholesale B2B',
    sezione_wholesale_testo:
      'Zefiro Net opera esclusivamente come fornitore di infrastrutture all\'ingrosso (wholesale) per i propri soci. Non forniamo servizi di connettività B2C diretti al pubblico, ma garantiamo che gli operatori partner possano offrire il miglior servizio possibile ai propri clienti, poggiandosi su un\'infrastruttura resiliente, sicura e all\'avanguardia tecnologica.',
  },
};

export const chiSiamoDataEN: PageContent = {
  id: 10,
  title: 'About Us',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'Zefiro Net SRL is the 50/50 joint venture created by <strong>WINDTRE</strong> and <strong>Iliad Italia</strong>, established to jointly manage and expand mobile networks in Italy\'s less densely populated areas.',
    sezione_missione_titolo: 'Our Mission',
    sezione_missione_testo:
      'Our mission is to bridge the digital divide, ensuring equitable access to high-performance, modern telecommunications networks across the entire country. Through shared infrastructure (RAN sharing), we optimize capital investments and accelerate coverage in rural and suburban areas with state-of-the-art technologies, starting with <strong>5G</strong>.',
    sezione_wholesale_titolo: 'B2B Wholesale Provider',
    sezione_wholesale_testo:
      'Zefiro Net operates exclusively as a wholesale infrastructure provider for its partners. We do not provide direct B2C consumer services; instead, we enable partner telecom operators to offer the highest quality service to their customers on a resilient, secure, and technologically advanced shared infrastructure.',
  },
};

export function getChiSiamoData(lang: Locale = 'it'): PageContent {
  return lang === 'en' ? chiSiamoDataEN : chiSiamoDataIT;
}
