// Simulate login
export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    // You can add fake validation logic here if needed
    if (email && password) {
      resolve({ token: "fake-jwt-token" });
    } else {
      reject("Invalid email or password");
    }
  });
};

// Simulate token check (e.g., on page load or refresh)
export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    if (token === "fake-jwt-token") {
      resolve({
        data: {
          name: "Fake User",
          email: "fakeuser@example.com",
          _id: "fake-user-id",
        },
      });
    } else {
      console.log("this is a bug");
      reject("Invalid token");
    }
  });
};
