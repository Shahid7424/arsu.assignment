"use client";
import React, { useState} from "react";
// import Image from "next/image";

interface ProjectCard {
  id: number;
  image: string;
  category: string;
  title: string;
  categoryColor: string;
}

const Project: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects: ProjectCard[] = [
    {
      id: 1,
      image: "/images/projects01.jpg",
      category: "Marketing",
      title: "Tech Website Solution",
      categoryColor: "bg-purple-600",
    },
    {
      id: 2,
      image: "/images/projects02.jpg",
      category: "Technology",
      title: "App Platform Integration",
      categoryColor: "bg-blue-600",
    },
    {
      id: 3,
      image: "/images/projects03.jpg",
      category: "Software",
      title: "Software Tools Development",
      categoryColor: "bg-purple-500",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-slate-900 py-16 px-4 min-h-screen flex items-center justify-center" id="projects">
       <div className="absolute inset-0 flex items-start justify-center pointer-events-none pt-8">
        <div
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black select-none tracking-[0.2em] leading-none text-transparent"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
          }}
        >
          PROJECTS
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative wavy line */}
          <div className="flex justify-center mb-6">
            <svg
              width="60"
              height="20"
              viewBox="0 0 60 20"
              className="text-purple-500"
            >
              <path
                d="M5 15 Q15 5 25 15 T45 15 T55 15"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
            </svg>
          </div>

          <div className="relative inline-block">
            {/* Title with background */}
            <h2 className="relative text-4xl md:text-5xl font-bold text-white leading-tight px-8 py-6 bg-gradient-to-r ">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Checkout our Recently
                <br />
                Completed Projects
              </span>
            </h2>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {projects.map((proj) => (
                      <div key={proj.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-lg bg-gray-800 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                          {/* Project Image */}
                          <div className="relative h-140">
                            <img
                              src={proj.image}
                              alt={proj.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              onError={(e) => {
                                console.log(
                                  "Image failed to load:",
                                  proj.image
                                );
                                e.currentTarget.style.display = "none";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          </div>

                          {/* Project Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            {/* Category Badge */}
                            <div className="mb-3">
                              <span
                                className={`${proj.categoryColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}
                              >
                                {proj.category}
                              </span>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-white font-bold text-xl leading-tight bg-gray-900 py-6 px-4">
                              {proj.title}
                            </h3>
                          </div>

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 border border-white/20 hover:border-purple-400/50"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25 border border-white/20 hover:border-purple-400/50"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Desktop Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`group relative transition-all duration-300 ${
                  index === currentSlide ? "w-12 h-3" : "w-3 h-3 hover:w-4"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-purple-500 to-blue-500"
                      : "bg-gray-600 group-hover:bg-gray-400"
                  }`}
                />
                {index === currentSlide && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-sm opacity-50 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Carousel - Always show on mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative h-80 overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.log("Image failed to load:", project.image);
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span
                          className={`${project.categoryColor} text-white px-4 py-2 rounded-full text-sm font-semibold`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-white font-bold text-xl leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "bg-purple-500 w-8 h-3"
                    : "bg-gray-600 hover:bg-gray-500 w-3 h-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
