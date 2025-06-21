import CertificatesSection from '@/components/sections/cert';
import { ContactSection } from '@/components/sections/contact';
import ExperiencesSection from '@/components/sections/experiences';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillSection from '@/components/sections/skills';

function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <CertificatesSection />
      <ProjectsSection />
      <ExperiencesSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
