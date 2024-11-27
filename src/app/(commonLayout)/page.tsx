import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
      </h1>
    </main>
  );
};

export default HomePage;
