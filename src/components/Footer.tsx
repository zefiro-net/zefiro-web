import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '../media/logo-zefironet-white.svg';
import type { Locale } from '@/i18n';

type FooterDict = {
  footer: {
    tagline: string;
    azienda: string;
    chiSiamo: string;
    manifesto: string;
    sedi: string;
    risorse: string;
    documentiPubblici: string;
    modello231: string;
    certificazioni: string;
    whistleblowing: string;
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
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4 sm:mb-6">
            <Image src={logoWhite} alt="Zefiro Net Logo" className="h-7 sm:h-8 w-auto" />
          </div>
          <p className="text-sm text-gray-300 mb-4 sm:mb-6 leading-relaxed">{f.tagline}</p>
        </div>
        <div>
          <h4 className="font-bold text-base mb-3 sm:mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">{f.azienda}</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-sm text-gray-300">
            <li><Link href={`/${lang}/chi-siamo`} className="hover:underline hover:text-white transition-colors py-1 inline-block">{f.chiSiamo}</Link></li>
            <li><Link href={`/${lang}/manifesto`} className="hover:underline hover:text-white transition-colors py-1 inline-block">{f.manifesto}</Link></li>
            <li><Link href={`/${lang}/sedi`} className="hover:underline hover:text-white transition-colors py-1 inline-block">{f.sedi}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-3 sm:mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">{f.risorse}</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-sm text-gray-300">
            <li><Link href={`/${lang}/documenti`} className="hover:underline hover:text-white transition-colors py-1 inline-block">{f.documentiPubblici}</Link></li>
            <li><Link href={`/${lang}/chi-siamo#certificazioni`} className="hover:underline hover:text-white transition-colors py-1 inline-block">{f.modello231}</Link></li>
            <li><Link href={`/${lang}/chi-siamo#certificazioni`} className="hover:underline hover:text-white transition-colors py-1 inline-block">{f.certificazioni}</Link></li>
            <li><Link target="_blank" rel="noopener noreferrer" href="https://zefironet.integrityline.com/" className="hover:underline hover:text-white transition-colors py-1 inline-block">{f.whistleblowing}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base mb-3 sm:mb-4 text-white uppercase tracking-wider text-xs sm:text-sm">{f.contatti}</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-sm text-gray-300">
            <li><a href="mailto:info@zefironet.it" className="hover:underline hover:text-white py-1 inline-block text-zefiro-cyan font-medium">info@zefironet.it</a></li>
            <li className="leading-relaxed">{f.indirizzo}</li>
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
            <Link href={`/${lang}/privacy-policy`} className="hover:text-zefiro-cyan text-gray-300 hover:underline transition-colors py-0.5">{f.privacy}</Link>
            <span className="text-white/20">•</span>
            <Link href={`/${lang}/cookie-policy`} className="hover:text-zefiro-cyan text-gray-300 hover:underline transition-colors py-0.5">{f.cookie}</Link>
          </div>
        </div>

        {/* Corporate Details Line */}
        <p className="text-[11px] sm:text-xs text-gray-400/90 leading-relaxed text-center sm:text-left">
          Sede Legale: {f.indirizzo} • P.IVA e C.F. [00000000000] • Cap. Soc. [€ 000.000,00 i.v.] • REA [MI-0000000] • PEC: <a href="mailto:zefironet@pec.it" className="text-gray-300 hover:text-zefiro-cyan transition-colors">[zefironet@pec.it]</a>
        </p>
      </div>
    </footer>
  );
}
