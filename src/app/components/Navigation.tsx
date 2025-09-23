"use client";
import React, { useState } from "react";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-white leading-none">
              <img
                src="/images/logoimg.png"
                alt="ARSU Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="px-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="#clients"
              onClick={(e) => handleNavClick(e, 'clients')}
              className="px-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Clients
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="px-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="px-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="px-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-2 text-white hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="block py-3 px-2 text-yellow-400 hover:bg-slate-700/50 rounded transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#clients"
                onClick={(e) => handleNavClick(e, 'clients')}
                className="block py-3 px-2 text-white hover:text-yellow-400 hover:bg-slate-700/50 rounded transition-colors duration-200"
              >
                Clients
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="block py-3 px-2 text-white hover:text-yellow-400 hover:bg-slate-700/50 rounded transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="block py-3 px-2 text-white hover:text-yellow-400 hover:bg-slate-700/50 rounded transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="block py-3 px-2 text-white hover:text-yellow-400 hover:bg-slate-700/50 rounded transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block py-3 px-2 text-white hover:text-yellow-400 hover:bg-slate-700/50 rounded transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;