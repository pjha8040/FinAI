import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Navbar */}
      <Navbar />
      {/* <div className="navbar bg-base-200 shadow-md fixed w-full z-10">
                <div className="container mx-auto px-6 flex justify-between">
                    <Link to="/" className="text-2xl font-bold">ChatBot AI</Link>
                    
                    <div className="flex items-center gap-4">
                        <Link to="#" className="btn btn-ghost">Features</Link>
                        <Link to="#" className="btn btn-ghost">Pricing</Link> 
                        <Link to="#" className="btn btn-ghost">Contact</Link> 

                       
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost">
                                Settings ▼
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-lg w-40">
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/preferences">Preferences</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </ul>
                        </div>

                        <Link to="/login" className="btn btn-primary">Login</Link>
                    </div>
                </div>
            </div> */}

      {/* Hero Section */}
      <section className="hero min-h-[65vh] flex items-center justify-center text-center">
        <div className="max-w-2xl mt-16">
          <h2 className="text-5xl font-bold">
            Your AI-Powered Financial Assistant
          </h2>
          <p className="mt-4 text-lg opacity-70">
            Ask questions, get real-time insights, and make better financial
            decisions effortlessly.
          </p>
          <Link to="/chatbot">
            <button className="btn btn-primary mt-6">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Personalized Advice",
            text: "Get tailored insights based on your queries.",
          },
          {
            title: "Real-time Data",
            text: "Stay updated with live financial trends.",
          },
          {
            title: "Secure & Private",
            text: "Your financial data is encrypted and protected.",
          },
        ].map((feature, index) => (
          <div key={index} className="card bg-base-200 shadow-lg p-6">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 opacity-70">{feature.text}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-base-200">
        <h2 className="text-3xl font-bold">
          Start Your Financial Journey Today
        </h2>
        <p className="mt-2 opacity-70">
          Join thousands of users making smarter investments.
        </p>
        <Link to="/sign-up">
          <button className="btn btn-secondary mt-6">Sign Up Now</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer bg-base-300 py-6 text-center">
        <p>&copy; 2025 FinAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
