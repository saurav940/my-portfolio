import React from "react";

const projects = [
  { title: " Client : Capital Small Finance Bank", description: " PROJECT : Branch Portal (Assisted Module)" },
  { title: " Client : Capital Small Finance Bank", description: "PROJECT : Internet Banking" },
  { title: " Client : Capital Small Finance Bank", description: "PROJECT : Mobile Banking Application" },
  { title: " Client : Capital Small Finance Bank", description: "PROJECT : Core Banking System (CBS)" },
];

const Projects = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg text-center shadow-lg">
            <h3 className="font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
