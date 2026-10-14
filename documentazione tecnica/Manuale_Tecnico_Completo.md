# Manuale Tecnico, Architetturale e di Sicurezza — Zefiro Net Web Platform
**Documentazione Tecnica Completa per Sviluppatori, System Administrator, Auditor e CISO**  
*Versione 1.1.0 — Ottobre 2026 (Hardened & NIS2 Compliant)*  
*Target: Zefiro Net S.r.l. — Infrastrutture di Telecomunicazione Wholesale 5G*

---

## Indice Generale

1. [Quadro Esecutivo e Scheda Tecnica del Progetto](#1-quadro-esecutivo-e-scheda-tecnica-del-progetto)
2. [Architettura Software e Paradigma Jamstack Zero-Backend](#2-architettura-software-e-paradigma-jamstack-zero-backend)
3. [Albero Dettagliato delle Directory e Mappa dei Componenti](#3-albero-dettagliato-delle-directory-e-mappa-dei-componenti)
4. [Infrastruttura di Hosting, Rete e Content Delivery Network (CDN)](#4-infrastruttura-di-hosting-rete-e-content-delivery-network-cdn)
5. [Architettura di Sicurezza, Hardening e Conformità NIS2](#5-architettura-di-sicurezza-hardening-e-conformità-nis2)
6. [Data Layer, Internazionalizzazione (i18n) e Whistleblowing](#6-data-layer-internazionalizzazione-i18n-e-whistleblowing)
7. [Design System, UX/UI, Accessibilità e Motore Grafico 3D](#7-design-system-uxui-accessibilità-e-motore-grafico-3d)
8. [Pipeline CI/CD, Build Automation e Procedura di Deployment](#8-pipeline-cicd-build-automation-e-procedura-di-deployment)
9. [Manuale Operativo di Gestione dei Contenuti (Senza CMS)](#9-manuale-operativo-di-gestione-dei-contenuti-senza-cms)
10. [Risoluzione dei Problemi (Troubleshooting) e Monitoraggio](#10-risoluzione-dei-problemi-troubleshooting-e-monitoraggio)

---

## 1. Quadro Esecutivo e Scheda Tecnica del Progetto

Zefiro Net S.r.l. è la joint venture paritetica costituita tra due dei principali operatori di telecomunicazioni nazionali (Iliad Italia e WINDTRE) per la gestione e lo sviluppo congiunto delle reti mobili e 5G in tecnologia RAN Sharing nelle aree meno densamente popolate d'Italia.

### 1.1 Finalità del Portale Web
Il portale istituzionale ha lo scopo di:
- Presentare l'identità societaria, la missione industriale, i valori e la copertura territoriale dell'infrastruttura di rete.
- Fornire la sezione trasparente di **Documenti Pubblici** (Bilanci, Relazioni di Corporate Governance, Modello 231, Politica per la Sicurezza delle Informazioni).
- Offrire il canale di recruiting istituzionale (*Lavora con noi*).
- Integrare l'accesso alla piattaforma certificata di **Whistleblowing** ai sensi del D.Lgs. 24/2023.
- Soddisfare i requisiti di trasparenza, accessibilità e sicurezza previsti per i **Soggetti Essenziali** dalla **Direttiva NIS2 (UE 2022/2555)** e dal **D.Lgs. 138/2024**.

### 1.2 Tabella Stack Tecnologico Aggiornato

| Livello / Componente | Tecnologia Adottata | Versione | Finalità Architetturale |
| :--- | :--- | :---: | :--- |
| **Framework Applicativo** | Next.js (App Router) | **16.4.0** | Prerendering statico (SSG), routing e proxying sicuro |
| **Libreria Core UI** | React / React DOM | **19.2.4** | Architettura a componenti dichiarativa e reattiva |
| **Linguaggio di Programmazione** | TypeScript | **^5.0.0** | Tipizzazione statica rigida su dati, layout e componenti |
| **Engine di Stile** | Tailwind CSS | **^4.0.0** | Styling utility-first moderno con compilazione ad alte prestazioni |
| **Grafica 3D WebGL** | Three.js / @react-three/fiber | **0.184.0 / 9.6.0** | Rendering hardware-accelerated delle animazioni dell'antenna 5G e DataBreath |
| **Helper Grafici 3D** | @react-three/drei / three-stdlib | **10.7.7 / 2.36.1** | Gestione mesh, camera controls e loader dei file OBJ/GLTF |
| **Motion & Transizioni** | Framer Motion | **^12.38.0** | Animazioni fluide su scroll, fade-in ed effetti parallasse 2D |
| **Bundler & Tooling** | Turbopack | Integrato | Compilazione HMR istantanea e tree-shaking aggressivo |
| **Linter & Code Quality** | ESLint / eslint-config-next | **^9.0.0 / 16.4.0** | Verifica della sintassi, standard di qualità e pulizia del codice |

---

## 2. Architettura Software e Paradigma Jamstack Zero-Backend

Il portale Zefiro Net rifiuta deliberatamente l'architettura classica a tre livelli (*Web Server + Application Server + Relational Database*) a favore del paradigma **Jamstack (JavaScript, APIs, Pre-rendered Markup)**.

```
+------------------------------------------------------------------------------------+
|                       FLUSSO DI GENERAZIONE STATICA (SSG)                          |
+------------------------------------------------------------------------------------+
|                                                                                    |
|  [Codice Sorgente TSX]    [File Dati Tipizzati]    [Dizionari i18n JSON]           |
|  (Layouts & Components)   (src/data/*.ts, *.json)  (it.json / en.json)             |
|            │                         │                       │                     |
|            └─────────────────────────┼───────────────────────┘                     |
|                                      ▼                                             |
|                      [Next.js 16.4 Build Compiler]                                 |
|                       (generateStaticParams & SSG)                                 |
|                                      │                                             |
|                                      ▼                                             |
|               [Asset Statici Immutabili Prerenderizzati]                           |
|               - Pagine HTML pure (.html) per ogni lingua                           |
|               - Chunks CSS Tailwind compilati & minificati                         |
|               - Bundle JavaScript client ottimizzati per React 19                  |
|               - Modelli 3D, immagini e icone (.svg, .obj, .webp)                   |
|                                      │                                             |
|                                      ▼                                             |
|                 [Edge CDN / Anycast Reverse Proxy / WAF]                           |
|                   (Cloudflare / AWS CloudFront / Vercel)                           |
|                                      │                                             |
|                     Distribuzione Globale TLS 1.3 / HSTS                           |
|                                      ▼                                             |
|                              [Utente Finale]                                       |
+------------------------------------------------------------------------------------+
```

### 2.1 Benefici Chiave del Paradigma Zero-Backend
1. **Superficie di Attacco Minima:** Non vi sono interpreti PHP o runtime vulnerabili esposti a Internet, né connessioni a database che possano essere bersaglio di SQL Injection (SQLi), NoSQL Injection o Object Injection.
2. **Prestazioni di Caricamento Straordinarie:** Le pagine HTML sono già compilate sul disco/storage e vengono inviate all'utente immediatamente al primo byte (TTFB < 50ms su CDN edge), massimizzando i Core Web Vitals (LCP, FCP).
3. **Resilienza ai Picchi di Traffico:** La distribuzione statica consente alla rete CDN di servire milioni di richieste concorrenti dalla memoria cache di bordo, neutralizzando tentativi di Denial of Service (DoS) a livello applicativo.
4. **Costi di Manutenzione e TCO Ridotti:** Nessun database da aggiornare, indicizzare, replicare o sottoporre a complesse procedure di backup a caldo.

---

## 3. Albero Dettagliato delle Directory e Mappa dei Componenti

La struttura della repository è organizzata in modo modulare:

```
zefiro-web/
├── .env.local                    # Variabili d'ambiente locali (non versionato)
├── .gitignore                    # Regole di esclusione git (build, cache, DS_Store)
├── eslint.config.mjs             # Configurazione linter ESLint v9
├── next.config.ts                # Configurazione master Next.js & Security Headers HTTP
├── package.json                  # Definizione dipendenze e comandi di esecuzione
├── package-lock.json             # Blocco deterministico delle versioni npm
├── tsconfig.json                 # Regole rigide del compilatore TypeScript
├── SECURITY.md                   # Policy ufficiale di sicurezza GitHub (RFC 9116)
│
├── public/                       # Risorse statiche servite direttamente dalla root
│   ├── .well-known/
│   │   └── security.txt          # File standard Coordinated Vulnerability Disclosure
│   ├── documents/                # Cartella per file scaricabili pubblici (PDF, DOCX)
│   ├── images/                   # Asset grafici e illustrazioni
│   ├── media/                    # Media statici serviti dalla root
│   ├── favicon.ico               # Favicon multi-formato
│   ├── og-image.jpg              # Immagine OpenGraph per anteprime social (1200x630)
│   └── robots.txt                # Regole di scansione per crawler web
│
├── security/                     # Hub di Governance e Compliance di Cibersicurezza
│   ├── README.md                 # Indice generale della sicurezza e badge NIS2
│   ├── VAPT_NIS2_Security_Assessment_Report.md  # Report tecnico completo VAPT (Markdown)
│   ├── VAPT_NIS2_Security_Assessment_Report.pdf # Report esecutivo formale stampabile (13 pag.)
│   ├── SECURITY_ARCHITECTURE.md  # Documento sul modello di difesa in profondità
│   ├── NIS2_COMPLIANCE_GUIDE.md  # Guida normativa al D.Lgs. 138/2024 per Soggetti Essenziali
│   └── INCIDENT_RESPONSE_RUNBOOK.md # Playbook di risposta incidenti e notifiche CSIRT 24h/72h
│
├── documentazione tecnica/       # Manuali tecnici e documentazione d'infrastruttura
│   ├── Manuale_Tecnico_Completo.md   # Questo documento di riferimento
│   └── generate_pdf.py           # Script di utilità per conversione documentale
│
├── documentazione aziendale e brand/ # Brand guidelines e struttura societaria
│
└── src/                          # Codice sorgente dell'applicazione
    ├── i18n.ts                   # Logica di internazionalizzazione e mapping lingue (it, en)
    ├── middleware.ts             # Proxy middleware per gestione routing locale e anti-fuzzing
    │
    ├── app/                      # Next.js App Router
    │   ├── globals.css           # Setup Tailwind CSS v4 e variabili colore tema
    │   ├── layout.tsx            # Root layout HTML con import font Geist e Geist Mono
    │   ├── page.tsx              # Fallback root (routing gestito dal middleware)
    │   ├── not-found.tsx         # Pagina 404 personalizzata per percorsi non validi
    │   ├── screensaver/          # Route dimostrativa per schermi aziendali / infopoint
    │   │   └── page.tsx
    │   └── [lang]/               # Dynamic Route per lingua (/it o /en)
    │       ├── layout.tsx        # Layout localizzato: dynamicParams=false, Header, Footer
    │       ├── page.tsx          # Home page con sezioni Hero 3D, Missione, Coverage Map
    │       ├── chi-siamo/        # Pagina Chi Siamo, storia societaria e certificazioni
    │       ├── manifesto/        # I 4 pilastri del Manifesto Zefiro Net
    │       ├── sedi/             # Sedi operative e direzionali (Milano Il Pharo, Roma)
    │       ├── lavora-con-noi/   # Valori HR e recruiting (mailto certificata)
    │       ├── documenti/        # Area Download documenti societari con filtri reattivi
    │       ├── privacy-policy/   # Informativa Privacy conforme a GDPR e D.Lgs. 196/2003
    │       └── cookie-policy/    # Cookie policy tecnica conforme a Garante Privacy
    │
    ├── components/               # Componenti React riutilizzabili
    │   ├── Header.tsx            # Barra di navigazione con logo SVG, menu e switcher lingua
    │   ├── Footer.tsx            # Footer aziendale con link legali, sede e Whistleblowing
    │   ├── CookieBanner.tsx      # Banner informativo per soli cookie tecnici
    │   ├── LanguageSwitcher.tsx  # Selettore IT / EN accessibile
    │   ├── ThemeToggle.tsx       # Selettore Dark Mode / Light Mode
    │   ├── NetworkCoverageMap.tsx# Mappa vettoriale della copertura di rete nazionale
    │   ├── animations/           # Moduli di animazione e WebGL
    │   │   ├── FadeIn.tsx        # Animazione di transizione visiva Framer Motion
    │   │   ├── Stagger.tsx       # Contenitore per elementi a comparsa sequenziale
    │   │   ├── TiltCard.tsx      # Effetto di inclinazione 3D dinamico su hover mouse
    │   │   ├── Parallax.tsx      # Traslazione differenziale su scroll
    │   │   ├── ScrollProgress.tsx# Barra di avanzamento lettura superiore
    │   │   ├── Hero3DAntenna.tsx # Modello 3D dell'antenna 5G renderizzato con Three.js
    │   │   └── DataBreath3D.tsx  # Particellare generativo con nodi di connessione
    │   └── screensaver/          # Componenti per visualizzazioni grafiche avanzate
    │
    ├── data/                     # Data Layer statico (No-Database)
    │   ├── types.ts              # Definizioni TypeScript di tutti i modelli dati
    │   ├── index.ts              # Funzioni barrel di selezione dati e localizzazione
    │   ├── documents.json        # Database statico dei documenti societari scaricabili
    │   ├── chi-siamo.ts          # Testi strutturati della sezione aziendale
    │   ├── highlights.ts         # Metriche e numeri chiave (copertura, investimenti)
    │   ├── manifesto.ts          # Testi dei 4 pilastri del Manifesto
    │   ├── sedi.ts               # Indirizzi, coordinate e contatti delle sedi
    │   └── certificazioni.ts     # Certificazioni aziendali (ESG, ISO 9001, Modello 231)
    │
    ├── dictionaries/             # Stringhe di localizzazione statica dell'interfaccia
    │   ├── it.json               # Dizionario Italiano
    │   └── en.json               # Dizionario Inglese
    │
    └── media/                    # Asset multimediali e modelli 3D importati nei componenti
        ├── antenna.obj           # Modello 3D poligonale dell'antenna RAN
        ├── dish.obj              # Modello 3D della parabola di trasmissione
        ├── logo-zefironet.svg    # Logo corporate ufficiale in formato vettoriale
        └── *.jpg, *.jpeg         # Fotografie delle sedi di Milano e Roma
```

---

## 4. Infrastruttura di Hosting, Rete e Content Delivery Network (CDN)

In conformità ai requisiti di continuità operativa (Business Continuity) e resilienza stabiliti dall'**Articolo 21.2.c del D.Lgs. 138/2024 (NIS2)** per i Soggetti Essenziali, l'architettura di deployment del portale deve seguire criteri di alta disponibilità geograficamente ridondata.

```
+------------------------------------------------------------------------------------+
|               ARCHITETTURA DI RETE E HOSTING PER SOGGETTI ESSENZIALI               |
+------------------------------------------------------------------------------------+
|                                                                                    |
|                                 [DNS Primario]                                     |
|                       (DNSSEC Attivo + Record CAA + Anycast)                       |
|                                        │                                           |
|                                        ▼                                           |
|                   [Web Application Firewall (WAF) & DDoS Shield]                   |
|                   - Mitigazione volumetrica Layer 3/4/7 (SYN/UDP Flood)            |
|                   - Rate Limiting e blocco scanner / bot malevoli                  |
|                   - Ispezione regole OWASP Core Rule Set                           |
|                                        │                                           |
|                                        ▼                                           |
|                       [Global Anycast Edge Network (CDN)]                          |
|                       - Terminazione TLS 1.3 / Cifrari Moderni                     |
|                       - HSTS Preload enforcement                                   |
|                       - Static Asset Edge Caching (Cache-Control: s-maxage)        |
|                                        │                                           |
|            ┌───────────────────────────┴───────────────────────────┐               |
|            ▼                                                       ▼               |
|    [Origin Storage A (Primario)]                          [Origin Storage B (DR)]  |
|    AWS S3 / Cloudflare Pages                              Object Storage Secondario|
|    Immutabilità & Object Versioning                       Replica Geografica       |
|                                                                                    |
+------------------------------------------------------------------------------------+
```

### 4.1 Modello di Hosting Consigliato
1. **Opzione 1 (Edge Serverless Immutabile - Raccomandata):**
   - **Piattaforma:** Cloudflare Pages Enterprise o AWS CloudFront + Amazon S3 (Origin Private Access).
   - **Meccanismo:** Esportazione statica del portale (`output: 'export'`) memorizzata su storage di oggetti a sola lettura con versionamento attivo.
   - **Vantaggio:** Zero server da gestire, zero sistemi operativi da aggiornare, impossibilità di penetrazione del file system dell'origine, tolleranza assoluta a guasti infrastrutturali regionali.

2. **Opzione 2 (Container Node.js Hardened):**
   - **Piattaforma:** AWS ECS Fargate o Kubernetes (EKS) distribuito su 3 Availability Zone (AZ) differenti.
   - **Reverse Proxy:** Nginx / Envoy con regole di sicurezza restrittive e blocco automatico di percorsi nascosti (`.git`, `.env`).
   - **Process Manager:** `node dist/index.js` eseguito in container distroless come utente non-root (`UID 10001`).

### 4.2 Standard di Rete e Crittografia
- **Protocolli di Rete:** HTTP/2 e HTTP/3 (QUIC) abilitati per minimizzare la latenza nei collegamenti mobili e 5G.
- **Protocollo Crittografico:** **TLS 1.3 obbligatorio**, con fallback controllato a **TLS 1.2** esclusivamente con suite di cifratura moderne a segretezza perfetta (Forward Secrecy - PFS):
  - `TLS_AES_128_GCM_SHA256`
  - `TLS_AES_256_GCM_SHA384`
  - `TLS_CHACHA20_POLY1305_SHA256`
  - `ECDHE-ECDSA-AES128-GCM-SHA256` / `ECDHE-RSA-AES128-GCM-SHA256`
  - **Disabilitati categoricamente:** TLS 1.0, TLS 1.1, SSLv3, cifrari RC4, 3DES, CBC e algoritmi RSA non effimeri.

### 4.3 Governance DNS e Certificati
- **DNSSEC (Domain Name System Security Extensions):** Attivo sul dominio `zefironet.it` per prevenire attacchi di DNS Spoofing e Cache Poisoning.
- **Record CAA (Certificate Authority Authorization):** Configurato sui DNS aziendali per autorizzare esclusivamente le Certificate Authority designate (es. Let's Encrypt, DigiCert) al rilascio di certificati SSL per il dominio istituzionale.
- **Postura Email di Dominio:** Record `SPF` restrittivo (`v=spf1 -all` o IP autorizzati), chiavi `DKIM` a 2048-bit e policy `DMARC` impostata su `p=reject` con reportistica attiva, per proteggere il brand da attacchi di phishing e spoofing.

### 4.4 Continuità Operativa e Disaster Recovery (BC/DR)
- **RTO (Recovery Time Objective):** `< 15 minuti`. In caso di guasto catastrofico del provider di hosting primario, la configurazione DNS sposta il puntamento CNAME sul bucket di storage secondario.
- **RPO (Recovery Point Objective):** `0 minuti`. L'intero stato del sito coincide con il commit Git su GitHub. Ogni build produce un artefatto deterministico immutabile ripristinabile all'istante.

---

## 5. Architettura di Sicurezza, Hardening e Conformità NIS2

La piattaforma web è stata sottoposta a un rigoroso processo di **Vulnerability Assessment, Penetration Testing (VAPT)** e hardening, con pieno recepimento delle linee guida dell'**Agenzia per la Cybersicurezza Nazionale (ACN)**.

### 5.1 Matrice degli Header di Sicurezza HTTP (`next.config.ts`)

La configurazione degli header HTTP in produzione implementa le seguenti direttive di sicurezza:

```typescript
// Estratto di configurazione in next.config.ts
headers: [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://zefironet.it; font-src 'self' data:; connect-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;"
  },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'X-Robots-Tag', value: robotsHeaderValue }
]
```

#### Dettaglio delle Protezioni Conferite:
- **`Content-Security-Policy (CSP)`**: Neutralizza vettori di iniezione Cross-Site Scripting (XSS). Consente l'esecuzione di script interni e shader WebGL per Three.js (`'unsafe-eval'`), bloccando qualsiasi caricamento di codice da domini non censiti. `frame-ancestors 'none'` azzera il rischio di Clickjacking.
- **`Strict-Transport-Security (HSTS)`**: Forza il protocollo HTTPS con una durata di 63.072.000 secondi (2 anni), includendo tutti i sottodomini e la direttiva `preload` per l'inserimento nella lista di preload universale dei browser (Chrome, Safari, Firefox).
- **`Cross-Origin-Opener-Policy (COOP) & Cross-Origin-Resource-Policy (CORP)`**: Impostati su `same-origin`. Isolano il processo di memoria del browser da finestre terze, proteggendo l'utente da exploit avanzati di tipo Spectre e XS-Leaks.
- **`X-XSS-Protection`**: Rimosso intenzionalmente, in aderenza alle linee guida OWASP, poiché l'header è deprecato nei moderni motori di rendering e poteva introdurre debolezze nei vecchi browser.

### 5.2 Hardening del Routing e Protezione Soft-404 / DoS
Nelle versioni precedenti, richieste di scanner contenenti punti (es. `/admin.php`, `/.env`) oltrepassavano i filtri linguistici attivando rendering SSR on-demand e sporcando la cache. 

**Soluzione Architetturale Adottata:**
1. In `src/app/[lang]/layout.tsx`, è stato dichiarato:
   ```typescript
   export const dynamicParams = false;
   ```
   Questa direttiva impone a Next.js di rifiutare la generazione dinamica a runtime per qualsiasi parametro di rotta non esplicitamente restituito da `generateStaticParams()` (`it`, `en`).
2. Sia in `generateMetadata` sia nel componente layout, una validazione con guardia esplicita invoca la funzione `notFound()` se il parametro di lingua non è supportato:
   ```typescript
   if (!locales.includes(lang as Locale)) {
     notFound();
   }
   ```
3. Nel middleware (`src/middleware.ts`), la precedente condizione generica `pathname.includes('.')` è stata sostituita da una regex rigida (`STATIC_FILE_REGEX`) che riconosce unicamente le estensioni di asset statici legittimi (`.ico`, `.png`, `.svg`, `.pdf`, `.obj`, ecc.). Qualsiasi altra richiesta anomala viene inoltrata alla corretta gestione di errore HTTP 404 Not Found.

### 5.3 Coordinated Vulnerability Disclosure (RFC 9116 `security.txt`)
In ottemperanza all'Art. 21.2.e della NIS2, è stato creato il file pubblico [`.well-known/security.txt`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/public/.well-known/security.txt) contenente:
- Canale di contatto CISO/CSIRT: `mailto:security@zefironet.it`
- Canale Whistleblowing: `https://zefironet.integrityline.com/`
- Data di scadenza della policy e lingue supportate (`it`, `en`).

---

## 6. Data Layer, Internazionalizzazione (i18n) e Whistleblowing

### 6.1 Struttura del Data Layer
Tutti i contenuti informativi del sito sono gestiti tramite TypeScript e file JSON all'interno di `src/data/`:
- **`types.ts`**: Contiene le interfacce TypeScript di ogni entità (`Document`, `Highlight`, `Sede`, `Certificazione`, `PilastroManifesto`). Questo impedisce errori di battitura o proprietà mancanti in fase di compilazione (`npm run build`).
- **`documents.json`**: Elenco dei file scaricabili pubblici. Ogni record possiede un identificativo numerico, titolo, data di rilascio, categoria (*Finanza*, *Governance*, *Sicurezza*), dimensione e URL relativo del file.
- **`index.ts`**: Funge da interfaccia di accesso centralizzata (Barrel File), esportando funzioni di selezione che filtrano e formattano i dati in base alla lingua richiesta (`getHighlights(lang)`, `getDocuments(lang)`).

### 6.2 Architettura di Internazionalizzazione (i18n)
Il multilingua è integrato nativamente senza dipendenze pesanti esterne:
- **Routing:** Basato su sottocartelle linguistiche (`/it/...` e `/en/...`).
- **Dizionari Statici (`src/dictionaries/*.json`):** Contengono tutte le label fisse di navigazione, pulsanti, intestazioni di tabella e messaggi di errore. La funzione asincrona `getDictionary(locale)` in `src/i18n.ts` carica dinamicamente il file JSON corrispondente.
- **Negoziazione della Lingua nel Middleware:** Se un utente visita la root `/`, il middleware analizza l'header `Accept-Language` della richiesta HTTP e reindirizza in modo trasparente l'utente verso `/it` o `/en`.

### 6.3 Integrazione della Piattaforma Whistleblowing
In adempimento agli obblighi del **D.Lgs. 24/2023** (recepimento della Direttiva UE 2019/1937 in materia di protezione dei segnalanti violazioni del diritto dell'Unione):
- Il portale integra nel Footer il collegamento alla piattaforma di segnalazione certificata:
  `https://zefironet.integrityline.com/`
- Il collegamento apre una nuova sessione protetta con attributi di sicurezza `target="_blank" rel="noopener noreferrer"`, garantendo la massima riservatezza e l'isolamento dell'identità del segnalante.

---

## 7. Design System, UX/UI, Accessibilità e Motore Grafico 3D

### 7.1 Palette Cromatica Corporate (Tailwind CSS v4)
Il design system rispetta rigorosamente le brand guidelines di Zefiro Net:
- **Zefiro Cyan (`#00D2B4`):** Colore primario tecnologico ed energetico, impiegato per call-to-action, accenti grafici e bagliori luminosi.
- **Zefiro Teal (`#008080`):** Gradiente secondario di supporto per profondità e contrasto.
- **Deep Navy / Primary (`#081B33` / `#061224`):** Colore di sfondo scuro istituzionale per la modalità dark.
- **Supporto Dark / Light Mode:** Gestito tramite il componente [`ThemeToggle.tsx`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/components/ThemeToggle.tsx) che applica la classe CSS `dark` al tag `<html>` e persiste la scelta in `localStorage('theme')`.

### 7.2 Tipografia Istituzionale
- **Font:** Google Fonts **Geist Sans** e **Geist Mono**, integrati tramite il modulo `next/font/google`.
- I font sono scaricati e serviti localmente durante la build di Next.js (Zero chiamate esterne a server Google a runtime, in conformità al GDPR e alle pronunce delle autorità per la privacy europee).

### 7.3 Motore Grafico 3D (Three.js & WebGL)
Il sito presenta un forte impatto visuale tramite due animazioni interattive:
1. **`Hero3DAntenna.tsx`:** Carica un modello tridimensionale poligonale dell'antenna RAN Zefiro Net (`antenna.obj`) utilizzando `@react-three/fiber`. Applica un materiale riflettente con texture di wireframe high-tech e risponde alla posizione del cursore dell'utente.
2. **`DataBreath3D.tsx`:** Genera un sistema particellare procedurale (Point Cloud) che simula le onde e i flussi di dati digitali che connettono il territorio.

#### Ottimizzazioni di Efficienza e Memoria:
- **Power Preference:** Configurato con `powerPreference: "high-performance"` per sfruttare la GPU dedicata ove presente.
- **Frame Pacing & Visibility:** Le animazioni Three.js si disattivano automaticamente quando il componente esce dal viewport dell'utente (Intersection Observer), azzerando l'utilizzo di CPU/GPU sui dispositivi a batteria.
- **Fallback Mobile:** Su schermi con larghezza ridotta (< 768px), il numero di particelle viene scalato per garantire 60 FPS stabili anche su smartphone economici.

---

## 8. Pipeline CI/CD, Build Automation e Procedura di Deployment

### 8.1 Requisiti di Sistema
- **Node.js:** Versione `20.x` LTS o superiore (testato e certificato con Node.js 20 e 22).
- **Package Manager:** `npm` versione 10.x o superiore.
- **RAM Minima:** 4 GB (la compilazione dei bundle 3D richiede la configurazione `NODE_OPTIONS=--max-old-space-size=4096`, già inclusa nello script `npm run dev`).

### 8.2 Comandi CLI del Progetto

```bash
# Installazione pulita e deterministica delle dipendenze
npm ci

# Avvio del server di sviluppo locale con Hot Module Replacement (HMR)
npm run dev

# Controllo formale del codice e delle convenzioni tramite ESLint
npm run lint

# Creazione della build di produzione ottimizzata
npm run build

# Esecuzione del server di produzione simulato (locale)
npm run start
```

### 8.3 Esempio di Workflow GitHub Actions (`.github/workflows/deploy.yml`)

```yaml
name: CI/CD Pipeline & Security Audit

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  security-and-build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout del Repository
        uses: actions/checkout@v4

      - name: Configurazione Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Installazione Dipendenze (Clean Install)
        run: npm ci

      - name: Controllo di Sicurezza Dipendenze (SCA Audit)
        run: npm audit --audit-level=high

      - name: Linting & Verifica Qualità Codice
        run: npm run lint

      - name: Compilazione della Build di Produzione
        run: npm run build

      - name: Deploy su Storage di Produzione (Cloudflare / AWS S3)
        if: github.ref == 'refs/heads/main'
        run: |
          echo "Deployment su infrastruttura protetta completato con successo."
```

---

## 9. Manuale Operativo di Gestione dei Contenuti (Senza CMS)

Grazie all'architettura a codice sorgente tracciata in Git, qualsiasi modifica ai contenuti è soggetta a storico versionato, revisione e firma crittografica.

### 9.1 Aggiungere o Sostituire un Documento Pubblico (Area Download)
1. Copiare il nuovo file PDF nella cartella fisica:
   `zefiro-web/public/documents/`
   *Esempio:* `zefiro-web/public/documents/bilancio-2025.pdf`
2. Aprire il file [`src/data/documents.json`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/data/documents.json) con un editor di testo.
3. Inserire un nuovo blocco JSON all'inizio o alla fine dell'array:
   ```json
   {
     "id": 6,
     "title": "Bilancio di Esercizio 2025",
     "date": "2026-04-15",
     "category": "Finanza",
     "size": "2.8 MB",
     "fileUrl": "/documents/bilancio-2025.pdf"
   }
   ```
4. Se si desidera che il titolo del documento sia localizzato in inglese per gli utenti internazionali, aggiungere la chiave corrispondente in [`src/data/index.ts`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/data/index.ts) all'interno dell'oggetto `EN_DOCS`:
   ```typescript
   6: { title: "Annual Financial Report 2025", category: "Finance" }
   ```
5. Eseguire `git commit` e `git push`. La pipeline CI/CD ricompilerà la pagina dei documenti in pochi secondi.

### 9.2 Modificare Sedi Operative o Contatti
1. Aprire [`src/data/sedi.ts`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/data/sedi.ts).
2. Modificare l'indirizzo, i contatti email o il testo descrittivo nelle sezioni `sediDataIT` ed effettuare la corrispettiva traduzione in `sediDataEN`.

### 9.3 Modificare i Valori del Manifesto o le Certificazioni
- **Manifesto:** Modificare [`src/data/manifesto.ts`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/data/manifesto.ts).
- **Certificazioni:** Modificare [`src/data/certificazioni.ts`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/data/certificazioni.ts).

### 9.4 Modificare Testi Fissi di Navigazione o Footer
1. Aprire [`src/dictionaries/it.json`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/dictionaries/it.json) per la lingua italiana.
2. Aprire [`src/dictionaries/en.json`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/src/dictionaries/en.json) ed eseguire la medesima modifica per mantenere speculari le chiavi del dizionario.

---

## 10. Risoluzione dei Problemi (Troubleshooting) e Monitoraggio

### 10.1 Errori Comuni e Soluzioni Rapide

| Sintomo / Errore | Causa Radice | Soluzione Risolutiva |
| :--- | :--- | :--- |
| **`Type 'X' is not assignable to type 'Y'` durante `npm run build`** | Incongruenza tra un campo dati modificato in `src/data/` e le definizioni TypeScript in `src/data/types.ts`. | Verificare che i campi data rispettino il formato stringa `AAAA-MM-GG` e che tutte le proprietà obbligatorie siano valorizzate. |
| **`JavaScript heap out of memory` durante la compilazione** | Node.js ha esaurito i 2 GB di memoria predefinita durante la compilazione dei canvas 3D. | Aumentare il limite di memoria eseguendo: `NODE_OPTIONS=--max-old-space-size=4096 npm run build`. |
| **Nuovo documento non visibile nell'Area Download** | Errore di sintassi nel file JSON (es. virgola finale superflua). | Validare `documents.json` con un lint JSON o ripristinare la sintassi corretta. |
| **Richieste a percorsi sconosciuti restituiscono 404 invece del redirect** | Comportamento previsto dal nuovo meccanismo di sicurezza anti-fuzzing (`dynamicParams=false`). | Normale funzionamento protettivo del portale web. |

### 10.2 Metriche di Monitoraggio Prestazionale (Core Web Vitals)
La piattaforma web deve mantenere costantemente i seguenti indicatori prestazionali certificati da Lighthouse / Chrome UX Report:
- **Largest Contentful Paint (LCP):** `< 2.0s` (Target: Verde).
- **Interaction to Next Paint (INP):** `< 150ms` (Target: Verde).
- **Cumulative Layout Shift (CLS):** `< 0.05` (Target: Verde).
- **SEO & Accessibility Score:** `> 95/100`.

### 10.3 Procedure di Escalation di Sicurezza
In caso di anomalie di sicurezza o segnalazioni di vulnerabilità:
1. Consultare il runbook operativo: [`security/INCIDENT_RESPONSE_RUNBOOK.md`](file:///Users/lorenzofrasconi/Desktop/Progetti/Sito%20web%20Zefiro/zefiro-web/security/INCIDENT_RESPONSE_RUNBOOK.md).
2. Se l'incidente presenta gravità **P1** o compromette la disponibilità del servizio, procedere all'invio dell'Allerta Precoce (*Early Warning*) all'**Agenzia per la Cybersicurezza Nazionale (ACN)** entro **24 ore** dal rilevamento.
3. Contattare immediatamente il referente tecnico di cibersicurezza all'indirizzo [security@zefironet.it](mailto:security@zefironet.it).

---

*Documento approvato per la pubblicazione e l'esercizio in produzione.*  
*Zefiro Net S.r.l. — Direzione Tecnica & Cibersicurezza*
