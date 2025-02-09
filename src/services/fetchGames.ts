export const fetchGames = async (genre?: string, page?: number) => {
  // const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log("API_URL", API_URL)

  try {
    const API = () => {
      if (genre) {
        return `${API_URL}/api/games?genre=${genre}&page=1`;
      } else if (page) {
        return `${API_URL}/api/games?page=${page}`;
      } else {
        return `${API_URL}/api/games?page=1`;
      }
    };

    console.log("API", API());

    const response = await fetch(API());

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
