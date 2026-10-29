import { FadeIn } from '@/components/animations/FadeIn';
import type { Locale } from '@/i18n';

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isIt = lang === 'it';

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl pt-28 sm:pt-36 pb-20 sm:pb-32 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl">
        <FadeIn delay={0.1}>
        <div className="mb-8 pb-6 border-b border-gray-200 dark:border-white/10">
          <span className="text-xs font-bold uppercase tracking-widest text-zefiro-cyan mb-2 block">
            {isIt ? 'Informativa Legale' : 'Legal Information'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary dark:text-white mb-3">
            {isIt ? 'Informativa sulla Privacy' : 'Privacy Policy'}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isIt ? 'Ai sensi del Regolamento UE 2016/679 (GDPR) — Ultimo aggiornamento: Agosto 2026' : 'Pursuant to EU Regulation 2016/679 (GDPR) — Last updated: August 2026'}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-base sm:text-lg leading-relaxed">
        {isIt ? (
          <>
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">1. Titolare del Trattamento</h2>
              <p>
                Il Titolare del trattamento dei dati personali è <strong>Zefiro Net S.r.l.</strong>, con sede legale in Milano (MI), Via Gattamelata, 34, C.F. e P.IVA 12459610965.
              </p>
              <p>
                Per qualsiasi richiesta relativa alla privacy o per esercitare i propri diritti, è possibile contattare il Titolare all&apos;indirizzo email: <a href="mailto:amministrazione@zefironet.it" className="text-zefiro-cyan font-semibold hover:underline">amministrazione@zefironet.it</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">2. Tipologia di Dati Trattati</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dati di navigazione:</strong> I sistemi informatici acquisiscono alcuni dati tecnici (es. indirizzi IP, tipo di browser, orari di accesso) la cui trasmissione è implicita nell&apos;uso dei protocolli di comunicazione Internet.</li>
                <li><strong>Dati forniti volontariamente dall&apos;utente:</strong> L&apos;invio facoltativo ed esplicito di posta elettronica agli indirizzi indicati su questo sito (es. candidature spontanee a <code>recruiting@zefironet.it</code> o richieste a <code>info@zefironet.it</code>) comporta la successiva acquisizione dell&apos;indirizzo del mittente e dei dati personali inseriti nella comunicazione/curriculum.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">3. Finalità e Base Giuridica del Trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garantire il corretto funzionamento, la sicurezza e la manutenzione del sito web (Base giuridica: <em>legittimo interesse del Titolare</em>).</li>
                <li>Rispondere alle richieste di informazioni pervenute tramite email (Base giuridica: <em>esecuzione di misure precontrattuali</em>).</li>
                <li>Valutazione dei profili professionali pervenuti tramite candidatura spontanea (Base giuridica: <em>consenso e valutazione precontrattuale</em>).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">4. Conservazione dei Dati</h2>
              <p>
                I dati raccolti saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti (per le candidature, massimo 12-24 mesi, salvo instaurazione di rapporto lavorativo).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">5. Diritti degli Interessati</h2>
              <p>
                Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha il diritto di richiedere l&apos;accesso ai propri dati, la rettifica, la cancellazione, la limitazione del trattamento o la portabilità, inviando una comunicazione a <a href="mailto:amministrazione@zefironet.it" className="text-zefiro-cyan font-semibold hover:underline">amministrazione@zefironet.it</a>. Ha inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-zefiro-cyan hover:underline">www.garanteprivacy.it</a>).
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">1. Data Controller</h2>
              <p>
                The Data Controller is <strong>Zefiro Net S.r.l.</strong>, having its registered office in Milan (MI), Via Gattamelata, 34, Tax Code & VAT 12459610965, Italy.
              </p>
              <p>
                For any privacy-related requests or to exercise statutory data protection rights, you may contact the Controller at: <a href="mailto:amministrazione@zefironet.it" className="text-zefiro-cyan font-semibold hover:underline">amministrazione@zefironet.it</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">2. Categories of Processed Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Browsing Data:</strong> Computer systems automatically collect technical data (e.g. IP addresses, browser specifications, access timestamps) necessary for Internet communication protocols.</li>
                <li><strong>Data Voluntarily Provided by the User:</strong> Voluntary communications sent to email addresses published on this website (e.g. open job applications to <code>recruiting@zefironet.it</code>) entail processing of the sender&apos;s email address and attached CV information.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">3. Legal Basis & Purposes</h2>
              <p>Data is processed for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensuring proper functionality, maintenance, and cybersecurity of the platform (Legal basis: <em>legitimate interest</em>).</li>
                <li>Responding to inquiries received via email (Legal basis: <em>pre-contractual steps</em>).</li>
                <li>Evaluating prospective professional candidates submitting resumes (Legal basis: <em>consent / pre-contractual measures</em>).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">4. Data Retention</h2>
              <p>
                Personal data is stored only for the time strictly necessary to fulfill the purposes for which it was gathered (for resumes, up to 12-24 months unless an employment relationship is established).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">5. Data Subject Rights</h2>
              <p>
                Pursuant to Articles 15–22 of the GDPR, you are entitled to access, rectify, delete, restrict processing, or request data portability by contacting <a href="mailto:amministrazione@zefironet.it" className="text-zefiro-cyan font-semibold hover:underline">amministrazione@zefironet.it</a>. You also have the right to lodge a complaint with the Italian Data Protection Authority (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-zefiro-cyan hover:underline">www.garanteprivacy.it</a>).
              </p>
            </section>
          </>
        )}
      </FadeIn>
      </div>
    </main>
  );
}
