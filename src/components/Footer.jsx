import React from 'react';

function Footer() {
  return (
    <footer id='contact' className="relative w-full bg-black text-white overflow-hidden pt-16 pb-10 mt-32 border-t border-slate-800">
      {/* Decorative Glows - Left & Right Sides */}
      <div className="absolute -left-20 top-1/2 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -right-20 top-1/3 w-48 h-48 bg-fuchsia-500/20 rounded-full blur-2xl animate-ping"></div>

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[1] z-0 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
        {/* 3D Avatar */}
        <div className="mx-auto w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-lg shadow-purple-700/30 border border-slate-700/40 backdrop-blur-md">
          <iframe
            title="3D Avatar"
            src="https://sketchfab.com/models/7w7pAfr5GdY/embed"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Text Quote */}
        <p className="text-xl sm:text-2xl font-mono text-gray-300">
          "Building better, one line at a time."
        </p>

        {/* Get in Touch Button */}
        <a
          href="#contact"
          className="text-purple-400 font-mono text-lg hover:underline"
        >
          LetsConnect();
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          {[
            { icon: 'instagram', url: 'https://instagram.com' },
            { icon: 'linkedin', url: 'https://linkedin.com' },
            { icon: 'github', url: 'https://github.com' },
            { icon: 'mail', url: 'mailto:someone@example.com' }
          ].map(({ icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-purple-500/10 transition-colors"
            >
              <i className={`ri-${icon}-line text-2xl`}></i>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8">
          Design & Built by © Krishna Srivastava {new Date().getFullYear()}
        </p>

        {/* Back to Top */}
        <a
          href="#top"
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          title="Back to top"
        >
          ↑
        </a>
      </div>
    </footer>
  );
}
export default Footer;