import Hero from "../components/sections/Hero.jsx";
import AboutAgency from "../components/sections/AboutAgency.jsx";
import Founder from "../components/sections/Founder.jsx";
import ServicesPreview from "../components/sections/ServicesPreview.jsx";
import CTA from "../components/sections/CTA.jsx";
import Footer from "../components/common/Footer.jsx";
import TrustedCompanies from "../components/sections/TrustedCompanies.jsx";

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
