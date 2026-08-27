import type { PageContent, ValoreManifesto } from './types';
import type { Locale } from '@/i18n';

export const manifestoPageIT: PageContent = {
  id: 11,
  title: 'Il nostro Manifesto',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'Crediamo in un\'Italia connessa, senza distinzioni geografiche. Lavoriamo "dietro le quinte" affinché la digitalizzazione diventi una realtà concreta per tutti.',
  },
};

export const manifestoPageEN: PageContent = {
  id: 11,
  title: 'Our Manifesto',
  content: '',
  excerpt: '',
  acf: {
    sottotitolo:
      'We believe in a seamlessly connected Italy without geographical disparities. We work "behind the scenes" to make digitization a tangible reality for everyone.',
  },
};

export const valoriManifestoIT: ValoreManifesto[] = [
  {
    id: 101,
    numero: '1',
    titolo: 'Inclusione Digitale',
    descrizione:
      'Le aree meno densamente popolate meritano le stesse opportunità dei grandi centri urbani. La nostra infrastruttura è la base su cui si costruisce l\'inclusione digitale del Paese.',
    coloreIcona: 'cyan',
  },
  {
    id: 102,
    numero: '2',
    titolo: 'Sostenibilità e Condivisione',
    descrizione:
      'Il modello della joint venture e del RAN sharing riduce l\'impatto ambientale e paesaggistico. Costruiamo una rete unica per più operatori, ottimizzando risorse e limitando la proliferazione di antenne.',
    coloreIcona: 'teal',
  },
  {
    id: 103,
    numero: '3',
    titolo: 'Eccellenza B2B',
    descrizione:
      'Come operatore wholesale, la nostra responsabilità è verso i nostri soci e, indirettamente, verso i loro clienti. Garantiamo i massimi standard di affidabilità, sicurezza informativa e innovazione tecnologica.',
    coloreIcona: 'gray',
  },
  {
    id: 104,
    numero: '4',
    titolo: 'Innovazione Responsabile',
    descrizione:
      'Sperimentiamo tecnologie all\'avanguardia come il 5G con l\'obiettivo di migliorare la vita delle persone, rispettando sempre i più alti standard di sicurezza e privacy.',
    coloreIcona: 'cyan',
  },
  {
    id: 105,
    numero: '5',
    titolo: 'Integrità e Trasparenza',
    descrizione:
      'Operiamo con la massima onestà e chiarezza nei confronti dei nostri soci, dei partner e della collettività, promuovendo una governance solida e affidabile.',
    coloreIcona: 'teal',
  },
];

export const valoriManifestoEN: ValoreManifesto[] = [
  {
    id: 101,
    numero: '1',
    titolo: 'Digital Inclusion',
    descrizione:
      'Less populated regions deserve the exact same opportunities as major metropolitan centres. Our infrastructure forms the bedrock of Italy\'s nationwide digital inclusion.',
    coloreIcona: 'cyan',
  },
  {
    id: 102,
    numero: '2',
    titolo: 'Sustainability & Infrastructure Sharing',
    descrizione:
      'Our joint venture and RAN sharing model significantly reduces environmental and visual footprint. We build a unified network for multiple operators, optimizing resources and preventing antenna proliferation.',
    coloreIcona: 'teal',
  },
  {
    id: 103,
    numero: '3',
    titolo: 'B2B Excellence',
    descrizione:
      'As a wholesale operator, our commitment is to our partners and their subscribers. We guarantee the highest benchmarks in network reliability, cybersecurity, and technological innovation.',
    coloreIcona: 'gray',
  },
  {
    id: 104,
    numero: '4',
    titolo: 'Responsible Innovation',
    descrizione:
      'We pioneer next-gen technologies such as 5G to empower communities and businesses, strictly adhering to the highest standards of safety, privacy, and performance.',
    coloreIcona: 'cyan',
  },
  {
    id: 105,
    numero: '5',
    titolo: 'Integrity & Transparency',
    descrizione:
      'We conduct our operations with absolute honesty, clarity, and accountability towards partners, institutions, and society, fostering solid corporate governance.',
    coloreIcona: 'teal',
  },
];

export function getManifestoData(lang: Locale = 'it') {
  return {
    pagina: lang === 'en' ? manifestoPageEN : manifestoPageIT,
    valori: lang === 'en' ? valoriManifestoEN : valoriManifestoIT,
  };
}
