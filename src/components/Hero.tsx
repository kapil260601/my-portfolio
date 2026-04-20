import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = ['MERN Stack Developer', 'Frontend Specialist', 'React.js Expert', 'Full Stack Engineer'];
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-blue-200 font-medium animate-slideDown">
              Hello, I'm
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight animate-slideUp">
              Kapil Patel
            </h1>
            <div className="h-12 sm:h-16">
              <p className="text-2xl sm:text-3xl md:text-4xl text-blue-200 font-light">
                {displayText}
                <span className="animate-blink">|</span>
              </p>
            </div>
          </div>

          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-500">
            Experienced Software Engineer with 4.5+ years of expertise in building scalable web applications.
            Passionate about creating impactful software that improves team efficiency.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base animate-fadeIn delay-700">
            <div className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin size={18} />
              <span>Indore, India</span>
            </div>
            <a
              href="tel:+919174570187"
              className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-opacity-20 transition-all"
            >
              <Phone size={18} />
              <span>+91 9174570187</span>
            </a>
            <a
              href="mailto:kapil2601patel@gmail.com"
              className="flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-opacity-20 transition-all"
            >
              <Mail size={18} />
              <span>kapil2601patel@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-fadeIn delay-1000">
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full hover:bg-opacity-20 transition-all transform hover:scale-110"
            >
              <Github size={24} />
            </a> */}
            <a
              href="https://www.linkedin.com/in/kapil-patel-14789822a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-full hover:bg-opacity-20 transition-all transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="pt-8 animate-fadeIn delay-1200">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get In Touch
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
