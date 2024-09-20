import React from "react";
import backgroundImage from "../assets/japan-background.jpg";

const Projects = () => {
  const projectData = [
    { title: "Project 1", description: "Description for project 1" },
    { title: "Project 2", description: "Description for project 2" },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center bg-gray-50"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
