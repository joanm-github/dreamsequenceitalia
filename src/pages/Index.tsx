import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { TimelinePreview } from "@/components/home/TimelinePreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <TimelinePreview />
    </Layout>
  );
};

export default Index;
