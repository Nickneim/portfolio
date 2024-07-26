import '@/app/globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { baseUrl } from '@/app/sitemap'
import { Providers } from '@/app/providers'
import React from 'react'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import { locales } from '@/config'

import {getTranslations} from 'next-intl/server';
 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: t('template')
    },
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: baseUrl,
      siteName: t('siteName'),
      locale: t('locale'),
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

//function to get the translations
// async function getMessages(locale: string) {
//   try {
//     return (await import(`@/../messages/${locale}.json`)).default
//   } catch (error) {
//     notFound()
//   }
// }


const cx = (...classes : string[]) => classes.filter(Boolean).join(' ')


export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // required since we're using static export
  unstable_setRequestLocale(locale)

  const messages = await getMessages();
  
  return (
    <html
      lang={locale}
      className={cx(
        "transition-colors duration-500",
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mx-auto mt-8 lg:mx-auto">
        <main className="min-h-screen flex-auto min-w-0 mt-6 flex flex-col px-6 sm:px-0">
          <Providers locale={locale} messages={messages}>
            <Navbar params={{locale}}/>
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  )
}
