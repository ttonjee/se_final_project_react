import { authorize, checkToken } from './auth';

// Test login and token validation
authorize('test@example.com', 'password123')
  .then((res) => {
    console.log('Logged in! Token:', res.token);
    return checkToken(res.token);
  })
  .then((userRes) => {
    console.log('User info:', userRes.data);
  })
  .catch((err) => {
    console.error('Login or token validation failed:', err);
  });
import React, { useEffect } from "react";
import { authorize, checkToken } from "./utils/auth";
import { getItems, saveArticle, deleteArticle } from "./utils/api";

function DemoTest() {
  useEffect(() => {
    // Simulate login
    authorize("test@example.com", "password123")
      .then((res) => {
        console.log("Logged in! Token:", res.token);
        return checkToken(res.token);
      })
      .then((userRes) => {
        console.log("User info:", userRes.data);
      });

    // Simulate saving an article
    const article = {
      title: "News from the Front",
      url: "https://example.com/article",
      imageUrl: "https://example.com/image.jpg",
    };

    saveArticle(article).then((saved) => {
      console.log("Article saved:", saved);
    });

    // Simulate fetching saved articles
    getItems().then((items) => {
      console.log("Saved articles:", items);
    });
  }, []);

  return null;
}

export default DemoTest;
