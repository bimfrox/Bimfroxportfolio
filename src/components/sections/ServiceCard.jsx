const ServiceCard = ({ service, onClick }) => {
  return (
    <div
      onClick={() => onClick(service)}
      className="
        cursor-pointer group relative rounded-3xl overflow-hidden
        bg-gradient-to-br from-slate-900 via-slate-950 to-black
        dark:from-[#0b1220] dark:via-[#020617] dark:to-[#020617]
        border border-black/10 dark:border-white/10
        transition-all duration-500 hover:-translate-y-3
      "
    >
      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full
          bg-black/60 text-white border border-white/10">
          {service.tag}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col h-[220px]">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 dark:text-white/70">
          {service.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {service.chips.map((chip) => (
            <span
              key={chip}
              className="
                text-xs px-3 py-1 rounded-full
                bg-black/5 dark:bg-white/5
                border border-black/10 dark:border-white/10
              "
            >
              {chip}
            </span>
          ))}
        </div>

        <span className="mt-auto text-sm font-medium text-violet-500">
          View Details →
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
