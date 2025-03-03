'use client';

import Layout from '@/components/layout/Layout';
import HeroLight from '@/components/sections/HeroLight';
import GroupCompanies from '@/components/sections/GroupCompanies';
import AboutUs from '@/components/sections/AboutUs';
import TrustedBy from '@/components/sections/TrustedBy';
import OurPeople from '@/components/sections/OurPeople';
import ContactFooter from '@/components/sections/ContactFooter';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - White background, blue text, pink accents */}
      <HeroLight />
      
      {/* Group Companies Section - Showcasing Trinity.in, Sports Lab, Eternity, Content Labs, fierce@Trinity */}
      <GroupCompanies />
      
      {/* About Us Section - Trinity's journey and history */}
      <AboutUs />
      
      {/* Trusted By Section - Client logos in a grid */}
      <TrustedBy />
      
      {/* Our People Section - Team structure similar to EY style */}
      <OurPeople />
      
      {/* Contact Footer - Inspired by Schabang aesthetics */}
      <ContactFooter />
    </Layout>
  );
}
