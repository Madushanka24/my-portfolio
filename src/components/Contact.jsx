import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",    // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"      // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess("Failed to send message.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 text-3xl mb-8">
        <a href="madushanka20021224@gmail.com" className="hover:text-pink-500">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/madushanka-sandaruwan-590297275/" target="_blank" className="hover:text-pink-500">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Madushanka24" target="_blank" className="hover:text-pink-500">
          <FaGithub />
        </a>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 bg-gray-800 p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 transition-colors p-3 rounded-md font-semibold"
        >
          Send Message
        </button>
      </form>

      {/* Success Message */}
      {success && <p className="mt-4 text-green-400">{success}</p>}
    </motion.section>
  );
};
