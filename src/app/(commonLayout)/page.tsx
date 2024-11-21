import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center">
        <HeroSection />
      </h1>
    </main>
  );
};

export default HomePage;
