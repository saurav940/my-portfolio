import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", form);
    alert("Thank you for your message! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-24 px-4 sm:px-6 lg:px-8 pb-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-4">Get in Touch</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss automated testing strategies? I'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-dark-800/50 backdrop-blur-sm border border-white/5 rounded-3xl p-6 sm:p-10">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  value={form.name}
                  className="w-full p-3 bg-dark-900 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  value={form.email}
                  className="w-full p-3 bg-dark-900 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="How can I help you?"
                  value={form.message}
                  rows="5"
                  className="w-full p-3 bg-dark-900 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-primary-600/30"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full flex flex-col justify-center space-y-8 lg:pl-12 border-t lg:border-t-0 lg:border-l border-white/5 pt-10 lg:pt-0"
          >
            <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
              <div className="flex items-center">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:sauravkarda1997@gmail.com" className="text-white hover:text-primary-400 transition-colors font-medium">
                    sauravkarda1997@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
              <div className="flex items-center">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/saurav-kumar-9528161a0/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors font-medium">
                    Saurav Kumar
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
              <div className="flex items-center">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a href="https://github.com/saurav940" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors font-medium">
                    saurav940
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
              <div className="flex items-center">
                <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+917696620197" className="text-white hover:text-primary-400 transition-colors font-medium">
                    +91 7696620197
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
              <div className="flex items-center">
                <div className="p-3 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <a href="https://wa.me/917696620197" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors font-medium">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;