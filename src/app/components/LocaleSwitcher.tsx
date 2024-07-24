'use client'
import { useLocale, useTranslations } from 'next-intl';
// import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { useRouter, usePathname } from '@/navigation';
import { locales } from '@/config';


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

    // const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //     const newLocale = e.target.value;
    //     if (newLocale == 'es' || newLocale == 'en') {
    //       router.replace(pathname, { locale: newLocale });
    //     }
    // }

    return (
      <button
        className={className}
        onClick={() => router.replace(pathname, { locale: newLocale})}
      >
        {t('switch-language')}
      </button>
    )

    // return (
    //     <select
    //         defaultValue={locale}
    //         onChange={onLocaleChange}
    //     >
    //         {locales.map((lang) => (
    //             <option key={lang} value={lang}>
    //                 {t('locale', { locale: lang })}
    //             </option>
    //         ))}
    //     </select>
    // )
}