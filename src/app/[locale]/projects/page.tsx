import { Project } from '@/app/components/Project';
import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('projects')
  };
}

export default function Page({
  params: {locale}
} : {
  params: {locale: string};
}) {
  setRequestLocale(locale)

  const t = useTranslations("Projects")

  const projects = ["games", "discord-bots", "thesis", "spamaps"]
  return (
    <section className="max-w-xl">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">{t('title')}</h1>
      <h2 className="text-xl mb-8">{t('about')}</h2>
      {projects.map(
        (project) =>
          (<Project key={project} project={project} />)
      )}
    </section>
  )
}
