import * as React from 'react';

import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StudentSocialSection from '@/components/StudentSocialSection';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <HeroSection />
        <StudentSocialSection />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
