# 🚨 Incident Response Runbook & Notifiche CSIRT/ACN
**Piattaforma Web Zefiro Net S.r.l.**

Questo runbook operativo fornisce la procedura standard di risposta agli incidenti cibernetici relativi al portale web di Zefiro Net, garantendo la piena rispondenza ai termini legali fissati dall'**Art. 25 del D.Lgs. 138/2024 (NIS2)**.

---

## 1. Classificazione di Gravità dell'Incidente

| Livello | Descrizione / Scenario | SLA Rilevamento & Triage | Obbligo Notifica ACN / CSIRT |
| :---: | :--- | :---: | :---: |
| **P1 - Critico** | Defacement pubblico del portale, indisponibilità totale protratta (>1h) dovuta a DDoS, compromissione dell'account DNS o del registry hosting, data breach con fuga di dati personali. | < 15 minuti | **SÌ (Allerta entro 24h, Notifica entro 72h)** |
| **P2 - Alto** | Tentativi massivi di exploit con impatto parziale sulle performance, individuazione di una vulnerabilità 0-day attiva sulla catena di fornitura, bypass della Content Security Policy. | < 1 ora | Valutazione CSIRT interno |
| **P3 - Medio** | Scansioni massive di vulnerability scanning bloccate con successo (404/WAF), segnalazione esterna via `security.txt` senza impatto in produzione. | < 4 ore | No (Logging e tracciamento interno) |
| **P4 - Basso** | Bug grafici minori, falsi allarmi, tentativi isolati di scansione bot. | < 24 ore | No |

---

## 2. Fasi del Ciclo di Gestione dell'Incidente

```
[1. Identificazione] ──► [2. Contenimento] ──► [3. Notifica 24h CSIRT]
                                 │
                                 ▼
[6. Review & Post-Mortem] ◄── [5. Recupero] ◄── [4. Eradicazione & Notifica 72h]
```

### Fase 1: Identificazione e Triage
1. Ricezione dell'alert (da monitoraggio uptime, WAF, log CDN o segnalazione su `security@zefironet.it`).
2. Verifica dell'effettiva compromissione e attribuzione del livello di gravità (P1-P4).
3. Convocazione immediata dell'**Incident Response Team (IRT)** di Zefiro Net.

### Fase 2: Contenimento Immediato
In caso di defacement o compromissione accertata:
1. **Isolamento Edge/CDN:** Reindirizzare temporaneamente il traffico su una pagina statica di emergenza immutabile (*Under Maintenance / Safe Landing*).
2. **Revoca Credenziali:** Invalidare immediatamente tutti i token di accesso Git, API key del provider CDN/DNS e forzare il reset delle sessioni amministrative.
3. **Preservazione delle Evidenze:** Salvare un dump completo dei log di accesso e degli header HTTP per le analisi forensi.

### Fase 3: Notifica CSIRT Italia (Entro 24 ore)
In caso di incidente significativo (P1), il Security Officer invia l'**Allerta Precoce (Early Warning)** al CSIRT Italia tramite il portale [csirt.gov.it](https://www.csirt.gov.it/) o PEC istituzionale.

#### Template Notifica 24h (Early Warning):
```text
Destinatario: segnalazioni@pec.csirt.gov.it
Oggetto: NOTIFICA PREVENTIVA INCIDENTE SIGNIFICATIVO (D.Lgs. 138/2024, Art. 25) - Zefiro Net S.r.l.

1. Denominazione Entità: Zefiro Net S.r.l. (Soggetto Essenziale NIS2 - Settore TLC Wholesale)
2. Data e Ora di Rilevamento: [AAAA-MM-GG HH:MM CET]
3. Tipologia Incidente: [es. Defacement / DoS / Compromissione Fornitore]
4. Azione Illecita Sospetta: [Sì / In fase di accertamento]
5. Impatto Transfrontaliero: [No / Non rilevato]
6. Misure di Contenimento Immediate Attuate: [es. Attivazione manutenzione statica e blocco IP malevoli]
7. Referente Tecnico Reperibile: [Nome, Ruolo, Recapito Telefonico, Email Cifrata]
```

### Fase 4: Eradicazione & Risoluzione
1. Analisi del vettore di attacco utilizzato dall'avversario.
2. Applicazione della patch correttiva sul codice sorgente o sulle regole del Web Application Firewall (WAF).
3. Esecuzione di nuova compilazione pulita da commit sicuro verificato.

### Fase 5: Notifica Completa (Entro 72 ore)
Trasmissione della relazione preliminare dettagliata ad ACN / CSIRT Italia:
- Indicatori di Compromissione (IoC).
- Causa scatenante preliminare.
- Stima dell'impatto sul servizio o su eventuali dati.

### Fase 6: Ripristino e Chiusura
1. Ripristino del traffico standard su rete di produzione.
2. Monitoraggio rafforzato nelle 48 ore successive.
3. Redazione della **Relazione Finale (Final Report)** entro 1 mese dall'incidente.
