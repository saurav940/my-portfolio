import React, { useState } from "react";

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
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-200 p-4 rounded-lg text-center shadow-lg cursor-pointer hover:bg-gray-300 transition-colors"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedProject(null)}
              className="float-right font-bold text-xl"
            >
              ×
            </button>
            
            <h3 className="font-semibold text-xl mb-2">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            
            <div className="text-left space-y-2">
              <p><span className="font-medium">Duration:</span> {selectedProject.details.duration}</p>
              <p><span className="font-medium">Tools used:</span> {selectedProject.details.tools}</p>
              <p><span className="font-medium">Role:</span> {selectedProject.details.role}</p>
              
              <h4 className="font-medium mt-4">Roles & Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {selectedProject.details.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              {selectedProject.description === "PROJECT : CSFB Mobile Banking" && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-medium mb-2">Key API Integrations:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>BillDesk:</strong> Tested bill payment flows including electricity, water, and other utility payments through the BillDesk payment gateway</li>
                    <li><strong>Ticketing Systems:</strong> Verified API integrations for movie and event ticket bookings through partner platforms</li>
                    <li><strong>ASBA:</strong> Validated IPO application process where funds remain blocked in the account until shares are allocated</li>
                    <li><strong>UPI:</strong> Tested UPI payment flows including collect request and instant money transfer features</li>
                  </ul>
                  <p className="mt-2"><strong>Platform:</strong> Available on both Android and iOS with consistent functionality across platforms</p>
                </div>
              )}
              
              <a 
                href={selectedProject.details.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;