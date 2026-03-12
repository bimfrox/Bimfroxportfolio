import { motion } from "framer-motion";
import Floating from "../animations/Floating";
import StatsBar from "./StatsBar";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-bg text-text overflow-hidden
                        flex flex-col justify-center pt-32">

      {/* Floating background (hidden on very small screens) */}
      <div className="hidden sm:block">
        <Floating />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">

        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm
                     rounded-full bg-white/10 border border-white/10"
        >
          Business Growth Partner
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold leading-tight
          "
        >
          BIMFROX{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400
                           bg-clip-text text-transparent">
            Digital
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-sm sm:text-base text-muted
                     max-w-2xl mx-auto"
        >
          We build scalable digital systems that help businesses establish <b>credibility</b>, drive growth, and scale with confidence.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 rounded-full bg-white text-black font-medium">
            View Our Work →
          </button>

          <button className="px-6 py-3 rounded-full border border-white/20">
            Meet the Team
          </button>
        </motion.div>
      </div>

      {/* STATS */}
      <StatsBar />

      
    </section>
  );
};

export default Hero;
