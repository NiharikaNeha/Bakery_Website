import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import useScrollToTop from '../hooks/useScrollToTop';

const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </>
  );
};

export default ScrollToTop;