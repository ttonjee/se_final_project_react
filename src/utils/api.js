// src/utils/api.js

let savedArticles = []; // Simulate saved articles in memory

// Simulate fetching saved articles (for /saved-news route)
export function getItems() {
  return new Promise((resolve) => {
    resolve([...savedArticles]); // Return a copy
  });
}

// Simulate saving an article
export function saveArticle(article) {
  return new Promise((resolve) => {
    const saved = {
      ...article,
      _id: Math.random().toString(36).substring(2, 18), // Fake _id
    };
    savedArticles.push(saved);
    resolve(saved);
  });
}

// Simulate deleting a saved article
export function deleteArticle(articleId) {
  return new Promise((resolve) => {
    savedArticles = savedArticles.filter(
      (article) => article._id !== articleId
    );
    resolve({ message: "Article deleted", articleId });
  });
}
