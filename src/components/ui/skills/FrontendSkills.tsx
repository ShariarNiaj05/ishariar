import H3Title from "@/components/Titles/H3Title";
import { StickyScroll } from "../sticky-scroll-reveal";
import Image from "next/image";
import { Skills } from "@/types";
import { fetchSkills, SkillsResponse } from "@/APIs/getSKills";

const FrontendSkills = async () => {
  const skillsResponse: SkillsResponse | string | undefined =
    await fetchSkills();

  if (!skillsResponse) {
    return <p>Failed to load skills. Please try again later.</p>;
  }
  const { frontendSkills } = skillsResponse as SkillsResponse;

  const content =
    Array.isArray(frontendSkills) && frontendSkills.length > 0
      ? frontendSkills.map((skill: Skills) => ({
          title: skill.name, // Set the skill name as the title
          content: (
            <div className="h-full w-2xl flex flex-col items-center justify-center text-white">
              {/* Skill Category */}
              <p className="mb-4 text-lg font-medium text-neutral-800 dark:text-neutral-200">
                {skill.category}
              </p>
              {/* Skill Media */}
              {skill.media?.map((mediaItem) => (
                <Image
                  key={mediaItem._id}
                  src={mediaItem.url}
                  width={300}
                  height={300}
                  className="h-32 w-32 object-fit"
                  alt={skill.name}
                />
              ))}
            </div>
          ),
        }))
      : [];
  return (
    <div className="p-10">
      <H3Title>Frontend</H3Title>
      <StickyScroll content={content} />
    </div>
  );
};

export default FrontendSkills;
