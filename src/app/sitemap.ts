import { defaultLocale, locales } from '@/config';
import {MetadataRoute} from 'next';

// Adapt this as necessary
const pathnames = ['/', '/projects', '/contact'];
export const baseUrl = 'https://nickneim.github.io';
 
export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    return `${baseUrl}/${locale}${pathname === '/' ? '' : pathname}`;
  }
 
  return pathnames.map((pathname) => ({
    url: getUrl(pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(pathname, locale)])
      )
    }
  }));
}