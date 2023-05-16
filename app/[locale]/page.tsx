'use client';

import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

export default function Home() {
  const t = useTranslations('Home');

  return <main className={styles.content}>{t('title')}</main>;
}
