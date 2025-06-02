import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Contact', path: '/Contact' },
  ];

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-slate-600/80 to-slate-700/80 shadow-md"
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-white">
            <div className="text-xl font-bold tracking-wide">MyPortfolio</div>

            {/* Desktop menu */}
            <ul className="hidden md:flex space-x-6 text-sm sm:text-base">
              {navItems.map(({ name, path }) => (
                <motion.li
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer hover:text-orange-500 transition-colors duration-200"
                >
                  <Link to={path}>{name}</Link>
                </motion.li>
              ))}
            </ul>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-sm px-2 py-1 border border-white rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-sky-900 text-white px-6 py-4 space-y-4"
            >
              {navItems.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-yellow-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
};
