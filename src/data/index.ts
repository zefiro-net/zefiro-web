/**
 * Data Provider — Zefiro Net
 *
 * Tutte le funzioni getter per i dati del sito con supporto multilingua (IT/EN).
 */

export type {
  Document,
  PageContent,
  ValoreManifesto,
  Sede,
  Highlight,
  Certificazione,
} from './types';

import type { Document } from './types';
import type { Locale } from '@/i18n';
import { getChiSiamoData } from './chi-siamo';
import { getManifestoData } from './manifesto';
import { getSediData } from './sedi';
import { getHighlightsData } from './highlights';
import { getCertificazioniData } from './certificazioni';
import documentsJson from './documents.json';

// Helper per formattare le date in base alla lingua
function formatDateByLocale(isoDate: string, lang: Locale = 'it'): string {
  const localeStr = lang === 'en' ? 'en-GB' : 'it-IT';
  return new Date(isoDate).toLocaleDateString(localeStr, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

// Translations for documents
const DOC_TITLES_EN: Record<number, { title: string; category: string }> = {
  1: { title: "Annual Financial Report 2024", category: "Finance" },
  2: { title: "Annual Financial Report 2023", category: "Finance" },
  3: { title: "Corporate Governance Report", category: "Governance" },
  4: { title: "Code of Ethics", category: "Governance" },
  5: { title: "Information Security Policy", category: "Security" },
};

// DOCUMENTI
export function getDocuments(lang: Locale = 'it'): Document[] {
  return (documentsJson as Document[]).map((doc) => {
    const enTrans = lang === 'en' ? DOC_TITLES_EN[doc.id] : null;
    return {
      ...doc,
      title: enTrans?.title || doc.title,
      category: enTrans?.category || doc.category,
      date: formatDateByLocale(doc.date, lang),
    };
  });
}

// CHI SIAMO
export function getChiSiamo(lang: Locale = 'it') {
  return getChiSiamoData(lang);
}

// MANIFESTO
export function getManifesto(lang: Locale = 'it') {
  return getManifestoData(lang);
}

// SEDI
export function getSedi(lang: Locale = 'it') {
  return getSediData(lang);
}

// HIGHLIGHTS
export function getHighlights(lang: Locale = 'it') {
  return getHighlightsData(lang);
}

// CERTIFICAZIONI
export function getCertificazioni(lang: Locale = 'it') {
  return getCertificazioniData(lang);
}
