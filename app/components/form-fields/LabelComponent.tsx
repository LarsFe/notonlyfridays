'use client';

import { useTranslations } from 'next-intl';

type InputComponentProps = {
  identifier: string;
};

export default function InputComponent({ identifier }: InputComponentProps) {
  const t = useTranslations('Search');

  return <label htmlFor={identifier}>{t('label')}</label>;
}
