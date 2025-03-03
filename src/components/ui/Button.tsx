"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
  animateHover?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Reusable Button component that can render as a button or link
 * with consistent styling and animation effects
 */
const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'right',
  isExternal = false,
  animateHover = true,
  disabled = false,
  ariaLabel,
  type = 'button',
}) => {
  // Determine the base style classes based on variant
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-[#081239] text-white border-2 border-[#081239] hover:bg-transparent hover:text-[#081239]';
      case 'secondary':
        return 'bg-accent-alt text-white border-2 border-accent-alt hover:bg-transparent hover:text-accent-alt';
      case 'outline':
        return 'bg-transparent border-2 border-[#081239] text-[#081239] hover:bg-[#081239] hover:text-white';
      case 'text':
        return 'bg-transparent text-[#081239] hover:text-accent-alt';
      default:
        return 'bg-[#081239] text-white hover:bg-opacity-90';
    }
  };

  // Determine size classes
  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'text-sm py-2 px-4';
      case 'lg':
        return 'text-lg py-4 px-8';
      default: // md
        return 'text-base py-3 px-6';
    }
  };

  // Combine all classes
  const buttonClasses = `
    inline-flex items-center justify-center
    font-medium transition-all duration-300 ease-in-out
    ${getSizeClasses()}
    ${getVariantClasses()}
    ${variant !== 'text' ? 'rounded-md' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  // Create content with icon if provided
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  // Hover animation props
  const hoverAnimProps = animateHover
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      }
    : {};

  // Render as Link if href is provided
  if (href) {
    return (
      <motion.div {...hoverAnimProps}>
        {isExternal ? (
          <a
            href={href}
            className={buttonClasses}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
          >
            {content}
          </a>
        ) : (
          <Link href={href} aria-label={ariaLabel}>
            <span className={buttonClasses}>{content}</span>
          </Link>
        )}
      </motion.div>
    );
  }

  // Render as button otherwise
  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      {...hoverAnimProps}
    >
      {content}
    </motion.button>
  );
};

export default Button; 