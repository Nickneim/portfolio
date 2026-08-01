import {routing} from '@/i18n/routing';
import {MetadataRoute} from 'next';

export const dynamic = 'force-static';

const pathnames = ['/', '/projects', '/contact'];
export const basePath = process.env.NODE_ENV === 'development' ? '' : '/portfolio';
export const baseUrl = `https://nickneim.github.io${basePath}`;
 
export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    return `${baseUrl}/${locale}${pathname === '/' ? '' : pathname}`;
  }
 
  return pathnames.map((pathname) => ({
    url: getUrl(pathname, routing.defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(pathname, locale)])
      )
    }
  }));
}