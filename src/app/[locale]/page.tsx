import { BlogPosts } from '@/app/components/posts'
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function Page({
  params: {locale}
} : {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("HomePage")

  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        {t('title')}
      </h1>
      <p className="mb-4 text-2xl">
        {t('about')}
      </p>
    </section>
  )
}
