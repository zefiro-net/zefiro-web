# 🌐 Architettura di Hosting, Rete e Resilienza Infrastrutturale
**Piattaforma Web Istituzionale Zefiro Net S.r.l.**  
*Documento di Ingegneria di Rete e Sistemi — Versione 1.1 (NIS2 Compliant)*

---

## 1. Visione d'Insieme e Standard per Soggetti Essenziali

In quanto operatore di infrastrutture di telecomunicazione mobile e 5G wholesale, **Zefiro Net S.r.l.** è qualificata come **Soggetto Essenziale** ai sensi del **D.Lgs. 11 ottobre 2024, n. 138 (NIS2)**.

L'infrastruttura di hosting e distribuzione del portale pubblico deve garantire:
1. **Disponibilità di Servizio (SLA):** $\ge 99.99\%$ su base annua.
2. **Resilienza ai Guasti (Fault Tolerance):** Assenza di singoli punti di fallimento (*Single Point of Failure - SPOF*).
3. **Resilienza agli Attacchi Volumetrici e Applicativi:** Capacità di mitigazione DDoS automatica su Layer 3, 4 e 7.
4. **Integrità Crittografica:** Crittografia end-to-end con TLS 1.3 e conformità HSTS Preload universale.

---

## 2. Diagramma di Rete & Flusso delle Connessioni

```
                               [Utente Globale]
                                      │
                                      ▼
                        [Risoluzione DNS con DNSSEC]
                         (Record CAA + Anycast DNS)
                                      │
                                      ▼
                ┌───────────────────────────────────────────┐
                │    EDGE CLOUD / CDN LAYER (Anycast)       │
                │                                           │
                │  - Protezione DDoS (SYN/UDP Flood)        │
                │  - Web Application Firewall (WAF)         │
                │  - Rate Limiting e Bot Management         │
                │  - Terminazione TLS 1.3 / HSTS            │
                │  - Iniezione Header di Sicurezza (CSP)    │
                │  - Edge Cache Storage (TTFB < 50ms)       │
                └─────────────────────┬─────────────────────┘
                                      │
                      Cache MISS / Richiesta di Origine
                                      │
                ┌─────────────────────┴─────────────────────┐
                │                                           │
                ▼                                           ▼
    [ORIGIN PRIMARIA (Attiva)]                  [ORIGIN SECONDARIA (DR)]
    AWS S3 / Cloudflare Pages Storage           Object Storage Replica Geografica
    Regione: Europa (Milano / Francoforte)      Regione: Europa (Dublino / Parigi)
    - Immutabilità degli Oggetti               - Sincronizzazione continua Git-driven
    - Accesso Privato (OAC / Private Origin)    - Failover automatico DNS in < 15 min
```

---

## 3. Specifiche dei Componenti di Rete

### 3.1 Content Delivery Network (CDN) & Anycast Routing
- **Tecnologia di Routing:** Anycast BGP routing con centinaia di Point of Presence (PoP) distribuiti a livello globale e con forte densità nei nodi di interscambio italiani (MIX Milano, NaMeX Roma, VSIX Padova).
- **Cache Hit Ratio (Target):** $\ge 95\%$ per gli asset statici (HTML, JS, CSS, immagini, modelli 3D `.obj`).
- **Cache-Control Header:**
  - Asset versionati (`/_next/static/*`): `public, max-age=31536000, immutable`
  - Pagine HTML prerenderizzate: `public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400`
  - Risorse informative (`security.txt`, `robots.txt`): `public, max-age=3600`

### 3.2 Livello Crittografico e Gestione dei Certificati SSL/TLS
- **Protocollo Principale:** **TLS 1.3** conforme a RFC 8446.
- **Protocollo Secondario (Fallback):** TLS 1.2 abilitato solo per client legacy con supporto Forward Secrecy (PFS).
- **Suite di Cifratura Ammesse:**
  - `TLS_AES_128_GCM_SHA256`
  - `TLS_AES_256_GCM_SHA384`
  - `TLS_CHACHA20_POLY1305_SHA256`
  - `ECDHE-ECDSA-AES128-GCM-SHA256`
  - `ECDHE-RSA-AES128-GCM-SHA256`
