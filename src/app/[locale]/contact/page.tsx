import { GITHUB_PAGE, LINKEDIN_PAGE, locales } from '@/config';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IconContext } from 'react-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

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
    icon: <FaLinkedin/>,
    href: LINKEDIN_PAGE
  }
]


export default function Page({
  params: {locale}
} : {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale)

  const t = useTranslations("Contact")
  return (
    <section className="max-w-xl">
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">
        {t('title')}:
      </h1>
      <ul className="space-y-4">
        {links.map(({name, icon, href}) => (
          <li key={name}>
            <a
              className="flex items-center text-2xl hover:text-neutral-600 dark:hover:text-neutral-400"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              {icon}
              <p className="ml-2 underline">{name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
