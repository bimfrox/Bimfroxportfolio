import React from "react";
import { motion } from "framer-motion";

const ServiceSection = ({ title, desc, bg, image }) => {
  return (
    <section className={`snap-start min-h-screen flex items-center ${bg}`}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-lg opacity-90 max-w-lg">
            {desc}
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default ServiceSection;
