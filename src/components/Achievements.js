import React from "react";
import backgroundImage from "../assets/japan-background.jpg";
const Achievements = () => {
  const achievements = [
    { title: "Award 1", description: "Won the best developer award in 2023" },
    { title: "Hackathon Winner", description: "Won the XYZ Hackathon in 2022" },
    {
      title: "Top Performer",
      description: "Recognized as top performer at ABC Company in 2021",
    },
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center bg-gray-50"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              {achievement.title}
            </h3>
            <p className="text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
