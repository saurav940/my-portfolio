import React from "react";
import { useSelector } from "react-redux";

const Experience = () => {
  const experience = useSelector((state) => state.experience);

  return (
    <div>
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index}>
          <h3>{job.company}</h3>
          <p>{job.role} ({job.duration})</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
