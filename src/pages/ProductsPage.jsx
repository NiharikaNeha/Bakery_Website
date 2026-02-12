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
    <div className="min-h-screen bg-neutral-50/50 pb-12">
      {/* Header / Navbar Placeholder */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black italic text-orange-600 tracking-tighter">
            Food Fantasy
          </h1>
          <div className="flex items-center gap-4">
            {/* Simple Theme Toggle Placeholder */}
            <div className="bg-neutral-200 w-12 h-6 rounded-full relative p-1 shadow-inner lg:hidden">
              <div className="w-4 h-4 bg-white rounded-full shadow-sm ml-0" />
            </div>
            <nav className="hidden lg:flex items-center gap-6 font-bold text-neutral-600 text-sm">
              <a href="#" className="hover:text-orange-600">
                Home
              </a>
              <a
                href="#"
                className="text-orange-600 border-b-2 border-orange-600 pb-1"
              >
                Menu
              </a>
              <a href="#" className="hover:text-orange-600">
                Order
              </a>
              <a href="#" className="hover:text-orange-600">
                History
              </a>
              <a href="#" className="hover:text-orange-600">
                Admin
              </a>
              <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-black shadow-lg shadow-orange-100 uppercase tracking-wider">
                Logout
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Filter Section */}
        <section className="bg-white p-4 sm:p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-neutral-50">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />
        </section>

        {/* Product Grid */}
        <section>
          <EnhancedProductGrid
            products={products}
            activeCategory={activeCategory}
            searchTerm={searchTerm}
          />
        </section>
      </main>
    </div>
  );
};

export default ProductsPage;
