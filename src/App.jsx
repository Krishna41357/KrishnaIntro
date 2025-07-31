import React from 'react';
import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DSAStatus from './components/DsaStatus';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
   const particlesRef = useRef(null);
  
  useEffect(() => {
    // Floating particles animation
    const createParticles = () => {
      const container = particlesRef.current;
      if (!container) return;

      for (let i = 0; i < 18; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 8 + 4}px;
          height: ${Math.random() * 8 + 4}px;
          background: rgba(147, 51, 234, ${Math.random() * 0.3 + 0.15});
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: float ${Math.random() * 20 + 15}s linear infinite;
          animation-delay: ${Math.random() * 10}s;
          pointer-events: none;
        `;
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);
  return (
    

    <div className='bg-gradient-to-br from-gray-950 via-slate-900 to-black overflow-x-hidden'>
     <div ref={particlesRef} className="absolute inset-0 z-0"></div>
         <Navbar/>
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <DSAStatus />
      <Education />
      <Footer />
    </div>
    
  );
}