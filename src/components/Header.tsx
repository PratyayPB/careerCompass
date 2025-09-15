import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Career Guidance', path: '/career-guidance' },
    { name: 'Roadmaps', path: '/roadmap-generator' },
    { name: 'Interviews', path: '/interview-prep' },
    { name: 'Resources', path: '/insights' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">CareerCompass</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors hover:text-gray-900 ${
                    isActive(item.path) ? 'text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/about">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-600 hover:text-gray-900 hover:bg-transparent font-medium"
              >
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-lg"
              >
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                    isActive(item.path) ? 'text-gray-900' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-start text-gray-600 hover:text-gray-900 font-medium"
                  >
                    About
                  </Button>
                </Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    size="sm" 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}