"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  animated?: boolean;
}

/**
 * Logo component for consistent branding across the application
 * @param className - Additional classes to apply
 * @param textSize - Size variant for the logo text
 * @param variant - Color variant (light or dark)
 * @param animated - Whether to add hover animation
 */
const Logo: React.FC<LogoProps> = ({
  className = '',
  textSize = 'md',
  variant = 'dark',
  animated = true,
}) => {
  // Determine text size class
  const sizeClass = 
    textSize === 'sm' ? 'text-xl' : 
    textSize === 'lg' ? 'text-3xl' : 
    textSize === 'xl' ? 'text-4xl' : 
    'text-2xl'; // default (md)

  // Determine color class
  const colorClass = variant === 'light' ? 'text-white' : 'text-[#081239]';

  // Basic logo styling
  const logoClass = `
    font-bold tracking-tight
    ${sizeClass}
    ${colorClass}
    ${className}
  `;

  // Animation variants
  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Logo content
  const logoContent = (
    <span className={logoClass}>TRINITY</span>
  );

  // Return with or without animation
  if (animated) {
    return (
      <Link href="/">
        <motion.div
          variants={logoVariants}
          initial="initial"
          whileHover="hover"
          className="cursor-pointer"
        >
          {logoContent}
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href="/">
      <div className="cursor-pointer">
        {logoContent}
      </div>
    </Link>
  );
};

export default Logo; 