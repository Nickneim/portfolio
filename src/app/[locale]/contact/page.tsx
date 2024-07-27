import CopyButton from '@/app/components/CopyButton';
import { basePath } from '@/app/sitemap';
import { GITHUB_PAGE, ITCHIO_PAGE, LINKEDIN_PAGE, locales } from '@/config';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { FaGithub, FaItchIo, FaLinkedin } from 'react-icons/fa6';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const links = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: GITHUB_PAGE
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: LINKEDIN_PAGE
  },
  {
    name: "Itch.io",
    icon: <FaItchIo />,
    href: ITCHIO_PAGE
  }
]

 
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('contact')
  };
}

const GMAIL_ACCOUNT = "nicolas.montes@gmail.com"


export default function Page({
  params: {locale}
} : {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations("Contact")

  const otherLocale = locale === 'en' ? 'es' : 'en';

  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        {t('title')}
      </h1>
      <ul className="space-y-4">
        {links.map(({name, icon, href}) => (
          <li key={name}>
            <a
              className="flex justify-center items-center text-2xl hover:text-neutral-600 dark:hover:text-neutral-400"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              {icon}
              <p className=" ml-2 underline">{name}</p>
            </a>
          </li>
        ))}
        <li>
          <div
            className="flex justify-center items-center text-xl"
          >
            <p className="hidden sm:flex mr-2">E-mail:</p>
            {GMAIL_ACCOUNT}
            <CopyButton text={GMAIL_ACCOUNT} tooltip={t('copied')} />
          </div>
        </li>
        <li>
          <a
            className="flex justify-center items-center text-2xl px-4 py-2 bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-800 rounded-full border-2 border-neutral-500"
            rel="noopener noreferrer"
            target="_blank"
            href={`${basePath}/cv/${locale}/Montes Nicolás - CV.pdf`}
          >
            {locale === 'en' ? 
              t('cv-english') : t('cv-spanish') }
          </a>
        </li>
        <li>
          <a
            className="flex justify-center items-center text-2xl px-4 py-2 bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-800 rounded-full border-2 border-neutral-500"
            rel="noopener noreferrer"
            target="_blank"
            href={`${basePath}/cv/${otherLocale}/Montes Nicolás - CV.pdf`}
          >
            {locale === 'en' ? 
              t('cv-spanish') : t('cv-english') }
          </a>
        </li>
      </ul>
    </section>
  )
}
