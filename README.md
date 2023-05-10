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
