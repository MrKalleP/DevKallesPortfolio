import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-sky-800/80 to-sky-900/80 shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-white">
        <div className="text-xl font-bold tracking-wide">MyPortfolio</div>
        <ul className="flex space-x-6 text-sm sm:text-base">
          {navItems.map(({ name, path }) => (
            <motion.li
              key={name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer hover:text-yellow-300 transition-colors duration-200"
            >
              <Link to={path}>{name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
