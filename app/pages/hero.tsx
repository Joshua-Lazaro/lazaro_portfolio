"use client";

import Particles from "../components/particles";

export default function Hero() {
    return (
        <div id="hero" className="flex flex-col md:flex-row items-center md:items-center justify-center w-full min-h-screen gap-4 md:gap-8 lg:gap-20 px-4 py-8 md:py-0"> {/*pt-24*/}
            
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
            <div style={{position: 'relative', zIndex: 1}} className="flex flex-col md:mr-8 fade-up max-w-2xl mt-20">
                <p className="text-2xl sm:text-3xl md:text-4xl text-gray-800 dark:text-white mb-2 md:mb-4">Hello I'm</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 mb-2 md:mb-4">Joshua Benedict Lazaro</h1>
                <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-300 mb-4 md:mb-8">BS Computer Science 2nd Year Student</p>
                <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 md:mb-8">Technology has the power to take us to space, what else can it do?</h2>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
                    <button className="flex items-center justify-center px-4 sm:px-6 py-2 md:py-3 border border-gray-400 rounded-full text-white hover:bg-gray-800 transition text-sm sm:text-base">
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

                    <a
                    href="#projects"
                    className="flex items-center justify-center px-4 sm:px-6 py-2 md:py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition text-sm sm:text-base"
                    >
                    See My Projects →
                    </a>
                </div>
            </div>

            <div className="relative w-48 sm:w-56 md:w-72 h-auto fade-up flex-shrink-0">
                <img
                src="/images/joshua.jpg"
                alt="Hero Image"
                className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
            </div>
        </div>
    );
}