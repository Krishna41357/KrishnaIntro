import React, { useEffect, useState ,  useRef} from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, ExternalLink } from 'lucide-react';
import LeetCodeCard from './LeetcodeCard';

export default function DsaStatus() {
  const [user, setUser] = useState(null);
  const username = 'Krishna41357';
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
  useEffect(() => {
    async function fetchGitHub() {
      const res = await fetch(`https://api.github.com/users/${username.trim()}`);
      const data = await res.json();
      setUser(data);
    }
    fetchGitHub();
  }, []);

  return (
    <section className="relative overflow-hidden py-16 px-4 bg-transparent text-white">
      {/* Glowing Pulsing Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-36 h-36 sm:w-52 sm:h-52 lg:w-60 lg:h-60 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>
    <div ref={particlesRef} className="absolute inset-0 z-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          🚀 DSA & GitHub Status
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/30 to-slate-900/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-xl shadow-black/20"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Github size={26} className="text-purple-400" />
                <h3 className="text-xl font-semibold">GitHub Profile</h3>
              </div>
              <a
                href={`https://github.com/${username.trim()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:underline flex items-center"
              >
                View <ExternalLink size={14} className="ml-1" />
              </a>
            </div>

            {user && (
              <div className="text-center">
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  className="w-24 h-24 mx-auto rounded-full border-4 border-purple-500/40"
                />
                <h4 className="text-lg font-semibold mt-3">{user.name}</h4>
                <p className="text-gray-400">@{user.login}</p>
                <p className="text-sm text-gray-500 mt-1">{user.bio}</p>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-md font-semibold text-purple-300 mb-2">Pinned Projects</h4>
              <div className="grid grid-cols-1 gap-3 text-sm">
                {[
                  'ks_code-online-code-collaboration-platform',
                  'techvibes',
                  'Kanban-board',
                  'aluminidonation-aptos',
                  'tockenized-rewards',
                ].map((repo) => (
                  <a
                    key={repo}
                    href={`https://github.com/${username.trim()}/${repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/40 p-3 rounded-md hover:bg-slate-800/60 border border-purple-700/30 transition"
                  >
                    <div className="text-purple-300 font-medium">{repo}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold text-purple-300 mb-2">Contribution Graph</h4>
              <img
                src={`https://ghchart.rshah.org/purple/${username.trim()}`}
                alt="GitHub Contribution Chart"
                className="w-full rounded-md border border-purple-700/30"
              />
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/30 to-slate-900/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 shadow-xl shadow-black/20"
          >
            <div className="flex items-center mb-4">
              <Code2 className="text-yellow-400 mr-2" size={28} />
              <h3 className="text-xl font-semibold">LeetCode</h3>
            </div>
            <LeetCodeCard username="Krishna_Srivastava11244" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
