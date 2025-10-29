import React, { useEffect } from "react";
import { authorize, checkToken } from "./auth";
import { getItems, saveArticle } from "./api";

// Demo component used during development to exercise auth and API helpers.
function DemoTest() {
  useEffect(() => {
    // Simulate login
    authorize("test@example.com", "password123")
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log("Logged in! Token:", res.token);
        return checkToken(res.token);
      })
      .then((userRes) => {
        // eslint-disable-next-line no-console
        console.log("User info:", userRes.data);
      })
      .catch(() => {});

    // Simulate saving an article
    const article = {
      title: "News from the Front",
      url: "https://example.com/article",
      imageUrl: "https://example.com/image.jpg",
    };

    saveArticle(article).then(() => {
      // eslint-disable-next-line no-console
      console.log("Article saved (demo)");
    });

    // Simulate fetching saved articles
    getItems().then((items) => {
      // eslint-disable-next-line no-console
      console.log("Saved articles (demo):", items);
    });
  }, []);

  return null;
}

export default DemoTest;
