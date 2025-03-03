import React from 'react';
import Link from 'next/link';
import AnimatedContainer from '../ui/AnimatedContainer';
import SocialIcon from '../ui/SocialIcon';
import Logo from '../ui/Logo';
import NavLink from '../ui/NavLink';

/**
 * Footer component that appears at the bottom of every page.
 * Contains the logo, social links, navigation links, and copyright information.
 */
const Footer: React.FC = () => {
  // Social links data
  const socialLinks = [
    { name: 'LinkedIn', type: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', type: 'instagram', url: 'https://instagram.com' },
    { name: 'YouTube', type: 'youtube', url: 'https://youtube.com' },
    { name: 'Facebook', type: 'facebook', url: 'https://facebook.com' },
  ];

  // Navigation links data
  const navLinks = [
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Privacy', url: '/privacy' },
  ];

  return (
    <footer className="bg-[#081239] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <AnimatedContainer type="fade" className="mb-10 text-center">
            <Logo variant="light" textSize="xl" />
          </AnimatedContainer>

          {/* Social Links */}
          <AnimatedContainer 
            type="stagger" 
            className="flex justify-center space-x-6 mb-10"
          >
            {socialLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.url}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300"
                aria-label={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon type={link.type as any} className="w-5 h-5 text-white" />
              </Link>
            ))}
          </AnimatedContainer>

          {/* Divider */}
          <AnimatedContainer type="scale" className="mb-10">
            <div className="w-24 h-px bg-white/20"></div>
          </AnimatedContainer>

          {/* Navigation Links */}
          <AnimatedContainer 
            type="stagger" 
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.url}
                label={link.name}
                className="text-white/80"
                activeClassName="text-white"
              />
            ))}
          </AnimatedContainer>

          {/* Copyright */}
          <AnimatedContainer 
            type="fade" 
            delay={0.5} 
            className="text-white/60 text-sm text-center"
          >
            <p>© {new Date().getFullYear()} Trinity. All rights reserved.</p>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 