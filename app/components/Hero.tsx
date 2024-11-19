import React from "react";
import Image from "next/image"; // Import Image from next/image

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between py-24 px-6"
    >
      <div className="text-left max-w-lg">
        <h2 className="text-4xl font-bold">Hello, I&apos;m Muhammad Saad</h2>
        <p className="text-xl my-4">Frontend Developer</p>

        <div className="bg-green-800 p-4 rounded">
          <p className="text-black font-bold">
            I&apos;m Saad, a front-end developer passionate about building beautiful,
            functional websites with Next.js, Tailwind CSS, and TypeScript.
            Let&apos;s create something amazing!
          </p>
        </div>

        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Download CV
        </button>
      </div>

      <div className="flex-shrink-0 mt-8 md:mt-0 md:transform md:-translate-x-4">
        <Image
          src="/pic.png"
          alt="Your Name"
          width={384} // specify width
          height={400} // specify height
          className="object-cover rounded-full md:rounded-lg"
        />
      </div>
    </section>
  );
}