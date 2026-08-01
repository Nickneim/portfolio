import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';

export default async function Page({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale)
  const t = await getTranslations("HomePage")

  return (
    <section className="max-w-xl">
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        {t('title')}
      </h1>
      <p className="mb-4 text-2xl">
        {t('about')}{' '}
        <Link className='underline text-cyan-900 dark:text-cyan-100 rounded-full' href="/contact">{t('contact')}</Link>
      </p>
    </section>
  )
}
