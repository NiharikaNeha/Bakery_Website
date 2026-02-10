import React, { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "../data/products";
import CategoryFilter from "../components/CategoryFilter";
import EnhancedProductGrid from "../components/EnhancedProductGrid";
import { Sparkles, ShoppingBag } from "lucide-react";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      {/* Header Section */}
      <section className="relative overflow-hidden mb-12 py-16 bg-gradient-to-b from-orange-50 to-neutral-50">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-md border border-orange-200"
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-700 uppercase tracking-wider">
                Fresh From the Oven
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 leading-tight"
            >
              Our Baked{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Masterpieces
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Explore our wide variety of artisan breads, decadent cakes, and
              savory treats. Find your perfect bite today.
            </motion.p>
          </div>
        </div>

        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </section>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
            />

            {/* Promo Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:block bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-3xl shadow-xl text-white overflow-hidden relative mt-8"
            >
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-serif font-bold">
                  Party Order?
                </h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  We specialize in custom cakes and bulk orders for your special
                  occasions.
                </p>
                <button className="bg-white text-orange-700 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-100 transition">
                  Contact Us
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </motion.div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            <EnhancedProductGrid
              products={products}
              activeCategory={activeCategory}
              searchTerm={searchTerm}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
