import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";

const services = [
  "Web Development",
  "E-commerce Development",
  "Digital Marketing",
  "SEO Optimization",
  "Brand Strategy",
  "UI/UX Design",
  "Social Media Management",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100 dark:bg-neutral-900 p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-3 dark:text-white">
            Let’s Build Something Powerful 🚀
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Tell us about your idea. We usually respond within 24 hours.
          </p>

          <form className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <select
              name="service"
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="">Select Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg"
            >
              Send Message →
            </motion.button>

          </form>
        </motion.div>

        {/* RIGHT SIDE INFO */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          {/* Address */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Our Office
            </h3>

            <p className="text-gray-600 dark:text-gray-400">
              BIMFROX Digital Solutions <br />
              104 Omkar Plaza, Jiva Road, <br />
              Bhestan, Surat – 395023 <br />
              Gujarat, India
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              📧 bimfrox@gmail.com <br />
              📞 +91 84018 09966
            </p>
          </div>

          {/* Social Media */}
          <div className="bg-gray-100 dark:bg-neutral-900 p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold mb-6 dark:text-white">
              Connect With Us
            </h3>

            <div className="flex gap-6 text-2xl">

              <a
                href="https://www.instagram.com/bimfrox/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/bimfrox/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.youtube.com/@bimfrox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:scale-110 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://wa.me/918401809966"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:scale-110 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Follow us for insights on digital growth, branding strategies,
              and business transformation.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
