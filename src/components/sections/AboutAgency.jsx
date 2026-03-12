import { Globe, BarChart3, Cpu } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Web & App Services",
    desc: "High-performance websites and applications built on modern technology to support scalability, security, and long-term business growth. Also includes subscription-based website solutions.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Services",
    desc: "SEO, paid advertising, and content-driven strategies focused on increasing visibility, generating quality leads, and strengthening brand trust.",
  },
  {
    icon: Cpu,
    title: "Technology & Product Services",
    desc: "In-house digital products, platform-based solutions, and technology consulting designed to simplify operations and enable sustainable digital growth.",
  },
];

const AboutAgency = () => {
  return (
    <section className="relative py-16 md:py-20 bg-bg text-text overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            More Than a Technology{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Partner
            </span>
          </h2>

          <p className="mt-6 text-muted max-w-xl text-sm md:text-base">
            BIMFROX is a technology-focused company building scalable digital
            systems that support real business growth.
          </p>

          <p className="mt-4 text-muted max-w-xl text-sm md:text-base">
            We work closely with startups, SMEs, and creators to design long-term
            digital infrastructures — combining strategy, technology, and execution —
            so businesses can build credibility, operate efficiently, and grow with measurable results.
          </p>

          {/* STATS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <div className="bg-card border border-border rounded-xl px-6 py-4 min-w-[140px]">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted">Years Experience</div>
            </div>

            <div className="bg-card border border-border rounded-xl px-6 py-4 min-w-[140px]">
              <div className="text-2xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted">Commitment</div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          {/* Soft gradient glow */}
          <div className="pointer-events-none absolute -inset-6 sm:-inset-10 rounded-[40px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl" />

          {/* CARD */}
          <div className="relative bg-card border border-border rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-lg">

            {/* INNER HIGHLIGHT */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            {/* CONTENT */}
            <div className="relative space-y-6">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 items-start p-4 rounded-xl transition hover:bg-muted/10"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-text">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;