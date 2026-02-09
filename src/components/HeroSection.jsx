import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { heroSlides } from '../data/products';
import { ArrowRight, Star } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: index * 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.5 + 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.5 + 0.4 }}
                  className="text-xl md:text-2xl mb-8 text-gray-200"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.5 + 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>{slide.cta}</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    View Menu
                  </motion.button>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.5 + 0.8 }}
                  className="mt-8 inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-white font-semibold">4.9/5</span>
                  <span className="ml-2 text-gray-300">(2,847 reviews)</span>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-center"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
          <span className="text-sm mt-2 block">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;