import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-black font-sans">
    <header className="bg-gray-900 shadow">
      <nav className="container mx-auto flex justify-between items-center py-4">
        {/* ชื่อร้าน GUNDUM SHOP ที่มุมซ้าย */}
        <div className="text-white text-2xl font-semibold">
          GUNDUM SHOP
        </div>

        {/* เมนู */}
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
      <p>&copy; GUNDUM SHOP 2025</p>
    </footer>
  </div>
);

export default Layout;
