"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: "🎨",
      title: "Graphics Design",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: "💡",
      title: "Ideation & Evaluation",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-500",
    },
    {
      icon: "📊",
      title: "Brand Identity",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: "⚙️",
      title: "Customer Service",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden" id="services">
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none pt-8">
        <div
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black text-transparent select-none tracking-[0.2em] leading-none"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
          }}
        >
          SERVICES
        </div>
      </div>
      <div className="absolute inset-0">
        {/* Top left decorative elements */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-pink-500 rounded-2xl rotate-12 opacity-80"></div>
        <div className="absolute top-44 left-8 w-8 h-8 bg-cyan-400 rounded-full opacity-60"></div>

        {/* Top right */}
        <div className="absolute top-28 right-32 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
        </div>
        <div className="absolute top-52 right-20 w-6 h-6 bg-orange-400 rounded rotate-45"></div>

        {/* Bottom decorations */}
        <div className="absolute bottom-32 left-16 w-10 h-10 bg-yellow-300 rounded-full opacity-70"></div>
        <div className="absolute bottom-20 right-24 w-16 h-12 bg-purple-400 rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header Section - Top */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-blue-400 mr-4"></div>
            <svg
              width="24"
              height="10"
              viewBox="0 0 24 10"
              className="text-blue-400"
            >
              <path
                d="M2 2 Q6 8 12 2 T22 2"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <div className="w-16 h-0.5 bg-blue-400 ml-4"></div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Great Features To Do Your Business
          </h1>
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 leading-tight">
            Growth & Development
          </h2>
        </div>

        {/* Main Content Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative flex justify-center">
            <div className="relative w-130 h-130">
              <img
                src="/images/serviceimg.png"
                alt="Business Analytics"
                className="object-contain"
              />

              {/* Fallback illustration (hidden by default) */}
              <div className="hidden w-96 h-96 bg-slate-700/50 rounded-full backdrop-blur-sm border border-slate-600/30 relative">
                {/* 3D Platform */}
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
                  <div className="w-40 h-6 bg-gradient-to-r from-slate-400 to-slate-300 rounded-lg transform rotate-x-12 opacity-80"></div>
                </div> 
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-slate-700/40 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:bg-slate-700/60 transition-all duration-300 cursor-pointer hover:border-slate-500/50 hover:shadow-xl hover:shadow-slate-900/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center text-white text-xl font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-xl mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Windows Activation watermark */}
      <div className="absolute bottom-6 right-6 text-slate-500/60 text-sm">
        Activate Windows
        <div className="text-xs mt-1 text-slate-600">
          Go to Settings to activate Windows
        </div>
      </div>
    </div>
  );
};

export default Services;
