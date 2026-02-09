import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Heart, Star, Plus, Minus } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.size || 'Standard');

  if (!isOpen) return null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else {
      setQuantity(prev => Math.max(1, prev - 1));
    }
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </motion.button>
            
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{product.category === 'cakes' ? '🎂' : product.category === 'colddrinks' ? '🥤' : '🍽️'}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-600">({product.rating})</span>
                  {product.badge && (
                    <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Image */}
            <div className="relative">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              {product.isCold && (
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <span>❄️</span>
                  <span>Cold</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4">
                {product.size && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600 text-sm">Size</span>
                    <p className="font-semibold text-gray-800">{product.size}</p>
                  </div>
                )}
                {product.weight && (
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600 text-sm">Weight</span>
                    <p className="font-semibold text-gray-800">{product.weight}</p>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange('decrease')}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Minus className="h-4 w-4 text-gray-600" />
                  </motion.button>
                  <span className="text-xl font-semibold text-gray-800 w-12 text-center">
                    {quantity}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange('increase')}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Plus className="h-4 w-4 text-gray-600" />
                  </motion.button>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Price</span>
                  <span className="text-2xl font-bold text-orange-600">${totalPrice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Heart className="h-5 w-5 text-gray-600" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;