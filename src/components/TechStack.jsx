import React, { useState, useEffect, useRef } from 'react';

 function TechStack() {
  const [activeCategory, setActiveCategory] = useState('languages');
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

  const techData = {
    languages: [
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 92, description: 'Dynamic programming language' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 85, description: 'Type-safe JavaScript superset' },
      { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', level: 80, description: 'System programming language' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 78, description: 'Object-oriented programming' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 75, description: 'Versatile programming language' }
    ],
    technologies: [
      // Frontend
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 95, description: 'Modern UI library for building interfaces' },
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, description: 'Modern markup language' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90, description: 'Styling and layout language' },
      { name: 'Tailwind CSS', logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyIDhDMjQgOCAxOSAxMiAxNyAxOUMxOSAxNiAyMS41IDE0LjUgMjUgMTRDMzAgMTMgMzIgMTYgMzQgMjBDMzYgMjQgMzggMjYgNDEgMjZDNDcgMjYgNTEgMjMgNTMgMTdDNTEgMjAgNDguNSAyMS41IDQ1IDIyQzQwIDIzIDM4IDIwIDM2IDE2QzM0IDEyIDMyIDEwIDMyIDhaIiBmaWxsPSIjMzg5Q0VGIi8+CjxwYXRoIGQ9Ik0xNyAzMkM5IDMyIDQgMzYgMiA0M0M0IDQwIDYuNSAzOC41IDEwIDM4LjVDMTUgMzcuNSAxNyA0MC41IDE5IDQ0LjVDMjEgNDguNSAyMyA1MC41IDI2IDUwLjVDMzIgNTAuNSAzNiA0Ny41IDM4IDQxLjVDMzYgNDQuNSAzMy41IDQ2IDMwIDQ2LjVDMjUgNDcuNSAyMyA0NC41IDIxIDQwLjVDMTkgMzYuNSAxNyAzNC41IDE3IDMyWiIgZmlsbD0iIzI1NERCQiIvPgo8L3N2Zz4K', level: 88, description: 'Utility-first CSS framework' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 82, description: 'Popular CSS framework' },
      
      // Backend
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 88, description: 'Server-side JavaScript runtime' },
      { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 90, description: 'Web application framework' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 85, description: 'Document-based NoSQL database' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 78, description: 'Relational database management' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', level: 80, description: 'In-memory data structure store' },
      { name: 'Socket.io', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg', level: 82, description: 'Real-time bidirectional communication' },
      
      // Cloud & DevOps
      { name:'AWS', logo:'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMxLjMzIDQxLjU0Qy0wLjQyIDQxLjU0IDAgMTcuMTcgMCAyMC4zNkMwIDIzLjU1IDEzLjQyIDQxLjU0IDMxLjMzIDQxLjU0WiIgZmlsbD0iI0ZGOTkwMCIvPgo8cGF0aCBkPSJNNjQgMzIuODdDNjQgMzkuODcgNTguNjcgNDUuNzcgNTEuOTkgNDcuMzFMNTUuMTYgNTIuMzVDNjAuNjUgNDkuOTEgNjQgNDQuMTkgNjQgMzcuNzFWMzIuODdaIiBmaWxsPSIjRkY5OTAwIi8+CjxwYXRoIGQ9Ik0zMS4zMyA0MS41NEMxMy40MiA0MS41NCAwIDIzLjU1IDAgMjAuMzZDMCA5LjAzIDEzLjQyIDAgMzEuMzMgMEM0OS4yNCAwIDU2LjU5IDkuMDMgNTYuNTkgMjAuMzZWMzcuNzFDNTYuNTkgNDQuMTkgNTMuMjQgNDkuOTEgNDcuNzUgNTIuMzVMNDQuNTggNDcuMzFDNTEuMjYgNDUuNzcgNTYuNTkgMzkuODcgNTYuNTkgMzIuODdWMjcuMDdDNTYuNTkgMTQuNDMgNDkuMjQgNy4xMSAzMS4zMyA3LjExQzEzLjQyIDcuMTEgNy4xMSAxNC40MyA3LjExIDI3LjA3VjMyLjg3QzcuMTEgMzkuODcgMTIuNDQgNDUuNzcgMTkuMTIgNDcuMzFMMjIuMjkgNTIuMzVDMTYuOCA0OS45MSAxMy40NSA0NC4xOSAxMy40NSAzNy43MVYyNy4wN0MxMy40NSAxNy44NSAxOS4zNSAxMy40NSAzMS4zMyAxMy40NUM0My4zMSAxMy40NSA0OS4yMSAxNy44NSA0OS4yMSAyNy4wN1YzMi44N0M0OS4yMSAzOS44NyA0My44OCA0NS43NyAzNy4yIDQ3LjMxTDM0LjAzIDUyLjM1QzM5LjUyIDQ5LjkxIDQzLjg3IDQ0LjE5IDQzLjg3IDM3LjcxVjI3LjA3QzQzLjg3IDIwLjU5IDM5LjA3IDE5LjEyIDMxLjMzIDE5LjEyQzIzLjU5IDE5LjEyIDE4Ljc5IDIwLjU5IDE4Ljc5IDI3LjA3VjMyLjg3QzE4Ljc5IDM5Ljg3IDI0LjEyIDQ1Ljc3IDMwLjggNDcuMzFMMjcuNjMgNTIuMzVDMjIuMTQgNDkuOTEgMTguNzkgNDQuMTkgMTguNzkgMzcuNzFWMjcuMDdDMTguNzkgMTcuODUgMjQuNjkgMTMuNDUgMzEuMzMgMTMuNDVDMzcuOTcgMTMuNDUgNDMuODcgMTcuODUgNDMuODcgMjcuMDdWMzIuODdaIiBmaWxsPSIjMjMyRjNFIi8+Cjwvc3ZnPgo=' , level: 82, description: 'Amazon Web Services cloud platform' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 85, description: 'Application containerization' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', level: 75, description: 'Container orchestration platform' },
      { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', level: 70, description: 'Infrastructure as Code tool' }
    ]
  };

  const tools = [
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'DevTools', logo: '🔧' },
    { name: 'Discord', logo: '💬' },
    { name: 'Slack', logo: '💼' }
  ];

  const categories = [
    { id: 'languages', name: 'Languages', count: techData.languages.length },
    { id: 'technologies', name: 'Technologies', count: techData.technologies.length }
  ];

  const getFilteredTechs = () => {
    return techData[activeCategory] || [];
  };

  const filteredTechs = getFilteredTechs();

  return (
    <section id='techstack' className="relative overflow-x-hidden py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 min-h-screen bg-transparent">
      {/* Background Elements - Optimized for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-600/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-400/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Particles Container */}
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>

      {/* Grid Pattern - Responsive sizing */}
      <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)`,
          backgroundSize: '20px 20px sm:30px sm:30px lg:40px lg:40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
            <h2 className="text-purple-400 text-sm sm:text-base lg:text-lg font-mono">
              <span className="text-purple-400">&lt;/</span>TechStack<span className="text-purple-400">&gt;</span>
            </h2>
            <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-purple-500 to-transparent mx-auto"></div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Technologies &{' '}
            <span className="font-medium bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Tools
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-400 leading-relaxed max-w-sm sm:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-2">
            A comprehensive overview of the technologies I use to build{' '}
            <span className="text-white font-medium">modern applications</span>, from programming languages to{' '}
            <span className="text-white font-medium">development tools</span>.
          </p>
        </div>

        {/* Category Filter - Mobile friendly */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`w-full sm:w-auto px-4 sm:px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-black/40 border border-purple-900/50 text-gray-300 hover:border-purple-500/50 hover:bg-purple-950/30'
              }`}
            >
              {category.name}
              <span className="ml-1 text-xs opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Tech Grid - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {filteredTechs.map((tech, index) => (
            <div
              key={`${activeCategory}-${tech.name}`}
              className="group relative w-full"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-500/20 via-purple-600/15 to-purple-500/20 rounded-xl sm:rounded-3xl blur-sm sm:blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Card - Mobile optimized with fixed height */}
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-600/30 rounded-xl sm:rounded-2xl lg:rounded-3xl hover:border-purple-500/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 shadow-lg sm:shadow-xl shadow-black/20 h-24 sm:h-32 lg:h-40">
                
                {/* Tech Logo - Centered and responsive */}
                <div className="flex flex-col items-center justify-center h-full p-2 sm:p-4 lg:p-6">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-2">
                    {tech.logo && (tech.logo.endsWith('.svg') || tech.logo.startsWith('data:image'))  ? (
                      <img 
                        src={tech.logo} 
                        alt={tech.name} 
                        className="w-full h-full object-contain filter brightness-110 drop-shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                    ) : (
                      <span className="text-lg sm:text-2xl lg:text-4xl filter drop-shadow-lg">{tech.logo || '🔧'}</span>
                    )}
                    <span className="text-lg sm:text-2xl lg:text-4xl hidden filter drop-shadow-lg">{tech.logo || '🔧'}</span>
                  </div>
                  
                  {/* Tech Name - Responsive text */}
                  <h3 className="text-white font-medium text-xs sm:text-sm group-hover:text-purple-300 transition-colors duration-300 leading-tight text-center">
                    {tech.name}
                  </h3>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Skill level indicator - Mobile optimized */}
                <div className="absolute bottom-1 sm:bottom-2 left-2 sm:left-3 right-2 sm:right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                    <span className="text-gray-400 text-xs">Skill</span>
                    <span className="text-purple-400 text-xs font-bold">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-0.5 sm:h-1 overflow-hidden">
                    <div 
                      className="h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${tech.level}%`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software Section - Mobile optimized */}
        <div className="space-y-6 sm:space-y-8">
          <div className="text-center px-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-3 sm:mb-4">
              Tools &{' '}
              <span className="font-medium bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                Software
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto">
              Development tools and software I use daily for{' '}
              <span className="text-white font-medium">productivity</span> and{' '}
              <span className="text-white font-medium">collaboration</span>
            </p>
          </div>

          {/* Infinite Marquee - Mobile optimized */}
          <div className="relative overflow-hidden py-4 sm:py-6 lg:py-8">
            {/* Marquee Container */}
            <div className="flex space-x-6 sm:space-x-12 lg:space-x-16 animate-marquee">
              {[...tools, ...tools, ...tools].map((tool, index) => (
                <div
                  key={`${tool.name}-${index}`}
                  className="flex-shrink-0 group relative transform scale-100 sm:scale-125 lg:scale-150"
                >
                  {/* Tool Card */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-black/10">
                    <div className="flex flex-col items-center justify-center h-full space-y-1 sm:space-y-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex items-center justify-center">
                        {tool.logo && tool.logo.startsWith('http') ? (
                          <img 
                            src={tool.logo} 
                            alt={tool.name} 
                            className="w-full h-full object-contain filter brightness-110"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : (
                          <span className="text-sm sm:text-base lg:text-xl">{tool.logo || '🔧'}</span>
                        )}
                        <span className="text-sm sm:text-base lg:text-xl hidden">{tool.logo || '🔧'}</span>
                      </div>
                      <span className="text-white text-xs font-medium text-center leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile optimized */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {[
            { label: 'Programming Languages', count: techData.languages.length, color: 'from-purple-500 to-purple-600' },
            { label: 'Technologies & Frameworks', count: techData.technologies.length, color: 'from-purple-600 to-purple-700' },
            { label: 'Tools & Software', count: tools.length, color: 'from-purple-700 to-purple-800' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className={`inline-flex w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${stat.color} items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 border border-purple-400/20`}>
                <span className="text-white font-bold text-lg sm:text-xl">{stat.count}</span>
              </div>
              <p className="text-gray-400 text-sm leading-tight px-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

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

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: scale(10);
            opacity: 0;
          }
        }

        .animate-marquee {
          animation: marquee 45s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        .particle {
          box-shadow: 0 0 8px rgba(147, 51, 234, 0.2);
        }

        .ripple {
          transform-origin: center;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-play-state: paused;
          }
          
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

export default TechStack;