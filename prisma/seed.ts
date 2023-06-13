import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const lars = await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      name: 'Lars',
      email: 'admin@admin.com',
      role: 'admin',
    },
  });
  const sabrina = await prisma.user.upsert({
    where: { email: 'sabrina@user.com' },
    update: {},
    create: {
      name: 'Sabrina',
      email: 'sabrina@user.com',
      role: 'user',
    },
  });
  const hannah = await prisma.user.upsert({
    where: { email: 'hannah@user.com' },
    update: {},
    create: {
      name: 'Hannah',
      email: 'hannah@user.com',
      role: 'user',
    },
  });

  console.log({ lars, sabrina, hannah });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
