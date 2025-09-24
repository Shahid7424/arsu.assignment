"use client";
import React, { useState } from "react";
import Image from "next/image";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden" id="contact">
     <div className="absolute inset-0 flex items-start justify-end pointer-events-none">
        <div
          className="text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] font-black text-transparent select-none tracking-[0.2em] leading-none mr-4 lg:mr-35 mb-16"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
          }}
        >
          CALL
        </div>
      </div> 
      
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side*/}
            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/contactimg.png"
                  alt="Person working on laptop"
                  width={500}
                  height={400}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right column*/}
            <div className="lg:w-1/2 flex flex-col items-start">
              <div className="w-full max-w-md">
                <div className="flex justify-start mb-8">
                  <h2 className="text-4xl font-bold text-white leading-tight">
                    Ready to Work Together
                    <br />
                    <span className="text-purple-400">In New Projects?</span>
                  </h2>
                </div>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
                    <p className="text-green-400 text-center font-medium">
                      ✅ Form submitted successfully!
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                      required
                      disabled={isSubmitted}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                      required
                      disabled={isSubmitted}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 resize-none text-base focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                      required
                      disabled={isSubmitted}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`${
                        isSubmitted
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      } text-white font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? "✅ Submitted!" : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;