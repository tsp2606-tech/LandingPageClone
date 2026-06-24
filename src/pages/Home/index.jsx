import React from 'react'
import { FeatureSection } from '@/components/FeatureSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { NewLetterSection } from '@/components/NewLetterSection';
import { PriceSection } from '@/components/PriceSection';
import { StaticSection } from '@/components/StaticSection';
import { Header } from '@/components/Header';

export const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <StaticSection />
      <PriceSection />
      <NewLetterSection />
      <Footer />
    </div>
  )
}
