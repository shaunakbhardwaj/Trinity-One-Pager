import { useEffect, useState } from 'react';

interface SideNavProps {
  activeIndex: number;
  total?: number;
  theme?: 'light' | 'dark' | 'alt-light' | 'alt-dark';
}

const SideNav = ({ activeIndex, total = 6, theme = 'alt-light' }: SideNavProps) => {
  const [currentActive, setCurrentActive] = useState(activeIndex);
  
  useEffect(() => {
    setCurrentActive(activeIndex);
  }, [activeIndex]);

  const getNavDotClass = (index: number) => {
    let baseClass = 'nav-dot';
    
    if (index === currentActive) {
      baseClass += ' active';
    }
    
    if (theme === 'light') {
      baseClass += ' bg-black/20';
      if (index === currentActive) baseClass += ' !bg-black';
    } else if (theme === 'dark') {
      baseClass += ' bg-white/20';
      if (index === currentActive) baseClass += ' !bg-white';
    } else if (theme === 'alt-light') {
      baseClass += ' bg-[#081239]/20';
      if (index === currentActive) baseClass += ' !bg-[#ED2970]';
    } else if (theme === 'alt-dark') {
      baseClass += ' bg-white/20';
      if (index === currentActive) baseClass += ' !bg-[#ED2970]';
    }
    
    return baseClass;
  };
  
  const sections = [
    { name: 'Home', id: 'hero-section' },
    { name: 'Group Companies', id: 'companies-section' },
    { name: 'Our Journey', id: 'journey-section' },
    { name: 'Trusted By', id: 'trusted-section' },
    { name: 'Our People', id: 'people-section' },
    { name: 'Contact', id: 'contact-section' }
  ];

  const scrollToSection = (id: string, index: number) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentActive(index);
    }
  };
  
  return (
    <div className="side-nav">
      {sections.slice(0, total).map((section, index) => (
        <div 
          key={section.id} 
          className={getNavDotClass(index)}
          onClick={() => scrollToSection(section.id, index)}
          title={section.name}
        >
          <div className="tooltip">{section.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideNav; 