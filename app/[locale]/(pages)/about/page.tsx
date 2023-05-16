import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return <main>{t('title')}</main>;
}
