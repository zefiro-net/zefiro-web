import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '../media/logo-zefironet-white.svg';
import type { Locale } from '@/i18n';

type FooterDict = {
  footer: {
    tagline: string;
    azienda: string;
    chiSiamo: string;
    valori?: string;
    sedi: string;
    tecnologia?: string;
    ranSharing?: string;
    copertura?: string;
    sostenibilita?: string;
    certificazioni?: string;
    politiche?: string;
    pianoEsg?: string;
    bilancio?: string;
    risorse: string;
    governance?: string;
    documentiPubblici: string;
    modello231: string;
    whistleblowing: string;
    lavoraConNoi?: string;
    contatti: string;
    indirizzo: string;
    copyright: string;
    privacy: string;
    cookie: string;
  };
};

export default function Footer({ dict, lang }: { dict: FooterDict; lang: Locale }) {
  const f = dict.footer;
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 mt-auto border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4 sm:mb-6">
            <Image src={logoWhite} alt="Zefiro Net Logo" className="h-7 sm:h-8 w-auto" />
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed">
            {f.tagline}
          </p>
          <div className="space-y-1.5 text-xs text-gray-300">
            <p className="font-bold text-white uppercase tracking-wider text-[11px] mb-1">{f.contatti}</p>
            <p className="text-gray-300 leading-snug">{f.indirizzo}</p>
            <p>
              Email:{' '}
              <a href="mailto:info@zefironet.it" className="text-zefiro-cyan hover:underline font-medium">
                info@zefironet.it
              </a>
            </p>
            <p>
              Recruiting:{' '}
              <a href="mailto:recruiting@zefironet.it" className="text-zefiro-cyan hover:underline font-medium">
                recruiting@zefironet.it
              </a>
            </p>
          </div>
        </div>

        {/* Col 2: Chi Siamo */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 sm:mb-4">
            {f.azienda}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>
              <Link href={`/${lang}/chi-siamo`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.chiSiamo}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/chi-siamo#missione`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {lang === 'it' ? 'Visione e Missione' : 'Vision & Mission'}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/manifesto`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.valori || (lang === 'it' ? 'Il Nostro Manifesto' : 'Our Manifesto')}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/sedi`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.sedi}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/lavora-con-noi`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.lavoraConNoi || (lang === 'it' ? 'Lavora con noi' : 'Work with us')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Tecnologia & Sostenibilità */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 sm:mb-4">
            {f.tecnologia || 'Tecnologia'} & {f.sostenibilita || 'Sostenibilità'}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>
              <Link href={`/${lang}/tecnologia#ran-sharing`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.ranSharing || 'RAN Sharing'}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/sostenibilita#certificazioni`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.certificazioni || (lang === 'it' ? 'Certificazioni' : 'Certifications')}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/sostenibilita#politiche`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.politiche || (lang === 'it' ? 'Politiche ESG' : 'ESG Policies')}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/sostenibilita#piano-esg`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.pianoEsg || (lang === 'it' ? 'Piano ESG' : 'ESG Plan')}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/sostenibilita#bilancio`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.bilancio || (lang === 'it' ? 'Bilancio di Sostenibilità 2025' : 'Report 2025')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Governance & Trasparenza */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 sm:mb-4">
            {f.risorse}
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
            <li>
              <Link href={`/${lang}/documenti`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.documentiPubblici}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/chi-siamo#valori`} className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block">
                {f.modello231}
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zefironet.integrityline.com/"
                className="hover:text-zefiro-cyan transition-colors py-0.5 inline-block"
              >
                {f.whistleblowing}
              </a>
            </li>
            <li>
              <span className="text-gray-400 text-xs py-0.5 inline-block italic">
                {lang === 'it' ? 'Governance (in allestimento)' : 'Governance (upcoming)'}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Corporate Strip */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 text-xs sm:text-sm text-gray-300">
          <p className="font-medium text-center sm:text-left">
            &copy; {new Date().getFullYear()} Zefiro Net S.r.l. — {f.copyright}
          </p>
          <div className="flex items-center gap-4 text-xs sm:text-sm shrink-0">
            <Link href={`/${lang}/privacy-policy`} className="hover:text-zefiro-cyan text-gray-300 hover:underline transition-colors py-0.5">
              {f.privacy}
            </Link>
            <span className="text-white/20">•</span>
            <Link href={`/${lang}/cookie-policy`} className="hover:text-zefiro-cyan text-gray-300 hover:underline transition-colors py-0.5">
              {f.cookie}
            </Link>
          </div>
        </div>

        {/* Corporate Details Line */}
        <p className="text-[11px] sm:text-xs text-gray-400/90 leading-relaxed text-center sm:text-left">
          Sede Legale: {f.indirizzo} • P.IVA e C.F. [00000000000] • Cap. Soc. [€ 000.000,00 i.v.] • REA [MI-0000000] • PEC:{' '}
          <a href="mailto:zefironet@legalmail.it" className="text-gray-300 hover:text-zefiro-cyan transition-colors">
            zefironet@legalmail.it
          </a>
        </p>
      </div>
    </footer>
  );
}
