"use client";
import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const SEOLandingPage = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(1);

  const toggleCard = (cardIndex: number) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };
  return (
    <div className=" min-h-screen bg-gradient-to-br fr bg-slate-900 relative overflow-hidden">
     
      <div className="absolute inset-0 flex items-start justify-start pointer-events-none pt-8 pl-4 sm:pl-8">
        <div 
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black text-transparent select-none tracking-[0.2em] leading-none"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',  
          }}
        >
          SEO
        </div>
      </div>
      
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-green-400 rounded-full"></div>
        <div className="absolute top-60 left-1/4 w-6 h-1 bg-green-400 rounded-full transform rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-1 bg-pink-400 rounded-full transform -rotate-45"></div>
        
        {/* Wavy lines */}
        <svg className="absolute top-32 left-0 opacity-60" width="60" height="20" viewBox="0 0 60 20">
          <path d="M0 10 Q15 0 30 10 T60 10" stroke="#10b981" strokeWidth="2" fill="none" />
        </svg>
        
        <svg className="absolute bottom-60 right-10 opacity-60" width="80" height="30" viewBox="0 0 80 30">
          <path d="M0 15 Q20 5 40 15 T80 15" stroke="#ec4899" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" className="text-white">
                  <path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm6 1v6l4-3-4-3z"/>
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Manage Business SEO
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Optimization Easily
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg max-w-lg">
                Quis autem vel eum iure reprehenderit qui in ea voluptates velit esse quam molestiae consequatur veillum
              </p>
            </div>

            {/* Interactive Cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between" onClick={() => toggleCard(0)}>
                  <span className="text-white font-medium">Why SEO Growth Business Strategy ?</span>
                  {expandedCard === 0 ? 
                    <ChevronDown className="w-5 h-5 text-purple-400" /> : 
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  }
                </div>
                {expandedCard === 0 && (
                  <div className="mt-3 animate-fadeIn">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      SEO growth strategies help increase organic traffic, improve search rankings, and boost online visibility. This leads to more qualified leads and higher conversion rates for your business.
                    </p>
                  </div>
                )}
              </div>

              {/* Card 2 - Default Expanded */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={() => toggleCard(1)}>
                  <span className="text-white font-medium">How We Help Your Projects ?</span>
                  {expandedCard === 1 ? 
                    <ChevronDown className="w-5 h-5 text-purple-400" /> : 
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  }
                </div>
                {expandedCard === 1 && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      On the other hand denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded
                    </p>
                  </div>
                )}
              </div>

              {/* Card 3 */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between" onClick={() => toggleCard(2)}>
                  <span className="text-white font-medium">What Makes Us Different ?</span>
                  {expandedCard === 2 ? 
                    <ChevronDown className="w-5 h-5 text-purple-400" /> : 
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  }
                </div>
                {expandedCard === 2 && (
                  <div className="mt-3 animate-fadeIn">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Our data-driven approach, experienced team, and proven track record set us apart. We provide customized solutions and transparent reporting to ensure your success.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Background Image */}
            <div className="relative w-full max-w-lg">
              <Image 
                src="/images/seoimg.png" 
                alt="SEO Business Illustration"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
              
              {/* Overlay animated elements */}
              <div className="absolute inset-0">
                {/* Floating Planet */}
                <div className="absolute -left-8 top-1/4 animate-float">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full relative shadow-xl">
                    {/* Planet ring */}
                    <div className="absolute inset-0 border-2 border-yellow-300 rounded-full transform rotate-12 scale-125 opacity-60"></div>
                    <div className="absolute top-1 left-2 w-2 h-2 bg-blue-200 rounded-full opacity-80"></div>
                    <div className="absolute bottom-2 right-1 w-1 h-1 bg-white rounded-full opacity-90"></div>
                  </div>
                </div>

                {/* Small floating elements */}
                <div className="absolute top-8 left-8 w-6 h-6 bg-purple-500 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute bottom-12 right-8 w-4 h-4 bg-green-400 rotate-45 animate-spin-slow"></div>
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Windows Activation Notice */}
        <div className="fixed bottom-6 right-6 text-right">
          <p className="text-gray-400 text-sm">Activate Windows</p>
          <p className="text-gray-500 text-xs">Go to Settings to activate Windows.</p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SEOLandingPage;