import FounderImg from "../../assets/images/Founder.png";

const Founder = () => {
  return (
    <section className="relative py-24 bg-bg text-text">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
          Meet the{" "}
          <span
            className="
    bg-gradient-to-r
    from-[#A78BFA]
    via-[#7C3AED]
    to-[#22D3EE]
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]
  "
          >
            Founder
          </span>
        </h2>

        {/* SUB TEXT */}
        <p className="mt-4 text-muted max-w-2xl mx-auto text-center">
          The visionary mind behind BIMFROX, driving innovation, technology, and
          digital growth for modern businesses.
        </p>

        {/* CARD */}
        <div className="relative mt-16 flex justify-center group">
          {/* GRADIENT AURA SHADOW */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-12
              rounded-[40px]
              blur-[140px]
              bg-gradient-to-br
              from-[#7C3AED]/40
              via-[#22D3EE]/25
              to-transparent
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* FOUNDER CARD */}
          <div
            className="
              relative
              bg-card
              border border-border
              rounded-3xl
              p-6 sm:p-8
              max-w-xl
              w-full
              flex
              flex-col
              sm:flex-row
              gap-6
              items-center
              text-left
              backdrop-blur
              transition-all
              duration-500
              hover:translate-y-2
            "
          >
            {/* IMAGE */}
            <div className="relative shrink-0">
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  blur-xl
                  bg-gradient-to-br
                  from-[#7C3AED]/40
                  to-[#22D3EE]/40
                "
              />
              <img
                src={FounderImg}
                alt="BIMFROX Founder"
                className="
                  relative
                  w-28
                  h-28
                  rounded-full
                  object-cover
                  border
                  border-border
                "
              />
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-xl font-semibold">Rahul Chaurasiya</h3>

              <p className="text-sm text-primary font-medium mt-1">
                Founder & CEO – BIMFROX
              </p>

              <p className="text-sm text-muted mt-3 leading-relaxed">
                A business-focused digital leader helping startups, SMEs, and creators build credible and scalable digital foundations. Focused on long-term growth, transparency, and measurable business impact through structured digital systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
