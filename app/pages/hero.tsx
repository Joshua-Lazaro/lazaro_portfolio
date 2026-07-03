"use client";

import Particles from "../components/particles";

export default function Hero() {
    return (
        <div className="flex items-center gap-x-20 justify-center w-full h-screen pt-24">
            
            {/* Background layer */}
            <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
                <Particles
                particleColors={["#ffffff"]}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={false}
                alphaParticles={true}
                disableRotation={true}
                />
            </div>
            <div style={{position: 'relative', zIndex: 1}} className="flex flex-col mr-8">
                <p className="text-4xl text-gray-800 dark:text-white mb-4">Hello I'm</p>
                <h1 className="text-6xl font-extrabold text-blue-500 mb-4">Joshua Benedict Lazaro</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">BS Computer Science 2nd Year Student</p>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">I think we should let animals vote</h2>
                
                {/* Buttons */}
                <div className="flex space-x-6">
                    <button className="flex items-center px-6 py-3 border border-gray-400 rounded-full text-white hover:bg-gray-800 transition">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                    Get to Know Me
                    </button>

                    <button className="flex items-center px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-red-800 transition">
                    See My Projects →
                    </button>
                </div>
            </div>

            <div className="relative w-72 h-auto">
                <img
                src="/images/joshua.jpg"
                alt="Hero Image"
                className="w-80 h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
            </div>
        </div>
    );
}