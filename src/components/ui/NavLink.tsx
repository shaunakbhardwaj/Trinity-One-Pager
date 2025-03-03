"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  exactMatch?: boolean;
  underlineOnHover?: boolean;
  animated?: boolean;
}

/**
 * NavLink component for consistent navigation links with active state handling
 * and optional hover animations.
 */
const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  className = '',
  activeClassName = 'text-accent-alt',
  onClick,
  exactMatch = false,
  underlineOnHover = true,
  animated = true,
}) => {
  const pathname = usePathname();
  
  // Determine if this link is active based on current path
  const isActive = exactMatch
    ? pathname === href
    : pathname.startsWith(href) && href !== '/' ? true : pathname === href;

  // Base classes for the link
  const baseClasses = `
    relative
    font-medium
    transition-colors
    duration-300
    ${isActive ? activeClassName : ''}
    ${className}
  `;

  // Underline animation variants
  const underlineVariants = {
    hidden: { width: '0%' },
    visible: { width: '100%' },
  };

  // If animated, use motion component
  if (animated) {
    return (
      <motion.div
        className="relative"
        initial="hidden"
        whileHover="visible"
      >
        <Link 
          href={href} 
          className={baseClasses}
          onClick={onClick}
        >
          {label}
        </Link>
        
        {underlineOnHover && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-accent-alt"
            variants={underlineVariants}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    );
  }

  // Non-animated version
  return (
    <Link 
      href={href} 
      className={`
        ${baseClasses}
        ${underlineOnHover ? 'hover:underline decoration-accent-alt' : ''}
      `}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavLink; 