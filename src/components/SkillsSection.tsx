import H2Titles from "./Titles/H2Titles";
import APIsSkills from "./ui/skills/APIsSkills";
import BackendSkills from "./ui/skills/BackendSkills";
import FrontendSkills from "./ui/skills/FrontendSkills";
import InterpersonalSkills from "./ui/skills/InterpersonalSkills";
import LanguageSKills from "./ui/skills/LanguageSKills";
import OthersSkills from "./ui/skills/OthersSkills";
import ToolsSkills from "./ui/skills/ToolsSkills";
const SkillsSection = async () => {
  return (
    <section className="max-w-7xl mx-auto">
      {" "}
      <H2Titles>Web Development and Other Skills</H2Titles>
      <LanguageSKills />
      <BackendSkills />
      <FrontendSkills />
      <APIsSkills />
      <ToolsSkills />
      <OthersSkills />
      <InterpersonalSkills />
    </section>
  );
};

export default SkillsSection;
