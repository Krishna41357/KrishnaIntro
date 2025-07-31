import React, { useEffect, useRef } from 'react';
import { ExternalLink, Code, Layers, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

 function Projects() {
  const particlesRef = useRef(null);

  useEffect(() => {
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
  }, []);

  const projects = [
    {
      title: 'KS CODE',
      subtitle: 'Real-time code collaboration platform',
      description: 'A demonstration of practical networking concepts like TCP, UDP, STUN/TURN, and WebRTC...',
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      tags: ['WebRTC', 'TCP/UDP', 'React', 'Node.js', 'MongoDB'],
      link: '#',
      status: 'featured',
      image: '/projects/ks-code-ui.png',
    },
    {
      title: 'YUGSETU-2025',
      subtitle: 'Technical fest website for technical committee (Birla Institute of Technology)',
      description: 'A demonstration of frontend skills and precise rendering of animation libraries...',
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
      tags: ['GSAP', 'Three.js', 'React.js', 'Express.js', 'Tailwind CSS'],
      link: '#',
      status: 'live',
      image: '/projects/yugsetu-ui.png',
    },
    {
      title: 'KANBAN-BOARD',
      subtitle: 'Multi-user Task management web application',
      description: 'A demonstration of ReactJS proficiency and effective state management...',
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
      tags: ['ReactJS', 'State Management', 'Kanban', 'Real-time', 'APIs'],
      link: '#',
      status: 'completed',
      image: '/projects/kanban-ui.png',
    },
    {
      title: 'VAIDYA',
      subtitle: 'AI Crops disease prediction and management platform',
      description: 'Demonstrates the use of AI through fine-tuning ML models on image datasets...',
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      tags: ['AI/ML', 'React.js', 'Express.js', 'MongoDB', 'Image Processing'],
      link: '#',
      status: 'completed',
      image: '/projects/vaidya-ui.png',
    },
  ];

  const fadeInVariants = {
    hiddenLeft: { opacity: 0, x: -60 },
    hiddenRight: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id='projects' className="relative overflow-x-hidden py-12 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 xl:px-8 bg-transparent">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-purple-600/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-36 h-36 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-purple-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
      <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.15) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>
      <div ref={particlesRef} className="absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-purple-400 text-sm font-mono">&lt;/Projects&gt;</h2>
          <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-transparent mx-auto my-4"></div>
          <h1 className="text-3xl sm:text-4xl font-light text-white">
            Personal{' '}
            <span className="font-medium bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my <span className="text-white font-medium">technical skills</span> and{' '}
            <span className="text-white font-medium">innovative solutions</span> across various domains.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={fadeInVariants}
              initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute top-4 right-4 z-20">
                <div
                  className={`px-2 py-1 text-xs font-medium rounded-full border ${
                    project.status === 'featured'
                      ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30'
                      : project.status === 'live'
                      ? 'bg-green-500/10 text-green-400 border-green-500/30'
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                  }`}
                >
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 shadow-xl shadow-black/20 h-full">
                
                {/* Project Screenshot */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 border border-purple-500/20 shadow-md shadow-purple-500/10 hover:shadow-purple-500/30 transition-all duration-300"
                />

                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30">
                        <div className="text-purple-300">{project.icon}</div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-purple-400 opacity-60 group-hover:opacity-100" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-purple-300 font-medium text-sm mb-3">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-6">{project.description}</p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm text-gray-400 uppercase font-medium tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-purple-600/10 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/30 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600/80 to-purple-700/80 text-white font-semibold hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30 border border-purple-500/30 hover:border-purple-400/50">
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
