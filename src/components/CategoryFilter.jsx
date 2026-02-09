import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List } from 'lucide-react';
import { categories } from '../data/products';

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  const [showAll, setShowAll] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const displayCategories = showAll ? categories : categories.slice(0, 7);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {displayCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
          
          {categories.length > 7 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200"
            >
              {showAll ? 'Show Less' : `+${categories.length - 7} More`}
            </motion.button>
          )}
        </div>

        {/* Search and View Controls */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <motion.input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 w-64"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
            >
              <Grid className="h-4 w-4 text-gray-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
            >
              <List className="h-4 w-4 text-gray-600" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Active Category Display */}
      <div className="mt-4 flex items-center justify-between">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm text-gray-600"
        >
          Showing: <span className="font-semibold text-orange-600 capitalize">
            {categories.find(c => c.id === activeCategory)?.name || 'All Products'}
          </span>
        </motion.div>

        {/* Filter and Sort Options */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 text-sm border border-gray-300 rounded-lg px-3 py-1 hover:bg-gray-50 transition-colors"
          >
            <Filter className="h-4 w-4 text-gray-600" />
            <span>Filters</span>
          </motion.button>
          
          <motion.select
            whileHover={{ scale: 1.02 }}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
            <option value="name">Name: A to Z</option>
          </motion.select>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;