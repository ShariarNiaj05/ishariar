import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="text-2xl text-center">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
      </div>
    </main>
  );
};

export default HomePage;
