import React from 'react';
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import Features from './components/Features';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Project from './components/Projects';
import SEOLandingPage from './components/SeoLanding';
import Fact from './components/Fact';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Partners />
      <Features />
      <WhoWeAre />
      <Services />
      <Project />
      <SEOLandingPage />
      <Fact />
      < Testimonial />
      <Contact />

    </div>
  );
};

export default App;