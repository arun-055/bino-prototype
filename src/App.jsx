import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen.jsx";
import MainApp from "./components/MainApp.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Toaster />
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
            <Navbar/>
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
