import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";

const CategoryShowcase = ({ categories, products }) => {
  const getCategoryProducts = (category) => {
    return products.filter((p) => p.category === category).slice(0, 3);
  };

  const popularCategories = categories.slice(1, 4); // Skip 'all'

  return (
    <section className="py-16 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Popular <span className="text-primary">Categories</span>
          </h2>
          <p className="text-lg text-text-secondary font-body">
            Explore our most loved collections
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {popularCategories.map((category, index) => {
            const categoryProducts = getCategoryProducts(category);
            const productCount = products.filter(
              (p) => p.category === category,
            ).length;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-normal"
              >
                {/* Category Header */}
                <div className="p-6 bg-gradient-to-br from-secondary to-surface-muted">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-heading font-bold text-text-primary capitalize">
                      {category}
                    </h3>
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-text-muted font-body">
                    {productCount} products available
                  </p>
                </div>

                {/* Product Preview */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-surface-muted transition-colors duration-normal"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-text-primary truncate font-heading">
                            {product.name}
                          </p>
                          <p className="text-sm text-primary font-body">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center space-x-2 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-normal font-body"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
