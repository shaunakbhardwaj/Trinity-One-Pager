"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInVariant } from '@/utils/animations';

interface SectionProps {
  id: string;
  sectionNumber?: string;
  title?: string;
  accent?: string;
  children: ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'alt-light' | 'alt-dark';
  hasPattern?: boolean;
}

/**
 * Reusable section component used to maintain consistent section styling across the site
 * @param id - Section ID for navigation
 * @param sectionNumber - Optional section number displayed in background
 * @param title - Section title (can include HTML)
 * @param accent - Accent text that will be highlighted 
 * @param children - Section content
 * @param className - Additional classes to apply to section
 * @param background - Background style
 * @param hasPattern - Whether to include the grid pattern
 */
const Section: React.FC<SectionProps> = ({
  id,
  sectionNumber,
  title,
  accent,
  children,
  className = '',
  background = 'light',
  hasPattern = true,
}) => {
  // Determine background class based on provided prop
  const bgClass = 
    background === 'dark' ? 'bg-[#081239] text-white' :
    background === 'alt-dark' ? 'bg-[#081239] text-white' :
    background === 'alt-light' ? 'bg-[#f8f8f8] text-[#081239]' :
    'bg-white text-[#081239]';

  // Create full title with accent highlight if provided
  const renderTitle = () => {
    if (!title) return null;
    
    if (accent) {
      const parts = title.split(accent);
      return (
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          {parts[0]}<span className="accent-alt">{accent}</span>{parts[1]}
        </h2>
      );
    }
    
    return <h2 className="text-5xl md:text-7xl font-bold mb-8">{title}</h2>;
  };

  return (
    <section id={id} className={`section-container ${bgClass} ${className}`}>
      {/* Background Pattern */}
      {hasPattern && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-10">
            {background.includes('dark') ? (
              <div className="grid-pattern opacity-30 absolute inset-0"></div>
            ) : (
              <div className="grid-pattern opacity-30 absolute inset-0"></div>
            )}
          </div>
        </div>
      )}
      
      {/* Section Number */}
      {sectionNumber && (
        <div className="section-number">{sectionNumber}</div>
      )}

      <div className="section-inner">
        {/* Section Title */}
        {(title || accent) && (
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            {/* Accent Line */}
            <motion.div
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              className="h-1 bg-accent-alt w-24 mb-6"
            />
            {renderTitle()}
          </motion.div>
        )}

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};

export default Section; 