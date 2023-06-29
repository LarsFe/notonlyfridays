'use client';

import styles from './categories.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Category } from '@prisma/client';

const getCategories = async (): Promise<Category[]> => {
  const data = await fetch('http://localhost:3000/api/categories');
  const categories = await data.json();

  return categories;
};

export default async function CategoryComponent() {
  const t = useTranslations('Categories');
  const categories = await getCategories();

  return (
    <div className={styles['category-collection']}>
      <ul className={styles['category-collection__list']}>
        {categories.map((category) => (
          <li className={styles['category-collection__item']} key={category.id}>
            <Link href={`/${category.i18n_slug}`}>
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
