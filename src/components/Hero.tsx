import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = ['MERN Stack Developer', 'Frontend Developement Engineer', 'React.js Developer', 'Full Stack Engineer'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentTitle.length) {
            setDisplayText(currentTitle.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentTitle.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-purple-200 text-sm font-medium">Available for Opportunities</span>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              <div className="relative group animate-scaleIn">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-glow"></div>
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                  <img 
                    src="/Images/Porfolio-Img.jpeg" 
                    alt="Kapil Patel" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-lg sm:text-xl text-purple-200 font-medium animate-slideDown tracking-wide">
                  Hello, I'm
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight animate-slideUp bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Kapil Patel
                </h1>
                <div className="h-12 sm:h-16">
                  <p className="text-2xl sm:text-3xl md:text-4xl text-purple-200 font-light">
                    {displayText}
                    <span className="animate-blink text-purple-400">|</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-500">
            <span className="font-semibold text-white">Senior Software Engineer</span> with <span className="font-bold text-purple-300">4.5+ years</span> of expertise 
            in building scalable enterprise applications. Passionate about creating impactful software that 
            <span className="text-purple-300 font-medium"> drives efficiency</span> and <span className="text-purple-300 font-medium"> saves engineering time</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base animate-fadeIn delay-700">
            <div className="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full hover:bg-purple-500/30 transition-all">
              <MapPin size={18} className="text-purple-300" />
              <span>Indore, India</span>
            </div>
            <a
              href="tel:+919174570187"
              className="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full hover:bg-purple-500/30 transition-all"
            >
              <Phone size={18} className="text-purple-300" />
              <span>+91 9174570187</span>
            </a>
            <a
              href="mailto:kapil2601patel@gmail.com"
              className="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full hover:bg-purple-500/30 transition-all"
            >
              <Mail size={18} className="text-purple-300" />
              <span>kapil2601patel@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-fadeIn delay-1000">
            <a
              href="https://www.linkedin.com/in/kapil-patel-14789822a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full hover:from-purple-500/30 hover:to-blue-500/30 transition-all transform hover:scale-110"
            >
              <Linkedin size={24} className="text-purple-200" />
            </a>
          </div>

          <div className="pt-8 animate-fadeIn delay-1200 flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border border-purple-400/30"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg border border-purple-400/50 hover:bg-purple-500/20 transition-all transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white opacity-50 hover:opacity-100 transition-opacity"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
