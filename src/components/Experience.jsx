'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

 function Experience() {
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

  const experiences = [
    { 
      company: 'NexG.ai || project - SavingsYogi', 
      role: 'Full Stack , Cloud , devOps Intern', 
      duration: 'Jan 2025 – Mar 2025',
      description: 'Built scalable web applications focused on financial savings solutions',
      technologies: ['JavaScript', 'Express.js', 'MongoDB',"Redis", 'React', 'GenAi','AWS' , 'Docker'  ],
      status: 'completed'
    },
  ];

  const fadeInVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id='experience' className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-transparent">
      {/* Background + Grid */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Particles Container */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>

      <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
            <h2 className="text-purple-400 text-sm sm:text-base lg:text-lg font-mono">
              <span className="text-purple-400">&lt;/</span>Experience<span className="text-purple-400">&gt;</span>
            </h2>
            <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Professional{' '}
            <span className="font-medium bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto px-2">
            My journey through various{' '}
            <span className="text-white font-medium">internships</span> and{' '}
            <span className="text-white font-medium">professional roles</span>, building innovative solutions.
          </p>
        </div>

        {/* Timeline + Cards */}
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px hidden sm:block"></div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={fadeInVariants}
                initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-6 top-6 sm:top-8 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 border-2 sm:border-4 border-purple-900/50 shadow-lg shadow-purple-500/30 z-10 hidden sm:block group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-1 rounded-full bg-white/20 animate-pulse"></div>
                </div>

                {/* Status Tag */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                  <div className={`px-2 py-1 text-xs font-medium rounded-full border ${
                    exp.status === 'current' 
                      ? 'bg-green-500/10 text-green-400 border-green-500/30' 
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                  }`}>
                    {exp.status === 'current' ? 'Current' : 'Completed'}
                  </div>
                </div>

                {/* Card */}
                <div className="relative ml-0 sm:ml-16 lg:ml-20">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-purple-600/5 to-purple-500/10 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-slate-600/30 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl shadow-black/20">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <p className="text-purple-300 font-medium text-sm sm:text-base">{exp.company}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400 font-mono bg-slate-800/50 px-2 py-1 rounded-md inline-block">
                          {exp.duration}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                      {exp.description}
                    </p>

                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-transparent rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Line to Next */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 sm:left-8 bottom-0 w-px h-6 sm:h-8 bg-gradient-to-b from-purple-400/30 to-purple-500/50 hidden sm:block"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(30px);
            opacity: 0;
          }
        }

        .particle {
          box-shadow: 0 0 12px rgba(147, 51, 234, 0.4);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
export default Experience