import Image from "next/image";
import { Timeline } from "./ui/timeline";
import { fetchExperiences } from "@/APIs/getExperience";
import H3Title from "./Titles/H3Title";
import H4Title from "./Titles/H4Title";
import { getDateRange } from "@/utils/getDateRange";
import { Experience, TimelineEntry } from "@/types";

const ExperienceSection = async (): Promise<JSX.Element> => {
  const experiences: Experience[] = await fetchExperiences();

  const experiencesTimeline: TimelineEntry[] = experiences?.map(
    (item: Experience) => ({
      title: getDateRange(item.startDate, item.endDate),
      content: (
        <div>
          {/* Job Title and Company */}
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
            <H4Title>Responsibilities</H4Title>
            {item.responsibilities?.map((responsibility, index) => (
              <div
                key={index}
                className="text-start flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mt-1"
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
                className="rounded-lg object-contain h-auto md:h-auto lg:h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                style={{ maxHeight: "500px", width: "100%", height: "auto" }}
              />
            ))}
          </div>

          {/* Key Initiatives */}
          {item.keyInitiatives && (
            <div className="mt-6">
              <H4Title> Key Initiatives</H4Title>
              <ul className="text-start list-disc pl-4 ">
                {item.keyInitiatives.map((initiative, index) => (
                  <li
                    key={index}
                    className="text-xs md:text-sm text-neutral-700 dark:text-neutral-300 mt-1"
                  >
                    {initiative}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ),
    })
  );

  return (
    <div className="w-full">
      <Timeline experiences={experiencesTimeline} />
    </div>
  );
};

export default ExperienceSection;
