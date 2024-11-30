import H2Titles from "./Titles/H2Titles";
// import APIsSkills from "./ui/skills/APIsSkills";
import BackendSkills from "./ui/skills/BackendSkills";
import FrontendSkills from "./ui/skills/FrontendSkills";
import LanguageSKills from "./ui/skills/LanguageSKills";
const SkillsSection = async () => {
  return (
    <section className="max-w-7xl mx-auto">
      {" "}
      <H2Titles>Web Development and Other Skills</H2Titles>
      <LanguageSKills />
      <BackendSkills />
      <FrontendSkills />
      {/* <APIsSkills /> */}
    </section>
  );
};

export default SkillsSection;
