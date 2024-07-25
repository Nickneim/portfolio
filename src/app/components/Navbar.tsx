import { Link } from '@/navigation';
import LocaleSwitcher from '@/app/components/LocaleSwitcher';
import DarkModeSwitcher from '@/app/components/DarkModeSwitcher';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

const navItems = {
  '/': {
    name: 'home',
  },
  '/projects': {
    name: 'projects',
  },
  '/contact': {
    name: 'contact',
  }
}



export function Navbar({
  params: {locale}
} : {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("Navbar")
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="hover:text-neutral-800 hover:underline underline-offset-[3px] dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {t(name)}
                </Link>
              )
            })}
            <LocaleSwitcher className="hover:text-neutral-800 hover:underline underline-offset-[3px] dark:hover:text-neutral-200 flex align-right relative py-1 px-2 m-1"/>
            <DarkModeSwitcher className="hover:text-neutral-800 hover:underline underline-offset-[3px] dark:hover:text-neutral-200 flex align-right relative py-1 px-2 m-1" />
          </div>
        </nav>
      </div>
    </aside>
  )
}
