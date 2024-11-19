"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">M SAAD</h1>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="#home" className="hover:text-blue-400 text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-blue-400 text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-400 text-white">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400 text-white">
              Contact
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link href="#home" className="hover:text-blue-400 text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-blue-400 text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-400 text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-blue-400 text-white">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400 text-white">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
