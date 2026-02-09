import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Products', href: '/products', isRoute: true },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                🧁 Sweet Bakery
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className={`text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href ? 'text-orange-600 font-semibold' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cart & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-orange-600 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ x: 10 }}
              >
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors ${
                      location.pathname === item.href ? 'text-orange-600 font-semibold' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;