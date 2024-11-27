export const fetchExperiences = async () => {
  try {
    const response = await fetch(
      `https://ishariar-server.vercel.app/api/v1/skills`,
      {
        cache: "no-cache",
      }
    );
    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error("Failed to fetch skills", error);
  }
};
