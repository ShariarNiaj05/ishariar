import { fetchSkills } from "@/APIs/getSKills";
import H2Titles from "./Titles/H2Titles";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const SkillsSection = async () => {
  const allSkills = await fetchSkills();

  const languageSkills = allSkills.filter(
    (skill) => skill.category === "Language"
  );
  const backendSkills = allSkills.filter(
    (skill) => skill.category === "Backend"
  );
  const frontendSkills = allSkills.filter(
    (skill) => skill.category === "Frontend"
  );
  const apiSkills = allSkills.filter((skill) => skill.category === "APIs");
  const interpersonalSkills = allSkills.filter(
    (skill) => skill.category === "Interpersonal"
  );

  console.log("languageSkills", languageSkills);

  const content = allSkills.map((skill) => ({
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
