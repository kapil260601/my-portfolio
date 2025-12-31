import { Code, Briefcase, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '3.9+ Years',
      description: 'Professional Experience',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'MERN Stack',
      description: 'Specialization',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '50%',
      description: 'Efficiency Improvement',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '100+',
      description: 'Internal Users Impacted',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Software Engineer - MERN Stack Developer
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Experienced Software Developer with <span className="font-semibold text-blue-600">3.9+ years</span> of hands-on
                experience in building scalable web applications using the MERN stack. Specialized in frontend development with
                React.js and expertise in backend services with Node.js and Express.js.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Proven track record of delivering complex internal tools like developer portals, helpdesk systems,
                alert/notification modules, and dashboard integrations. Currently working with ShareChat via Team Plus Staffing Solution,
                where I've contributed to modernizing internal tools that impact over 100+ developers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Skilled in writing clean, maintainable code, collaborating in agile teams, and driving productivity through
                intuitive UI/UX and automation. Passionate about building impactful software that improves team efficiency
                and saves engineering time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-gray-900">Bachelor of Computer Application</p>
                  <p className="text-gray-600">Renaissance University, Indore</p>
                  <p className="text-sm text-gray-500">2019 - 2022</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
