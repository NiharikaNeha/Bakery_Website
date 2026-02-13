import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Chocolate Delight Cake",
      price: "₹45",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Strawberry Dream",
      price: "₹38",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&auto=format&fit=crop",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Vanilla Elegance",
      price: "₹42",
      image:
        "https://images.unsplash.com/photo-1588195538326-c5b1e5b80e0b?w=400&auto=format&fit=crop",
      rating: 5.0,
    },
  ];

  const stats = [
    { value: "50+", label: "Products" },
    { value: "500+", label: "Happy Customers" },
    { value: "4.9", label: "Average Rating" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4">
            Featured <span className="text-primary">Creations</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
            Discover our most loved artisan creations, handcrafted with premium
            ingredients
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-heading mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted font-body">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-surface rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-normal cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-text-primary font-heading">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold text-text-secondary">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary font-heading">
                  {product.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/products")}
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-medium hover:shadow-strong transition-all duration-normal font-body"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
