import H3Title from "@/components/Titles/H3Title";
import { StickyScroll } from "../sticky-scroll-reveal";

const BackendSkills = () => {
  return (
    <div className="p-10">
      <H3Title>Backend</H3Title>
      <StickyScroll content={content} />
    </div>
  );
};

export default BackendSkills;
