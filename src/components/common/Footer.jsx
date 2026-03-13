import { Link } from "react-router-dom";
import logo from "/src/assets/images/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="BIMFROX Logo"
            className="h-8 w-auto object-contain transition duration-300 hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.6)]"
          />
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          © {new Date().getFullYear()} BIMFROX. All Rights Reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/Policy" className="hover:text-white transition">
            Privacy Policy
          </Link>

          <Link to="/terms-and-conditions" className="hover:text-white transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
