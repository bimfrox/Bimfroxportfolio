import { X } from "lucide-react";

const ServiceDetailModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div className="
        relative max-w-4xl w-full mx-4 rounded-3xl overflow-hidden
        bg-gradient-to-br from-slate-100 to-white
        dark:from-[#0b1220] dark:to-[#020617]
        border border-black/10 dark:border-white/10
        shadow-2xl
      ">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-black/10 dark:border-white/10">
          <h3 className="text-lg font-semibold">
            {service.title}
          </h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 dark:text-white/70" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 grid md:grid-cols-2 gap-8">
          <img
            src={service.image}
            alt={service.title}
            className="rounded-xl object-cover"
          />

          <div>
            <p className="text-gray-700 dark:text-white/70 mb-4">
              {service.fullDesc}
            </p>

            <h4 className="font-semibold mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full
                    bg-black/5 dark:bg-white/5
                    border border-black/10 dark:border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
