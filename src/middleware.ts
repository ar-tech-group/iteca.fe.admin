import createMiddleware from 'next-intl/middleware';
import { localesCode } from '@/constants/locales';

export default createMiddleware({
    locales:       localesCode,
    defaultLocale: 'ru',
});

export const config = {
    matcher: ['/', '/(ru|en)/:path*']
};
