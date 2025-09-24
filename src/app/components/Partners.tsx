"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visiblePartners, setVisiblePartners] = useState(4);

  const allPartners = [
    { 
      name: 'MÖVENPICK', 
      subtitle: 'Hotels & Resorts', 
      logo: 'MÖVENPICK',
      arabicName: ''
    },
    { 
      name: 'Ras Al Khaimah', 
      subtitle: 'Ras Al Khaimah', 
      logo: 'Raz Amwal',
      arabicName: 'راس الخيمة'
    },
    { 
      name: 'ROSEGAL', 
      subtitle: '', 
      logo: 'ROSEGAL',
      arabicName: ''
    },
    { 
      name: 'EYAB', 
      subtitle: 'EYAB', 
      logo: 'EYAB',
      arabicName: 'إياب'
    },
    { 
      name: 'Dhaman', 
      subtitle: 'Council of Health Insurance', 
      logo: 'ضمان',
      arabicName: 'مجلس الضمان الصحي'
    },
    { 
      name: 'Al Ain Zoo', 
      subtitle: 'Al Ain Zoo', 
      logo: 'حديقة العين',
      arabicName: ''
    },
    { 
      name: 'Al Ain Paradise', 
      subtitle: 'Al Ain Paradise', 
      logo: 'جنة العين',
      arabicName: ''
    },
  ];

  useEffect(() => {
    const updateVisiblePartners = () => {
      if (window.innerWidth < 640) {
        setVisiblePartners(1);
      } else if (window.innerWidth < 1024) {
        setVisiblePartners(2);
      } else if (window.innerWidth < 1280) {
        setVisiblePartners(3);
      } else {
        setVisiblePartners(4);
      }
    };

    updateVisiblePartners();
    window.addEventListener('resize', updateVisiblePartners);
    return () => window.removeEventListener('resize', updateVisiblePartners);
  }, []);

  const maxSlides = Math.max(0, allPartners.length - visiblePartners);

  const nextSlide = () => {
    setCurrentSlide(prev => prev >= maxSlides ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev <= 0 ? maxSlides : prev - 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="bg-slate-900 py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 flex items-start justify-start pointer-events-none pt-8 pl-4 sm:pl-8">
        <div 
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black text-transparent select-none tracking-[0.2em] leading-none"
          style={{
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.08)',  
          }}
        >
          BRAND
        </div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-blue-400/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
          <div className="text-white">
            <div className="flex items-center mb-4 lg:mb-6">
              <div className="w-8 lg:w-12 h-0.5 bg-blue-400 mr-3 lg:mr-4"></div>
              <div className="flex space-x-1">
                <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-blue-400 rounded-full"></div>
                <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-blue-400/50 rounded-full"></div>
                <div className="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-blue-400/30 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              We&apos;ve More Then 254+
              <br />
              <span className="text-blue-400">Global Partners</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="text-gray-300 lg:pt-16 xl:pt-20">
            <p className="text-base lg:text-lg leading-relaxed">
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
              inventore veritatis quasi architecto beatae vitae
            </p>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/80 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-600/25"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/80 backdrop-blur-sm border border-blue-500/30 rounded-full flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-600/25"
          >
            <ChevronRight size={18} />
          </button>

          <div className="overflow-hidden px-8 sm:px-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / visiblePartners)}%)`,
                width: `${(allPartners.length / visiblePartners) * 100}%`
              }}
            >
              {allPartners.map((partner, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / allPartners.length}%` }}
                >
                  <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center min-h-[120px] sm:min-h-[140px] hover:bg-slate-800/80 hover:border-slate-600/60 hover:scale-105 transition-all duration-300 group shadow-lg">
                    <div className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">
                      {partner.arabicName || partner.logo}
                    </div>
                    {partner.subtitle && (
                      <div className="text-gray-400 text-xs sm:text-sm leading-tight text-center">
                        {partner.subtitle}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 lg:mt-8 space-x-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;