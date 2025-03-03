import { motion } from 'framer-motion';
import { slideFromLeftVariant, fadeInVariant } from '@/utils/animations';
import { useState } from 'react';

const OurPeople = () => {
  const [activeTab, setActiveTab] = useState(0);

  const peopleContent = [
    {
      title: "Our Purpose",
      content: "Building a better working world — is the foundation of our culture.",
      expandedContent: "At Trinity, we empower our people with the right mindsets and skills to navigate what's next, become the transformative leaders the world needs, pursue careers as unique as they are, and build their own exceptional Trinity experiences."
    },
    {
      title: "Our Network",
      content: "Our 10,000 people and 50,000 alumni form a powerful network.",
      expandedContent: "Each of those people leads and inspires others during their time at Trinity and beyond and brings our purpose to life in the work they do every day. The ability to invite, leverage and learn from different perspectives is key to delivering for our clients. We believe diversity and inclusiveness means growth."
    },
    {
      title: "Our Investment",
      content: "We are investing more time and money than ever before in skills and learning for our people.",
      expandedContent: "This includes the first of its kind Trinity Tech MBA, in collaboration with leading business schools. It builds on the success of our Trinity Badges program, which helps our people develop future-focused skills in areas such as technology, sustainability and leadership."
    }
  ];

  return (
    <section id="people-section" className="section-alt-light section-container">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[#f8f8f8] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#ED2970] to-purple-500 blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 to-[#ED2970] blur-3xl animate-pulse" style={{ animationDuration: '20s', animationDelay: '2s' }} />
        </div>
        <div className="grid-pattern opacity-30 absolute inset-0"></div>
      </div>
      
      {/* Section Number */}
      <div className="section-number text-[#081239]/10">04</div>

      <div className="section-inner">
        <motion.div
          variants={slideFromLeftVariant}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="h-1 bg-accent-alt w-24 mb-6"
          />
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#081239]">
            Our <span className="accent-alt">People</span>
          </h2>
        </motion.div>

        {/* Interactive Content Tabs */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - Navigation */}
          <motion.div 
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="sticky top-24 space-y-6">
              {peopleContent.map((item, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeTab === index 
                      ? 'transform translate-x-4' 
                      : 'opacity-60 hover:opacity-80'
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`h-1 w-8 ${activeTab === index ? 'bg-[#ED2970]' : 'bg-[#081239]/30'}`}></div>
                    <h3 className="text-xl font-bold text-[#081239]">{item.title}</h3>
                  </div>
                  <p className="text-[#081239]/70 ml-12">{item.content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="relative">
              {peopleContent.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: activeTab === index ? 1 : 0,
                    y: activeTab === index ? 0 : 20,
                    display: activeTab === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-white shadow-lg rounded-2xl p-8 md:p-12"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-[#ED2970] flex items-center justify-center text-white font-bold text-xl">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#081239]">{item.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-light text-[#081239] leading-relaxed">
                      {item.content}
                    </p>
                    
                    <p className="text-[#081239]/80 text-lg leading-relaxed">
                      {item.expandedContent}
                    </p>
                    
                    <div className="pt-6 border-t border-[#081239]/10 flex justify-between items-center">
                      <div className="flex -space-x-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-[#ED2970] border-2 border-white"></div>
                        ))}
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-[#ED2970] flex items-center justify-center text-[#081239] text-xs">
                          +{index === 0 ? '126' : index === 1 ? '342' : '218'}
                        </div>
                      </div>
                      
                      <button className="text-sm font-medium flex items-center gap-2 text-[#ED2970] hover:text-[#081239] transition-colors">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople; 