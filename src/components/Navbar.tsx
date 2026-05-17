import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', key: 'home' },
    { path: '/menu', key: 'menu' },
    { path: '/about', key: 'about' },
    { path: '/gallery', key: 'gallery' },
    { path: '/contact', key: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-cafe-brown">
              Cafe & Pasticeri <span className="text-cafe-red">FLO</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ path, key }) => (
              <Link
                key={path}
                to={path}
                className={`font-medium transition-colors relative group ${
                  isActive(path) ? 'text-cafe-red' : 'text-cafe-brown hover:text-cafe-red'
                }`}
              >
                {t(key)}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cafe-red transition-all duration-300 ${
                  isActive(path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}

            {/* Language Switch */}
            <div className="flex items-center gap-1 ml-4 border-l border-cafe-brown/20 pl-4">
              <button
                onClick={() => setLanguage('sq')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  language === 'sq'
                    ? 'bg-cafe-red text-white'
                    : 'text-cafe-brown hover:bg-cafe-yellow/50'
                }`}
              >
                SQ
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-cafe-red text-white'
                    : 'text-cafe-brown hover:bg-cafe-yellow/50'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cafe-brown p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 border-t border-cafe-brown/20 pt-4">
                <div className="flex flex-col gap-3">
                  {navLinks.map(({ path, key }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-medium py-2 transition-colors ${
                        isActive(path) ? 'text-cafe-red' : 'text-cafe-brown'
                      }`}
                    >
                      {t(key)}
                    </Link>
                  ))}

                  {/* Language Switch Mobile */}
                  <div className="flex items-center gap-2 pt-4 border-t border-cafe-brown/20 mt-2">
                    <button
                      onClick={() => setLanguage('sq')}
                      className={`flex-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                        language === 'sq'
                          ? 'bg-cafe-red text-white'
                          : 'text-cafe-brown bg-cafe-yellow/30'
                      }`}
                    >
                      Shqip
                    </button>
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex-1 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                        language === 'en'
                          ? 'bg-cafe-red text-white'
                          : 'text-cafe-brown bg-cafe-yellow/30'
                      }`}
                    >
                      English
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
