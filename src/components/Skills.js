import React from "react";
import backgroundImage from "../assets/japan-background.jpg";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Tailwind CSS",
  ];

  return (
    
    <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center bg-gray-50"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
      <h2 className="text-4xl font-bold mb-10">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg shadow-lg transform hover:scale-110 transition duration-300 ease-in-out bg-white"
          >
            <p className="text-xl font-semibold text-gray-800">{skill}</p>
            <h1> hello its skill page</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
