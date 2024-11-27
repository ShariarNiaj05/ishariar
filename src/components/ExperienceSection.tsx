import Image from "next/image";
import { Timeline } from "./ui/timeline";
// import { useEffect, } from "react";
import { fetchExperiences } from "@/APIs/getExperience";
import { formatDate } from "@/utils/formatDate";
import H3Title from "./Titles/H3Title";
import H4Title from "./Titles/H4Title";

const ExperienceSection = async () => {
  const experiences = await fetchExperiences();
  console.log("experiences", experiences);

  const experiencesTimeline = experiences?.map((item) => ({
    title: formatDate(item.startDate), // Dynamically set title if available, otherwise fallback
    content: (
      <div>
        {/* Job Title and Company */}
        {/* <h3 className="text-start text-xl font-semibold text-secondary dark:text-primary mb-2">
          {item.title} at {item.company}
        </h3> */}
        <H3Title>
          {" "}
          {item.title} at {item.company}{" "}
        </H3Title>

        {/* Description */}
        <p className="text-start text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          {item.description}
        </p>

        {/* Responsibilities */}
        <div className="mb-8">
          {/* <h4 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 mb-2">
            Key Initiatives
          </h4> */}
          <H4Title>Responsibilities</H4Title>
          {item.responsibilities?.map((responsibility, index) => (
            <div
              key={index}
              className="text-start flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
            >
              ✅ {responsibility}
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          {item.media?.map((mediaItem) => (
            <Image
              key={mediaItem._id}
              src={mediaItem.url}
              alt={mediaItem.key}
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          ))}
        </div>

        {/* Key Initiatives */}
        {item.keyInitiatives && (
          <div className="mt-6">
            <h4 className="font-semibold text-sm text-neutral-800 dark:text-neutral-200 mb-2">
              Key Initiatives
            </h4>
            <ul className="list-disc pl-4">
              {item.keyInitiatives.map((initiative, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300"
                >
                  {initiative}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  }));

  console.log(experiencesTimeline);

  const actualData = [
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline experiences={experiencesTimeline} />
    </div>
  );
};

export default ExperienceSection;
