import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import PrimaryButton from "./buttons/PrimaryButton";
import SecondaryButton from "./buttons/SecondaryButton";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      {" "}
      <Spotlight
        className="-top-90 left-10 md:left-60 md:-top-20"
        fill="#c2a7ae"
      />
      <div className="flex">
        <div className="h-auto md:h-[40rem] w-[60%]rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-700">
              Full-Stack Developer with Digital Visionary
            </h1>
            <Link target="_blank" href={"https://app.daily.dev/shariarislam"}>
              <Image
                src="https://api.daily.dev/devcards/v2/VzIq43FTtucx4ciSOg2qa.png?type=wide&r=rhq"
                width="600"
                height="600"
                alt="Shariar Islam's Dev Card"
                className="mt-3 mx-auto"
              />
            </Link>
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
        {/* <div className="w-[40%]">
          <Link href={"https://app.daily.dev/shariarislam"}>
            <Image
              src="https://api.daily.dev/devcards/v2/VzIq43FTtucx4ciSOg2qa.png?type=wide&r=rhq"
              width="356"
              height="356"
              alt="Shariar Islam's Dev Card"
            />
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default HeroSection;
