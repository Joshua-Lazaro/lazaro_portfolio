"use client";

import PillNav from "../components/pill-nav";
import { useState, useEffect } from "react";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 z-50 w-full flex items-center justify-center border-b border-gray-600 px-6 py-6 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className="flex items-center space-x-30 rounded-full">
        {/* <img src="/images/logo-draft.png" alt="Description" className="w-10 h-10 rounded-full" /> */}
        <div className="flex items-center space-x-8">
          <a href="#hero" className="text-gray-800 dark:text-white hover:text-blue-500 transition">Home</a>
          <a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-500 transition">Projects</a>
          <a href="#recognitions" className="text-gray-800 dark:text-white hover:text-blue-500 transition">Recognitions</a>
        </div>
      </div>
  </nav>

  );
}