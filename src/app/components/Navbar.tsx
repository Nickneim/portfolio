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
          className="flex flex-row px-0 pb-0 fade md:overflow-auto scroll-pr-6"
          id="nav"
        >
          <div className="flex items-center space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="hover:text-neutral-800 hover:underline underline-offset-[3px] dark:hover:text-neutral-200 text-center py-1 px-2 m-1"
                >
                  {t(name)}
                </Link>
              )
            })}
          </div>
          <div className="flex ml-auto items-center space-x-0">
            <DarkModeSwitcher className="hover:text-neutral-800 hover:underline underline-offset-[3px] dark:hover:text-neutral-200 py-1 px-2 m-1" />
            <LocaleSwitcher className="hover:text-neutral-800 hover:underline underline-offset-[3px] dark:hover:text-neutral-200 py-1 px-2 m-1"/>
          </div>
        </nav>
      </div>
    </aside>
  )
}
