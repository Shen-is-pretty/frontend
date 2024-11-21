import React from "react";
import "./Education.css";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Systems",
    institution: "Naga College Foundation, Inc.",
    year: "2023 - Present",
    description: "Information Systems is an interdisciplinary course that focuses on the study, design, development, and management of systems that collect, process, and distribute information within organizations. It bridges the gap between business processes and technology, enabling organizations to make informed decisions, streamline operations, and achieve their goals efficiently.",
  },
  {
    id: 2,
    degree: "Senior High School",
    institution: "Ocampo National High School",
    year: "2021-2023",
    description: "STEM Strand",
  },
];

const EducationPage = () => {
  return (
    <div className="education-container">
      <h1>EDUCATION: </h1>
      <div className="education-list">
        {educationData.map((edu) => (
          <div key={edu.id} className="education-item">
            <h2>{edu.degree}</h2>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;