import React from "react";    
import Navbar from "../components/common/Navbar.jsx";
import Footer from "../components/common/Footer.jsx";
import ServicesHero from "../components/sections/ServicesHero";
import ServiceSection from "../components/sections/ServiceSection";
import PortfolioMasonry from "../components/sections/PortfolioMasonry";
import webImg from "../assets/images/web.jpg";
import marketingImg from "../assets/images/marketing.jpg";
import brandingImg from "../assets/images/branding.jpg";
const services = [
  {
    title: "Web Development",
    desc: "We build high-performance, scalable websites and web applications that help businesses grow digitally and convert visitors into customers.",
    bg: "bg-black text-white",
    image: webImg,
  },
  {
    title: "Digital Marketing",
    desc: "From SEO to paid ads and social media growth, we create data-driven marketing systems that generate consistent leads and measurable results.",
    bg: "bg-yellow-400 text-black",
    image: marketingImg,
  },
  {
    title: "Brand Strategy",
    desc: "We craft powerful brand positioning, identity systems, and digital storytelling strategies that build authority and long-term impact.",
    bg: "bg-purple-400 text-white",
    image: brandingImg,
  },
];

const Services = () => {
  return (
    <>
    <Navbar />
      {/* HERO */}
      <ServicesHero />

      {/* SCROLL SERVICES */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            desc={service.desc}
            bg={service.bg}
            image={service.image}
          />
        ))}
      </div>

      {/* PORTFOLIO */}
      <PortfolioMasonry />
       <Footer />
    </>
  );
};

export default Services;
