# Manuale Tecnico e Operativo — Zefiro Net Web
**Applicazione Frontend Statica con Next.js e Tailwind CSS**

---

## Indice
1. Introduzione e Architettura
2. Struttura delle Directory e File Core
3. Gestione dei Dati (Senza Database)
4. Area Download e Documenti Pubblici
5. Internazionalizzazione e Traduzioni (i18n)
6. Personalizzazione UX/UI e Stili
7. Gestione Animazioni e Modelli 3D
8. Configurazione Avanzata e Variabili d'Ambiente
9. Sviluppo, Build e Deployment
10. Risoluzione dei Problemi (Troubleshooting)

---

## 1. Introduzione e Architettura
Il sito web Zefiro Net è progettato per massimizzare le prestazioni, la sicurezza e la facilità di manutenzione. Abbiamo adottato un approccio **Jamstack** eliminando il backend e il database.

- **Framework**: Next.js 16.2.4 (App Router) e React 19.
- **Rendering**: Static Site Generation (SSG). Tutte le pagine vengono compilate in HTML/CSS statico al momento della build. Nessun ritardo al caricamento e invulnerabile agli attacchi backend (es. SQL injection).
- **Stile**: Tailwind CSS v4.
- **Transizioni & Animazioni**: Framer Motion per il 2D e Three.js (React Three Fiber) per il 3D.
- **Multilingua**: Implementazione nativa di i18n con routing dinamico basato sul dizionario (Italiano/Inglese).

---

## 2. Struttura delle Directory e File Core

Il codice sorgente principale si trova sotto `src/`:

- `src/app/`: Cuore del routing. 
  - `globals.css`: Variabili CSS globali e setup Tailwind.
  - `layout.tsx`: Layout globale per i font.
  - `[lang]/`: Tutte le rotte tradotte (es. `chi-siamo`, `sedi`, `documenti`). Il `layout.tsx` interno contiene Header e Footer.
- `src/components/`: Componenti React riutilizzabili. Divisi tra UI generica (Header, Footer, ThemeToggle) e `animations/` (TiltCard, FadeIn, modelli 3D).
- `src/data/`: Cuore pulsante del **Data Layer**. File `.ts` e `.json` contenenti tutti i testi "dinamici" delle sezioni.
- `src/dictionaries/`: File `.json` per le traduzioni statiche (pulsanti, voci di menu, etichette fisse).
- `src/media/`: Immagini e video importabili come moduli React.
- `public/`: Asset statici serviti direttamente dal web server alla root del dominio (es. favicon, font scaricati, documenti scaricabili).

---

## 3. Gestione dei Dati (Senza Database)

Il sito non richiede un pannello di controllo admin (CMS). Per modificare un testo di contenuto strutturato come i Valori Aziendali, le Certificazioni o le Sedi, basta agire sui file nella cartella `src/data/`:

### 3.1 Modificare la Pagina Chi Siamo
Aprire `src/data/chi-siamo.ts`. Modificare i testi HTML all'interno dei campi `sottotitolo`, `sezione_missione_testo`, ecc. Il salvataggio aggiornerà automaticamente la pagina locale se il server di sviluppo è attivo.

### 3.2 Modificare Sedi o Valori
- **Sedi**: Aprire `src/data/sedi.ts`. Per aggiungere una sede, duplicare un blocco `{...}` nell'array incrementando l'`id`.
- **Valori (Manifesto)**: Aprire `src/data/manifesto.ts`. 

Tutte le funzioni di fetch dati sono regolate da `src/data/index.ts` che agisce come un punto centralizzato (barrel file).

---

## 4. Area Download e Documenti Pubblici

La pagina **Documenti** filtra e mostra i file scaricabili in base alla categoria. 

### Aggiungere un nuovo file scaricabile:
1. Posizionare il file fisico (es. `.pdf`, `.docx`, `.zip`) nella cartella `public/documents/`. 
   Esempio: `public/documents/codice-etico-2027.pdf`.
2. Aprire `src/data/documents.json`.
3. Inserire un nuovo blocco di codice alla fine (assicurandosi della correttezza della sintassi JSON):
   ```json
   {
     "id": 10,
     "title": "Nuovo Codice Etico",
     "date": "2027-01-10",
     "category": "Governance",
     "size": "1.5 MB",
     "fileUrl": "/documents/codice-etico-2027.pdf"
   }
   ```
