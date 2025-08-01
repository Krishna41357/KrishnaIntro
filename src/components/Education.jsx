import React, { useEffect, useRef } from 'react';

function Education() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 14; i++) {
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
  }, []);

  return (
    <section id='education' className="relative overflow-x-hidden py-12 px-4 sm:px-6 lg:px-8 min-h-[70vh] bg-transparent">
      {/* Background floating particles */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>

      {/* Glowing background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-44 h-44 bg-purple-700/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-1 mb-4">
          <h2 className="text-purple-400 text-lg font-mono">
            <span className="text-purple-400">&lt;/</span>Education<span className="text-purple-400">&gt;</span>
          </h2>
          <div className="w-12 h-px bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
          Academic{' '}
          <span className="font-medium bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
            Journey
          </span>
        </h1>

        {/* Timeline-style Entry */}
        <div className="relative pl-4 border-l-2 border-purple-500 max-w-xl mx-auto">
          {/* Dot */}
          <div className="absolute top-4 -left-2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>

          {/* Glow & Card */}
          <div className="group relative mt-2">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-purple-600/15 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            {/* Timeline Card */}
            <div className="relative flex items-start gap-4 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-6 sm:p-8 shadow-lg hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.02]">
              <img
                src="/BIT-logo.png"
                alt="BIT Logo"
                className="w-12 h-12 object-contain mt-1 shrink-0"
              />
              <div className="text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  B.Tech in Computer Science
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">BIT Jaipur, 2022 – 2026</p>
                <ul className="list-disc text-left text-sm text-gray-200 pl-5 space-y-1">
                  <li>Current CGPA: <span className="font-medium text-white">8.0+</span></li>
                  <li>Technical, Cultural, and Sports Committee member</li>
                  <li>Built & maintained the Tech Committee website</li>
                  <li>Football Gold (Cavorts), Battle of Bytes Winner</li>
                </ul>
              </div>
            </div>
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
          box-shadow: 0 0 8px rgba(147, 51, 234, 0.2);
        }
      `}</style>
    </section>
  );
}
export default Education;