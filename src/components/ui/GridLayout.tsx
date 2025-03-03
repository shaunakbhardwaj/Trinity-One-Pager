"use client";

import React, { ReactNode } from 'react';
import AnimatedContainer from './AnimatedContainer';

type GridColumns = 1 | 2 | 3 | 4 | 5 | 6;
type GridGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface GridLayoutProps {
  children: ReactNode;
  columns?: {
    default?: GridColumns;
    sm?: GridColumns;
    md?: GridColumns;
    lg?: GridColumns;
    xl?: GridColumns;
  };
  gap?: GridGap;
  className?: string;
  animateItems?: boolean;
  itemsClassName?: string;
}

/**
 * GridLayout component that creates a responsive grid layout
 * with customizable columns for different breakpoints.
 */
const GridLayout: React.FC<GridLayoutProps> = ({
  children,
  columns = { default: 1, md: 2, lg: 3 },
  gap = 'md',
  className = '',
  animateItems = false,
  itemsClassName = '',
}) => {
  // Process column configuration
  const colsDefault = columns.default || 1;
  const colsSm = columns.sm || colsDefault;
  const colsMd = columns.md || colsSm;
  const colsLg = columns.lg || colsMd;
  const colsXl = columns.xl || colsLg;

  // Convert numeric values to grid-template-columns classes
  const getColumnsClass = (cols: GridColumns): string => {
    return `grid-cols-${cols}`;
  };

  // Calculate gap class based on size
  const getGapClass = (): string => {
    switch (gap) {
      case 'none': return 'gap-0';
      case 'sm': return 'gap-2 md:gap-4';
      case 'lg': return 'gap-6 md:gap-8';
      case 'xl': return 'gap-8 md:gap-12';
      default: return 'gap-4 md:gap-6'; // md (default)
    }
  };

  // Generate responsive grid classes
  const gridClass = `
    grid
    ${getColumnsClass(colsDefault)}
    ${colsSm !== colsDefault ? `sm:${getColumnsClass(colsSm)}` : ''}
    ${colsMd !== colsSm ? `md:${getColumnsClass(colsMd)}` : ''}
    ${colsLg !== colsMd ? `lg:${getColumnsClass(colsLg)}` : ''}
    ${colsXl !== colsLg ? `xl:${getColumnsClass(colsXl)}` : ''}
    ${getGapClass()}
    ${className}
  `;

  // If animate items, wrap each child in AnimatedContainer
  if (animateItems && React.Children.count(children) > 0) {
    return (
      <div className={gridClass}>
        {React.Children.map(children, (child, index) => (
          <AnimatedContainer
            type="fade"
            delay={0.1 * index}
            className={itemsClassName}
          >
            {child}
          </AnimatedContainer>
        ))}
      </div>
    );
  }

  // Otherwise, render children directly
  return (
    <div className={gridClass}>
      {React.Children.map(children, (child) => (
        <div className={itemsClassName}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default GridLayout; 