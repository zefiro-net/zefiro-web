import 'server-only';

const dictionaries = {
  it: () => import('./dictionaries/it.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;
export const locales: Locale[] = ['it', 'en'];
export const defaultLocale: Locale = 'it';

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    return dictionaries[defaultLocale]();
  }
  return dictionaries[locale]();
};
