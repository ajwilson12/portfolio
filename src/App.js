import React from 'react';
import { Route, Routes } from "react-router-dom";

// components
import Background from './components/Background';
import Navigation from './components/common/Navigation';

// pages
import LandingPage from './components/pages/LandingPage';
import PageNotFound from "./components/pages/PageNotFound";

// css
import './App.css';

function App() {

  return (
    <div className="App">
     <Background />
     <Navigation />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </div>
  );
}

export default App;
