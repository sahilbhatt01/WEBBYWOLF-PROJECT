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

---

## 3. Tailwind Config Edits

Add custom colors & fonts.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1959AC",
        secondary: "#0546D2",
        textDark: "#222222",
      },
      fontFamily: {
        heading: ["Roboto Condensed", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
};
```

---

## 4. Global CSS for Fonts

```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Inter:wght@400;600&display=swap');
```

---

## 5. Folder Structure

```
src/
 ├── app/
 │    ├── layout.tsx
 │    ├── page.tsx
 │    ├── components/
 │    │      ├── Navbar.tsx
 │    │      ├── Hero.tsx
 │    │      ├── SectionOne.tsx
 │    │      ├── SectionTwo.tsx
 │    │      ├── Footer.tsx
 │    │      └── ui/ (ShadCN components)
 │    ├── lib/
 │    │      └── animations.ts
 │    └── styles/
 │           └── animations.css
 └── public/
        ├── images/
        │      ├── hero-bike.jpg
        │      └── section2.jpg
```

---

## 6. Page Loading Animation (Lottie Optional)

Example placeholder:

```tsx
// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen text-primary">
      <div className="animate-pulse text-3xl font-bold">Loading...</div>
    </div>
  );
}
```

---

## 7. Component: Navbar

Below is a ready-to-copy Navbar component and supporting pieces for the Next.js app router (TypeScript + Tailwind + ShadCN + Framer Motion).

**File:** `src/app/components/Navbar.tsx`

```tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="w-full bg-white/0 px-6 md:px-12 py-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="bg-[#F3F6FB] rounded px-3 py-2 text-sm font-semibold">LOGO</div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#222222]">
          <div className="relative group">
            <button className="hover:text-primary transition">Lorem Ipsum</button>
            <motion.div
              initial={{opacity:0, y: -8}}
              whileHover={{opacity:1, y:0}}
              transition={{duration:0.18}}
              className="absolute left-0 top-full mt-3 w-48 bg-white rounded shadow-lg p-3 hidden group-hover:block"
            >
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="block">Option One</a></li>
                <li><a href="#" className="block">Option Two</a></li>
                <li><a href="#" className="block">Option Three</a></li>
              </ul>
            </motion.div>
          </div>

          <Link href="#section1" className="hover:text-primary transition">About</Link>
          <Link href="#section2" className="hover:text-primary transition">Services</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded bg-primary text-white text-sm hover:scale-[0.98] active:scale-95 transition">
            Sign In
          </button>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {open && (
        <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} className="md:hidden bg-white border-t mt-2">
          <div className="px-6 py-4 space-y-3">
            <a href="#" className="block">Lorem Ipsum</a>
            <a href="#section1" className="block">About</a>
            <a href="#section2" className="block">Services</a>
            <button className="w-full mt-2 px-4 py-2 rounded bg-primary text-white">Sign In</button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
```

**Notes:**

* Navbar uses a simple hover-triggered popup implemented with `group` + Framer Motion for animation. This satisfies the "smooth hover-triggered menu popups" requirement.

---

## 8. Component: Hero Section

**File:** `src/app/components/Hero.tsx`

```tsx
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email')
})

type NewsletterForm = z.infer<typeof newsletterSchema>

