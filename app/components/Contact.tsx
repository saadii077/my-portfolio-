import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
            <h3 className="text-5xl font-bold mb-8">Contact Me</h3>
            <form className="w-full max-w-lg bg-gray-700 p-8 rounded-lg space-y-6">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Message"
                    className="w-full p-4 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                ></textarea>
                <button className="w-full sm:w-auto bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors">
                    Submit
                </button>
            </form>
        </section>
    );
}