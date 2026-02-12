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
  const [viewMode, setViewMode] = useState("grid");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const allCategories = ["all", ...categories];
  const displayedCategories = showAllCategories
    ? allCategories
    : allCategories.slice(0, 9); // "all" + first 8

  return (
    <div className="bg-surface rounded-2xl shadow-soft p-6 mb-8 border border-border/50">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
          <input
            type="text"
            placeholder="Search our delicious treats..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background/50 text-text-primary font-body transition-all"
          />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-bold text-text-primary text-lg">
            Categories
          </h3>
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="text-sm text-primary hover:text-primary-dark font-semibold font-body transition-colors"
          >
            {showAllCategories ? "Show Less" : "See All"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {displayedCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCategoryChange(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-body flex items-center gap-2 capitalize ${
                activeCategory === category
                  ? "bg-primary text-white shadow-medium scale-105"
                  : "bg-secondary text-text-primary hover:bg-primary-light hover:text-white"
              }`}
            >
              <span>{categoryIcons[category] || "🍰"}</span>
              <span>{category}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* View Mode & Count (Count can be handled in parent or here if needed) */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center space-x-3">
          <SlidersHorizontal className="w-5 h-5 text-text-muted" />
          <span className="text-sm font-medium text-text-muted font-body">
            Layout:
          </span>
          <div className="flex bg-secondary p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-muted hover:text-primary"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-muted hover:text-primary"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-sm text-text-muted font-body italic">
          Filter by price and rating coming soon
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
