"use client";

export default function Projects() {
    const projects = [
        { id: 1, title: "CS Bingo", description: "A fun twist on the classic game of bingo, tailored for computer science students.", src: "/images/projects/cs-bingo.png", href: "https://cs-bingo.vercel.app", alt: "Project 1" },
        { id: 2, title: "LASA", description: "An AI-powered platform for managing your cookbook and minimize food waste with AI-driven recipe recommendations tailored entirely to the ingredients you already have on hand.", src: "/images/projects/lasa.png", href: "https://lasa-three.vercel.app", alt: "Project 2" },
        { id: 3, title: "Face Pong", description: "An innovative take on the classic Pong game, using Mediapipe and OpenCV.", src: "/images/projects/face-pong.png", href: "https://drive.google.com/drive/folders/1Qel1PgzDub0gbqYNwBrc8RS5JEeHfRtj?usp=sharing", alt: "Project 3" },
    ];

    const archivumProject = [
        { id: 1, src: "/images/archivum/archivum-1.png", alt: "Archivum Landing Page"},
        { id: 2, src: "/images/archivum/archivum-2.png", alt: "Archivum Login Page" },
        { id: 3, src: "/images/archivum/archivum-3.png", alt: "Archivum Dashboard" },
        { id: 4, src: "/images/archivum/archivum-4.png", alt: "Archivum Projects Page" },
        { id: 5, src: "/images/archivum/archivum-5.png", alt: "Archivum Keyword & RRL Feature" },
    ];

    const linksProjects = [
        { id: 1, label: "Visit Archivum", href: "https://archivum-portal.duckdns.org" },
        { id: 2, label: "View Figma Design", href: "https://www.figma.com/design/kbExXx5dtC8iBo0UnoOwGE/ARCHIVUM?node-id=0-1&p=f" },
        { id: 3, label: "View GitHub Repository", href: "https://github.com/yourusername/archivum" },
    ];

    return (
        <div className="min-h-screen w-full px-8 flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-center text-gray-100 mb-12">
                Projects
            </h1>

            {/* Archivum Section */}
            <div className="w-full max-w-7xl text-left mb-16 bg-gray-900/40 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-700/30">
                <p className="text-lg font-semibold text-gray-300 mb-2">Final Project</p>
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                    Archivum: A Centralized Web-Based Student Research Platform
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    A comprehensive research project management platform that streamlines collaboration between students and advisers throughout the entire research lifecycle. The system centralizes project tracking, defense scheduling, document management, contextual commenting, and review requests while providing integrated tools such as AI-powered meeting transcription, RRL cross-referencing, rubric-based evaluations, notifications, and an academic event calendar.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                    {linksProjects.map((link) => (
                    <a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition-colors duration-300"
                    >
                        {link.label}
                    </a>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {archivumProject.map((item) => (
                    <img
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    />
                    ))}
                </div>
            </div>

            {/* Featured Projects */}
            <div className="w-full max-w-7xl text-left mb-16 bg-gray-900/40 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-700/30">
                <h2 className="text-4xl font-bold text-white mb-10">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {projects.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-center max-w-sm 
                                        bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 shadow-lg"
                        >
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-56 flex items-center justify-center overflow-hidden 
                                        rounded-lg shadow-md mb-4"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                />
                            </a>
                            <div className="h-32 flex flex-col justify-start">
                                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}