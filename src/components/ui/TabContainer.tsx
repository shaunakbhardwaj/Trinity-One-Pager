"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedContainer from './AnimatedContainer';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabContainerProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
  tabsClassName?: string;
  contentClassName?: string;
  animate?: boolean;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (tabId: string) => void;
}

/**
 * TabContainer component that creates a reusable tabbed interface
 * with smooth transitions between tab content.
 */
const TabContainer: React.FC<TabContainerProps> = ({
  tabs,
  defaultActiveTab,
  className = '',
  tabsClassName = '',
  contentClassName = '',
  animate = true,
  orientation = 'horizontal',
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  // Determine classes based on orientation
  const containerClass = `
    ${className}
    ${orientation === 'vertical' ? 'flex flex-row space-x-8' : ''}
  `;

  const tabsContainerClass = `
    ${tabsClassName}
    flex 
    ${orientation === 'vertical' 
      ? 'flex-col space-y-3' 
      : 'flex-row space-x-2 md:space-x-6'}
    mb-8
  `;

  // Active tab indicator style
  const activeIndicatorVariants = {
    horizontal: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.3 } },
    },
    vertical: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    },
  };

  return (
    <div className={containerClass}>
      {/* Tab navigation */}
      <div className={tabsContainerClass}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                relative
                px-3 py-2
                font-medium
                transition-all duration-300
                ${isActive 
                  ? 'text-accent-alt' 
                  : 'text-inherit opacity-70 hover:opacity-100'}
              `}
              aria-selected={isActive}
              role="tab"
            >
              {tab.label}
              
              {isActive && (
                <motion.div
                  className={`
                    absolute 
                    bg-accent-alt 
                    ${orientation === 'vertical' 
                      ? 'left-0 top-0 bottom-0 w-1 h-full' 
                      : 'bottom-0 left-0 right-0 h-0.5 w-full'}
                  `}
                  initial={animate ? activeIndicatorVariants[orientation].initial : undefined}
                  animate={animate ? activeIndicatorVariants[orientation].animate : undefined}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className={`tab-content-container ${contentClassName}`}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-content ${activeTab === tab.id ? 'block' : 'hidden'}`}
            role="tabpanel"
          >
            {animate ? (
              <AnimatedContainer
                type="fade"
                direction="in"
                duration={0.5}
              >
                {tab.content}
              </AnimatedContainer>
            ) : (
              tab.content
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContainer; 