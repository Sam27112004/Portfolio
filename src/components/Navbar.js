import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-sm p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-800 text-2xl font-bold">My Portfolio</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:from-indigo-400 hover:to-purple-400 transition duration-300 ease-in-out"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:from-indigo-400 hover:to-purple-400 transition duration-300 ease-in-out"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:from-indigo-400 hover:to-purple-400 transition duration-300 ease-in-out"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:from-indigo-400 hover:to-purple-400 transition duration-300 ease-in-out"
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:from-indigo-400 hover:to-purple-400 transition duration-300 ease-in-out"
            }
          >
            Achievements
          </NavLink>
          <NavLink
            to="/qualification"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:from-indigo-400 hover:to-purple-400 transition duration-300 ease-in-out"
            }
          >
            Qualification
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded"
                : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded hover:from-indigo-400 hover:to-purple-400 transition duration-300 ease-in-out"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
