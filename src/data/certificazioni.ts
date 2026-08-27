import type { Certificazione } from './types';
import type { Locale } from '@/i18n';

export const certificazioniDataIT: Certificazione[] = [
  {
    id: 401,
    titolo: 'Rating ESG',
    descrizione:
      'Zefiro Net si impegna a integrare criteri ambientali, sociali e di governance (ESG) in tutti i processi decisionali e operativi.',
    icona: 'esg',
    ordine: 1,
  },
  {
    id: 402,
    titolo: 'Modello 231',
    descrizione:
      'Abbiamo adottato un Modello di Organizzazione, Gestione e Controllo ai sensi del D.Lgs. 231/01 per prevenire la commissione di reati.',
    icona: 'law',
    ordine: 2,
  },
  {
    id: 403,
    titolo: 'Certificazione ISO 9001',
    descrizione:
      'Il nostro Sistema di Gestione per la Qualità è certificato ISO 9001, garantendo standard eccellenti in ogni fase delle nostre attività.',
    icona: 'iso',
    ordine: 3,
  },
];

export const certificazioniDataEN: Certificazione[] = [
  {
    id: 401,
    titolo: 'ESG Rating',
    descrizione:
      'Zefiro Net is committed to embedding environmental, social, and governance (ESG) criteria across all operational and strategic decisions.',
    icona: 'esg',
    ordine: 1,
  },
  {
    id: 402,
    titolo: 'Organizational Model 231',
    descrizione:
      'We operate under an advanced Organization, Management, and Control Model pursuant to Italian Legislative Decree 231/01 to ensure corporate integrity.',
    icona: 'law',
    ordine: 2,
  },
  {
    id: 403,
    titolo: 'ISO 9001 Certification',
    descrizione:
      'Our Quality Management System is ISO 9001 certified, ensuring rigorous and certified standards across all infrastructure activities.',
    icona: 'iso',
    ordine: 3,
  },
];

export function getCertificazioniData(lang: Locale = 'it'): Certificazione[] {
  return lang === 'en' ? certificazioniDataEN : certificazioniDataIT;
}
