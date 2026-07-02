"use client";

export default function Hero() {
    return (
        <div className="flex items-center space-x-20 justify-center w-full h-screen bg-zinc-50 dark:bg-black">

            <div className="flex flex-col mr-8">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">I am a passionate developer and designer.</p>
            </div>

            <div className="relative w-70 h-auto">
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