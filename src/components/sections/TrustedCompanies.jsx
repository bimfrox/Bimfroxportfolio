import React from "react";

import logo1 from "../../assets/images/5.png";
import logo2 from "../../assets/images/4.png";
import logo3 from "../../assets/images/2.png";
import logo4 from "../../assets/images/3.png";
import logo5 from "../../assets/images/1.png";

const companies = [
  { name: "Client One", logo: logo1 },
  { name: "Client Two", logo: logo2 },
  { name: "Client Three", logo: logo3 },
  { name: "Client Four", logo: logo4 },
  { name: "Client Five", logo: logo5 },
];

const TrustedCompanies = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br 
from-slate-50 via-white to-slate-100 
dark:from-[#0b1120] dark:via-[#111827] dark:to-[#1f2937] 
transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="uppercase tracking-widest text-sm mb-12 text-gray-400 dark:text-gray-500">
          Trusted by Forward-Thinking Companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {companies.map((company, index) => (
            <div key={index} className="w-24 h-24 overflow-hidden">
              <img
                src={company.logo}
                alt={company.name}
                className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
