import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ product, index }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? "text-accent fill-current" : "text-border"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group bg-surface rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-normal"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />

        {/* Badge */}
        {product.badge && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold font-body"
          >
            {product.badge}
          </motion.div>
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-surface text-primary p-3 rounded-full shadow-medium hover:bg-surface-muted transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-surface text-accent p-3 rounded-full shadow-medium hover:bg-surface-muted transition-colors"
          >
            <Heart className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors font-heading">
            {product.name}
          </h3>
          <span className="text-xl font-bold text-primary">
            ₹{product.price}
          </span>
        </div>

        <p className="text-text-secondary text-sm mb-3 line-clamp-2 font-body">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-sm text-text-muted">({product.rating})</span>
        </div>

        {/* Category Tag */}
        <div className="mt-3">
          <span className="inline-block bg-secondary text-primary text-xs px-2 py-1 rounded-full capitalize font-semibold">
            {product.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
