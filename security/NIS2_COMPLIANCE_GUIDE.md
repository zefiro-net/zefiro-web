# 📜 Guida alla Conformità Direttiva NIS2 (D.Lgs. 138/2024)
**Linee Guida di Compliance per Zefiro Net S.r.l.**

---

## 1. Ambito di Applicazione e Qualificazione Giuridica

La **Direttiva (UE) 2022/2555 (NIS2)**, recepita nell'ordinamento italiano con il **Decreto Legislativo 11 ottobre 2024, n. 138**, stabilisce un quadro armonizzato di misure volte a garantire un elevato livello comune di cibersicurezza nell'Unione Europea.

### Qualificazione di Zefiro Net
In base all'**Allegato I (Settori ad alta criticità), Settore 8: *Infrastrutture Digitali***:
- *Fornitori di reti pubbliche di comunicazioni elettroniche*
- *Fornitori di servizi di comunicazione elettronica accessibili al pubblico*

Zefiro Net S.r.l. si qualifica come **Soggetto Essenziale** (*Essential Entity*), rientrando sotto la diretta vigilanza e i poteri sanzionatori dell'**Autorità Nazionale Competente (ACN — Agenzia per la Cybersicurezza Nazionale)**.

---

## 2. Requisiti di Sicurezza Obbligatori (Articolo 21, D.Lgs. 138/2024)

L'Articolo 21 impone l'adozione di misure tecniche, operative e organizzative adeguate e proporzionate alla gestione dei rischi per la sicurezza dei sistemi informativi e delle reti:

### 2.1 Misure Applicate all'Asset Web:
1. **Analisi del Rischio & Politiche di Sicurezza (Art. 21.2.a):**
   - Esecuzione periodica documentata di Vulnerability Assessment e Penetration Testing (VAPT).
   - Documento formale di Threat Modeling e perimetro applicativo.
2. **Gestione degli Incidenti (Art. 21.2.b):**
   - Adozione del runbook operativo di risposta agli incidenti con canali dedicati verso il CSIRT Italia.
3. **Continuità Operativa & Disaster Recovery (Art. 21.2.c):**
   - Distribuzione su CDN geograficamente ridondata con failover automatico.
   - Snapshot e backup versionati del repository Git e degli asset statici.
4. **Sicurezza della Supply Chain (Art. 21.2.d):**
   - Controllo costante del Software Bill of Materials (SBOM) delle librerie npm.
   - Integrazione automatica di `npm audit` / Dependabot nelle pipeline di continuous integration.
5. **Divulgazione Coordinata delle Vulnerabilità — CVD (Art. 21.2.e):**
   - Pubblicazione attiva del file standard `/.well-known/security.txt` conforme a **RFC 9116**.
6. **Igiene di Base & Crittografia (Art. 21.2.g, 21.2.h):**
   - Configurazione HSTS con max-age di 2 anni e inclusione nei registri di Preload.
   - Content Security Policy (CSP) priva di wildcard insicure.
   - Disattivazione di protocolli legacy (TLS 1.0, 1.1) a livello di web server.
7. **Autenticazione Forte (Art. 21.2.j):**
   - Obbligo di Multi-Factor Authentication (MFA) hardware/FIDO2 per tutti gli accessi amministrativi al repository GitHub e ai pannelli di gestione hosting/DNS.

---

## 3. Regime di Notifica degli Incidenti al CSIRT Italia (Articolo 25)

In qualità di Soggetto Essenziale, Zefiro Net è soggetta alla procedura stringente di notifica a più fasi in caso di **incidente significativo**:

```
+--------------------------------------------------------------------------+
|                  CRONOGRAMMA NOTIFICHE CSIRT ITALIA / ACN                |
+--------------------------------------------------------------------------+
|   T0: Rilevamento incidente significativo                                |
|    │                                                                     |
|    ├── Entro 24 ORE ────────► ALLERTA PRECOCE ("Early Warning")          |
|    │                          (Indica se dovuto ad azione illecita o     |
|    │                           se con potenziale impatto transfrontaliero)|
|    │                                                                     |
|    ├── Entro 72 ORE ────────► NOTIFICA DELL'INCIDENTE COMPLETA           |
|    │                          (Valutazione iniziale di gravità, impatto, |
|    │                           indicatori di compromissione - IoC)       |
|    │                                                                     |
|    └── Entro 1 MESE ────────► RELAZIONE FINALE SULL'INCIDENTE            |
|                               (Descrizione dettagliata, causa radice,    |
|                                misure di mitigazione applicate)          |
+--------------------------------------------------------------------------+
```

### Canale di Notifica ACN:
- Portale Ufficiale CSIRT Italia: [https://www.csirt.gov.it/](https://www.csirt.gov.it/)
- PEC di emergenza ACN / CSIRT: `segnalazioni@pec.csirt.gov.it`

---

## 4. Responsabilità degli Organi di Amministrazione e Direttivi (Articolo 20)

La Direttiva NIS2 e il D.Lgs. 138/2024 introducono il principio di **responsabilità diretta e personale per i membri degli organi di governance**:
- Gli organi di amministrazione e direttivi **devono approvare** le misure di gestione dei rischi di cibersicurezza.
- I dirigenti devono seguire regolarmente **corsi di formazione specifica** in materia di cybersicurezza.
- **Sanzioni Amministrative (Articolo 38):**
  - Per i Soggetti Essenziali: sanzioni fino a **10.000.000 € o al 2% del fatturato annuo globale**, a seconda di quale importo sia superiore.
  - Possibilità di sospensione temporanea dalle cariche direttive per gli amministratori in caso di reiterata inottemperanza alle ingiunzioni dell'Autorità.
