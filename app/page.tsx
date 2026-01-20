import Header from '@/components/header';
import Hero from '@/components/hero';
import Section from '@/components/section';
import SolutionBenefits from '@/components/features';
import FeatureHighlights from '@/components/featurehighlights';
import SocialProof from '@/components/testimonials';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Section />
        <SolutionBenefits />
        <FeatureHighlights />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
