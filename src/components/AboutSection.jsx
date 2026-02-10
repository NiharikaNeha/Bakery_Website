import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest ingredients in every creation",
    },
    {
      icon: Users,
      title: "Expert Bakers",
      description: "Decades of combined baking experience",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Baked fresh every morning",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Passion in every bite",
    },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100+", label: "Unique Recipes" },
    { value: "4.9", label: "Average Rating" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
              Crafting Delicious <span className="text-primary">Memories</span>{" "}
              Since 2014
            </h2>
            <p className="text-lg text-text-secondary mb-8 font-body leading-relaxed">
              At Sweet Bakery, we believe that every cake, pastry, and bread
              tells a story. Our artisan bakers combine traditional techniques
              with innovative flavors to create unforgettable experiences for
              your special moments.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary font-heading mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-text-muted font-body">
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
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-strong">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&auto=format&fit=crop"
                alt="Bakery interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
            </div>

            {/* Decorative element */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-strong"
            >
              <div className="text-3xl font-bold font-heading">10+</div>
              <div className="text-sm font-body">Years of Excellence</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-surface rounded-xl shadow-soft"
            >
              <div className="text-4xl font-bold text-primary font-heading mb-2">
                {stat.value}
              </div>
              <div className="text-text-muted font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
