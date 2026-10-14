# 🛡️ Zefiro Net Web — Security & NIS2 Compliance Hub

Benvenuti nel centro di documentazione e governance della cibersicurezza per la piattaforma web di **Zefiro Net S.r.l.**, operatore wholesale di riferimento per le infrastrutture di telecomunicazione 5G e il RAN sharing in Italia.

---

## 🏛️ Inquadramento Normativo: Soggetto Essenziale (NIS2)

Ai sensi della **Direttiva (UE) 2022/2555 (NIS2)**, recepita in Italia con il **D.Lgs. 11 ottobre 2024, n. 138**, Zefiro Net è classificata come **Soggetto Essenziale** (*Essential Entity*) ai sensi dell'Allegato I, Settore 8 (*Infrastrutture Digitali — Reti e Servizi di Comunicazione Elettronica*).

La piattaforma web adotta un modello di **Difesa in Profondità (Defense-in-Depth)** e un'architettura **Jamstack Zero-Backend**, garantendo la massima resilienza contro minacce cibernetiche avanzate.

---

## 📑 Indice della Documentazione di Sicurezza

| Documento | Descrizione | Formati Disponibili |
| :--- | :--- | :---: |
| [**VAPT & NIS2 Assessment Report**](./VAPT_NIS2_Security_Assessment_Report.md) | Rapporto formale e peritale del Vulnerability Assessment e Penetration Test, con matrice CVSS v3.1 e stato di tutte le vulnerabilità bonificate. | [📄 Markdown](./VAPT_NIS2_Security_Assessment_Report.md) • [📥 PDF Formale](./VAPT_NIS2_Security_Assessment_Report.pdf) |
| [**Security Architecture & Defense-in-Depth**](./SECURITY_ARCHITECTURE.md) | Analisi dettagliata dell'architettura di sicurezza: Jamstack, eliminazione della superficie d'attacco backend, Content Security Policy (CSP) ed isolamento browser. | [📄 Markdown](./SECURITY_ARCHITECTURE.md) |
| [**NIS2 Compliance & Regulatory Guide**](./NIS2_COMPLIANCE_GUIDE.md) | Guida operativa alla conformità al D.Lgs. 138/2024, responsabilità degli organi societari, supply chain security e obblighi verso l'ACN. | [📄 Markdown](./NIS2_COMPLIANCE_GUIDE.md) |
| [**Incident Response Runbook (CSIRT/ACN)**](./INCIDENT_RESPONSE_RUNBOOK.md) | Procedure operative di gestione incidenti e flussi di notifica preventiva (24h early warning) e formale (72h) al CSIRT Italia. | [📄 Markdown](./INCIDENT_RESPONSE_RUNBOOK.md) |
| [**Coordinated Vulnerability Disclosure (RFC 9116)**](../public/.well-known/security.txt) | File standard `/.well-known/security.txt` per la segnalazione etica e coordinata di vulnerabilità da parte di ricercatori esterni. | [🌐 security.txt](../public/.well-known/security.txt) |

---

## 🔒 Postura di Sicurezza e Risultati VAPT (Post-Remediation)

Tutte le criticità identificate nell'audit preliminare di ottobre 2026 sono state **completamente bonificate e validate con test dinamici**:

```
[Bypass Routing & DoS] ──────► 🟢 RISOLTO (dynamicParams=false + validazione strict locale)
[Next.js CVEs & Sharp] ──────► 🟢 RISOLTO (Upgrade Next.js 16.4.0 + Sharp/PostCSS patched)
[Assenza CSP & Header] ──────► 🟢 RISOLTO (Content-Security-Policy + COOP + CORP attivi)
[Mancanza security.txt] ─────► 🟢 RISOLTO (RFC 9116 Coordinated Disclosure pubblicato)
[Header Robots Globale] ─────► 🟢 RISOLTO (Parametrizzato da env di produzione)
[Residui .DS_Store] ─────────► 🟢 RISOLTO (Eliminati e regole di blocco web server)
```

### Sintesi dello Stato dei Rilievi

- **Vulnerabilità Critiche/Alte Residue:** `0` (Zero).
- **Surface Attack Web:** Ridotta al minimo fisiologico tramite compilazione statica (SSG).
- **Crittografia:** HSTS Preload attivo (2 anni / `max-age=63072000; includeSubDomains; preload`).
- **Controllo di Integrità e Accessi:** Nessun database, nessun form con upload aperti, nessun pannello amministrativo esposto su rete pubblica.

---

## 📞 Canali di Segnalazione e Sicurezza

Per segnalare una vulnerabilità o contattare il team di cibersicurezza:
- **Email Security Team:** [security@zefironet.it](mailto:security@zefironet.it)
- **Whistleblowing & Integrity Line:** [zefironet.integrityline.com](https://zefironet.integrityline.com/)
- **PEC Istituzionale:** [zefironet@pec.it](mailto:zefironet@pec.it)
