import React, { useEffect, useState } from "react";

const THEMES = [
  "Default","light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
  "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
  "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
  "night", "coffee", "winter", "dim", "nord", "sunset",
];

const Preferences = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-base-100 text-base-content p-8">
      <h1 className="text-3xl font-bold mb-4">Preferences</h1>
      <p className="mb-6">Select a theme for your chatbot application:</p>

      {/* Theme Selection Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {THEMES.map((t) => (
          <button
            key={t}
            className={`
              group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
              ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
            `}
            onClick={() => setTheme(t)}
          >
            {/* Color Preview */}
            <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
              <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                <div className="rounded bg-primary"></div>
                <div className="rounded bg-secondary"></div>
                <div className="rounded bg-accent"></div>
                <div className="rounded bg-neutral"></div>
              </div>
            </div>

            {/* Theme Name */}
            <span className="text-[11px] font-medium truncate w-full text-center">
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Back Button */}
      <a href="/" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-primary-focus transition">
        Back to Home
      </a>
    </div>
  );
};

export default Preferences;
