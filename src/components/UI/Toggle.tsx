import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to toggle dark mode here (e.g., toggle CSS classes, change theme, etc.)
  };

  return (
    <div className="flex items-center justify-center mt-8">
      <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-gray-200 rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#f9deb3]"></div>
  <span className="ms-3 text-sm font-medium text-black opacity-100 ">AI Asssistant </span>
</label>
    </div>
  );
};

export default DarkModeToggle;
