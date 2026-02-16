import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const EnhancedProductGrid = ({
  products,
  activeCategory,
  searchTerm,
  dietaryFilter,
}) => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleProductClick = React.useCallback((product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  // Advanced filtering logic
  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Dietary filtering logic (consistent with ProductCard.jsx)
      const isVeg =
        !product.name.toLowerCase().includes("chicken") &&
        !product.name.toLowerCase().includes("egg");
      const matchesDietary =
        dietaryFilter === "all" ||
        (dietaryFilter === "veg" && isVeg) ||
        (dietaryFilter === "non-veg" && !isVeg);

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [products, activeCategory, searchTerm, dietaryFilter]);

  return (
    <div className="space-y-8">
      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
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
    </div>
  );
};

export default EnhancedProductGrid;
