"use client";

import PillNav from "../components/pill-nav";
import { useState } from "react";

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-center bg-[#111] px-6 py-6">
      <div className="flex items-center space-x-30 rounded-full">
        <img src="/images/logo-draft.png" alt="Description" className="w-10 h-10 rounded-full" />
        <PillNav />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
          onClick={toggleDarkMode}
        >
          Dark Mode
        </button>
      </div>
  </nav>

  );
}