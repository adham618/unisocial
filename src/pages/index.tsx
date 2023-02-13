import * as React from 'react';

import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import StudentSocialSection from '@/components/StudentSocialSection';
import WhyUniSocialSection from '@/components/WhyUniSocialSection';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <HeroSection />
        <StudentSocialSection />
        <FeaturesSection />
        <WhyUniSocialSection />
      </main>
    </Layout>
  );
}
