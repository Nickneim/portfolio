import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'


function websiteToRichTag(website: string) {
  return function tag(chunks) {return <a className="text-blue-800 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold decoration-2 hover:underline focus:outline-none focus:underline" href={website}>{chunks}</a>};
}
const ABOUT_TAGS = {
  'puzzlescript': websiteToRichTag("https://www.puzzlescript.net/"),
  'bontegames': websiteToRichTag("https://www.bontegames.com/"),
  'theodoor': websiteToRichTag("https://thinkycollective.itch.io/theodoor"),
  'itchio': websiteToRichTag("https://coolnico.itch.io/"),
  'spamaps': websiteToRichTag("https://github.com/nickneim/spamaps/"),
}

export function Project({
  project,
  params: {locale}
} : { 
  project : string,
  params: {
    locale: string,
  }
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations(`Projects.${project}`)
  return (
    <div className='mb-4'>
      <div
        className="h-52 rounded-t-xl"
        style={{ background: `url(${t('image')})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="rounded-b-xl py-6 px-4 bg-neutral-300 dark:bg-neutral-900">
        <h5 className="text-xl font-semibold mb-2">{t('title')}</h5>
        <p className="text-xl">{t.rich('about', ABOUT_TAGS)}</p>
      </div>
    </div>
  )
}
