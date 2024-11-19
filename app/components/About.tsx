import React from "react";
import Image from "next/image"; // Import Image component from next/image

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center py-32 px-6 space-x-0 md:space-x-12"
    >
      <div className="flex-shrink-0 mb-8 md:mb-0">
        <Image
          src="/pic.png"
          alt="About Me"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full mx-auto md:ml-10"
          width={384} // Width of the image
          height={384} // Height of the image
        />
      </div>

      <div className="text-center md:text-left max-w-lg">
        <h3 className="text-3xl md:text-5xl font-bold text-left">About Me</h3>

        <h4 className="text-2xl md:text-3xl font-semibold text-left mt-4">
          Frontend Developer!
        </h4>

        <div className="bg-green-800 text-white p-6 rounded-lg mt-4">
          <p className="text-black font-bold">
            I&apos;m Saad, a passionate frontend developer with a focus on creating
            beautiful and functional web applications. Experienced with Next.js,
            Tailwind CSS, and TypeScript, I bring digital experiences to life.
            Let&apos;s create something amazing!
          </p>
        </div>

        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ml-4 block">
          View CV
        </button>
      </div>
    </section>
  );
}