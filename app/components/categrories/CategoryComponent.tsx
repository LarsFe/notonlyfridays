'use client';

import styles from './categories.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Category } from '@prisma/client';
import React, { use } from 'react';

const getCategories = () =>
  fetch(`http://localhost:3000/api/categories`).then((res) => res.json());

export default function CategoryComponent() {
  const t = useTranslations('Categories');
  const categories = use<Category[]>(getCategories());

  return (
    <div className={styles['category-collection']}>
      <ul className={styles['category-collection__list']}>
        {categories.map((category) => (
          <li className={styles['category-collection__item']} key={category.id}>
            <Image
              src={`https://robohash.org/${
                category.i18n_slug
              }?set=set2&size=${40}x${40}`}
              alt={t(category.i18n_slug)}
              width={40}
              height={40}
              priority
            />
            <span className={styles['category-collection__category']}>
              {t(category.i18n_slug)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
