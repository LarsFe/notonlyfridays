'use client';

import { useTranslations } from 'next-intl';
import ListUsersComponent from '../components/users/ListUsersComponent';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main>
      {t('title')}
      <ListUsersComponent />
    </main>
  );
}
