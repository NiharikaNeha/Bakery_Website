import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const EnhancedProductGrid = ({ products, activeCategory }) => {
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

  // Group products by category for better organization
  const groupedProducts = React.useMemo(() => {
    if (activeCategory === 'all') {
      return products;
    }
    
    return products.filter(product => product.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="space-y-8">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {groupedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => handleProductClick(product)}
            className="cursor-pointer"
          >
            <ProductCard product={product} index={index} />
          </motion.div>
        ))}
      </div>

      {/* No Products Found */}
      {groupedProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            No products found
          </h3>
          <p className="text-gray-600 mb-6">
            Try selecting a different category or adjusting your search
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
            onClick={() => window.location.reload()}
          >
            Browse All Products
          </motion.button>
        </motion.div>
      )}

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Load More Button */}
      {groupedProducts.length > 8 && groupedProducts.length < products.length && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Load More Products
          </motion.button>
        </motion.div>
      )}

      {/* Products Summary */}
      {groupedProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 mt-8"
        >
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-gray-700">
              <span className="font-semibold text-lg">{groupedProducts.length}</span> products found
              {activeCategory !== 'all' && (
                <span className="ml-2">in <span className="font-semibold capitalize">{activeCategory}</span></span>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Sort by:</span>
              <motion.select
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </motion.select>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedProductGrid;