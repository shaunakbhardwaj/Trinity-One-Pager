import { motion } from 'framer-motion';
import { slideFromLeftVariant, fadeInVariant } from '@/utils/animations';
import Image from 'next/image';

const HeroLight = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="section-container bg-white relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10">
                <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000" strokeWidth="1" opacity="0.2" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="section-inner py-8 md:py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={slideFromLeftVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 z-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#081239] leading-tight mb-2">
              Deliver<br />
              the Point<br />
              <span className="text-[#ED2970]">Differently</span>
            </h1>
            
            <p className="text-[#081239]/70 my-6 max-w-md">
              Take your business to another level with a creative communication and captivating visual design
            </p>
            
            <motion.button
              variants={fadeInVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              onClick={scrollToContact}
              className="bg-[#081239] text-white px-6 py-3 rounded-full font-medium hover:bg-[#081239]/90 transition-colors duration-300 mt-4"
            >
              Start the Project
            </motion.button>
            
            {/* Social Media Icons with proper logos */}
            <div className="flex gap-4 mt-8">
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-10 h-10 rounded-full bg-[#ED2970] flex items-center justify-center text-white"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-10 h-10 rounded-full bg-[#ED2970] flex items-center justify-center text-white"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="w-10 h-10 rounded-full bg-[#ED2970] flex items-center justify-center text-white"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="w-10 h-10 rounded-full bg-[#ED2970] flex items-center justify-center text-white"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right Column - Large Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-7 relative z-10"
          >
            <div className="relative w-full h-[300px] md:h-[450px] lg:h-[600px] rounded-[30px] overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000&auto=format&fit=crop" 
                alt="Event with confetti" 
                fill
                className="object-cover"
                priority
              />
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute -top-5 -right-5 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-12 h-12 bg-[#ED2970]/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLight; 