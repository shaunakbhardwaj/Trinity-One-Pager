"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import AnimatedContainer from '../ui/AnimatedContainer';
import { fadeInVariant } from '@/utils/animations';

/**
 * AboutUs component that displays the company journey and timeline
 * Features a two-column layout with content and timeline
 */
const AboutUs: React.FC = () => {
  // Timeline data
  const timelineEvents = [
    { year: 2008, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.' },
    { year: 2013, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.' },
    { year: 2017, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.' },
    { year: 2021, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.' },
    { year: 2024, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.' },
  ];

  return (
    <Section 
      id="journey-section" 
      background="alt-light" 
      title="Our Journey" 
      accent="Journey"
      sectionNumber="03"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <AnimatedContainer type="slide" direction="fromLeft">
          <div className="space-y-6 text-[#081239]/80">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
            
            <p>
              Suspendisse in orci enim. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque.
            </p>
            
            <p>
              For over a decade and a half, Trinity has been at the forefront of experiential marketing, creating unforgettable moments for brands and audiences alike. Our journey began with a simple vision: to transform how brands connect with people through immersive experiences.
            </p>
          </div>
          
          <div className="mt-8">
            <Button variant="primary">
              Our Legacy
            </Button>
          </div>
        </AnimatedContainer>

        {/* Right Column - Timeline */}
        <AnimatedContainer type="fade" className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#081239]/10"></div>
          
          {timelineEvents.map((event, index) => (
            <AnimatedContainer 
              key={event.year}
              type="fade"
              delay={0.2 * index}
              className="ml-8 mb-12 relative"
            >
              <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-accent-alt -ml-[1.125rem]"></div>
              <h3 className="text-2xl font-bold text-[#081239] mb-2">{event.year}</h3>
              <p className="text-[#081239]/70">{event.description}</p>
            </AnimatedContainer>
          ))}
        </AnimatedContainer>
      </div>
    </Section>
  );
};

export default AboutUs; 