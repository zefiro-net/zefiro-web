import { FadeIn } from '@/components/animations/FadeIn';
import type { Locale } from '@/i18n';

export default async function CookiePolicyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const isIt = lang === 'it';

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl pt-28 sm:pt-36 pb-20 sm:pb-32 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl">
        <FadeIn delay={0.1}>
        <div className="mb-8 pb-6 border-b border-gray-200 dark:border-white/10">
          <span className="text-xs font-bold uppercase tracking-widest text-zefiro-cyan mb-2 block">
            {isIt ? 'Informativa Cookie' : 'Cookie Information'}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-primary dark:text-white mb-3">
            {isIt ? 'Informativa sui Cookie' : 'Cookie Policy'}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isIt ? 'Conforme alle Linee Guida Cookie del Garante Privacy — Ultimo aggiornamento: Agosto 2026' : 'Compliant with Privacy Authority Guidelines — Last updated: August 2026'}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-base sm:text-lg leading-relaxed">
        {isIt ? (
          <>
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">1. Cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web visitati inviano al terminale dell&apos;utente (computer, smartphone, tablet), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">2. Tipologie di Cookie Utilizzati da questo Sito</h2>
              <p>
                Questo sito web utilizza <strong>esclusivamente Cookie e Storage Tecnici</strong> strettamente necessari al funzionamento e alla corretta visualizzazione delle pagine:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-left text-sm border border-gray-200 dark:border-white/10 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-slate-800 text-primary dark:text-white font-bold">
                    <tr>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Nome</th>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Tipologia</th>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Finalità</th>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Durata</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                    <tr>
                      <td className="p-3 font-mono text-xs">theme</td>
                      <td className="p-3">Tecnico (Local Storage)</td>
                      <td className="p-3">Memorizza la preferenza tema (chiaro / scuro)</td>
                      <td className="p-3">Persistente</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">NEXT_LOCALE</td>
                      <td className="p-3">Tecnico di navigazione</td>
                      <td className="p-3">Gestione della lingua selezionata (IT / EN)</td>
                      <td className="p-3">Sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-2xl bg-zefiro-cyan/10 border border-zefiro-cyan/20 text-sm">
                <strong>Nota di trasparenza:</strong> Il sito di Zefiro Net <u>NON utilizza</u> cookie di profilazione, cookie pubblicitari o strumenti di tracciamento invasivi di terze parti (es. Facebook Pixel, Google Ads).
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">3. Gestione e Disabilitazione dei Cookie</h2>
              <p>
                Essendo utilizzati solo cookie tecnici, non è richiesta la raccolta del consenso preventivo tramite banner bloccante. L&apos;utente può comunque gestire, limitare o bloccare i cookie modificando le impostazioni del proprio browser di navigazione (Chrome, Safari, Firefox, Edge).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">4. Contatti</h2>
              <p>
                Per qualsiasi domanda sulla presente Cookie Policy, puoi scrivere a: <a href="mailto:amministrazione@zefironet.it" className="text-zefiro-cyan font-semibold hover:underline">amministrazione@zefironet.it</a>.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">1. What are Cookies</h2>
              <p>
                Cookies are small text files that visited websites send to user devices (computers, smartphones, tablets), where they are stored to be re-transmitted during subsequent visits.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">2. Cookies Used on This Website</h2>
              <p>
                This website uses <strong>strictly Technical Cookies and Storage</strong> essential for page navigation and layout rendering:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-left text-sm border border-gray-200 dark:border-white/10 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-slate-800 text-primary dark:text-white font-bold">
                    <tr>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Name</th>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Type</th>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Purpose</th>
                      <th className="p-3 border-b border-gray-200 dark:border-white/10">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                    <tr>
                      <td className="p-3 font-mono text-xs">theme</td>
                      <td className="p-3">Technical (Local Storage)</td>
                      <td className="p-3">Stores visual theme preference (light / dark)</td>
                      <td className="p-3">Persistent</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-xs">NEXT_LOCALE</td>
                      <td className="p-3">Technical Navigation</td>
                      <td className="p-3">Language preference management (IT / EN)</td>
                      <td className="p-3">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 rounded-2xl bg-zefiro-cyan/10 border border-zefiro-cyan/20 text-sm">
                <strong>Transparency note:</strong> Zefiro Net&apos;s website <u>DOES NOT use</u> profiling cookies, marketing pixels, or third-party behavioral trackers.
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">3. Disabling Cookies</h2>
              <p>
                Since only technical cookies are used, no blocking consent banner is required. Users may configure their browser settings (Chrome, Safari, Firefox, Edge) to restrict or disable cookies at any time.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-white">4. Contacts</h2>
              <p>
                For questions regarding this Cookie Policy, contact: <a href="mailto:amministrazione@zefironet.it" className="text-zefiro-cyan font-semibold hover:underline">amministrazione@zefironet.it</a>.
              </p>
            </section>
          </>
        )}
      </FadeIn>
      </div>
    </main>
  );
}
