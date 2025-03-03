import { Variants } from "framer-motion";

// Fade animations
export const fadeVariants = {
  // Fade up animation
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  },
  // Fade in animation
  in: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }
};

// Slide animations
export const slideVariants = {
  // Slide from left animation
  fromLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  },
  // Slide from right animation
  fromRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  }
};

// Scale animation
export const scaleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1 }
  }
};

// Stagger children animation
export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Line animation for decorative elements
export const lineVariant = {
  hidden: { width: 0 },
  visible: { 
    width: '100px', 
    transition: { duration: 0.8 }
  }
};

// For backward compatibility
export const fadeUpVariant = fadeVariants.up;
export const fadeInVariant = fadeVariants.in;
export const slideFromLeftVariant = slideVariants.fromLeft; 