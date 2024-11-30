import { Skills } from "@/types";
export interface SkillsResponse {
  languageSkills: Skills[];
  backendSkills: Skills[];
  frontendSkills: Skills[];
  apiSkills: Skills[];
  toolsSkills: Skills[];
  othersSkills: Skills[];
  interpersonalSkills: Skills[];
}
export const fetchSkills = async (): Promise<
  SkillsResponse | string | undefined
> => {
  try {
    const response = await fetch(
      `https://ishariar-server.vercel.app/api/v1/skills`
    );
    const { data }: { data: Skills[] } = await response.json();

    if (!response.ok || !data) {
      console.error("Failed to fetch skills: ", response.statusText);
      return "Failed to fetch skills: ";
    }

    const languageSkills: Skills[] = data.filter(
      (skill: Skills) => skill.category === "Language"
    );
    const backendSkills: Skills[] = data.filter(
      (skill: Skills) => skill.category === "Backend"
    );
    const frontendSkills: Skills[] = data.filter(
      (skill: Skills) => skill.category === "Frontend"
    );
    const apiSkills: Skills[] = data.filter(
      (skill: Skills) => skill.category === "APIs"
    );
    const toolsSkills: Skills[] = data.filter(
      (skill: Skills) => skill.category === "Tools"
    );

    const interpersonalSkills: Skills[] = data.filter(
      (skill: Skills) => skill.category === "Interpersonal"
    );
    return {
      languageSkills,
      backendSkills,
      frontendSkills,
      apiSkills,
      toolsSkills,
      interpersonalSkills,
    } as SkillsResponse;
  } catch (error) {
    console.error("Failed to fetch skills", error);
  }
};
