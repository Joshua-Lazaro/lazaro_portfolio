"use client";

export default function Recognitions() {
    const certs = [
    { id: 1, src: "/images/Lazaro-Innovision.jpg", alt: "Certificate 1" },
    { id: 2, src: "/images/EventFlow.png", alt: "Certificate 2" },
    { id: 3, src: "/images/Certiport.png", alt: "Certificate 3" },
    { id: 4, src: "/images/Coursera.png", alt: "Certificate 4" },
    { id: 5, src: "/images/C++ Lab.png", alt: "Certificate 5" },
    ];

    return (
    <div className="min-h-screen w-full py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Certificates collected along the way
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {certs.map((item) => (
            <div
                key={item.id}
                className="rounded-xl shadow-lg p-4 flex flex-col items-center w-full max-w-sm"
            >
                <img
                src={item.src}
                alt={item.alt}
                className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <p className="mt-3 text-sm text-white font-semibold text-center">
                {item.alt}
                </p>
            </div>
            ))}
        </div>
    </div>
    );
}