import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { localesCode } from '@/constants/locales';

export default getRequestConfig(async ({ locale }) => {
    if (!localesCode.includes(locale as any)) notFound();

    return {
        messages: (await import(`./lang/${locale}.json`)).default
    };
});
