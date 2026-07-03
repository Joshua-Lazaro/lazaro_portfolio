"use client";

export default function Recognitions() {
    const certs = [
    { id: 1, src: "/images/Lazaro-Innovision.jpg", alt: "Innovision Certificate of Participation" },
    { id: 2, src: "/images/EventFlow.png", alt: "EventFlow Certificate" },
    { id: 3, src: "/images/Input and Interaction.png", alt: "Input and Interaction Coursera Certificate"},
    { id: 4, src: "/images/Coursera.png", alt: "Introduction to User Experience Design Coursera Certificate" },
    { id: 5, src: "/images/C++Lab.png", alt: "C++ Lab Certificate" },
    { id: 6, src: "/images/workshop.png", alt: "CODE Workshop Certificate of Participation" },
    { id: 7, src:  "/images/Certiport.png", alt: "Certiport Certificate"},
    ];

    return (
    <div id="recognitions" className="min-h-screen w-full max-w-7xl py-16 px-8 fade-up">
  <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
    Achievements & Certifications
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
    {certs.map((item) => (
      <div
        key={item.id}
        className="flex flex-col items-center text-center max-w-sm 
                   bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 shadow-lg fade-up"
      >
        <img
          src={item.src}
          alt={item.alt}
          className="object-cover w-full h-56 rounded-lg shadow-md 
                     hover:scale-105 transition-transform duration-300 mb-4"
        />
        <p className="text-sm text-gray-200 font-semibold text-center">
          {item.alt}
        </p>
      </div>
    ))}
  </div>
</div>


    );
}