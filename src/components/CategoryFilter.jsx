import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Grid, List, SlidersHorizontal } from "lucide-react";

const categoryIcons = {
  all: "✨",
  pizza: "🍕",
  burger: "🍔",
  roll: "🌯",
  patties: "🥟",
  sandwich: "🥪",
  croissant: "🥐",
  pastry: "🍰",
  tart: "🥧",
  dessert: "🍮",
  drinks: "🥤",
};

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}) => {
  const allCategories = ["all", ...categories];

  return (
    <div className="space-y-6">
      {/* Categories Horizontal Scroll */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-grow overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex flex-nowrap gap-2 pb-2 lg:pb-0">
            {allCategories.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap border capitalize ${
                  activeCategory === category
                    ? "bg-orange-600 text-white border-orange-600 shadow-md"
                    : "bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeDot"
                    className="w-1 h-1 bg-white rounded-full mx-auto mt-0.5"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Desktop Search Bar Integrated */}
        <div className="hidden lg:block w-72">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50 bg-white shadow-sm transition-all"
            />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for food, dishes or cuisines..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-100 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-neutral-800 placeholder:text-neutral-400 font-medium transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
