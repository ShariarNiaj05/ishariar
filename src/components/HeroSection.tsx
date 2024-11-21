import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral=400">
          Full-Stack Developer with Digital Visionary
        </h1>
        <p>
          Seamless Solutions, Visionary Execution: Full-Stack Prowess with a
          Visionary Perspective
        </p>
        <div className="mt-4">
          <Link href={"/"}>Github</Link>
          <Link href={"/"}>Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
