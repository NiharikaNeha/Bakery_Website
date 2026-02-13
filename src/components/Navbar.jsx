import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Products", href: "/products", isRoute: true },
    { name: "Gallery", href: "/gallery", isRoute: true },
    { name: "About", href: "#about", isRoute: false },
    { name: "Contact", href: "#contact", isRoute: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-medium border-b border-border/50"
          : "bg-white/90 backdrop-blur-md shadow-soft"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="block flex items-center gap-2">
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Maa Bakery
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
                      className={`text-text-secondary hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-normal ${
                        location.pathname === item.href
                          ? "text-primary font-semibold"
                          : ""
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
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-text-secondary hover:text-primary transition-colors duration-normal"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 pt-4 pb-8 space-y-3 bg-white/98 backdrop-blur-xl border-t border-border/20">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ x: 10 }}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-text-secondary hover:text-primary block px-4 py-3 text-lg font-medium transition-colors duration-normal rounded-xl hover:bg-secondary/20 ${
                      location.pathname === item.href
                        ? "text-primary font-semibold bg-secondary/30"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-text-secondary hover:text-primary block px-4 py-3 text-lg font-medium transition-colors duration-normal rounded-xl hover:bg-secondary/20"
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
