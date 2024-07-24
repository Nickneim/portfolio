'use client'
import { useLocale, useTranslations } from 'next-intl';
// import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { useRouter, usePathname } from '@/navigation';


export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();


    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        if (newLocale == 'es' || newLocale == 'en') {
          router.replace(pathname, { locale: newLocale });
        }
    }


    return (
        <select
            defaultValue={locale}
            onChange={onLocaleChange}
        >
            {['en', 'es'].map((lang) => (
                <option key={lang} value={lang}>
                    {t('locale', { locale: lang })}
                </option>
            ))}
        </select>
    )
}