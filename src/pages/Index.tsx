
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {ResumeSection} from "@/components/Resumesection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
