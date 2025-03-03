"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedContainer from './AnimatedContainer';

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'minimal';
  onClick?: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  animate?: boolean;
  aspectRatio?: string;
  hoverEffect?: 'scale' | 'lift' | 'highlight' | 'none';
  imagePriority?: boolean;
}

/**
 * Card component for displaying content in card format
 * with various styling options and hover effects
 */
const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  image,
  imageAlt = 'Card image',
  href,
  className = '',
  variant = 'default',
  onClick,
  footer,
  children,
  animate = true,
  aspectRatio = '16/9',
  hoverEffect = 'scale',
  imagePriority = false,
}) => {
  // Card styles based on variant
  const cardStyles = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-lg',
    bordered: 'bg-white border border-gray-200',
    minimal: 'bg-transparent',
  };
  
  // Hover animation styles
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case 'scale':
        return { scale: 1.03 };
      case 'lift': 
        return { y: -8 };
      case 'highlight':
        return { boxShadow: '0 0 0 2px rgba(237, 41, 112, 0.5)' };
      default:
        return {};
    }
  };

  // The main card content
  const cardContent = (
    <>
      {/* Card Image */}
      {image && (
        <div className={`relative overflow-hidden ${aspectRatio ? `aspect-[${aspectRatio}]` : 'aspect-[16/9]'}`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={imagePriority}
          />
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-6">
        {subtitle && <div className="text-sm text-accent-alt mb-2">{subtitle}</div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {description && <p className="text-sm opacity-80 mb-4">{description}</p>}
        
        {children}
      </div>
      
      {/* Card Footer */}
      {footer && (
        <div className="px-6 py-4 border-t border-gray-100">
          {footer}
        </div>
      )}
    </>
  );

  // Wrap content in link if href is provided
  if (href) {
    // Use motion div if animation is enabled
    if (animate && hoverEffect !== 'none') {
      return (
        <AnimatedContainer
          type="fade"
          className={`overflow-hidden rounded-lg transition-all duration-300 ${cardStyles[variant]} ${className}`}
        >
          <motion.div
            whileHover={getHoverAnimation()}
            transition={{ duration: 0.3 }}
          >
            <Link href={href} className="block h-full">
              {cardContent}
            </Link>
          </motion.div>
        </AnimatedContainer>
      );
    }
    
    // No animation, just use Link
    return (
      <div className={`overflow-hidden rounded-lg transition-all duration-300 ${cardStyles[variant]} ${className}`}>
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      </div>
    );
  }
  
  // If no href and has onClick
  if (onClick) {
    if (animate && hoverEffect !== 'none') {
      return (
        <AnimatedContainer
          type="fade"
          className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${cardStyles[variant]} ${className}`}
        >
          <motion.div
            onClick={onClick}
            whileHover={getHoverAnimation()}
            transition={{ duration: 0.3 }}
          >
            {cardContent}
          </motion.div>
        </AnimatedContainer>
      );
    }
    
    return (
      <div 
        className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${cardStyles[variant]} ${className}`}
        onClick={onClick}
      >
        {cardContent}
      </div>
    );
  }
  
  // No href or onClick, just display the card
  return (
    <AnimatedContainer
      type="fade"
      className={`overflow-hidden rounded-lg transition-all duration-300 ${cardStyles[variant]} ${className}`}
    >
      {cardContent}
    </AnimatedContainer>
  );
};

export default Card; 