"use client";
import Hero from "@/components/section/Hero";
import SectionOne from "@/components/section/SectionOne";
import SectionTwo from "@/components/section/SectionTwo";
import Footer from "@/components/section/Footer";
import HeroBg from "@/components/section/HeroBg";
import dynamic from "next/dynamic";
import InfoSection from "@/components/section/InfoSection";
import HeroBg1 from "@/components/section/HeroBg1";
import QuoteForm from "@/components/section/QuoteForm";
import HeroPhone from "@/components/section/HeroPhone";
import MotorSection from "@/components/section/MotorSection";
import MotorCyclists from "@/components/section/MotorCyclists";
import TestimonialSection from "@/components/section/TestimonialSection";
import CheckToolSection from "@/components/section/CheckToolSection";
import InfoSection2 from "@/components/section/InfoSection2";
import LoremSection from "@/components/section/LoremSection";
import FaqSection from "@/components/section/FaqSection";
import DolorSection from "@/components/section/DolorSection";

const BrandSection = dynamic(
  () => import("@/components/section/BrandSection"),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <>
      <Hero />
      <SectionOne />
      <SectionTwo />
      <HeroBg />
      <BrandSection />
      <InfoSection />
      <HeroBg1 />
      <QuoteForm />
      <HeroPhone />
      <MotorSection />
      <MotorCyclists />
      <TestimonialSection />
      <CheckToolSection />
      <InfoSection2 />
      <LoremSection />
      <FaqSection />
      <DolorSection />
      <Footer />
    </>
  );
}
