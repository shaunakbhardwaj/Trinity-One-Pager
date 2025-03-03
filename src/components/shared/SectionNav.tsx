import { motion } from 'framer-motion';

interface SectionNavProps {
  activeIndex: number;
  sections: number;
}

const SectionNav = ({ activeIndex, sections = 5 }: SectionNavProps) => {
  return (
    <div className="side-nav">
      {Array.from({ length: sections }).map((_, index) => (
        <motion.a
          key={index}
          href={`#section-${index + 1}`}
          className={`nav-dot ${activeIndex === index ? 'active' : ''}`}
          initial={{ width: '8px' }}
          animate={{ 
            height: activeIndex === index ? '32px' : '8px',
            opacity: activeIndex === index ? 1 : 0.2
          }}
          transition={{ duration: 0.3 }}
          title={`Section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SectionNav; 