import React from "react";
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import dev1 from "/src/assets/images/sejal.png";
import dev2 from "/src/assets/images/harshita.png";
import dev3 from "/src/assets/images/shivam pandey.jpg";
import dev4 from "/src/assets/team/unlock.jpg";
import dev5 from "/src/assets/team/Founder.png";
import dev6 from "/src/assets/images/ritesh.jpg";
const teamMembers = [

  {
    name: "Rahul  ",
    role: "Founder & CEO",
    image: dev5,
    department: "Developer",
  },
  {
    name: "Sejal ",
    role: "Opercation Manager",
    experience: "1.5+ Years Experience",
    image: dev1,
    department: "Developer",
  },
   {
    name: "Harshita ",
    role: "Full Stack Developer",
    experience: "1.5+ Years Experience",
    image: dev2,
    department: "Developer",
  },
   {
    name: "Ritesh ",
    role: "MERN Stack Developer",
    experience: "1 Year Experience",
    image: dev6,
    department: "Developer",
  },
  {
    name: "Shivam Kumar",
    role: "Digital Marketing",
    experience: "2+ Years Experience",
    image: dev3,
    department: "Marketing",
  },
  {
    name: "imran ",
    role: "Sales Executive Officer",
    experience: "5+ Years Experience",
    image: dev4,
    department: "Sales",
  },
  {
    name: "Rishabh",
    role: "App Developer",
    experience: "5+ Years Experience",
    image: dev4,
    department: "Developer",
  },
  {
    name: "Raj",
    role: "App Developer",
    experience: "3+ Years Experience",
    image: dev4,
    department: "Developer",
  },
  {
    name: "Amar",
    role: "Financial Analyst",
    experience: "5+ Years Experience",
    image: dev4,
    department: "Finance",
  },
];

const Team = () => {
  return (
<>
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0b1120] dark:via-[#111827] dark:to-[#1f2937] transition-colors duration-500">
      
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Meet Our Team
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mb-16">
          The experts behind BIMFROX success
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="w-28 h-28 mx-auto overflow-hidden rounded-full mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>

              <p className="text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                {member.role}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                {member.experience}
              </p>

              <p className="mt-4 text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 inline-block px-3 py-1 rounded-full">
                {member.department}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Team;
