import '@/app/globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from '@/app/components/nav'
import Footer from '@/app/components/footer'
import { baseUrl } from '@/app/sitemap'
import Script from 'next/script'
import { Providers } from '@/app/providers'
import React from 'react'
import { notFound } from 'next/navigation'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
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
}

const locales = ['es', 'en'] as const;

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
  unstable_setRequestLocale(locale)

  const messages = await getMessages();
  
  return (
    <html
      lang={locale}
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="min-h-screen flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Providers locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  )
}
