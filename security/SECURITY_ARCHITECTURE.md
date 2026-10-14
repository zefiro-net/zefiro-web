# 🏗️ Architettura di Sicurezza & Modello di Difesa in Profondità
**Zefiro Net Web Platform**

Questo documento illustra i principi architetturali di sicurezza implementati per il sito web istituzionale di Zefiro Net S.r.l., progettato per garantire il massimo livello di protezione conforme ai requisiti della **Direttiva NIS2** e degli standard **OWASP ASVS v4.0**.

---

## 1. Principio Fondamentale: Architettura Jamstack "Zero-Backend"

A differenza dei tradizionali Content Management System (CMS) come WordPress, Drupal o portali con backend monolitici dinamici (PHP, Python/Django, Ruby), il portale Zefiro Net adotta un paradigma **Jamstack statico**:

```
+--------------------------------------------------------------------------+
|                        PARADIGMA COMPARATIVO                             |
+--------------------------------------------------------------------------+
| ARCHITETTURA TRADIZIONALE (Alto Rischio):                               |
| [Utente] ---> [Web Server] ---> [App Server] ---> [Database SQL]         |
|                     ▲                 ▲                  ▲               |
|                 Web Shell        RCE / SSRF        SQL Injection         |
+--------------------------------------------------------------------------+
| ARCHITETTURA ZEFIRO NET (Zero-Backend / Hardened Jamstack):              |
| [Utente] ---> [Edge CDN / WAF] ---> [File Statici Immutabili (HTML/JS)]  |
|                     │                             │                      |
|              TLS 1.3 + HSTS               Nessun DB / Nessuna            |
|              CSP Blindata                 Esecuzione di Codice Dinamico  |
+--------------------------------------------------------------------------+
```

### Vantaggi di Sicurezza Conseguiti:
1. **Immunità a SQL Injection (SQLi):** Nessun database SQL/NoSQL è collegato all'applicazione web. Tutti i dati informativi (sedi, manifesto, documenti pubblici) risiedono in bundle strutturati e tipizzati compilati al momento della build.
2. **Assenza di Session Hijacking & Privilege Escalation:** Il sito pubblico non gestisce sessioni applicative, cookie di autenticazione o token JWT esposti.
3. **Resilienza ai Denial of Service (DoS):** I file statici prerenderizzati tramite Static Site Generation (SSG) possono essere memorizzati e distribuiti via Edge Cache (CDN / Anycast), assorbendo picchi di traffico massivi senza impattare server applicativi.

---

## 2. Matrice degli Header di Sicurezza HTTP

Gli header di risposta configurati in `next.config.ts` forniscono un perimetro difensivo rigido a livello browser:

### 2.1 Content Security Policy (CSP)
La Content Security Policy applicata previene categoricamente attacchi di tipo Cross-Site Scripting (XSS), iniezione di iframe malevoli e data exfiltration verso domini non autorizzati:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://zefironet.it; font-src 'self' data:; connect-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;
```

- `frame-ancestors 'none'`: Impedisce a chiunque di incorporare il sito in iframe/frame/embed, azzerando il rischio di **Clickjacking**.
- `object-src 'none'`: Blocca l'esecuzione di plugin legacy (Flash, Java, Silverlight).
- `base-uri 'self'`: Blocca la manipolazione del tag `<base>` HTML per deviare percorsi relativi.
- `upgrade-insecure-requests`: Forza tutte le richieste HTTP verso HTTPS criptato.

### 2.2 Isolamento Cross-Origin
- `Cross-Origin-Opener-Policy: same-origin` (COOP): Isola il contesto di navigazione di Zefiro Net da finestre aperte da altri domini, mitigando attacchi di tipo Spectre, XS-Leaks e window-hijacking.
- `Cross-Origin-Resource-Policy: same-origin` (CORP): Impedisce ad altri siti di caricare risorse interne senza autorizzazione esplicita.

### 2.3 Crittografia & Protezione Trasporto
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (HSTS): Forza il protocollo HTTPS con validità di 2 anni e inclusione nei registri globali di preload dei browser (HSTS Preload List).
- `X-Content-Type-Options: nosniff`: Impedisce il MIME-type sniffing da parte dei browser.
- `Referrer-Policy: strict-origin-when-cross-origin`: Protegge la privacy degli utenti e non trasmette percorsi URL sensibili verso domini terzi.
- `Permissions-Policy`: Disabilita l'accesso hardware non necessario (fotocamera, microfono, geolocalizzazione, payment API, topic di navigazione).

---

## 3. Gestione e Routing Sicuro dei Percorsi (Anti-Fuzzing)

A seguito delle remediation di sicurezza applicate:
- **`dynamicParams = false`**: Il layout genitore multilingua (`src/app/[lang]/layout.tsx`) rifiuta categoricamente a runtime qualsiasi parametro linguistico non previsto da `generateStaticParams()` (`it`, `en`).
- **Middleware Rigoroso:** Il file `src/middleware.ts` valida i percorsi prima dell'inoltro. Qualsiasi sonda di vulnerability scanner o bot (es. tentativi di caricare `.env`, `.php`, `.sql`, file di backup o configurazione) riceve immediatamente una risposta **`HTTP 404 Not Found`** senza avviare rendering on-demand né sporcare la cache.

---

## 4. Analisi delle Minacce & Threat Modeling (STRIDE Matrix)

| Minaccia STRIDE | Applicabilità a Zefiro Net Web | Misura di Mitigazione Adottata |
| :--- | :---: | :--- |
| **Spoofing (Identità)** | Bassa | Assenza di account utente. Dominio protetto da DNSSEC e record SPF / DKIM / DMARC. |
| **Tampering (Manomissione)** | Molto Bassa | Deploy immutabile tramite CI/CD e commit Git firmati (GPG). Risorse distribuite in sola lettura. |
| **Repudiation (Ripudio)** | Molto Bassa | Log di accesso HTTP centralizzati e timestampati a livello CDN/WAF. |
| **Information Disclosure (Fuga dati)** | Molto Bassa | Rimozione automatica di file residui `.DS_Store`, assenza di chiavi API nel codice client, disattivazione di directory listing. |
| **Denial of Service (DoS)** | Bassa | Disattivazione SSR on-demand (`dynamicParams=false`), generazione statica SSG pura distribuita su rete Anycast globale. |
| **Elevation of Privilege** | Non Applicabile | Assenza di permessi o ruoli applicativi sul frontend web esposto. |
