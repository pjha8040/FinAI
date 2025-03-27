import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChatBot from "../Pages/ChatBot";
const HomePage = () => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
            {/* Navbar */}
            <nav className="bg-blue-800 bg-opacity-80 shadow-lg py-4 fixed w-full z-10 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-2xl font-extrabold tracking-wide">ChatBot AI</h1>
                    <div className="relative">
                        <a href="#" className="mx-4 hover:text-blue-300 transition">Features</a>
                        <a href="#" className="mx-4 hover:text-blue-300 transition">Pricing</a>
                        <a href="#" className="mx-4 hover:text-blue-300 transition">Contact</a>

                        {/* Settings Dropdown */}
                        <div className="inline-block relative">
                            <button
                                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                                className="mx-4 hover:text-blue-300 transition focus:outline-none"
                            >
                                Settings ▼
                            </button>
                            {isSettingsOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white text-blue-900 rounded-lg shadow-lg overflow-hidden">
                                    <a href="/profile" className="block px-4 py-2 hover:bg-blue-100">Profile</a>
                                    <a href="/preferences" className="block px-4 py-2 hover:bg-blue-100">Preferences</a>
                                    <a href="/logout" className="block px-4 py-2 hover:bg-blue-100">Logout</a>
                                </div>
                            )}
                        </div>

                        <a href="/login" className="ml-6 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition shadow-md">
                            Login
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="text-center py-32 px-6">
                <h2 className="text-5xl font-bold">Your AI-Powered Financial Assistant</h2>
                <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
                    Ask questions, get real-time insights, and make better financial decisions effortlessly.
                </p>
                <Link to="/chatbot">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition">
                        Get Started
                    </button>
                </Link>
            </header>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-8">
                {[
                    { title: "Personalized Advice", text: "Get tailored insights based on your queries." },
                    { title: "Real-time Data", text: "Stay updated with live financial trends." },
                    { title: "Secure & Private", text: "Your financial data is encrypted and protected." },
                ].map((feature, index) => (
                    <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2">
                        <h3 className="text-xl font-semibold text-blue-100">{feature.title}</h3>
                        <p className="mt-2 text-blue-200">{feature.text}</p>
                    </div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="text-center py-16 bg-blue-800 bg-opacity-80">
                <h2 className="text-3xl font-bold">Start Your Financial Journey Today</h2>
                <p className="mt-2 text-blue-300">Join thousands of users making smarter investments.</p>
                <a href="/sign-up" className="mt-6 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-200 transition">
                    Sign Up Now
                </a>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 bg-blue-900">
                <p className="text-blue-300">&copy; 2025 ChatBot AI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
