"use client";
import Hero from '@/components/Hero';
import SectionOne from '@/components/SectionOne';
import SectionTwo from '@/components/SectionTwo';
import Footer from '@/components/Footer';
import HeroBg from '@/components/HeroBg';
import dynamic from "next/dynamic";
import InfoSection from '@/components/InfoSection';
import HeroBg1 from '@/components/HeroBg1';
import QuoteForm from '@/components/QuoteForm';
import HeroPhone from '@/components/HeroPhone';
import MotorSection from '@/components/MotorSection';

const BrandSection = dynamic(() => import("@/components/BrandSection"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <HeroBg/>
      <BrandSection/>
      <InfoSection/>
      <HeroBg1/>
      <QuoteForm/>
      <HeroPhone/>
      <MotorSection/>
      <Footer />
    </>
  );
}