import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Heart, Star, Plus, Minus } from "lucide-react";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.size || "Standard");

  if (!isOpen) return null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < Math.floor(rating) ? "text-accent fill-current" : "text-border"
        }`}
      />
    ));
  };

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      setQuantity((prev) => Math.max(1, prev - 1));
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
          className="bg-surface rounded-3xl shadow-strong max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-border">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-surface-muted rounded-full hover:bg-secondary transition-colors"
            >
              <X className="h-5 w-5 text-text-secondary" />
            </motion.button>

            <div className="flex items-center space-x-4">
              <div className="text-4xl">
                {product.category === "cakes"
                  ? "🎂"
                  : product.category === "colddrinks"
                    ? "🥤"
                    : "🍽️"}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary font-heading">
                  {product.name}
                </h2>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex">{renderStars(product.rating)}</div>
                  <span className="text-text-muted">({product.rating})</span>
                  {product.badge && (
                    <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold font-body">
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
                <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                  Description
                </h3>
                <p className="text-text-secondary font-body">
                  {product.description}
                </p>
              </div>

              {/* Ingredients */}
              {product.ingredients && (
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                    Ingredients
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <span
                        key={index}
                        className="bg-secondary text-primary px-3 py-1 rounded-full text-sm font-body"
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
                  <div className="bg-surface-muted p-3 rounded-lg">
                    <span className="text-text-muted text-sm font-body">
                      Size
                    </span>
                    <p className="font-semibold text-text-primary font-heading">
                      {product.size}
                    </p>
                  </div>
                )}
                {product.weight && (
                  <div className="bg-surface-muted p-3 rounded-lg">
                    <span className="text-text-muted text-sm font-body">
                      Weight
                    </span>
                    <p className="font-semibold text-text-primary font-heading">
                      {product.weight}
                    </p>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 font-heading">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange("decrease")}
                    className="p-2 bg-surface-muted rounded-full hover:bg-secondary transition-colors"
                  >
                    <Minus className="h-4 w-4 text-text-secondary" />
                  </motion.button>
                  <span className="text-xl font-semibold text-text-primary w-12 text-center">
                    {quantity}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleQuantityChange("increase")}
                    className="p-2 bg-surface-muted rounded-full hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4 text-text-secondary" />
                  </motion.button>
                </div>
              </div>

              {/* Price */}
              <div className="bg-surface-muted p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary font-body">
                    Total Price
                  </span>
                  <span className="text-2xl font-bold text-primary font-heading">
                    ${totalPrice}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold shadow-medium hover:shadow-strong transition-all duration-normal flex items-center justify-center space-x-2 font-body"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-surface-muted rounded-xl hover:bg-secondary transition-colors"
                >
                  <Heart className="h-5 w-5 text-text-secondary" />
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
