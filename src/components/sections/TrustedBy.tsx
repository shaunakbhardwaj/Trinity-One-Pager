import { motion } from 'framer-motion';
import SideNav from '@/components/layout/SideNav';
import { fadeInVariant } from '@/utils/animations';
import Image from 'next/image';

const TrustedBy = () => {
  // Client logos data
  const clientLogos = [
    // Row 1 - Automotive
    { name: 'Lamborghini', src: '/logos/lamborghini.svg', alt: 'Lamborghini logo' },
    { name: 'Audi', src: '/logos/audi.svg', alt: 'Audi logo' },
    { name: 'Porsche', src: '/logos/porsche.svg', alt: 'Porsche logo' },
    { name: 'BMW', src: '/logos/bmw.svg', alt: 'BMW logo' },
    
    // Row 2 - Tech & Social
    { name: 'YouTube', src: '/logos/youtube.svg', alt: 'YouTube logo' },
    { name: 'Google', src: '/logos/google.svg', alt: 'Google logo' },
    { name: 'LinkedIn', src: '/logos/linkedin.svg', alt: 'LinkedIn logo' },
    { name: 'Tinder', src: '/logos/tinder.svg', alt: 'Tinder logo' },
    
    // Row 3 - Entertainment & Finance
    { name: 'BookMyShow', src: '/logos/bookmyshow.svg', alt: 'BookMyShow logo' },
    { name: 'Mastercard', src: '/logos/mastercard.svg', alt: 'Mastercard logo' },
    { name: 'Aditya Birla Capital', src: '/logos/adityabirla.svg', alt: 'Aditya Birla Capital logo' },
    { name: 'Reliance', src: '/logos/reliance.svg', alt: 'Reliance Industries logo' },
    
    // Row 4 - Lifestyle & Beverages
    { name: 'NMACC', src: '/logos/nmacc.svg', alt: 'Nita Mukesh Ambani Cultural Centre logo' },
    { name: 'Nykaa', src: '/logos/nykaa.svg', alt: 'Nykaa logo' },
    { name: 'Budweiser', src: '/logos/budweiser.svg', alt: 'Budweiser logo' },
    { name: 'Corona', src: '/logos/corona.svg', alt: 'Corona logo' },
  ];

  return (
    <section id="trusted-section" className="section-alt-light section-container h-screen flex items-center">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="grid-pattern opacity-30 absolute inset-0"></div>
      </div>
      
      {/* Section Number */}
      <div className="section-number text-[#081239]/10">03</div>

      <div className="section-inner w-full py-0">
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#081239]">
            Trusted By <span className="accent-alt">Industry Leaders</span>
          </h2>
          <p className="text-[#081239]/70 max-w-2xl mx-auto">
            We've had the privilege of working with some of the world's most respected brands, 
            creating extraordinary experiences that drive business results.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
              >
                <div className="relative h-full w-full">
                  {/* Fallback for missing SVG files during development */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#081239] text-sm font-medium">
                    {logo.name}
                  </div>
                  
                  {/* Uncomment when SVG files are available */}
                  {/* 
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                  */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-[#081239]/60 text-sm">
            Join the growing list of brands that trust Trinity for their experiential marketing needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy; 