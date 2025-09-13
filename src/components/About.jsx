import React from 'react';
import { useEffect, useRef } from 'react';
import ModelCanvas from './ModelCanvas';

 function About() {
   const experienceRef = useRef(null);

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div id='about' className="h-full pb-4 w-full overflow-x-hidden bg-transparent">
      {/* Navigation Bar */}
     

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-x-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/2 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Section Title */}
              <div className="space-y-2">
                <h2 className="text-purple-400 text-lg font-mono">
                  <span className="text-purple-400">&lt;/</span>AboutMe<span className="text-purple-400">&gt;</span>
                </h2>
                <div className="w-20 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
                  Hi, I'm{' '}
                  <span className="font-medium bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Krishna
                  </span>
                  <span className="animate-wave inline-block ml-2 text-3xl sm:text-4xl lg:text-5xl">👋</span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                  <span className="text-white font-medium">Software Developer</span> passionate about building scalable applications, 
                  <span className="text-white font-medium"> AI integration</span>, and crafting exceptional 
                  <span className="text-white font-medium"> user experiences</span>.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-gray-300 text-lg font-medium">Tech Stack & Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TypeScript', 'AI/ML', 'System Design'].map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 text-sm bg-slate-800/40 border border-slate-700/50 rounded-lg text-gray-300 font-mono hover:border-purple-500/30 hover:bg-slate-800/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={scrollToExperience} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20">
                  View My Work
                </button>
                 <a
  href="https://drive.google.com/drive/folders/1kaW4Zo6zFGDmF-QH75L3SgVEjeBibVKM"
  rel="noopener noreferrer"
>
  <button className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl font-medium hover:bg-purple-500/10 hover:border-purple-400/50 transition-all duration-300">
    Download CV
  </button>
</a>

              </div>

              {/* Professional Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </div>
            </div>

            {/* Right Content - 3D Model */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-60"></div>
                
                {/* Main Container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">
                  <div className="w-full h-full bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-600/20 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group hover:border-purple-500/30 transition-all duration-500">
                    
                    {/* Loading Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm rounded-3xl">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto"></div>
                        <p className="text-gray-400 text-sm">Loading 3D Model...</p>
                      </div>
                    </div>

                    {/* 3D Model */}
                    <div className="sketchfab-embed-wrapper w-full h-full relative z-10">
  <ModelCanvas/>
</div>

                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20 pointer-events-none rounded-3xl"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-full blur-sm animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(-6deg); }
          70% { transform: rotate(8deg); }
          80% { transform: rotate(-2deg); }
          90% { transform: rotate(4deg); }
        }
        
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