export default function Hero() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<NewsletterForm>({ resolver: zodResolver(newsletterSchema) })

  function onSubmit(data: NewsletterForm) {
    // frontend only — show success state
    console.log('submitted', data)
    alert('Thanks! We received your email.')
  }

  return (
    <section className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12">
        <div>
          <motion.h1 initial={{x:-30, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.6}} className="font-heading text-4xl md:text-5xl leading-tight tracking-[-0.02em] text-[#222222]">
            Lorem ipsum dolor sit amet
          </motion.h1>

          <motion.p initial={{x:-20, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.12}} className="mt-4 text-base text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Erinn netus cras congue quis elit sociis. Sed mi rhoncus id habitant.
          </motion.p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex gap-3 max-w-md">
            <input {...register('email')} placeholder="Enter your email" className="w-full px-4 py-3 border rounded focus:outline-none" />
            <button type="submit" className="px-4 py-3 rounded bg-primary text-white">Submit</button>
          </form>
          {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>}

          <div className="mt-4 text-sm text-gray-500 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5" stroke="#1959AC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>No credit card required</span>
          </div>
        </div>

        <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="w-full rounded overflow-hidden">
          <Image src={'/images/hero-bike.jpg'} alt="motorcycle" width={900} height={600} className="object-cover w-full h-[420px] md:h-[560px]" />
        </motion.div>
      </div>
    </section>
  )
}
```

**Notes:**

* Uses Zod + react-hook-form for newsletter validation.
* `next/image` path expects the file at `public/images/hero-bike.jpg`. Use the supplied screenshot if you want to match the design exactly.

---

## 9. Section One (Split layout with thumbnails)

**File:** `src/app/components/SectionOne.tsx`

```tsx
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SectionOne(){
  return (
    <section id="section1" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-[#0546D2]">Lorem ipsum dolor sit</p>
          <h2 className="font-heading text-3xl md:text-4xl mt-2 text-[#222222]">LOREM IPSUM DOLOR SIT AMET</h2>
          <p className="mt-4 text-gray-600 max-w-lg">Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis proin. Mi porttitor at aliquam mattis malesuada eget integer in nam.</p>

          <div className="mt-6 space-y-4">
            {[1,2,3].map((i)=> (
              <div key={i} className="flex items-start gap-4">
                <div className="w-16 h-16 rounded overflow-hidden">
                  <Image src={`/images/thumb-${i}.jpg`} width={64} height={64} alt={`thumb-${i}`} className="object-cover" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-4 py-2 rounded bg-primary text-white">Lorem Ipsum</button>
            <div className="text-sm">123456789</div>
          </div>
        </div>

        <motion.div initial={{x:40, opacity:0}} whileInView={{x:0, opacity:1}} viewport={{once:true}}>
          <Image src={'/images/section2.jpg'} alt="bikes" width={900} height={700} className="rounded shadow"/>
        </motion.div>
      </div>
    </section>
  )
}
```

**Notes:**

* Thumbnails expect files `public/images/thumb-1.jpg`, `thumb-2.jpg`, `thumb-3.jpg`. You can substitute with smaller crops of the screenshots.

---

## 10. Section Two (Feature list + image)

**File:** `src/app/components/SectionTwo.tsx`

```tsx
import Image from 'next/image'

export default function SectionTwo(){
  return (
    <section id="section2" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm text-[#0546D2]">Lorem ipsum dolor sit amet</p>
          <h3 className="font-heading text-3xl md:text-4xl text-[#222222] mt-2">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h3>
          <p className="mt-4 text-gray-600 max-w-lg">Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend commodo in vitae sit amet.</p>

          <ul className="mt-6 space-y-4">
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full mt-1" />
              <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</p>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full mt-1" />
              <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non.</p>
            </li>
            <li className="flex gap-3 items-start">
              <div className="w-6 h-6 bg-red-500 rounded-full mt-1" />
              <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur. Ipsum et ut tortor.</p>
            </li>
          </ul>
        </div>

        <div>
          <Image src={'/images/people.jpg'} alt="people talking" width={700} height={520} className="rounded"/>
        </div>
      </div>
    </section>
  )
}
```

---

## 11. Footer

**File:** `src/app/components/Footer.tsx`

```tsx
export default function Footer(){
  return (
    <footer className="bg-[#151822] text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="bg-[#F3F6FB] text-black inline-block px-3 py-2 rounded">LOGO</div>
        </div>
        <div>
          <h4 className="font-semibold">Lorem Ipsum</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Lorem Ipsum</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Lorem Ipsum</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
```

---

## 12. App Layout & Page

**File:** `src/app/layout.tsx`

```tsx
import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'WebbyWolf Assignment',
  description: 'Pixel perfect landing page'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
```

**File:** `src/app/page.tsx`

```tsx
import Hero from './components/Hero'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import Footer from './components/Footer'

export default function Page(){
  return (
    <main>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </main>
  )
}
```

---

## 13. Tailwind & globals

Add the font import and base utilities in `src/app/globals.css` (or `styles/globals.css` if you used the classic structure).

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Inter:wght@400;600&display=swap');
:root{ --primary: #1959AC; --secondary: #0546D2; }
@tailwind base; @tailwind components; @tailwind utilities;

body{ font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
.h-font{ font-family: 'Roboto Condensed', sans-serif }
```

Update `tailwind.config.js` to include the fonts and colors as previously documented.

---

## 14. Images (use provided screenshots)

Place the following files into `public/images/`:

* `hero-bike.jpg` -> use screenshot path: `/mnt/data/Screenshot 2025-11-23 201408.png`
* `section2.jpg` -> `/mnt/data/Screenshot 2025-11-23 201458.png`
* `people.jpg` -> `/mnt/data/Screenshot 2025-11-23 201521.png`
* `hero-dark.jpg` -> `/mnt/data/Screenshot 2025-11-23 201543.png`
* `footer-shot.jpg` -> `/mnt/data/Screenshot 2025-11-23 201622.png`

You can copy them into `public/images/` and rename accordingly.

---

## 15. Next Steps

I have added the component code above. If you want, I can:

* Generate full `package.json` and `next.config.js` entries.
* Create the `zod` schemas and helpers in `src/app/lib/`.
* Export a zip of the full project.

Tell me which of the above you want next (e.g. **"Add package.json & config"**, **"Create zod schemas"**, **"Export ZIP"**).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
