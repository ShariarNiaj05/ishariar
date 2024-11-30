import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="">
      {" "}
      <Spotlight
        className="-top-90 left-10 md:left-60 md:-top-20"
        fill="#c2a7ae"
      />
      <div className="h-auto md:h-[20rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto pt-10 md:py-0">
        <div className="px-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-700">
            Full-Stack Developer with Digital Visionary
          </h1>

          {/* <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Seamless Solutions, Visionary Execution: Full-Stack Prowess with a
              Visionary Perspective
            </p> */}
          <div className="mt-4">
            <Link href={"/"}>
              <PrimaryButton>Github</PrimaryButton>
            </Link>
            <Link href={"/"}>
              <SecondaryButton>Resume</SecondaryButton>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-1/2 text-center mx-auto">
        <Link target="_blank" href={"https://app.daily.dev/shariarislam"}>
          <Image
            src="https://api.daily.dev/devcards/v2/VzIq43FTtucx4ciSOg2qa.png?type=wide&r=rhq"
            width="720"
            height="720"
            alt="Shariar Islam's Dev Card"
            className="mt-3 mx-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
