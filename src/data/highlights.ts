import type { Highlight } from './types';
import type { Locale } from '@/i18n';

export const highlightsDataIT: Highlight[] = [
  {
    id: 301,
    titolo: 'Copertura 5G Capillare',
    descrizione:
      'Infrastrutture radiomobili avanzate per abilitare la connettività ultra-broadband nelle aree rurali e a fallimento di mercato, coprendo il 70% del territorio.',
    icona: 'signal',
    ordine: 1,
  },
  {
    id: 302,
    titolo: 'RAN Sharing Sostenibile',
    descrizione:
      'Condivisione efficiente della rete di accesso tra operatori per ottimizzare gli investimenti, dimezzare le emissioni e salvaguardare il paesaggio.',
    icona: 'network',
    ordine: 2,
  },
  {
    id: 303,
    titolo: 'Affidabilità e Resilienza 24/7',
    descrizione:
      'Controllo e monitoraggio continuativo h24 dei parametri prestazionali per garantire la massima continuità operativa e tempi di intervento immediati.',
    icona: 'shield',
    ordine: 3,
  },
];

export const highlightsDataEN: Highlight[] = [
  {
    id: 301,
    titolo: 'Widespread 5G Coverage',
    descrizione:
      'Advanced mobile infrastructure enabling ultra-broadband connectivity across rural and market-failure regions, covering 70% of Italy.',
    icona: 'signal',
    ordine: 1,
  },
  {
    id: 302,
    titolo: 'Sustainable RAN Sharing',
    descrizione:
      'Efficient access network sharing between operators to optimize capital expenditure, halve emissions, and protect local landscapes.',
    icona: 'network',
    ordine: 2,
  },
  {
    id: 303,
    titolo: '24/7 Reliability & Resilience',
    descrizione:
      'Continuous round-the-clock monitoring of network KPIs to guarantee maximum operational continuity and rapid emergency response.',
    icona: 'shield',
    ordine: 3,
  },
];

export function getHighlightsData(lang: Locale = 'it'): Highlight[] {
  return lang === 'en' ? highlightsDataEN : highlightsDataIT;
}
