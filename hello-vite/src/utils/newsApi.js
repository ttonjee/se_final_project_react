// News API utility functions
const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = 'your-api-key-here'; // You'll need to get this from newsapi.org

// For development/demo purposes, we'll use a mock API response
const MOCK_ARTICLES = [
  {
    title: "Revolutionary Climate Technology Breakthrough Announced",
    description: "Scientists have developed a new carbon capture technology that could significantly reduce atmospheric CO2 levels.",
    source: { name: "Science Today" },
    publishedAt: "2024-03-20T14:30:00Z",
    urlToImage: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    url: "https://example.com/climate-tech-breakthrough"
  },
  {
    title: "Global Summit on Renewable Energy Begins",
    description: "World leaders gather to discuss the future of renewable energy and sustainable development goals.",
    source: { name: "Energy News" },
    publishedAt: "2024-03-20T10:15:00Z",
    urlToImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    url: "https://example.com/renewable-energy-summit"
  },
  {
    title: "New Archaeological Discovery Rewrites History",
    description: "Archaeologists have uncovered artifacts that provide new insights into ancient civilizations.",
    source: { name: "History Weekly" },
    publishedAt: "2024-03-19T16:45:00Z",
    urlToImage: "https://images.unsplash.com/photo-1594736797933-d0c5acea7a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    url: "https://example.com/archaeological-discovery"
  }
];

export const searchNews = async (query) => {
  try {
    // For demo purposes, return mock data
    // In production, uncomment the real API call below
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter mock articles based on query
    const filteredArticles = MOCK_ARTICLES.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase())
    );
    
    return {
      status: 'ok',
      totalResults: filteredArticles.length,
      articles: filteredArticles
    };
    
    /* Real API call - uncomment when you have an API key
    const response = await fetch(
      `${BASE_URL}/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}&pageSize=12&language=en`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
    */
  } catch (error) {
    console.error('Error fetching news:', error);
    throw new Error('Failed to fetch news. Please try again.');
  }
};

export const getTopHeadlines = async () => {
  try {
    // For demo purposes, return mock data
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      status: 'ok',
      totalResults: MOCK_ARTICLES.length,
      articles: MOCK_ARTICLES
    };
    
    /* Real API call - uncomment when you have an API key
    const response = await fetch(
      `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}&pageSize=12`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
    */
  } catch (error) {
    console.error('Error fetching headlines:', error);
    throw new Error('Failed to fetch headlines. Please try again.');
  }
};
