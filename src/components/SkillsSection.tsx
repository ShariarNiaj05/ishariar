import H2Titles from "./Titles/H2Titles";
import BackendSkills from "./ui/skills/BackendSkills";
import FrontendSkills from "./ui/skills/FrontendSkills";
import LanguageSKills from "./ui/skills/LanguageSKills";
const SkillsSection = async () => {
  return (
    <section className="max-w-7xl mx-auto">
      {" "}
      <H2Titles>Web Development and Other Skills</H2Titles>
      {/* frontendSkills */}
      <LanguageSKills />
      <BackendSkills />
      <FrontendSkills />
    </section>
  );
};

export default SkillsSection;
