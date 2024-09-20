import React from "react";
import backgroundImage from "../assets/japan-background.jpg";
const Experience = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center bg-gray-50"
    style={{
      backgroundImage: `url(${backgroundImage})`,
    }}
    >
      <h2 className="text-4xl font-bold text-center">My Experience</h2>
      <div className="mt-10 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Job Title 1</h3>
          <p className="text-gray-700">Company Name - Jan 2020 to Dec 2021</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Job Title 2</h3>
          <p className="text-gray-700">Company Name - Jan 2022 to Present</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
