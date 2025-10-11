import { formatApiDate } from "./dateUtils";

const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY || "your-api-key-here";

const MOCK_ARTICLES = [
  {
    title: "Revolutionary Climate Technology Breakthrough Announced",
    description:
      "Scientists have developed a new carbon capture technology that could significantly reduce atmospheric CO2 levels.",
    source: { name: "Science Today" },
    publishedAt: "2024-03-20T14:30:00Z",
    urlToImage:
      "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    url: "https://example.com/climate-tech-breakthrough",
  },
  {
    title: "Global Summit on Renewable Energy Begins",
    description:
      "World leaders gather to discuss the future of renewable energy and sustainable development goals.",
    source: { name: "Energy News" },
    publishedAt: "2024-03-20T10:15:00Z",
    urlToImage:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    url: "https://example.com/renewable-energy-summit",
  },
  {
    title: "New Archaeological Discovery Rewrites History",
    description:
      "Archaeologists have uncovered artifacts that provide new insights into ancient civilizations.",
    source: { name: "History Weekly" },
    publishedAt: "2024-03-19T16:45:00Z",
    urlToImage:
      "https://images.unsplash.com/photo-1594736797933-d0c5acea7a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    url: "https://example.com/archaeological-discovery",
  },
];

export const searchNews = async (query) => {
  try {
    if (API_KEY && API_KEY !== "your-api-key-here") {
      const url = new URL(newsApiBaseUrl);

      const currentDate = new Date();
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(currentDate.getDate() - 7);

      const toDate = formatApiDate(currentDate);
      const fromDate = formatApiDate(sevenDaysAgo);

      url.searchParams.append("q", query);
      url.searchParams.append("apiKey", API_KEY);
      url.searchParams.append("from", fromDate);
      url.searchParams.append("to", toDate);
      url.searchParams.append("pageSize", "100");
      url.searchParams.append("language", "en");
      url.searchParams.append("sortBy", "publishedAt");

      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error(
            "Invalid API key. Please check your NewsAPI configuration."
          );
        } else if (response.status === 429) {
          throw new Error("Too many requests. Please try again later.");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      const data = await response.json();

      if (data.status === "error") {
        throw new Error(data.message || "API error occurred");
      }

      return data;
    } else {
      console.warn(
        "Using mock data. To use real NewsAPI, set VITE_NEWS_API_KEY env var."
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const filteredArticles = MOCK_ARTICLES.filter(
        (article) =>
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())
      );

      return {
        status: "ok",
        totalResults: filteredArticles.length,
        articles: filteredArticles,
      };
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
