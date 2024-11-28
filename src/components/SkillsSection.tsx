import { fetchSkills } from "@/APIs/getSKills";
import H2Titles from "./Titles/H2Titles";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { Skills } from "@/types";
import LanguageSKills from "./ui/skills/LanguageSKills";
const SkillsSection = async () => {
  // const allSkills = await fetchSkills();

  // const languageSkills = allSkills.filter(
  //   (skill: Skills) => skill.category === "Language"
  // );
  // const backendSkills = allSkills.filter(
  //   (skill: Skills) => skill.category === "Backend"
  // );
  // const frontendSkills = allSkills.filter(
  //   (skill: Skills) => skill.category === "Frontend"
  // );
  // const apiSkills = allSkills.filter(
  //   (skill: Skills) => skill.category === "APIs"
  // );

  // const interpersonalSkills = allSkills.filter(
  //   (skill: Skills) => skill.category === "Interpersonal"
  // );

  // console.log("languageSkills", languageSkills);

  return (
    <section className="max-w-7xl mx-auto">
      {" "}
      <H2Titles>Web Development and Other Skills</H2Titles>
      {/* frontendSkills */}
      <LanguageSKills />
      {/* <div className="p-10">
        <StickyScroll content={content} />
      </div> */}
    </section>
  );
};

export default SkillsSection;
