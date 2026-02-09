import React from 'react';
import { motion } from 'framer-motion';
import { categories, products } from '../data/products';

const CategoryShowcase = () => {
  const getCategoryStats = (categoryId) => {
    if (categoryId === 'all') {
      return {
        count: products.length,
        avgPrice: (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2)
      };
    }
    
    const categoryProducts = products.filter(p => p.category === categoryId);
    const avgPrice = categoryProducts.length > 0 
      ? (categoryProducts.reduce((sum, p) => sum + p.price, 0) / categoryProducts.length).toFixed(2)
      : '0.00';
    
    return {
      count: categoryProducts.length,
      avgPrice: avgPrice
    };
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Browse by <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of bakery products organized by category
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.slice(1).map((category, index) => {
            const stats = getCategoryStats(category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white text-center shadow-lg hover:shadow-xl transition-all duration-300`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="text-4xl mb-3 mx-auto"
                  >
                    {category.icon}
                  </motion.div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-transform">
                    {category.name}
                  </h3>
                  
                  {/* Stats */}
                  <div className="text-sm opacity-90 space-y-1">
                    <div>{stats.count} items</div>
                    {stats.avgPrice !== '0.00' && (
                      <div>From ${stats.avgPrice}</div>
                    )}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Popular Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(1, 4).map((category, index) => {
              const categoryProducts = products.filter(p => p.category === category.id);
              const featuredProducts = categoryProducts.slice(0, 3);
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl text-white text-2xl`}>
                        {category.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {category.name}
                      </h4>
                    </div>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-semibold">
                      {categoryProducts.length}
                    </span>
                  </div>
                  
                  {/* Featured Products */}
                  <div className="space-y-3">
                    {featuredProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 p-2 bg-white rounded-lg"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-600">${product.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* View All Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-4 bg-gradient-to-r ${category.color} text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    View All {category.name}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase;