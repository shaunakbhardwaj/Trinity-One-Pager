import { motion } from 'framer-motion';
import { slideFromLeftVariant, fadeInVariant } from '@/utils/animations';
import { useState } from 'react';
import Image from 'next/image';

const GroupCompanies = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const companies = [
    {
      name: 'Sports Lab',
      number: '1',
      title: 'SPORTS LAB',
      description: 'Specialized in creating immersive sports experiences and activations for major sporting events and brand sponsorships.',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Content Labs',
      number: '2',
      title: 'CONTENT LABS',
      description: 'Digital content creation studio producing cutting-edge visual storytelling for brands across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Fierce at Trinity',
      number: '3',
      title: 'FIERCE AT TRINITY',
      description: 'Bold, innovative event design and production for fashion shows, product launches, and high-profile brand activations.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Eternity by Trinity',
      number: '4',
      title: 'ETERNITY BY TRINITY',
      description: 'Luxury wedding and celebration experiences with meticulous attention to detail and personalized service.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Experiential',
      number: '5',
      title: 'EXPERIENTIAL',
      description: 'Creating memorable brand experiences through interactive installations, pop-ups, and immersive marketing campaigns.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="companies-section" className="section-alt-light section-container">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 -z-10 bg-[#f8f8f8]">
        <div className="grid-pattern opacity-30 absolute inset-0"></div>
      </div>
      
      {/* Section Number */}
      <div className="section-number text-[#081239]/10">02</div>

      <div className="section-inner-full">
        <motion.div
          variants={slideFromLeftVariant}
          initial="hidden"
          animate="visible"
          className="mb-8 px-4 md:px-8 max-w-7xl mx-auto"
        >
          <div className="text-sm text-[#081239]/60 uppercase tracking-wider mb-2">Trinity Group</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#081239]">
            Our Group <br /><span className="accent-alt">Companies</span>
          </h2>
        </motion.div>

        <div className="group-companies-container border-t border-b border-[#081239]/20 overflow-hidden bg-white w-full">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className={`group-company-card border-r border-[#081239]/20 ${
                hoveredIndex === index 
                  ? 'md:flex-grow-[3] flex-grow' 
                  : hoveredIndex !== null 
                    ? 'md:flex-grow-[0.5] flex-grow-0' 
                    : 'md:flex-grow flex-grow'
              } h-[300px] md:h-[500px]`}
              style={{ 
                borderTopColor: '#081239',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Image - Always visible, darkens on hover */}
              <div className="absolute inset-0 z-0">
                <div 
                  className="relative w-full h-full"
                >
                  <motion.div 
                    className="absolute inset-0 bg-[#081239] z-10"
                    initial={{ opacity: 0.3 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 0.7 : 0.3
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${company.image})`,
                      filter: 'grayscale(100%)'
                    }}
                  />
                </div>
              </div>
              
              {/* Number */}
              <div className="absolute top-4 right-4 text-6xl md:text-8xl font-bold text-white opacity-60 z-10">
                {company.number}
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 uppercase text-white">
                    {company.title}
                  </h3>
                </div>
                
                {/* Description - Only visible on hover, positioned at bottom */}
                <motion.div 
                  className="card-content overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 30
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1.0],
                    opacity: { duration: 0.2 }
                  }}
                >
                  <p className="text-white text-sm md:text-base mb-4">
                    {company.description}
                  </p>
                  
                  <button 
                    className="text-sm font-medium flex items-center gap-2 text-[#ED2970] hover:text-white transition-colors"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile note */}
        <div className="mt-4 text-center text-sm text-[#081239]/50 md:hidden px-4">
          Tap on each card to learn more
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies; 