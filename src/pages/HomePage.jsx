import React from 'react';
import ThreeJSHeroSection from '../components/ThreeJSHeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <ThreeJSHeroSection />
      <FeaturedProducts />
      <AboutSection />
      <ContactSection />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;