# Next.js 16 WebbyWolf Assignment Starter Guide

This document will contain:

* Project setup steps
* Required package installations
* Folder structure
* Reusable components setup
* Animation setup (Framer Motion / GSAP / AOS)
* Tailwind + ShadCN config
* Full landing page structure

We will fill each section as you proceed.

---

## 1. Create Next.js 16 Project

```bash
npx create-next-app@latest webbywolf-assignment --ts --tailwind
cd webbywolf-assignment
```

---

## 2. Install Required Packages

```bash
# ShadCN
npx shadcn-ui@latest init

# Components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add navigation-menu
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add form
npx shadcn-ui@latest add textarea

# Form Validation
npm install zod react-hook-form @hookform/resolvers

# Animations
npm install framer-motion
# (Optional) AOS
npm install aos

# Icons
npm install lucide-react
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
