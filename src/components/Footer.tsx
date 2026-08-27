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
      <div className="container mx-auto px-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p>&copy; {new Date().getFullYear()} Zefiro Net SRL {f.copyright}</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors py-1">{f.privacy}</Link>
          <Link href="#" className="hover:text-white transition-colors py-1">{f.cookie}</Link>
        </div>
      </div>
    </footer>
  );
}
