"use client";
import React from 'react';

export default function WhoWeAre() {
  return (
    <div className="relative w-full bg-slate-900 bg-gradient-to-br overflow-hidden" id="about">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 flex items-start justify-start pointer-events-none pt-8 pl-4 sm:pl-8">
        <div 
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black text-transparent select-none tracking-[0.2em] leading-none"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',  
          }}
        >
          WHO
        </div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-16 h-16 border border-blue-400 rounded-full"></div>
        <div className="absolute top-16 right-32 w-8 h-8 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-16 left-16 w-12 h-12 border border-blue-400 rounded-full"></div>
        <svg className="absolute top-8 left-8 w-16 h-4" viewBox="0 0 64 16" fill="none">
          <path d="M0 8C8 4 16 12 24 8C32 4 40 12 48 8C56 4 64 8 64 8" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5"/>
        </svg>
      </div>

      <div className="relative flex items-center justify-between p-8 lg:p-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <svg className="w-12 h-3" viewBox="0 0 48 12" fill="none">
              <path d="M0 6C6 3 12 9 18 6C24 3 30 9 36 6C42 3 48 6 48 6" stroke="#3B82F6" strokeWidth="2"/>
            </svg>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            We're Awards Winning
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Modern Business Solutions
            </span>
            <br />
            Agency
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium totam rem aperiam eaque 
            ipsa quae ab illo inventore veritatis architecto beatae
          </p>

          {/* Service tags with check marks */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl">
            {/* First Row */}
            <div className="flex items-center space-x-3 bg-slate-800/70 backdrop-blur-sm border border-slate-600/50 rounded-xl px-5 py-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-base font-medium">Tech Solutions</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-slate-800/70 backdrop-blur-sm border border-slate-600/50 rounded-xl px-5 py-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-base font-medium">IT Consulting</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-slate-800/70 backdrop-blur-sm border border-slate-600/50 rounded-xl px-5 py-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-base font-medium">Web Solutions</span>
            </div>

            {/* Second Row */}
            <div className="flex items-center space-x-3 bg-slate-800/70 backdrop-blur-sm border border-slate-600/50 rounded-xl px-5 py-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-base font-medium">Business Growth</span>
            </div>
            
            <div className="flex items-center space-x-3 bg-slate-800/70 backdrop-blur-sm border border-slate-600/50 rounded-xl px-5 py-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white text-base font-medium">Product Design</span>
            </div>
          </div>
        </div>

        {/* Right Content*/}
        <div className="relative flex-shrink-0">
          <div className="relative w-120 h-120">
            <img 
              src="/images/whoimg.png" 
              alt="Mobile discount app interface with coins"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}