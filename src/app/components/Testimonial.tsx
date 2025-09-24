"use client";
import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      text: "Sed ut perspiciatis unde natus error sitwa voluptatem accusantium laudant totames aperiam eaque abillo beatae vitae",
      name: "Richard S. Brooks",
      position: "CEO & Founder",
    },
    {
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti",
      name: "Gars G. Bernhardt",
      position: "CFO & Founder",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua commondo",
      name: "Sarah Johnson",
      position: "CTO & Co-Founder",
    },
  ];

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section className="relative bg-slate-900 min-h-screen flex flex-col items-center justify-center overflow-hidden" id="clients">
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none pt-8">
        <div
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black select-none tracking-[0.2em] leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
             color: "rgba(255,255,255,0.05)", 
          }}
        >
          SAY&apos; s
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          People&apos;s Say About Our
          <br /> Support & Services
        </h2>
      </div>
      <div className="relative z-10 mt-16 max-w-5xl w-full px-6">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-1/2 flex-shrink-0 px-4">
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 shadow-xl">
                  <svg
                    className="w-10 h-10 text-purple-400 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{t.text}</p>
                  <h4 className="text-white font-semibold text-xl">{t.name}</h4>
                  <p className="text-gray-400">{t.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-3 mt-10 justify-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 left-12 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
        ✅
      </div>
      <div className="absolute top-1/4 right-12 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
        ▶
      </div>
    </section>
  );
};

export default Testimonial;
