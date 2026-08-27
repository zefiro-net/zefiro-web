import type { Highlight } from './types';
import type { Locale } from '@/i18n';

export const highlightsDataIT: Highlight[] = [
  {
    id: 301,
    titolo: 'Copertura 5G Capillare',
    descrizione:
      'Infrastrutture radiomobili avanzate per abilitare la connettività ultra-broadband nelle aree rurali e a fallimento di mercato.',
    icona: 'signal',
    ordine: 1,
  },
  {
    id: 302,
    titolo: 'Modello Wholesale Condiviso',
    descrizione:
      'Condivisione efficiente della rete di accesso tra operatori per ottimizzare gli investimenti e ridurre l\'impatto ambientale.',
    icona: 'network',
    ordine: 2,
  },
  {
    id: 303,
    titolo: 'Affidabilità e Resilienza',
    descrizione:
      'Controllo e monitoraggio continuativo 24/7 per garantire la massima continuità operativa e tempi di intervento immediati.',
    icona: 'shield',
    ordine: 3,
  },
];

export const highlightsDataEN: Highlight[] = [
  {
    id: 301,
    titolo: 'Widespread 5G Coverage',
    descrizione:
      'Advanced mobile infrastructure enabling ultra-broadband connectivity across rural and market-failure regions.',
    icona: 'signal',
    ordine: 1,
  },
  {
    id: 302,
    titolo: 'Shared Wholesale Model',
    descrizione:
      'Efficient access network sharing between operators to optimize investments and minimize environmental impact.',
    icona: 'network',
    ordine: 2,
  },
  {
    id: 303,
    titolo: 'Reliability & Resilience',
    descrizione:
      'Continuous 24/7 monitoring and control to guarantee maximum operational continuity and rapid response times.',
    icona: 'shield',
    ordine: 3,
  },
];

export function getHighlightsData(lang: Locale = 'it'): Highlight[] {
  return lang === 'en' ? highlightsDataEN : highlightsDataIT;
}
