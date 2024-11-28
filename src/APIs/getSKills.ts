import { Skills } from "@/types";

export const fetchSkills = async () => {
  try {
    const response = await fetch(
      `https://ishariar-server.vercel.app/api/v1/skills`,
      {
        cache: "no-cache",
      }
    );
    const { data } = await response.json();
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

    const interpersonalSkills: Skills[] = data.filter(
      (skill: Skills) => skill.category === "Interpersonal"
    );
    return {
      languageSkills,
      backendSkills,
      frontendSkills,
      apiSkills,
      interpersonalSkills,
    };
  } catch (error) {
    console.error("Failed to fetch skills", error);
  }
};
