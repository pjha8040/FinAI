import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Preferences from "./Pages/Prefrences";
import ChatBot from "./Pages/ChatBot";
import { useState, useEffect } from "react";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");

  // Apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <Router basename={"/"}>
      <div className="min-h-screen bg-base-100 text-base-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/preferences" element={<Preferences/>} />
          <Route path="/chatbot" element={<ChatBot/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
