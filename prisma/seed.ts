import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      name: 'Lars',
      email: 'admin@admin.com',
      role: 'admin',
    },
  });
  await prisma.user.upsert({
    where: { email: 'sabrina@user.com' },
    update: {},
    create: {
      name: 'Sabrina',
      email: 'sabrina@user.com',
      role: 'user',
    },
  });
  await prisma.user.upsert({
    where: { email: 'hannah@user.com' },
    update: {},
    create: {
      name: 'Hannah',
      email: 'hannah@user.com',
      role: 'user',
    },
  });

  await prisma.category.createMany({
    data: [
      { i18n_slug: 'toys', priority: 1 },
      { i18n_slug: 'clothing', priority: 2 },
      { i18n_slug: 'unpackaged', priority: 3 },
      { i18n_slug: 'jewelry', priority: 4 },
      { i18n_slug: 'second_hand', priority: 5 },
      { i18n_slug: 'furniture', priority: 6 },
      { i18n_slug: 'travel', priority: 7 },
    ],
    skipDuplicates: true,
  });

  await prisma.company.createMany({
    data: [
      {
        name: 'Bemaya',
        short_description:
          'Bemaya bietet dir alles, was du für einen tollen Kindergeburtstag oder eine Teenager-Geburtstagsfeier brauchst.',
        description:
          'Bemaya bietet dir alles, was du für einen tollen Kindergeburtstag oder eine Teenager-Geburtstagsfeier brauchst.',
        logo_url: 'https://robohash.org/bemaya?set=set2&size=180x180',
        url: 'https://bemaya.com',
        categoryId: 1,
      },
      {
        name: 'Homeday',
        short_description:
          'Bemaya bietet dir alles, was du für einen tollen Kindergeburtstag oder eine Teenager-Geburtstagsfeier brauchst.',
        description:
          'Bemaya bietet dir alles, was du für einen tollen Kindergeburtstag oder eine Teenager-Geburtstagsfeier brauchst.',
        logo_url: 'https://robohash.org/homeday?set=set2&size=180x180',
        url: 'https://homeday.de',
        categoryId: 1,
      },
      {
        name: 'Tillhub',
        short_description:
          'Kassensysteme für Einzelhandel, Dienstleistung & Gastronomie ✅ 100% rechtskonform ✅ DATEV-Export ✅ Kinderleichte Bedienung - Jetzt Online-Demo anfordern!',
        description:
          'Kassensysteme für Einzelhandel, Dienstleistung & Gastronomie ✅ 100% rechtskonform ✅ DATEV-Export ✅ Kinderleichte Bedienung - Jetzt Online-Demo anfordern!',
        logo_url: 'https://robohash.org/tillhub?set=set2&size=180x180',
        url: 'https://tillhub.de',
        categoryId: 2,
      },
    ],
  });

  await prisma.address.createMany({
    data: [
      {
        street: 'Bundesallee',
        house_number: '28',
        zip_code: '10717',
        city: 'Berlin',
        country: 'Deutschland',
        companyId: 1,
      },
      {
        street: 'Bundesallee',
        house_number: '1A',
        zip_code: '10717',
        city: 'Berlin',
        country: 'Deutschland',
        companyId: 2,
      },
      {
        street: 'Pestalozzistraße',
        house_number: '56',
        zip_code: '10627',
        city: 'Berlin',
        country: 'Deutschland',
        companyId: 3,
      },
    ],
  });

  console.log('Database seeded successfully!');
}

seed()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
