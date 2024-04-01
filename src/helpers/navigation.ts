import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localesCode } from '@/constants/locales';

const locales = localesCode;
const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix });
