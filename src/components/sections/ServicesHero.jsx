import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden
      bg-gradient-to-br 
      from-slate-50 via-white to-slate-100 
      dark:from-[#0b1120] dark:via-black dark:to-[#1e1b4b]
      text-gray-900 dark:text-white
      transition-colors duration-500"
    >

      {/* Glow Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.25),transparent_50%)]
        dark:bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),transparent_50%)]">
      </div>

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.15),transparent_50%)]
        dark:bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.25),transparent_50%)]">
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-8 text-center md:text-left">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          We Build Digital <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Growth Systems
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 max-w-xl mx-auto md:mx-0 
          text-gray-600 dark:text-gray-400 
          text-base sm:text-lg transition-colors duration-300">
          From powerful websites to strategic marketing,
          BIMFROX transforms businesses into scalable digital brands.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

          <button className="px-6 py-3 rounded-full 
            bg-indigo-600 hover:bg-indigo-500 
            text-white transition duration-300">
            Explore Services →
          </button>

          <button className="px-6 py-3 rounded-full 
            border border-gray-400 dark:border-gray-600 
            hover:border-indigo-500 
            transition duration-300">
            View Projects
          </button>

        </div>

      </div>
    </section>
  );
};

export default ServicesHero;
