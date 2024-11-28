import H2Titles from "./Titles/H2Titles";
import BackendSkills from "./ui/skills/BackendSkills";
import LanguageSKills from "./ui/skills/LanguageSKills";
const SkillsSection = async () => {
  return (
    <section className="max-w-7xl mx-auto">
      {" "}
      <H2Titles>Web Development and Other Skills</H2Titles>
      {/* frontendSkills */}
      <LanguageSKills />
      <BackendSkills />
    </section>
  );
};

export default SkillsSection;
