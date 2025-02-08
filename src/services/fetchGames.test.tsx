import { fetchGames } from "./fetchGames";

describe("fetchGames", () => {
  const mockResponse = {
    games: [
      {
        id: "1",
        genre: "Action",
        image: "/game-images/cyberpunk2077.jpeg",
        name: "Cyberpunk 2077",
        description: "An open-world, action-adventure story set in Night City.",
        price: 59.99,
        isNew: true,
      },
      {
        id: "2",
        genre: "RPG",
        image: "/game-images/thewitcher3.jpeg",
        name: "The Witcher 3: Wild Hunt",
        description:
          "A story-driven, next-generation open world role-playing game.",
        price: 39.99,
        isNew: false,
      },
    ],
    totalPages: 3,
    currentPage: 1,
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch games without parameters (default page 1)", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchGames();

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/api/games?page=1"
    );
    expect(result).toEqual(mockResponse);
  });

  it("should fetch games with genre parameter", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchGames("action");

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/api/games?genre=action&page=1"
    );
    expect(result).toEqual(mockResponse);
  });

  it("should fetch games with page parameter", async () => {
    const mockResponseModified = {
      ...mockResponse,
      totalPages: 3,
      currentPage: 3,
    };

    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponseModified),
    });

    const result = await fetchGames(undefined, 3);

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/api/games?page=3"
    );
    expect(result).toEqual(mockResponseModified);
  });

  it("should return an empty array if fetch fails", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    const result = await fetchGames();

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:3000/api/games?page=1"
    );
    expect(result).toEqual([]);
  });
});
