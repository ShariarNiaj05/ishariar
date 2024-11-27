"use client";

import H2Titles from "./Titles/H2Titles";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const SkillsSection = () => {
  const content = [
    {
      title: "Real time changes",
      //   description:
      //     "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },

    {
      title: "Real time changes",
      //   description:
      //     "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];
  return (
    <section>
      {" "}
      <H2Titles>Web Development and Other Skills</H2Titles>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default SkillsSection;
