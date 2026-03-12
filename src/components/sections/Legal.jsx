import React, { useState } from "react";

const Legal = () => {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          BIMFROX Legal Policies
        </h1>

        <div className="bg-indigo-50 p-4 rounded-lg mb-8 text-sm">
          <p><strong>Company:</strong> BIMFROX</p>
          <p><strong>Address:</strong> 104 Omkar Plaza, Jiva Road, Bhestan, Surat, Gujarat, India</p>
          <p><strong>Email:</strong> bimfrox@gmail.com</p>
          <p><strong>Effective Date:</strong> [Insert Date]</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b pb-3">
          <button
            onClick={() => setActiveTab("terms")}
            className={`pb-2 ${activeTab === "terms" ? "border-b-2 border-indigo-600 font-semibold" : ""}`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`pb-2 ${activeTab === "privacy" ? "border-b-2 border-indigo-600 font-semibold" : ""}`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab("refund")}
            className={`pb-2 ${activeTab === "refund" ? "border-b-2 border-indigo-600 font-semibold" : ""}`}
          >
            Refund Policy
          </button>
        </div>

        {/* Terms */}
        {activeTab === "terms" && (
          <div className="space-y-6 text-sm leading-6">
            <h2 className="text-xl font-semibold">1. Terms & Conditions</h2>

            <p>
              By accessing our website or using our services, you agree to comply
              with these Terms & Conditions.
            </p>

            <h3 className="font-semibold">Services</h3>
            <ul className="list-disc pl-6">
              <li>Website Development</li>
              <li>E-commerce Development</li>
              <li>UI/UX Design</li>
              <li>Social Media Branding</li>
              <li>Domain & Hosting Setup</li>
              <li>Digital Presence Strategy</li>
            </ul>

            <h3 className="font-semibold">Payments</h3>
            <ul className="list-disc pl-6">
              <li>Advance payment required before work begins.</li>
              <li>All setup fees are non-refundable.</li>
              <li>Delay beyond 7 days may result in suspension.</li>
              <li>Delay beyond 15 days may result in termination.</li>
              <li>GST applicable as per Indian law.</li>
            </ul>

            <h3 className="font-semibold">Intellectual Property</h3>
            <p>
              All design files and source code remain property of BIMFROX until
              full payment is received. We reserve the right to showcase
              completed work in our portfolio.
            </p>

            <h3 className="font-semibold">Limitation of Liability</h3>
            <p>
              BIMFROX shall not be liable for business losses, indirect damages,
              or third-party failures.
            </p>

            <h3 className="font-semibold">Jurisdiction</h3>
            <p>All disputes fall under Surat, Gujarat jurisdiction.</p>
          </div>
        )}

        {/* Privacy */}
        {activeTab === "privacy" && (
          <div className="space-y-6 text-sm leading-6">
            <h2 className="text-xl font-semibold">2. Privacy Policy</h2>

            <p>
              BIMFROX respects your privacy and is committed to protecting your
              personal information.
            </p>

            <h3 className="font-semibold">Information We Collect</h3>
            <ul className="list-disc pl-6">
              <li>Name, email, phone number</li>
              <li>Business information</li>
              <li>Website usage data (analytics)</li>
            </ul>

            <h3 className="font-semibold">How We Use Information</h3>
            <ul className="list-disc pl-6">
              <li>To provide services</li>
              <li>To communicate project updates</li>
              <li>To improve service quality</li>
            </ul>

            <h3 className="font-semibold">Data Security</h3>
            <p>
              We follow reasonable security practices but cannot guarantee
              complete security. Clients should maintain backups.
            </p>
          </div>
        )}

        {/* Refund */}
        {activeTab === "refund" && (
          <div className="space-y-6 text-sm leading-6">
            <h2 className="text-xl font-semibold">3. Refund & Cancellation Policy</h2>

            <h3 className="font-semibold">Project-Based Services</h3>
            <ul className="list-disc pl-6">
              <li>Advance payments are non-refundable.</li>
              <li>No refunds once work has started.</li>
            </ul>

            <h3 className="font-semibold">Subscription Services</h3>
            <ul className="list-disc pl-6">
              <li>Minimum commitment period applies.</li>
              <li>Monthly subscription fees are non-refundable.</li>
              <li>Non-payment may result in suspension.</li>
            </ul>

            <h3 className="font-semibold">Service Termination</h3>
            <p>
              BIMFROX reserves the right to suspend or terminate services in
              case of policy violations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Legal;
