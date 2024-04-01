import type { Metadata } from 'next';
import '@/styles/common.scss';

export const metadata: Metadata = {
  title: 'Iteca Events',
};

export default function RootLayout(
    { children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }
) {
    return (
        <html lang={locale}>
            <body>
                {children}
            </body>
        </html>
    );
}
