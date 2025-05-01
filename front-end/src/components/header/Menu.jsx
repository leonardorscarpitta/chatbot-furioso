"use client";

import { useState } from 'react';
import NavBar from './NavBar';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative">
      <button
        onClick={handleClick}
        className="cursor-pointer p-4 flex flex-col justify-center items-center"
        aria-label="Toggle menu"
      >
        {/* Top bar */}
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        {/* Middle bar */}
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        {/* Bottom bar */}
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <NavBar />
      )}
    </section>
  );
}
