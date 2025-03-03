import { motion } from 'framer-motion';
import { fadeInVariant } from '@/utils/animations';

const ContactFooter = () => {
  const socialLinks = [
    { name: 'Instagram', url: '#', icon: 'instagram' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Facebook', url: '#', icon: 'facebook' }
  ];

  const locations = [
    { city: 'Mumbai', address: '123 Creative Hub, Lower Parel, Mumbai 400013' },
    { city: 'Delhi', address: '456 Experience Tower, Connaught Place, New Delhi 110001' },
    { city: 'Bangalore', address: '789 Innovation Park, Koramangala, Bangalore 560034' }
  ];

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        );
      case 'facebook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact-section" className="section-container bg-[#f8f8f8] text-[#081239]">
      {/* Section Number */}
      <div className="section-number text-[#081239]/10">05</div>

      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Form */}
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <div className="h-1 bg-accent-alt w-24 mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-[#081239]">
              Let's <span className="accent-alt">Connect</span>
            </h2>
            <p className="text-xl text-[#081239]/60 mb-8">
              Ready to create extraordinary experiences? We'd love to hear from you.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#081239]/80 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white border border-[#081239]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-alt text-[#081239]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#081239]/80 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-white border border-[#081239]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-alt text-[#081239]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#081239]/80 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 bg-white border border-[#081239]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-alt text-[#081239]"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-accent-alt text-white px-8 py-3 rounded-lg font-medium hover:bg-[#f03b83] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="bg-white shadow-lg p-8 rounded-xl border border-[#081239]/10">
              <h3 className="text-2xl font-bold mb-6 text-[#081239]">Get in Touch</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-medium text-accent-alt mb-3">Our Locations</h4>
                  <div className="space-y-4">
                    {locations.map((location) => (
                      <div key={location.city} className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-[#081239]/60">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div>
                          <p className="font-medium">{location.city}</p>
                          <p className="text-sm text-[#081239]/60">{location.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-accent-alt mb-3">Contact Info</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#081239]/60">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#081239]/60">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span>hello@trinity.in</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-accent-alt mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.name}
                        href={link.url}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#081239]/10 hover:bg-accent-alt hover:text-white transition-colors duration-200"
                        aria-label={link.name}
                      >
                        {renderSocialIcon(link.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter; 