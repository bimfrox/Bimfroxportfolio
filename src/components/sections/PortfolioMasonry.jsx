import React from "react";

const projects = [
  {
    title: "Man Power Website",
    category: "Man Power Website",
    image: "/projectsimage/project05.png",
  },
  {
    title: "Portfolio Website",
    category: "Portfolio Website",
    image: "/projectsimage/project01.jpg",
  },
  {
    title: "Corporate Business Site",
    category: "Business Website",
    image: "/projectsimage/project02.jpg",
  },
  {
    title: "Startup Landing Page",
    category: "Industrial Website",
    image: "/projectsimage/project03.jpeg",
  },
  {
    title: "Man Power Website",
    category: "Man Power Website",
    image: "/projectsimage/project04.jpeg",
  },
  {
    title: "Astrology Website",
    category: "Astrology Website",
    image: "/projectsimage/project09.jpeg",
  },
  {
    title: "Clothing Store",
    category: "E-commerce Website",
    image: "/projectsimage/project06.png",
  },
  {
    title: "Texttile Website",
    category: "Textile Website",
    image: "/projectsimage/project07.jpeg",
  },
  {
    title: "Loan Website",
    category: "Loan Website",
    image: "/projectsimage/project08.jpeg",
  },
  {
    title: "tavel Website",
    category: "Travel Website",
    image: "/projectsimage/project10.jpeg",
  },
  {
    title: "portfolio Website",
    category: "Portfolio Website",
    image: "/projectsimage/project11.png",
  },
];

const PortfolioMasonry = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400 mb-4">
          BIMFROX Portfolio
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold 
        text-gray-900 dark:text-white mb-16 max-w-4xl leading-tight">
          Helping Businesses Build A Powerful Digital Identity.
        </h2>

        {/* Masonry Layout */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group break-inside-avoid overflow-hidden rounded-2xl mb-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover 
                transition duration-500 ease-in-out 
                group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 
              opacity-0 group-hover:opacity-100 
              transition duration-500 flex items-end p-6 rounded-2xl">

                <div>
                  <p className="text-sm text-indigo-400 mb-1">
                    {project.category}
                  </p>

                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PortfolioMasonry;
