import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/', isRoute: true },
        { name: 'Products', href: '/products', isRoute: true },
        { name: 'About Us', href: '#about', isRoute: false },
        { name: 'Contact', href: '#contact', isRoute: false }
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'All Products', href: '/products', isRoute: true },
        { name: 'Cakes', href: '/products', isRoute: true },
        { name: 'Pastries', href: '/products', isRoute: true },
        { name: 'Breads', href: '/products', isRoute: true },
        { name: 'Chocolates', href: '/products', isRoute: true }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-50 to-pink-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
              🧁 Sweet Bakery
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Freshly baked goods made with love and the finest ingredients. 
              Bringing sweetness to your day since 2020.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center text-gray-600"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-5 w-5 mr-3 text-orange-600" />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-600"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-5 w-5 mr-3 text-orange-600" />
                <span>hello@sweetbakery.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-600"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-5 w-5 mr-3 text-orange-600" />
                <span>123 Bakery Lane, Sweet City, SC 12345</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-orange-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <motion.div 
              className="flex space-x-6 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-orange-600 transition-colors duration-200"
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm"
            >
              © 2024 Sweet Bakery. All rights reserved. Made with ❤️
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;