import React from "react";
import backgroundImage from "../assets/japan-background.jpg";
const Qualification = () => {
  const qualifications = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      year: "2020-2023",
    },
    {
      degree: "Certified Web Developer",
      institution: "ABC Institute",
      year: "2021",
    },
    {
      degree: "High School Diploma",
      institution: "DEF School",
      year: "2018-2020",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center bg-gray-50"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Qualifications</h2>
      <div className="space-y-6">
        {qualifications.map((qualification, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-100 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {qualification.degree}
            </h3>
            <p className="text-gray-700">{qualification.institution}</p>
            <p className="text-gray-500">{qualification.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
