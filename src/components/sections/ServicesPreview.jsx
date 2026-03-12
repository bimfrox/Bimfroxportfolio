import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceDetailModal from "../modals/ServiceDetailModal";

const services = [
  {
    tag: "Operational System",
    title: "Autogarage Management",
    desc: "Streamlined inventory, billing, and customer management.",
    fullDesc:
      "Comprehensive system for auto repair shops with inventory control, billing, and customer management features.",
    chips: ["Inventory", "Billing", "Customer Management"],
    tech: ["React", "Node.js", "MongoDB"],
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1772018439/AutoGarage_gsbnnm.png",
  },
  {
    tag: "Digital Presence",
    title: "Company Profile & Lead Source",
    desc: "Dynamic company profile with lead generation and CRM integration.",
    fullDesc:
      "Complete company profile with lead generation, CRM integration, and marketing automation.",
    chips: ["Company Profile", "Lead Generation", "CRM Integration"],
    tech: ["React", "Node.js", "Firebase"],
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1772018704/samrudhiinfra_rslprb.png",
  },
  {
    tag: "Fashion Ecommerce",
    title: "POS & Inventory System",
    desc: "Complete point-of-sale and inventory management solution.",
    fullDesc:
      "Comprehensive POS and inventory management system for retail businesses.",
    chips: ["POS", "Inventory Management", "Sales Tracking"],
    tech: ["React", "Node.js", "MySQL"],
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1772018936/project06_i06r3j.png",
  },
];

const ServicesPreview = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Core{" "}
            <span className="text-violet-600 dark:text-violet-400">
              Capabilities
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
            Systems designed to scale businesses with technology & automation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="
                bg-white dark:bg-[#0f172a]
                border border-gray-200 dark:border-white/10
                rounded-3xl shadow-md hover:shadow-xl
                transition-all duration-300
              "
            >
              <ServiceCard service={s} onClick={setSelected} />
            </div>
          ))}
        </div>

        <ServiceDetailModal
          service={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
};

export default ServicesPreview;