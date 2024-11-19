import React from "react";
import Image from "next/image"; // Import Image component from Next.js

export default function Projects() {
  return (
    <section id="projects" className="text-center py-28 px-6">
      <h3 className="text-5xl font-bold mb-8">My Projects</h3>

      <div className="max-w-full sm:max-w-lg mx-auto mt-4 bg-gray-700 p-4 rounded">
        <Image
          src="/ATM.jpg"
          alt="Project Image"
          width={640} // Specify width
          height={256} // Specify height
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p>
          ATM Simulator - A command-line based ATM simulator using TypeScript.
        </p>
        <p className="text-sm mt-2">
          This project allows users to perform actions like deposits,
          withdrawals, and balance checking.
        </p>
      </div>
    </section>
  );
}