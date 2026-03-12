import { NavLink } from "react-router-dom";
import { Mail } from "lucide-react";
import { Instagram, Facebook, Linkedin, Github, X } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/bimfrox/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61575257792498",
    icon: Facebook,
  },
  { label: "X", link: "https://x.com/bimfrox", icon: X },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/bimfrox/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    link: "https://github.com/bimfrox?tab=repositories",
    icon: Github,
  },
];

const CTA = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-bg text-text">
      {/* Gradient Aura */}
      <div
        className="pointer-events-none absolute inset-0
        bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),transparent_60%)]"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Ready to{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Level Up?
          </span>
        </h2>

        <p className="mt-6 text-muted max-w-2xl mx-auto">
          Consult your website, system, or digital growth needs with the BIMFROX
          team. Get a free consultation to discuss your project requirements.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <NavLink
            to="/contact"
            className="px-7 py-3 rounded-full bg-primary text-white font-semibold
                       hover:opacity-90 transition shadow-lg"
          >
            Book Free Consultation
          </NavLink>

          <a
            href="mailto:bimfrox@gmail.com"
            className="px-7 py-3 rounded-full border border-border
                       flex items-center gap-2 hover:bg-card transition"
          >
            <Mail size={18} />
            Send Email
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-14">
          <p className="text-xs tracking-widest text-muted mb-4">
            FOLLOW OUR JOURNEY
          </p>

          <div className="flex justify-center gap-4">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="
            w-11 h-11 rounded-full
            border border-border
            flex items-center justify-center
            text-muted
            hover:bg-primary hover:text-white
            transition-all duration-300
          "
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
