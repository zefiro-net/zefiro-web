<div align="center">

  <img src="public/images/zefiro-symbol.png" alt="Zefiro Net Logo" width="120" />

  # ZEFIRO NET — Sito Istituzionale Ufficiale
  ### *Connettere in un soffio.*

  [![Next.js 16](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React 19](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Three.js](https://img.shields.io/badge/Three.js-3D_WebGL-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)
  [![GDPR Compliant](https://img.shields.io/badge/GDPR-Compliant-00CEDB?style=for-the-badge)](https://gdpr.eu/)
  [![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

  <p align="center">
    <strong>Piattaforma web corporate di Zefiro Net S.r.l.</strong><br/>
    La joint venture 50/50 tra <strong>WINDTRE</strong> e <strong>Iliad Italia</strong> dedicata alla gestione e sviluppo della rete radiomobile 5G e infrastrutture wholesale nelle aree rurali e a fallimento di mercato in Italia.
  </p>

  <p align="center">
    <a href="#-panoramica-del-progetto">Panoramica</a> •
    <a href="#-caratteristiche-principali">Caratteristiche</a> •
    <a href="#-architettura--struttura-del-progetto">Struttura</a> •
    <a href="#-avvio-in-locale">Installazione</a> •
    <a href="#-documentazione-aziendale--hr">Documentazione HR</a> •
    <a href="#-conformità-legale--sicurezza">Conformità & Privacy</a>
  </p>

</div>

---

## 📡 Panoramica del Progetto

**Zefiro Net S.r.l.** è la joint venture paritetica creata dai due principali operatori di telecomunicazioni in Italia (**WINDTRE** e **Iliad Italia**) per gestire e potenziare congiuntamente la rete mobile di accesso (RAN sharing) nelle aree meno densamente popolate del territorio nazionale.

### 📊 Numeri Chiave dell'Infrastruttura
- **70%** del territorio nazionale coperto (aree rurali e piccoli comuni).
- **~7.000** siti di trasmissione e torri radiomobili attive.
- **100% Wholesale-Only condiviso**, aperto ai servizi 5G di nuova generazione.

---

## ✨ Caratteristiche Principali

### 🎨 Design & User Experience
- **Identità Visiva Istituzionale:** Palette colori ufficiale basata sul *Deep Teal* (`#17556A`) e *Zefiro Cyan* (`#00CEDB`).
- **Canvas 3D Interattivo:** Antenna radiomobile tridimensionale renderizzata in tempo reale con **Three.js** e **React Three Fiber**.
- **Mappa Vettoriale Ultra-HD:** Rappresentazione grafica interattiva della copertura rurale italiana in risoluzione Retina/4K.
- **Dark & Light Mode:** Supporto nativo al tema scuro e chiaro con rilevamento delle preferenze di sistema.
- **Scroll & Micro-Animazioni:** Transizioni fluide basate su **Framer Motion** e pulsante di scorrimento angolare minimale.

### 🌐 Internazionalizzazione (i18n)
- **100% Bilingue (Italiano 🇮🇹 / Inglese 🇬🇧)** con routing statico ad altissime prestazioni (`/it` e `/en`).
- Dizionari modulari JSON per una rapida manutenzione e aggiornamento dei testi.

### 📄 Sezioni e Pagine Incluse
1. **Home Page:** Hero banner fullscreen con antenna 3D, mappa interattiva di copertura e punti di forza (Highlights).
2. **Chi Siamo:** Modello di joint venture, missione contro il digital divide, modello wholesale B2B, soci paritetici (WINDTRE & Iliad) e certificazioni ESG/231/ISO 9001.
3. **Sedi:** Hub direzionale di Milano (*Il Pharo*, Via Gattamelata) e polo operativo di Roma (*Via Luca Gaurico*).
4. **Manifesto:** I 5 pilastri valoriali (*Inclusione Digitale, Sostenibilità, Eccellenza B2B, Innovazione Responsabile, Integrità*).
5. **Lavora con Noi:** Valori People, posizioni aperte e modulo per candidature spontanee.
6. **Documenti Pubblici:** Area documentale con filtri per categoria (*Finanza, Governance, Sicurezza*) per il download dei PDF societari.
7. **Pagine Legali:** *Privacy Policy* e *Cookie Policy* conformi alle Linee Guida del Garante Privacy.
8. **Pagina 404:** Schermata di errore a tema telecomunicazioni (*"Nessun segnale su questa frequenza"*).

---

## 📂 Architettura & Struttura del Progetto

```
zefiro-web/
├── contenuti da inserire HR/                # 📋 Cartella di lavoro per il team HR e Comunicazione
│   ├── CONTENUTI_SITO_ZEFIRO_TEMPLATE_HR.docx # Documento Word con screenshot per approvazione testi
│   ├── CONTENUTI_SITO_ZEFIRO_TEMPLATE_HR.md   # Versione testuale per consultazione rapida
│   ├── ISTRUZIONI_PER_HR_E_COMUNICAZIONE.md   # Istruzioni operative di consegna
│   ├── cartella_pdf_da_allegare/             # Cartella per i PDF societari ufficiali
│   └── screenshot_sezioni/                    # Screenshot HD di tutte le sezioni del sito
│
├── documentazione aziendale e brand/         # 🏢 Asset e linee guida societarie
│   ├── Brand_Guidelines_Zefiro_Net.docx       # Linee guida identità visiva, colori e logo
│   └── Struttura_Funzioni_Zefiro_Net.docx     # Organigramma e funzioni aziendali
│
├── documentazione tecnica/                   # 🛠️ Documentazione per sviluppatori
│   ├── Manuale_Tecnico_Completo.md            # Manuale tecnico architetturale
│   └── generate_pdf.py                        # Script di generazione documentale
│
├── public/                                   # 🖼️ Asset statici pubblici
│   ├── favicon.ico, apple-touch-icon.png      # Favicon e icone ufficiali per tutti i dispositivi
│   ├── og-image.jpg                           # Scheda di anteprima per WhatsApp/LinkedIn (1200x630)
│   ├── images/                                # Mappe e grafiche in alta risoluzione
│   └── robots.txt                             # Configurazione per i crawler dei motori di ricerca
│
└── src/
    ├── app/                                  # Next.js App Router
    │   ├── [lang]/                           # Pagine localizzate (/it e /en)
    │   │   ├── chi-siamo/                    # Pagina Chi Siamo
    │   │   ├── sedi/                         # Pagina Sedi
    │   │   ├── manifesto/                    # Pagina Manifesto
    │   │   ├── lavora-con-noi/               # Pagina Carriere & HR
    │   │   ├── documenti/                    # Pagina Documenti Pubblici
    │   │   ├── privacy-policy/               # Pagina Privacy Policy GDPR
    │   │   ├── cookie-policy/                # Pagina Cookie Policy
    │   │   └── page.tsx                      # Homepage con 3D e Mappa
    │   ├── not-found.tsx                     # Pagina 404 brandizzata
    │   └── layout.tsx                        # Root layout con metadati e font Geist
    ├── components/                           # Componenti riutilizzabili (Header, Footer, CookieBanner, Mappa)
    │   └── animations/                       # Componenti 3D Three.js e animazioni Framer Motion
    ├── data/                                 # Dataset tipizzati (Highlights, Manifesto, Sedi, Certificazioni)
    ├── dictionaries/                         # Dizionari multilingua (it.json, en.json)
    └── i18n.ts                               # Configurazione internazionalizzazione
```

---

## 🚀 Avvio in Locale

### Prerequisiti
- **Node.js** versione 20.x o superiore
- **npm** versione 10.x o superiore

### 1. Clona il Repository
```bash
git clone https://github.com/zefiro-net/zefiro-web.git
cd zefiro-web
```

### 2. Installa le Dipendenze
```bash
npm install
```

### 3. Avvia il Server di Sviluppo
Il comando è compatibile al 100% sia su **macOS/Linux** che su **Windows (PowerShell / CMD)**:
```bash
npm run dev
```

Apri **[http://localhost:3000](http://localhost:3000)** nel browser per visualizzare l'applicazione.

### 4. Build per la Produzione
Per testare la versione di produzione ad altissima velocità:
```bash
npm run build
npm run start
```

---

## 🛡️ Conformità Legale & Sicurezza

- **Conformità GDPR (Regolamento UE 2016/679):**
  - Il sito utilizza **esclusivamente cookie tecnici** necessari al funzionamento (gestione tema e lingua), senza strumenti di tracciamento pubblicitario o profilazione di terze parti.
  - È integrato un **Cookie Banner fluttuante** con memorizzazione locale della preferenza.
- **Dati Societari Obbligatori (Art. 2250 C.C.):**
  - Footer predisposto con tutti i campi obbligatori per legge (*Ragione Sociale, Sede Legale, P.IVA, C.F., Capitale Sociale, REA, PEC*).
- **Protezione No-Index per Staging:**
  - Tripla barriera attiva (*robots.txt*, header HTTP *X-Robots-Tag* e meta tag *googlebot*) per prevenire l'indicizzazione su Google durante la fase di revisione.

---

## 🏛️ Dati Societari

**Zefiro Net S.r.l.**  
*Joint venture paritetica 50% WINDTRE — 50% Iliad Italia*  
- **Sede Legale & Direzionale:** Milano (MI), Via Gattamelata, 34 (*Il Pharo*) — 20149  
- **Polo Operativo:** Roma (RM), Via Luca Gaurico, 9/11 — 00143  
- **Canali Ufficiali:** `info@zefironet.it` • `amministrazione@zefironet.it` • `candidatura@zefironet.it`

---
<div align="center">
  <small>&copy; 2026 Zefiro Net S.r.l. Tutti i diritti riservati.</small>
</div>
