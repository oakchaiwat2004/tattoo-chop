import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-black font-sans">
    <header className=" bg-slate-600 shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <div className="text-white text-2xl font-semibold">
          TATTOO SHOP
        </div>

        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-gray-400"
                : "text-gray-400 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-gray-400"
                : "text-gray-400 hover:text-white"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
    <main className="flex-1 p-8 text-white">{children}</main>
    <footer className="bg-gray-900 text-gray-500 py-4 text-center">
      <p>&copy; TATTOO SHOP 2025</p>
    </footer>
  </div>
);

export default Layout;
