import { motion } from "framer-motion";

const items = [
  { id: "hash", text: "#", x: "10%", y: "25%", size: "text-5xl" },
  { id: "code", text: "</>", x: "80%", y: "20%", size: "text-5xl" },
  { id: "globe1", text: "🌐", x: "85%", y: "60%", size: "text-4xl" },
  { id: "star", text: "*", x: "25%", y: "60%", size: "text-4xl" },
  { id: "chip1", text: "⌬", x: "15%", y: "70%", size: "text-4xl" },
  { id: "stack", text: "≡", x: "40%", y: "85%", size: "text-3xl" },
  { id: "chip2", text: "⌬", x: "95%", y: "50%", size: "text-4xl" },
];

const Floating = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* FLOATING SYMBOLS DESKTOP */}
      {items.map((item, index) => (
        <motion.div
          key={`${item.id}-${index}`}  // 🔥 unique key
          className={`
            absolute select-none font-bold
            text-black/10 dark:text-white/10
            ${item.size}
            hidden sm:block
          `}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* MOBILE FLOATING (LIGHT & SIMPLE) */}
      <motion.div
        key="mobile-hash"
        className="absolute top-1/4 left-6 text-3xl text-black/10 dark:text-white/10 sm:hidden"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        #
      </motion.div>

      <motion.div
        key="mobile-code"
        className="absolute bottom-1/4 right-6 text-3xl text-black/10 dark:text-white/10 sm:hidden"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        {"</>"}
      </motion.div>

      {/* SOFT GRADIENT GLOW */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-purple-500/10
          via-transparent
          to-cyan-500/10
        "
      />
    </div>
  );
};

export default Floating;