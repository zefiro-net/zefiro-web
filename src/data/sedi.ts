import type { Sede } from './types';
import type { Locale } from '@/i18n';

export const sediDataIT: Sede[] = [
  {
    id: 201,
    nome: 'Il Pharo',
    tipo: 'Sede Legale e Operativa',
    citta: 'Milano',
    indirizzo: 'Via Gattamelata, 34',
    cap: '20149',
    provincia: 'MI',
    emailContatto: 'amministrazione@zefironet.it',
    labelEmail: 'Sede Legale e Amministrazione',
    descrizione: 'Sede legale principale e centro direzionale e operativo di Zefiro Net.',
    immagine: '',
  },
  {
    id: 202,
    nome: 'Ufficio Operativo',
    tipo: 'Sede Operativa',
    citta: 'Roma',
    indirizzo: 'Via Luca Gaurico, 9/11',
    cap: '00143',
    provincia: 'RM',
    emailContatto: 'info@zefironet.it',
    labelEmail: 'Sede Operativa',
    descrizione: 'Ufficio operativo e polo di coordinamento di Zefiro Net a Roma.',
    immagine: '',
  },
];

export const sediDataEN: Sede[] = [
  {
    id: 201,
    nome: 'Il Pharo',
    tipo: 'Registered & Operational HQ',
    citta: 'Milan',
    indirizzo: 'Via Gattamelata, 34',
    cap: '20149',
    provincia: 'MI',
    emailContatto: 'amministrazione@zefironet.it',
    labelEmail: 'Registered HQ & Administration',
    descrizione: 'Principal registered office, management headquarters, and operational centre of Zefiro Net.',
    immagine: '',
  },
  {
    id: 202,
    nome: 'Operations Hub',
    tipo: 'Operational Office',
    citta: 'Rome',
    indirizzo: 'Via Luca Gaurico, 9/11',
    cap: '00143',
    provincia: 'RM',
    emailContatto: 'info@zefironet.it',
    labelEmail: 'Operational Office',
    descrizione: 'Operational hub and network coordination office of Zefiro Net in Rome.',
    immagine: '',
  },
];

export function getSediData(lang: Locale = 'it'): Sede[] {
  return lang === 'en' ? sediDataEN : sediDataIT;
}
