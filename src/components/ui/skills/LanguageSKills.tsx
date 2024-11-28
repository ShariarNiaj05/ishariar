import { fetchSkills } from "@/APIs/getSKills";
import { Skills } from "@/types";
import Image from "next/image";

const LanguageSKills = async () => {
  const { languageSkills } = await fetchSkills();
  console.log("languageSkills", languageSkills);
  const content = languageSkills.map((skill: Skills) => ({
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
  }));

  return <div></div>;
};

export default LanguageSKills;
