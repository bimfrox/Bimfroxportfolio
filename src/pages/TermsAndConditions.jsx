import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import paymentImg from "../assets/images/payment.jpg";
import ipImg from "../assets/images/intellectual-property.jpg";
import liabilityImg from "../assets/images/liability.jpg";
import terminationImg from "../assets/images/termination.jpg";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-32 bg-gray-50 dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-12">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Effective Date: {new Date().getFullYear()}
            </p>
          </div>

          {/* INTRO */}
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-lg p-6 md:p-8 mb-14">
            <p className="leading-7 text-sm md:text-base">
              These Terms & Conditions govern the services provided by{" "}
              <strong>BIMFROX</strong>. By accessing our website or engaging
              our services, you agree to maintain a professional and
              transparent working relationship under these terms.
            </p>
          </div>

          {/* SERVICE SECTION */}
          <Section
            title="Nature of Services"
            content="BIMFROX provides website development, subscription-based website services, e-commerce platforms, web applications, mobile applications, UI/UX design, and digital consulting. All services are delivered as per mutually agreed proposal or subscription plan."
          />

          <Section
            title="Service Scope"
            content="Work begins only after advance payment and written confirmation. The scope of work is strictly limited to the approved proposal. Any additional feature, redesign, or structural change will require separate quotation and approval."
          />

          {/* PAYMENT SECTION */}
          <ImageSection
            image={paymentImg}
            title="Payment Terms"
            content="For custom projects, a minimum 50% advance payment is required before work begins. Remaining payment must be cleared before final delivery. Subscription services remain active only while payments are up to date."
          />

          {/* IP SECTION */}
          <ImageSectionReverse
            image={ipImg}
            title="Intellectual Property"
            content="All source code, design files, and technical systems remain property of BIMFROX until full payment is received. After payment, the client receives usage rights as agreed in writing. Proprietary internal frameworks remain company property."
          />

          <Section
            title="Client Responsibilities"
            content="Clients must provide lawful content, timely approvals, and accurate information. Delays caused by the client may extend project timelines accordingly."
          />

          <Section
            title="Third-Party Integrations"
            content="Projects may include hosting providers, payment gateways, analytics tools, or APIs. BIMFROX is not responsible for downtime, pricing changes, or security issues arising from third-party services."
          />

          {/* LIABILITY */}
          <ImageSection
            image={liabilityImg}
            title="Limitation of Liability"
            content="BIMFROX shall not be liable for indirect or consequential damages, business losses, or revenue loss. Maximum liability shall not exceed the total amount paid for the specific service."
          />

          {/* TERMINATION */}
          <ImageSectionReverse
            image={terminationImg}
            title="Suspension & Termination"
            content="Services may be suspended in case of non-payment, misuse, or violation of agreement terms. No refund shall apply if termination is due to breach of policy."
          />

          {/* HIGHLIGHT BOX */}
          <div className="bg-indigo-100 dark:bg-indigo-900/30 border-l-4 border-indigo-600 p-6 rounded-xl mt-12 mb-12">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
              Amendments & Updates
            </h3>
            <p className="text-sm leading-6">
              <strong>BIMFROX reserves the right</strong> to modify these Terms
              at any time. Updated terms will be published on our website.
              Continued use of services constitutes acceptance of revised terms.
            </p>
          </div>

          {/* GOVERNING LAW */}
          <Section
            title="Governing Law & Jurisdiction"
            content="These Terms are governed by the laws of India. Any disputes shall fall under the jurisdiction of Surat, Gujarat."
          />

        </div>

        <Footer />
      </div>
    </>
  );
};

/* NORMAL TEXT SECTION */
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

/* IMAGE LEFT - MOBILE STACK */
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

/* IMAGE RIGHT - MOBILE STACK */
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

export default TermsAndConditions;