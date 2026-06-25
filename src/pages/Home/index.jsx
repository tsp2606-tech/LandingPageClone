import React from "react";
import { FeatureSection } from "@/components/FeatureSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NewLetterSection } from "@/components/NewLetterSection";
import { PriceSection } from "@/components/PriceSection";
import { StaticSection } from "@/components/StaticSection";
import { Header } from "@/components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <Header />
      <div data-aos="fade-up">
        <HeroSection />
      </div>
      <div data-aos="fade-up">
        <FeatureSection />
      </div>
      <div data-aos="fade-up">
        <StaticSection />
      </div>
      <div data-aos="fade-up">
        <PriceSection />
      </div>
      <div data-aos="fade-up">
        <NewLetterSection />
      </div>
      <Footer />
    </div>
  );
};
