import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="text-center py-32 px-6">
      <h3 className="text-4xl font-bold mb-8">My Skills</h3>
      <div className="max-w-full mx-auto mt-4 bg-gray-700 p-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-500 text-white p-6 rounded flex items-center justify-center">
            <FaReact className="text-4xl mr-4" />
            Next.js
          </div>
          <div className="bg-gray-500 text-white p-6 rounded flex items-center justify-center">
            <FaHtml5 className="text-4xl mr-4" />
            Tailwind CSS
          </div>
          <div className="bg-gray-500 text-white p-6 rounded flex items-center justify-center">
            <FaCss3Alt className="text-4xl mr-4" />
            TypeScript
          </div>
          <div className="bg-gray-500 text-white p-6 rounded flex items-center justify-center">
            <FaJs className="text-4xl mr-4" />
            JavaScript
          </div>
          <div className="bg-gray-500 text-white p-6 rounded flex items-center justify-center">
            <FaNodeJs className="text-4xl mr-4" />
            React
          </div>
          <div className="bg-gray-500 text-white p-6 rounded flex items-center justify-center">
            <FaGithub className="text-4xl mr-4" />
            HTML & CSS
          </div>
        </div>
      </div>
    </section>
  );
}
