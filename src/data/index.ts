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

export type { ValoreAziendale } from './chi-siamo';
export type { TecnologiaData, TecnologiaFeature } from './tecnologia';
export type { SostenibilitaData, DocumentoSostenibilita, PilastroPianoESG } from './sostenibilita';

import type { Document } from './types';
import type { Locale } from '@/i18n';
import { getChiSiamoData, getValoriAziendali } from './chi-siamo';
import { getManifestoData } from './manifesto';
import { getSediData } from './sedi';
import { getHighlightsData } from './highlights';
import { getCertificazioniData } from './certificazioni';
import { getTecnologiaData } from './tecnologia';
import { getSostenibilitaData } from './sostenibilita';

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
  1: { title: "Sustainability Report 2025", category: "Sustainability" },
  2: { title: "EcoVadis CSR & ESG Scorecard", category: "Sustainability" },
  3: { title: "Corporate Sustainability Policy", category: "Sustainability" },
  4: { title: "Occupational Health & Safety Policy", category: "Sustainability" },
  5: { title: "Diversity, Equity & Inclusion Policy", category: "Sustainability" },
  6: { title: "ISO 9001:2015 Quality Certificate", category: "Governance" },
  7: { title: "ISO 14001:2015 Environmental Certificate", category: "Sustainability" },
  8: { title: "ISO 45001:2018 Safety Certificate", category: "Sustainability" },
};

const REAL_DOCUMENTS_LIST: Document[] = [
  {
    id: 1,
    title: "Bilancio di Sostenibilità 2025",
    date: "2026-03-16",
    category: "Sostenibilità",
    size: "942 KB",
    fileUrl: "/documents/bilanci/bilancio-sostenibilita-2025.pdf",
  },
  {
    id: 2,
    title: "Scorecard EcoVadis (Rating ESG)",
    date: "2025-10-15",
    category: "Sostenibilità",
    size: "2.7 MB",
    fileUrl: "/documents/certificazioni/scorecard-ecovadis.pdf",
  },
  {
    id: 3,
    title: "Politica di Sostenibilità",
    date: "2025-06-20",
    category: "Sostenibilità",
    size: "1.9 MB",
    fileUrl: "/documents/politiche/politica-sostenibilita.pdf",
  },
  {
    id: 4,
    title: "Politica Salute e Sicurezza sul Lavoro",
    date: "2025-07-10",
    category: "Sostenibilità",
    size: "391 KB",
    fileUrl: "/documents/politiche/politica-salute-e-sicurezza.pdf",
  },
  {
    id: 5,
    title: "Politica Diversity, Equity & Inclusion (DEI)",
    date: "2025-08-01",
    category: "Sostenibilità",
    size: "414 KB",
    fileUrl: "/documents/politiche/politica-diversity-equity-inclusion.pdf",
  },
  {
    id: 6,
    title: "Certificato ISO 9001:2015 (Qualità)",
    date: "2024-11-20",
    category: "Governance",
    size: "1.5 MB",
    fileUrl: "/documents/certificazioni/certificato-iso-9001.pdf",
  },
  {
    id: 7,
    title: "Certificato ISO 14001:2015 (Ambiente)",
    date: "2024-11-20",
    category: "Sostenibilità",
    size: "1.5 MB",
    fileUrl: "/documents/certificazioni/certificato-iso-14001.pdf",
  },
  {
    id: 8,
    title: "Certificato ISO 45001:2018 (Sicurezza)",
    date: "2024-11-20",
    category: "Sostenibilità",
    size: "1.5 MB",
    fileUrl: "/documents/certificazioni/certificato-iso-45001.pdf",
  },
];

// DOCUMENTI
export function getDocuments(lang: Locale = 'it'): Document[] {
  return REAL_DOCUMENTS_LIST.map((doc) => {
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

export function getValori(lang: Locale = 'it') {
  return getValoriAziendali(lang);
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

// TECNOLOGIA
export function getTecnologia(lang: Locale = 'it') {
  return getTecnologiaData(lang);
}

// SOSTENIBILITA
export function getSostenibilita(lang: Locale = 'it') {
  return getSostenibilitaData(lang);
}
