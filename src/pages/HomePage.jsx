import React from "react";
import ThreeJSHeroSection from "../components/ThreeJSHeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <ThreeJSHeroSection />
      <FeaturedProducts />
      <AboutSection />

      {/* Gallery CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-black text-neutral-900 mb-6">
              Experience the{" "}
              <span className="italic text-[#B86B3E] font-serif lowercase">
                Art
              </span>{" "}
              of Baking
            </h2>
            <p className="text-neutral-500 mb-10 text-lg">
              Take a visual journey through our bakery and see our handcrafted
              creations.
            </p>
            <Link
              to="/gallery"
              className="font-bold inline-flex items-center gap-3 bg-[#B86B3E] px-8 py-4 rounded-full text-white uppercase tracking-widest text-sm shadow-xl shadow-[#8C6A54] hover:bg-[#D8A47F] transition-all active:scale-95 group"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
