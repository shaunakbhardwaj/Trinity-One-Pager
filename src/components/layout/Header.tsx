"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import AnimatedContainer from '../ui/AnimatedContainer';

/**
 * Header component that appears at the top of every page
 * Features a fixed nav bar with logo, navigation links, and contact button
 * Includes responsive mobile menu
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Throttle scroll event for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // Throttle scroll event to improve performance
    let timeoutId: NodeJS.Timeout | null = null;
    
    const throttledScrollHandler = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100); // 100ms throttle
      }
    };
    
    window.addEventListener('scroll', throttledScrollHandler);
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Handle section scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Navigation items data
  const navItems = [
    { name: 'Home', id: 'hero-section' },
    { name: 'Companies', id: 'companies-section' },
    { name: 'Journey', id: 'journey-section' },
    { name: 'Trusted By', id: 'trusted-section' },
    { name: 'People', id: 'people-section' },
    { name: 'Contact', id: 'contact-section' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <div 
          className={`transition-all duration-300 rounded-full ${
            isScrolled 
              ? 'bg-[#081239]/90 backdrop-blur-md shadow-lg py-2 px-4' 
              : 'bg-[#081239] py-3 px-6'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="light" textSize="sm" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 ml-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Contact Button (Desktop) */}
            <Button 
              onClick={() => scrollToSection('contact-section')}
              className="hidden md:block ml-6"
              variant="secondary"
              size="sm"
            >
              CONTACT US
            </Button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden ml-4 text-white p-1 menu-button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed top-20 left-4 right-4 z-40 bg-[#081239] rounded-xl shadow-xl p-4 mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-200 py-2 px-4 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact-section')}
                variant="secondary"
                size="sm"
                className="mt-4 mx-4"
              >
                CONTACT US
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 