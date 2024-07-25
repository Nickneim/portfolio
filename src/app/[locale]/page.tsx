import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Page({
  params: {locale}
} : {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("HomePage")

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
