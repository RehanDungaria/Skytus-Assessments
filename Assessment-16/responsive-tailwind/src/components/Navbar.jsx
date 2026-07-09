import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "Services", path: "#services" },
    { title: "About", path: "#about" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent"
          >
            SaaSify
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                className="relative text-sm font-semibold text-slate-300 transition duration-300 hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              className="rounded-xl px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300"
            >
              Login
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-white transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900 border-t border-slate-800 px-6 py-6 space-y-3">

          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              onClick={toggleMenu}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              {link.title}
            </a>
          ))}

          <Button
            variant="primary"
            className="w-full justify-center rounded-xl mt-4 bg-indigo-600 hover:bg-indigo-500"
          >
            Login
          </Button>

        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);