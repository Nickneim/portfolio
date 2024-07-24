import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['es', 'en'] as const;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales: locales});