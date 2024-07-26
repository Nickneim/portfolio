'use client'
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { MdLanguage } from 'react-icons/md';


export default function LocaleSwitcher({
  className
}: {
  className? : string
}) {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const newLocale = locale === 'es' ? 'en' : 'es';

    return (
      
      <button
        className={`flex flex-row ${className}`}
        onClick={() => router.replace(pathname, { locale: newLocale})}
      >
        <p className="flex font-semibold items-center sm:hidden">
          <MdLanguage aria-label={('switch-language')} />
          {locale}
        </p>
        <p className="hidden sm:flex">{t('switch-language')}</p>
      </button>
    )

}