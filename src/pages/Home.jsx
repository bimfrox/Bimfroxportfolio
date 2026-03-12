import Hero from "../components/sections/Hero";
import AboutAgency from "../components/sections/AboutAgency";
import Founder from "../components/sections/Founder";
import ServicesPreview from "../components/sections/ServicesPreview";
import CTA from "../components/sections/CTA.jsx";
import Footer from "../components/common/Footer.jsx";
import TrustedCompanies from "../components/sections/TrustedCompanies";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutAgency />
      <Founder />
      <ServicesPreview />
      <TrustedCompanies />
      {/* CTA + FOOTER */}
      <CTA />

      <Footer />
    </main>
  );
};

export default Home;
