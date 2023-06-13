This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project Configuration

## Installing node & npm
To prevent any issues caused by inconsistencies between different versions of Node 'engines' are configured in the package.json.

You will need a version higher than or equal to ```v16.17.0```.

## Installing the node modules
Npm strictly manages dependency usage. Run the following command to install all necessary dependencies.

```bash
npm install
```

## Installing husky
To make use of pre-commit hooks and linting before committing run the following code:

```bash
npm run husky
```

## Initialize Prisma

Prisma is an ORM (Object-Relational Mapping) tool that allows you to work with databases in a more convenient way. Initialize Prisma by running the following command in your project's root directory:

```bash
npx prisma init
```

This will generate a prisma folder with the necessary files and configurations.

## Start the Docker containers

Run the following command in your terminal to start the Docker containers defined in the `docker-compose.yml` file:

```bash
docker-compose up -d
```

## Migrate the database

Apply the database migrations defined in the Prisma schema by running the following command:

```bash
npx prisma migrate dev --preview-feature
```

## Start the Next.js development server

Launch the Next.js development server by running the following command:

```bash
npm run dev
```

This command will start your Next.js application, and you should be able to access it at `http://localhost:3000`.

## Prisma Studio

Prisma provides a visual database editor called Prisma Studio. To use Prisma Studio run the following command in your project's root directory:

```bash
npx prisma studio
```

This will open Prisma Studio in your browser, where you can view and edit your database entries interactively.

## Seed your database

Provide basic data for validating and using your application in a development environment. This is particularly useful if you are using Prisma Migrate, which sometimes requires resetting your development database. Use this command:

```bash
npx prisma db seed
```

If you already seeded your database another seed won't overwrite given data. Instead use the following command:

```bash
npx prisma migrate reset
```

It will reset as well re-seed.

## Check your IDE, especially the plugins
For syntax error highlighting install the following plugins:

- ESLint
- Prettier - Code formatter

# Getting Started
Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