- **Disabilitati:** Tutti i cifrari basati su CBC, 3DES, RC4 e algoritmi di scambio chiavi non effimeri.
- **HSTS Preload:** Attivo con scadenza a 2 anni (`max-age=63072000; includeSubDomains; preload`).

### 3.3 Configurazione DNS Istituzionale
- **DNSSEC (Domain Name System Security Extensions):** Attivo con firma crittografica ECDSA Curve P-256 e record DS registrati presso il Registro del ccTLD `.it`.
- **Record CAA (Certificate Authority Authorization):**
  ```dns
  zefironet.it. IN CAA 0 issue "letsencrypt.org"
  zefironet.it. IN CAA 0 issue "digicert.com"
  zefironet.it. IN CAA 0 iodef "mailto:security@zefironet.it"
  ```
- **Record Sicurezza Email di Dominio:**
  - **SPF:** `v=spf1 -all` (o IP autorizzati esplicitamente).
  - **DKIM:** Firme RSA 2048-bit o Ed25519.
  - **DMARC:** `v=DMARC1; p=reject; sp=reject; rua=mailto:dmarc-reports@zefironet.it; ruf=mailto:dmarc-forensics@zefironet.it; pct=100; adkim=s; aspf=s`

---

## 4. Web Application Firewall (WAF) & Regole Anti-Intrusione

Il perimetro WAF di fronte alla CDN deve includere le seguenti regole di sicurezza:

1. **Blocco File Nascosti e Directory Traversal:**
   - Negare categoricamente l'accesso a qualsiasi URI che inizia con `.` (es. `/.git`, `/.env`, `/.DS_Store`), **con l'unica eccezione di `/.well-known/`** (per `security.txt`).
2. **Mitigazione Fuzzing & Scansioni Vulnerabilità:**
   - Rilevamento e blocco automatico di User-Agent noti per scansioni aggressive (es. `sqlmap`, `nikto`, `nmap`, `masscan`, `zgrab`).
   - Rate limiting dinamico: massimo 100 richieste ogni 10 secondi per singolo indirizzo IP sorgente, salvo whitelist.
3. **Restrizione Geografica (Geofencing Opzionale):**
   - Possibilità di abilitare un challenge interattivo (Managed Challenge / Turnstile) per richieste provenienti da Paesi a rischio sanzionatorio o soggetti a traffico bot ostile.

---

## 5. Continuità Operativa e Piano di Disaster Recovery (BC/DR)

In ossequio all'**Articolo 21.2.c della NIS2**, il piano di Disaster Recovery garantisce:

| Parametro | Valore Obiettivo | Strategia Attuativa |
| :--- | :---: | :--- |
| **RTO (Recovery Time Objective)** | **< 15 minuti** | Puntamento DNS istantaneo su bucket di emergenza replica. |
| **RPO (Recovery Point Objective)** | **0 minuti** | Lo stato del sito risiede nel repository Git immutabile. |
| **Ridondanza Geografica** | **Multi-Regione EU** | Dati ospitati su nodi fisicamente separati e conformi al GDPR. |
| **Backup Immutabile** | **Attivo** | Versioning degli oggetti abilitato con blocco di cancellazione (*Object Lock / WORM*). |

---

## 6. Checklist di Messa in Produzione

- [x] Next.js aggiornato a versione sicura (16.4.0 o superiore).
- [x] Security headers configurati con Content-Security-Policy (CSP) robusta.
- [x] File `/.well-known/security.txt` pubblicato e raggiungibile.
- [x] File residui `.DS_Store` rimossi e bloccati.
- [x] `dynamicParams = false` abilitato per prevenire il soft-404 / DoS.
- [x] Certificato SSL/TLS con protocollo TLS 1.3 attivo.
- [x] DNSSEC configurato e validato con esito positivo.
- [x] Policy DMARC impostata con rifiuto dei messaggi non autenticati (`p=reject`).