La pagina Documenti aggiornerà automaticamente la griglia mostrando il nuovo file nella categoria corretta.

---

## 5. Internazionalizzazione e Traduzioni (i18n)

La gestione multilingua si appoggia al file `src/i18n.ts` che definisce `it` ed `en` come lingue.

### Modificare un'etichetta (es. tasto "Lavora con noi")
1. Aprire `src/dictionaries/it.json` e individuare la chiave da modificare (es. `nav.lavoraConNoi`).
2. Apportare la modifica.
3. Effettuare la **stessa** modifica logica in `src/dictionaries/en.json` per mantenere allineate le strutture. Se la lingua non trova una chiave, il sito potrebbe andare in errore o non mostrare nulla.

---

## 6. Personalizzazione UX/UI e Stili

Lo styling è basato su **Tailwind CSS**. Non si scrive codice CSS tradizionale (salvo eccezioni in `globals.css`), ma classi di utilità.

### 6.1 Aggiungere o modificare classi sui componenti
Tutte le estetiche (margini, padding, colori di sfondo, bordi arrotondati, testo) si modificano dai file `.tsx`. 
Per esempio, per trasformare un pulsante da blu a verde, basterà cambiare `bg-zefiro-cyan` in `bg-emerald-500`.

### 6.2 Colori Aziendali Globali
Se si decide di cambiare le tonalità dei colori aziendali (`zefiro-cyan`, `zefiro-teal`, `primary`), occorre cercare le configurazioni corrispondenti all'interno di `src/app/globals.css` per Tailwind v4.

---

## 7. Gestione Animazioni e Modelli 3D

Il sito offre forte impatto visivo attraverso componenti isolati nella cartella `src/components/animations/`.

- **FadeIn / Stagger / TiltCard**: Usati per animare elementi all'entrata nello schermo o all'interazione del mouse. Internamente usano *Framer Motion*. Possono essere usati come Wrapper per qualsiasi elemento HTML.
- **Hero3DAntenna / DataBreath3D**: Modelli generativi costruiti con codice *Three.js*. In caso di modifiche pesanti alle performance (es. numero di particelle), agire direttamente sulle property all'interno dei file (`count={5000}`).

---

## 8. Configurazione Avanzata e Variabili d'Ambiente

- **.env.local**: Contiene variabili esclusive per l'ambiente locale (chiavi API terze, configurazioni non di produzione). Da non versionare in Git (già inserito in `.gitignore`).
- **next.config.ts**: Contiene le regole di compilazione e riscrittura URL del server Next.js.
- **middleware.ts**: File cruciale. Redirige gli utenti che visitano la root `/` alla cartella della lingua appropriata (es. `/it` o `/en`) in base alle preferenze del browser e imposta i cookie di preferenza (`NEXT_LOCALE`).

---

## 9. Sviluppo, Build e Deployment

Assicurarsi di avere Node.js 20+ installato sulla macchina. 

### A) Avvio Locale (Development)
```bash
npm run dev
```
Avvia il server a `http://localhost:3000`. Qualsiasi modifica salvata causerà un aggiornamento rapido in pagina (Hot Module Replacement).

### B) Creazione Build per la Produzione
```bash
npm run build
```
Crea una versione super ottimizzata e statica dell'app (nella cartella `.next/`). Questo passaggio rivela eventuali errori TypeScript nascosti.

### C) Esecuzione in Produzione (Simulazione)
```bash
npm run start
```
Esegue la build ottimizzata come farebbe un server. Utile per test reali di performance.

---

## 10. Risoluzione dei Problemi (Troubleshooting)

- **Errore "Type 'X' is not assignable to type 'Y'" in compilazione:** Avete infranto le regole TypeScript dichiarate in `src/data/types.ts`. Se ad esempio passate una data non stringa o omettete una proprietà obbligatoria in un oggetto JSON/TS, TypeScript fallirà la compilazione `npm run build` per precauzione.
- **Modifiche a documenti.json non visibili:** Verificare che il JSON sia formattato correttamente. Una singola virgola di troppo invaliderà l'intero file.
- **Avviso "middleware file convention is deprecated" in console:** È un warning comune nell'aggiornamento a Next.js 16.2. Non crea problemi funzionali.
