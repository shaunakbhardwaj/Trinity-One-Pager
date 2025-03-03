"use client";

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  fadeVariants,
  slideVariants,
  scaleVariant,
  staggerContainerVariant,
  lineVariant,
} from '@/utils/animations';

type AnimationType = 'fade' | 'slide' | 'scale' | 'stagger' | 'line' | 'none';
type FadeDirection = 'up' | 'in';
type SlideDirection = 'fromLeft' | 'fromRight';

interface AnimatedContainerProps {
  children: ReactNode;
  type?: AnimationType;
  direction?: FadeDirection | SlideDirection;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: number;
  threshold?: number;
  once?: boolean;
  custom?: any;
  id?: string;
}

/**
 * AnimatedContainer component that wraps content with various animation effects
 * using framer-motion. Supports different animation types, directions, and timing.
 */
const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  type = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  staggerChildren = 0.1,
  threshold = 0.1,
  once = true,
  custom,
  id,
}) => {
  // Select the appropriate animation variant based on type and direction
  const getVariant = (): Variants => {
    switch (type) {
      case 'fade':
        return fadeVariants[direction as FadeDirection];
      case 'slide':
        return slideVariants[direction as SlideDirection];
      case 'scale':
        return scaleVariant;
      case 'stagger':
        return staggerContainerVariant;
      case 'line':
        return lineVariant;
      case 'none':
      default:
        return {}; // No animation
    }
  };

  // For no animation, just return children with a div wrapper
  if (type === 'none') {
    return (
      <div className={className} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      variants={getVariant()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        staggerChildren: type === 'stagger' ? staggerChildren : 0,
      }}
      custom={custom}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer; 