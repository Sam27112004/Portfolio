import React from "react";
import backgroundImage from "../assets/japan-background.jpg";


const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="relative min-h-screen">
        {/* Text positioned using Tailwind utilities */}
        <div className="absolute top-1/4 left-3/4 transform -translate-x-3/4 -translate-y-1/4">
          <div className="flex items-start justify-end h-full">
            <h1 className="text-white text-4xl font-bold typewriter">
              Hello there ...It's Sudhakar...
            </h1>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
