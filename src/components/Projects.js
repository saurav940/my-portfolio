import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Client : Capital Small Finance Bank",
      description: "PROJECT : Branch Portal (Assisted Module)",
      details: {
        duration: "January 2024 - till date",
        tools: "Manual Testing, Junit, Jmeter",
        role: "QA Engineer/Support Engineer",
        responsibilities: [
          "Involved in executing all Manual test cases and understood the test cases",
          "Proficient in documenting mobile banking features, ensuring comprehensive coverage of functionalities and user interactions for enhanced user experience",
          "Testing the integration of a new module into existing systems."
        ],
        link: "https://www.capitalbank.co.in/"
      }
    },
    {
      title: "Client : Capital Small Finance Bank",
      description: "PROJECT : Internet Banking",
      details: {
        duration: "June 2022 - till date",
        tools: "Selenium, TestNG, PL/SQL",
        role: "QA Engineer",
        responsibilities: [
          "Involved in executing all Manual test cases and understood the test cases before starting automation test scripts.",
          "Created test scripts, Using ALM tool to log bugs and tracked the bugs",
          "Develop the Automation code with Selenium Webdriver using java for Regression testing with TestNG framework."
        ],
        link: "https://netbanking.capitalbank.in/ReachIB/inetbanking/webindex"
      }
    },
    {
      title: "Client : Capital Small Finance Bank",
      description: "PROJECT : Mobile Banking Application",
      details: {
        duration: "March 2023 - Till Date",
        tools: "Appium, Java, JIRA",
        role: "Mobile Test Engineer",
        responsibilities: [
          "Mobile UI testing",
          "Performance testing",
          "Cross-device compatibility testing"
        ],
        link: "https://play.google.com/store/apps/details?id=com.lcode.clabmbanking&pcampaignid=web_share&pli=1"
      }
    },
    {
      title: "Client : Capital Small Finance Bank",
      description: "PROJECT : CSFB Mobile Banking",
      details: {
        duration: "March 2023 - Till Date",
        tools: "Appium, Postman, REST Assured, Charles Proxy",
        role: "Mobile Test Engineer (API Specialist)",
        responsibilities: [
          "Tested API integrations with third-party services including BillDesk (for bill payments), Ticketing systems, and ASBA (Application Supported by Blocked Amount) for IPO applications",
          "Verified end-to-end transaction flows through API interactions between mobile app and backend systems",
          "Validated request/response payloads for various banking operations",
          "Conducted security testing for API endpoints including authentication and encryption",
          "Performed compatibility testing across Android and iOS platforms",
          "Created automated test scripts for API regression testing"
        ],
        link: "https://play.google.com/store/apps/details?id=com.lcode.clabmbanking"
      }
    },
    {
      title: "Client : Capital Small Finance Bank",
      description: "PROJECT : Core Banking System (CBS)",
      details: {
        duration: "September 2022 - February 2023",
        tools: "Postman, SoapUI, Jenkins",
        role: "Automation Engineer",
        responsibilities: [
          "Involved in executing all Manual test cases and understood the test cases",
          "Proficient in documenting mobile banking features, ensuring comprehensive coverage of functionalities and user interactions for enhanced user experience",
          "Testing the integration of a new module into existing systems."
        ],
        link: "https://www.capitalbank.co.in/"
      }
    },
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-20 px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-white mb-12"
      >
        My Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            key={index}
            className="group relative bg-dark-800/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:bg-dark-800 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-primary-500/10"
            onClick={() => setSelectedProject(project)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-800 border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
            <p className="text-primary-400 mb-6 font-medium">{selectedProject.description}</p>

            <div className="space-y-4 text-gray-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-dark-900/50 p-4 rounded-xl">
                <p><span className="text-gray-500 text-sm block">Duration</span> <span className="font-medium text-white">{selectedProject.details.duration}</span></p>
                <p><span className="text-gray-500 text-sm block">Role</span> <span className="font-medium text-white">{selectedProject.details.role}</span></p>
                <p className="col-span-1 sm:col-span-2"><span className="text-gray-500 text-sm block">Tools used</span> <span className="font-medium text-white">{selectedProject.details.tools}</span></p>
              </div>

              <h4 className="font-bold text-white mt-6 mb-2">Roles & Responsibilities</h4>
              <ul className="space-y-2">
                {selectedProject.details.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {selectedProject.description === "PROJECT : CSFB Mobile Banking" && (
                <div className="mt-6 p-5 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                  <h4 className="font-bold text-blue-400 mb-3">Key API Integrations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><strong className="text-white min-w-[80px]">BillDesk:</strong> <span>Tested bill payment flows including electricity, water, and other utility payments through the BillDesk payment gateway</span></li>
                    <li className="flex items-start gap-2"><strong className="text-white min-w-[80px]">Ticketing:</strong> <span>Verified API integrations for movie and event ticket bookings through partner platforms</span></li>
                    <li className="flex items-start gap-2"><strong className="text-white min-w-[80px]">ASBA:</strong> <span>Validated IPO application process where funds remain blocked in the account until shares are allocated</span></li>
                    <li className="flex items-start gap-2"><strong className="text-white min-w-[80px]">UPI:</strong> <span>Tested UPI payment flows including collect request and instant money transfer features</span></li>
                  </ul>
                  <p className="mt-4 pt-4 border-t border-blue-500/10 text-sm"><strong className="text-blue-300">Platform:</strong> Available on both Android and iOS with consistent functionality across platforms</p>
                </div>
              )}

              <div className="pt-6 mt-6 border-t border-white/5">
                <a
                  href={selectedProject.details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all w-full sm:w-auto"
                >
                  Visit Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;