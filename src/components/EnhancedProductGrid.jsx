import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const EnhancedProductGrid = ({ products, activeCategory, searchTerm }) => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Advanced filtering logic
  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, searchTerm]);

  return (
    <div className="space-y-8">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleProductClick(product)}
              className="cursor-pointer"
            >
              <ProductCard product={product} index={index % 8} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-24 bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-border/50"
        >
          <div className="text-7xl mb-6">🍰</div>
          <h3 className="text-3xl font-bold text-text-primary mb-3 font-heading">
            No treats found
          </h3>
          <p className="text-text-secondary mb-8 font-body max-w-md mx-auto">
            We couldn't find any products matching your current search or
            category filter.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-medium hover:shadow-strong transition-all duration-300"
            onClick={() => window.location.reload()}
          >
            Clear All Filters
          </motion.button>
        </motion.div>
      )}

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Products Summary */}
      {filteredProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-secondary/50 via-surface to-secondary/50 rounded-2xl p-6 mt-12 border border-border/50 shadow-soft"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-text-secondary font-body">
              Showing{" "}
              <span className="font-bold text-xl text-primary">
                {filteredProducts.length}
              </span>{" "}
              delicious products
              {activeCategory !== "all" && (
                <span className="ml-2">
                  in{" "}
                  <span className="font-bold capitalize text-primary">
                    {activeCategory}
                  </span>
                </span>
              )}
            </div>

            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <span className="text-text-muted font-body font-medium shrink-0">
                Sort by:
              </span>
              <motion.select
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-48 bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary font-body shadow-sm"
              >
                <option value="featured">✨ Featured</option>
                <option value="price-low">💰 Price: Low to High</option>
                <option value="price-high">💎 Price: High to Low</option>
                <option value="rating">⭐️ Highest Rated</option>
                <option value="name">🔤 Name: A to Z</option>
              </motion.select>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedProductGrid;
