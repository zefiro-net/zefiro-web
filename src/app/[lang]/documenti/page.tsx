import { getDocuments } from '@/data';
import { DocumentiClient } from './DocumentiClient';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n';


export default async function DocumentiPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const documents = getDocuments(lang);
  const dict = await getDictionary(lang);

  return <DocumentiClient documents={documents} dict={dict.documenti} />;
}
