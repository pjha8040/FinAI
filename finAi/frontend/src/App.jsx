import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Preferences from "./Pages/Prefrences";
import ChatBot from "./Pages/ChatBot";
import Profile from "./Pages/Profile";
import Logout from "./Pages/Logout";
import { useState, useEffect } from "react";
import Pricing from "./Pages/Pricing";
import Market from "./Pages/Market";
function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "Default"
  );

  // Apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <Router basename={"/"}>
      <div className="min-h-screen bg-base-100 text-base-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/market" element={<Market />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
