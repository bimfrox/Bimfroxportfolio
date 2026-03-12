import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Hours" },
  { value: 3, suffix: "x", label: "Average ROI" },
];

// 🔢 Counter Component
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsBar = () => {
  return (
    <div className="relative z-10 mt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          max-w-5xl mx-auto rounded-2xl
          bg-gradient-to-r from-[#0f172a] to-[#020617]
          border border-white/10 backdrop-blur
          grid grid-cols-2 md:grid-cols-4 gap-8
          py-10 text-center
        "
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2 text-xs sm:text-sm text-white/60 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsBar;
