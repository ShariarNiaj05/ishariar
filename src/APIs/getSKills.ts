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
    const languageSkills = data.filter(
      (skill: Skills) => skill.category === "Language"
    );
    const backendSkills = data.filter(
      (skill: Skills) => skill.category === "Backend"
    );
    const frontendSkills = data.filter(
      (skill: Skills) => skill.category === "Frontend"
    );
    const apiSkills = data.filter((skill: Skills) => skill.category === "APIs");

    const interpersonalSkills = data.filter(
      (skill: Skills) => skill.category === "Interpersonal"
    );
    return data?.data;
  } catch (error) {
    console.error("Failed to fetch skills", error);
  }
};
