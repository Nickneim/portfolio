import { Project } from '@/app/components/Project';
import { routing } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

 
export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('contact')
  };
}

export default async function Page({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale)

  const t = await getTranslations("Projects")

  const projects = ["raylib-puzzle", "games", "discord-bots", "thesis", "spamaps"]
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
