import { useTranslations } from 'next-intl';
import React from 'react'
import { basePath } from '@/app/sitemap';

const websiteToRichTag = (website: string) => (chunks: React.ReactNode) => (  
  <a
    href={website}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-800 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold decoration-2 hover:underline focus:outline-none focus:underline"
  >
    {chunks}
  </a>
);

const ABOUT_TAGS = {
  'puzzlescript': websiteToRichTag("https://www.puzzlescript.net/"),
  'bontegames': websiteToRichTag("https://www.bontegames.com/"),
  'theodoor': websiteToRichTag("https://thinkycollective.itch.io/theodoor"),
  'itchio': websiteToRichTag("https://coolnico.itch.io/"),
  'spamaps': websiteToRichTag("https://github.com/nickneim/spamaps/"),
}

export function Project({
  project
} : { 
  project : string
}) {

  const t = useTranslations(`Projects.${project}`)
  return (
    <div className='mb-4'>
      <div
        className="h-52 rounded-t-xl"
        style={{ background: `url(${basePath}${t('image')})`, backgroundSize: "cover" }}
      >
      </div>
      <div className="rounded-b-xl py-6 px-4 bg-neutral-300 dark:bg-neutral-900">
        <h5 className="text-xl font-semibold mb-2">{t('title')}</h5>
        <p className="text-xl">{t.rich('about', ABOUT_TAGS)}</p>
      </div>
    </div>
  )
}
