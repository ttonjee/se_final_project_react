import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/saved-news" element={<SavedNewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
