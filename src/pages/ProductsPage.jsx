import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import CategoryShowcase from '../components/CategoryShowcase';
import EnhancedProductGrid from '../components/EnhancedProductGrid';
import ScrollToTop from '../components/ScrollToTop';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const featuredProducts = products.filter(p => p.badge);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-300">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Discover our complete range of freshly baked goods, from classic favorites to specialty items
            </p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center space-x-8 mt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">{products.length}</div>
                <div className="text-orange-100">Total Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">14</div>
                <div className="text-orange-100">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">4.8</div>
                <div className="text-orange-100">Avg Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-orange-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Products Slider */}
        {featuredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Featured <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Items</span>
            </h2>
            
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.featured-next',
                prevEl: '.featured-prev',
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="pb-8"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} index={0} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-4">
              <button className="featured-prev bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="featured-next bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* Category Showcase */}
        <CategoryShowcase />

        {/* Category Filter */}
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        {/* Enhanced Products Grid */}
        <EnhancedProductGrid 
          products={products} 
          activeCategory={activeCategory}
        />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default ProductsPage;