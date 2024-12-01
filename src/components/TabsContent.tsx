import { fetchSkills, SkillsResponse } from "@/APIs/getSKills";
import { Skills } from "@/types";
import Image from "next/image";

const TabsContent = async () => {
  const skillsResponse: SkillsResponse | string | undefined =
    await fetchSkills();

  if (!skillsResponse) {
    return <p>Failed to load skills. Please try again later.</p>;
  }
  const { frontendSkills } = skillsResponse as SkillsResponse;

  return frontendSkills.map((skill: Skills) => ({
    content: (
      <div className="h-full w-2xl flex flex-col items-center justify-center text-white">
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
  }));
};

export default TabsContent;
