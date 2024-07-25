import { locales } from '@/config';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function Page({
  params: {locale}
} : {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations("Projects")
  return (
    <section className="max-w-xl">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">{t('title')}</h1>
      <h2 className="text-xl mb-8">{t('about')}</h2>
    </section>
  )
}
