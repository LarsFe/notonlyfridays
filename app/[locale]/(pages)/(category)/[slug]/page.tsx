'use client';

import { useParams } from 'next/navigation';
import { Category as CategoryModel } from '@prisma/client';
import { useTranslations } from 'next-intl';

const getCategory = async (slug: string): Promise<CategoryModel> => {
  const data = await fetch(`http://localhost:3000/api/categories/${slug}`, {
    method: 'GET',
  });
  const company = await data.json();

  return company;
};

export default async function Category() {
  const params = useParams();
  const t = useTranslations('Categories');
  const category = await getCategory(params.slug);

  return (
    <main>
      <h1>{t(category.i18n_slug)}</h1>
    </main>
  );
}
