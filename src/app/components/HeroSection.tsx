"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden" id="home">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="absolute inset-0 bg-slate-900/30"></div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-60 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
        
        <div className="absolute top-10 left-10 w-16 h-8 bg-purple-500 rounded transform rotate-45 opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-12 h-3 bg-cyan-400 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Text Content */}
          <div className="animate-fadeInLeft">
            <div className="flex items-center mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                We Provide
              </h1>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center ml-7 animate-pulse">
                <svg
                  className="w-6 h-6 text-slate-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Smart Business
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Grow your Business With Us Best Business Solutions
            </p>
          </div>
          
          <div className="animate-fadeInRight flex justify-center">
            <Image
              src="/images/bannerimg.png"
              alt="Business Solutions"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 text-gray-500 text-sm opacity-60">
        Activate Windows
      </div>
    </section>
  );
};

export default HeroSection;