import { FC } from 'react';
import { useTranslations } from 'next-intl';

const Home: FC = () => {
    const t = useTranslations('homepage');

    return (
        <div className="homepage">
            { t('title') }
        </div>
    );
};

export default Home;
