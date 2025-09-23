"use client";
import React from "react";
import { BarChart3, Target, TrendingUp, Palette } from "lucide-react";

const Features: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Business Growth",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
    {
      icon: <Target className="w-6 h-6 text-orange-400" />,
      title: "User Research",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />,
      title: "Big Data Solution",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      title: "Product Design",
      description: "Sed perspiciatis unde omnis natus error voluptatem",
    },
  ];

  return (
    <section className="bg-slate-900 min-h-screen flex items-center sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-start justify-end pointer-events-none pt-8 pr-2 sm:pr-8">
  <div 
    className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[7rem] font-black text-transparent select-none tracking-[0.2em] leading-none"
    style={{
      WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',  
    }}
  >
    FEATURE
  </div>
</div>

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/images/featureimg1.png"
              alt="Professional working on laptop"
              className="object-contain"
              />
            <div className="relative w-80 h-96 flex items-center justify-center">
              <img
                src="/images/featureimg.png"
                alt="Professional working on laptop"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
          
            <div className="space-y-6">
              {/* Wavy Decorative Element */}

              <div className="flex items-center space-x-2">
                <svg
                  width="40"
                  height="8"
                  viewBox="0 0 40 8"
                  fill="none"
                  className="text-blue-400"
                >
                  <path
                    d="M2 4C2 4 4 2 6 4C8 6 10 2 12 4C14 6 16 2 18 4C20 6 22 2 24 4C26 6 28 2 30 4C32 6 34 2 36 4C37 5 38 4 38 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
      

              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Explore Our Professional <br />
                Business Solutions
              </h1>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                    <div className="flex-shrink-0 p-2 bg-slate-800/50 rounded-lg group-hover:bg-slate-700/50 transition-colors">
                      {service.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
