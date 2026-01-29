import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTools, FaTimes, FaRobot, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MyResumAI",
      category: "Featured",
      description: "AI-powered resume & cover letter builder for India & Germany.",
      icon: <FaRobot className="text-4xl text-teal-400" />,
      details: {
        duration: "2024 - Present",
        tools: "React, OpenAI API, Tailwind CSS, Stripe",
        role: "Full Stack Developer",
        responsibilities: [
          "Developed an AI-driven engine to generate ATS-friendly resumes and cover letters tailored for specific job markets.",
          "Implemented real-time content suggestions and grammar checking using NLP.",
          "Integrated secure payment gateways and user authentication systems.",
          "Optimized the application for performance and SEO, achieving high Lighthouse scores."
        ],
        link: "https://www.myresumai.com/"
      }
    },
    {
      title: "Branch Portal (Assisted Module)",
      client: "Capital Small Finance Bank",
      description: "Comprehensive banking portal for branch operations.",
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      details: {
        duration: "January 2024 - Present",
        tools: "Manual Testing, Junit, Jmeter",
        role: "QA Engineer/Support Engineer",
        responsibilities: [
          "Executed comprehensive manual test cases ensuring 100% functional coverage.",
          "Documented mobile banking features and user interactions for enhanced UX.",
          "Tested integration of new modules into legacy banking systems."
        ],
        link: "https://www.capitalbank.co.in/"
      }
    },
    {
      title: "Internet Banking",
      client: "Capital Small Finance Bank",
      description: "Secure and robust internet banking platform.",
      icon: <FaLaptopCode className="text-4xl text-purple-400" />,
      details: {
        duration: "June 2022 - Present",
        tools: "Selenium, TestNG, PL/SQL",
        role: "QA Engineer",
        responsibilities: [
          "Designed and executed automated test scripts using Selenium Webdriver & Java.",
          "Managed bug tracking and reporting using ALM tools.",
          "Performed rigorous regression testing with TestNG framework."
        ],
        link: "https://netbanking.capitalbank.in/ReachIB/inetbanking/webindex"
      }
    },
    {
      title: "Mobile Banking App",
      client: "Capital Small Finance Bank",
      description: "Feature-rich mobile banking application for Android & iOS.",
      icon: <FaMobileAlt className="text-4xl text-green-400" />,
      details: {
        duration: "March 2023 - Present",
        tools: "Appium, Java, JIRA",
        role: "Mobile Test Engineer",
        responsibilities: [
          "Conducted extensive Mobile UI and Performance testing.",
          "Ensured cross-device compatibility across various Android and iOS versions.",
          "Validated critical banking transactions and security features."
        ],
        link: "https://play.google.com/store/apps/details?id=com.lcode.clabmbanking"
      }
    },
    {
      title: "CSFB Mobile Banking API",
      client: "Capital Small Finance Bank",
      description: "Backend API infrastructure for mobile banking services.",
      icon: <FaMobileAlt className="text-4xl text-orange-400" />,
      details: {
        duration: "March 2023 - Present",
        tools: "Appium, Postman, REST Assured",
        role: "Mobile Test Engineer (API Specialist)",
        responsibilities: [
          "Managed end-to-end API integrations for BillDesk, TripGain, and ASBA ticketing systems.",
          "Conducted rigorous vendor management to ensure seamless third-party service integration.",
          "Verified transaction flows and payload validation for critical banking operations.",
          "Conducted API security testing including authentication and encryption."
        ],
        link: "https://play.google.com/store/apps/details?id=com.lcode.clabmbanking"
      }
    },
    {
      title: "Core Banking System (CBS)",
      client: "Capital Small Finance Bank",
      description: "Core infrastructure managing banking operations.",
      icon: <FaTools className="text-4xl text-red-400" />,
      details: {
        duration: "Sep 2022 - Feb 2023",
        tools: "Postman, SoapUI, Jenkins",
        role: "Automation Engineer",
        responsibilities: [
          "Automated core banking workflows for reliability and speed.",
          "Documented system features and ensured comprehensive test coverage.",
          "Validated module integrations and data consistency."
        ],
        link: "https://www.capitalbank.co.in/"
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-dark-900 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Showcasing my work in AI, Banking, and Automation.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -10 }}
            className={`group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 ${project.title === 'MyResumAI' ? 'ring-1 ring-primary-500/50 bg-gradient-to-br from-white/5 to-primary-900/20' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  {project.icon}
                </div>
                {project.category && (
                  <span className="px-3 py-1 text-xs font-bold text-dark-900 bg-primary-400 rounded-full animate-pulse">
                    {project.category}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {project.title}
              </h3>
              {project.client && <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">{project.client}</p>}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                Read More <FaExternalLinkAlt className="ml-2 w-3 h-3" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/90 backdrop-blur-md flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-800 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <FaTimes />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-500/10 rounded-xl text-primary-400">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  {selectedProject.client && <p className="text-slate-400">{selectedProject.client}</p>}
                </div>
              </div>

              <div className="space-y-6 text-slate-300">
                <p className="text-lg text-slate-200 leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-dark-900/50 p-5 rounded-xl border border-white/5">
                  <div>
                    <span className="text-slate-500 text-sm block mb-1">Duration</span>
                    <span className="font-medium text-white">{selectedProject.details.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-sm block mb-1">Role</span>
                    <span className="font-medium text-white">{selectedProject.details.role}</span>
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <span className="text-slate-500 text-sm block mb-1">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.tools.split(',').map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-primary-300 border border-white/5">
                          {tool.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-primary-500 rounded-full"></span>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.details.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-400">
                        <span className="text-primary-500 mt-1.5 text-xs">●</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-2 border-t border-white/10">
                  <a
                    href={selectedProject.details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all w-full sm:w-auto hover:shadow-lg hover:shadow-primary-600/20 group"
                  >
                    Visit Project
                    <FaExternalLinkAlt className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;