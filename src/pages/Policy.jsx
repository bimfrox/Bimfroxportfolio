import React from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import dataSecurity from "../assets/images/data-security.jpg";
import whatsappImg from "../assets/images/whatsapp-communication.jpg";
import analyticsImg from "../assets/images/analytics-tracking.jpg";
import legalImg from "../assets/images/legal-protection.jpg";

const Policy = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-32 bg-gray-50 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-12">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy & Data Protection Policy
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Effective Date: {new Date().getFullYear()}
            </p>
          </div>

          {/* INTRO CARD */}
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg p-6 md:p-8 mb-14">
            <p className="leading-7 text-sm md:text-base">
              This Privacy Policy explains how <strong>BIMFROX</strong> collects,
              processes, stores, and protects user data across website development,
              subscription services, e-commerce platforms, web applications,
              mobile applications, and future digital solutions.
            </p>
          </div>

          {/* WHATSAPP SECTION */}
          <ImageSection
            image={whatsappImg}
            title="WhatsApp Communication"
            content="Our contact forms may redirect users to WhatsApp for faster communication. By submitting your contact details, you consent to being contacted via WhatsApp for inquiries and project discussions. WhatsApp is operated by Meta, and its own privacy policies apply."
          />

          {/* ANALYTICS SECTION (REVERSED) */}
          <ImageSectionReverse
            image={analyticsImg}
            title="Google Analytics & Tracking"
            content="We use Google Analytics to monitor website traffic, understand user behavior, and improve performance. Technical data such as IP address, device information, and browsing patterns may be collected strictly for analytical and improvement purposes."
          />

          {/* DATA SECURITY */}
          <ImageSection
            image={dataSecurity}
            title="Data Security"
            content="BIMFROX implements reasonable technical and organizational safeguards to protect user and client data from unauthorized access, misuse, or alteration. However, no digital infrastructure guarantees complete security. Clients are encouraged to maintain independent backups."
          />

          {/* DATA OWNERSHIP */}
          <ImageSectionReverse
            image={legalImg}
            title="Data Ownership & Legal Protection"
            content="Clients retain ownership of their business data, content, and customer information. BIMFROX retains ownership of proprietary systems, subscription infrastructure, internal frameworks, and technical architecture unless otherwise agreed in writing."
          />

          {/* DATA RETENTION BOX */}
          <div className="bg-indigo-100 dark:bg-indigo-900/30 border-l-4 border-indigo-600 p-6 rounded-2xl mb-14">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Data Retention & Access
            </h3>
            <p className="text-sm md:text-base leading-7 mb-3">
              BIMFROX retains data only for the duration required to fulfill
              service obligations and legal requirements.
            </p>
            <p className="text-sm md:text-base leading-7">
              In subscription-based services, access to hosted systems remains
              active only during the active subscription period. Post termination,
              data handling follows applicable service agreements.
            </p>
          </div>

          {/* POLICY UPDATE BOX */}
          <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-6 rounded-2xl mb-14">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Policy Updates
            </h3>
            <p className="text-sm md:text-base leading-7">
              <strong>BIMFROX reserves the right</strong> to update this Privacy
              Policy at any time to reflect service upgrades or legal requirements.
              Continued use of services after updates constitutes acceptance.
            </p>
          </div>

          {/* GOVERNING LAW */}
          <Section
            title="Governing Law & Jurisdiction"
            content="This policy is governed by the laws of India. Any disputes shall fall under the jurisdiction of Surat, Gujarat."
          />

          {/* CONTACT */}
          <Section
            title="Contact Information"
            content="For privacy-related queries, please contact BIMFROX at 104 Omkar Plaza, Jiva Road, Bhestan, Surat, Gujarat, India or email us at bimfrox@gmail.com."
          />

        </div>

        <Footer />
      </div>
    </>
  );
};

/* NORMAL SECTION */
const Section = ({ title, content }) => (
  <div className="mb-14">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
      {title}
    </h2>
    <p className="text-sm md:text-base leading-7">
      {content}
    </p>
  </div>
);

/* IMAGE LEFT */
const ImageSection = ({ image, title, content }) => (
  <div className="mb-16">
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
      <img
        src={image}
        alt={title}
        className="w-full max-h-72 object-cover rounded-2xl shadow-md"
      />
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm md:text-base leading-7">
          {content}
        </p>
      </div>
    </div>
  </div>
);

/* IMAGE RIGHT */
const ImageSectionReverse = ({ image, title, content }) => (
  <div className="mb-16">
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
      <div className="md:order-2">
        <img
          src={image}
          alt={title}
          className="w-full max-h-72 object-cover rounded-2xl shadow-md"
        />
      </div>
      <div className="md:order-1">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-sm md:text-base leading-7">
          {content}
        </p>
      </div>
    </div>
  </div>
);

export default Policy;