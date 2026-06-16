export type Locale = 'en' | 'pt';

export const SITE = {
  url: 'https://www.ogustavo.com',
  name: 'Gustavo Varela Alvarenga',
  locales: ['en', 'pt'] as Locale[],
  defaultLocale: 'en' as Locale,
  socials: {
    github: 'https://github.com/Gu-Stat',
    linkedin: 'https://www.linkedin.com/in/gustavo-varela-alvarenga',
    scholar: 'https://scholar.google.com/citations?user=YOUR_ID', // update with your Scholar URL
    email: 'mailto:contact@ogustavo.com',
  },
  cv: {
    en: '/uploads/Resume-Gustavo-Varela-Alvarenga.pdf',
    pt: '/uploads/Curriculo-Gustavo-Varela-Alvarenga.pdf',
  },
};

// Build a localized path. slug '' => home. EN lives at the root, PT under /pt.
export function localePath(locale: Locale, slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  const base = locale === 'en' ? '' : '/pt';
  return clean ? `${base}/${clean}` : `${base}/` || '/';
}

// Given the current pathname, return the equivalent path in the other locale.
export function alternatePath(pathname: string): { locale: Locale; href: string } {
  const isPt = pathname === '/pt' || pathname.startsWith('/pt/');
  if (isPt) {
    const rest = pathname.replace(/^\/pt/, '');
    return { locale: 'en', href: rest === '' ? '/' : rest };
  }
  const rest = pathname === '/' ? '' : pathname;
  return { locale: 'pt', href: rest === '' ? '/pt/' : `/pt${rest}` };
}
