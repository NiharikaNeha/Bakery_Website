import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Mail, Heart } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made with Love",
      description: "Every product is crafted with passion and attention to detail"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fresh Daily",
      description: "We bake fresh every day using only the finest ingredients"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local Favorite",
      description: "Proudly serving our community for over 10 years"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Our <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Story</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-6"
            >
              Welcome to Sweet Bakery, where every bite tells a story of passion, tradition, and excellence. 
              Founded in 2020, we've been dedicated to bringing the finest baked goods to our community.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 mb-8"
            >
              Our team of skilled bakers uses time-honored recipes and the finest ingredients to create 
              everything from classic breads to elaborate custom cakes. We believe that great baking 
              brings people together and creates moments of joy.
            </motion.p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-3 rounded-lg text-orange-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1559276524-31731d3851ee?w=600"
                alt="Our Bakery"
                className="rounded-2xl shadow-2xl w-full"
                whileHover={{ scale: 1.02 }}
              />
              
              {/* Decorative Elements */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-red-500 fill-current" />
                  <span className="text-gray-800 font-semibold">Made with Love</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Daily Customers" },
              { number: "50+", label: "Product Varieties" },
              { number: "10+", label: "Years Experience" },
              { number: "4.9", label: "Customer Rating" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;