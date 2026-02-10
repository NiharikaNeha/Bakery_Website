import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Grid, List, SlidersHorizontal } from "lucide-react";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showAllCategories, setShowAllCategories] = useState(false);

  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, 6);

  return (
    <div className="bg-surface rounded-2xl shadow-soft p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-text-primary font-body"
          />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading font-semibold text-text-primary">
            Categories
          </h3>
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="text-sm text-primary hover:text-primary-dark font-body"
          >
            {showAllCategories ? "Show Less" : "Show More"}
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {displayedCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-normal font-body ${
                activeCategory === category
                  ? "bg-primary text-white shadow-medium"
                  : "bg-secondary text-text-primary hover:bg-primary-light hover:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* View Mode & Filters */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-5 h-5 text-text-muted" />
          <span className="text-sm text-text-muted font-body">View:</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors duration-normal ${
                viewMode === "grid"
                  ? "bg-primary text-white"
                  : "bg-secondary text-text-primary hover:bg-primary-light"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors duration-normal ${
                viewMode === "list"
                  ? "bg-primary text-white"
                  : "bg-secondary text-text-primary hover:bg-primary-light"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
