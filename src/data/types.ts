/**
 * Tipi TypeScript per i dati del sito Zefiro Net.
 * Questi tipi sono usati direttamente dai componenti React.
 */

// --- Documento scaricabile ---
export interface Document {
  id: number;
  title: string;
  date: string;
  category: string;
  size: string;
  fileUrl: string;
}

// --- Contenuto di una pagina istituzionale ---
export interface PageContent {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  acf: Record<string, string>;
}

// --- Valore del Manifesto ---
export interface ValoreManifesto {
  id: number;
  numero: string;
  titolo: string;
  descrizione: string;
  coloreIcona: 'cyan' | 'teal' | 'gray';
}

// --- Sede ---
export interface Sede {
  id: number;
  nome: string;
  tipo: string;
  citta: string;
  indirizzo: string;
  cap: string;
  provincia: string;
  emailContatto: string;
  labelEmail: string;
  descrizione: string;
  immagine?: string;
}

// --- Highlight Homepage ---
export interface Highlight {
  id: number;
  titolo: string;
  descrizione: string;
  icona: 'shield' | 'signal' | 'network';
  ordine: number;
}

// --- Certificazione ---
export interface Certificazione {
  id: number;
  titolo: string;
  descrizione: string;
  icona: string;
  ordine: number;
}
