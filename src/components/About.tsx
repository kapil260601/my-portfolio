import { Code, Briefcase, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '4.5+ Years',
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
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium">Professional Background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                  Senior Software Engineer
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-purple-600">4.5+ years</span> of hands-on experience building 
                scalable enterprise applications using the <span className="font-bold text-purple-700">MERN stack</span>. 
                Specialized in <span className="font-medium text-blue-600">React.js frontend development</span> with 
                expertise in <span className="font-medium text-blue-600">Node.js backend services</span>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Impact
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Proven track record delivering complex internal tools including <span className="font-medium text-purple-600">developer portals</span>, 
                  <span className="font-medium text-purple-600"> helpdesk systems</span>, 
                  <span className="font-medium text-purple-600"> alert/notification modules</span>, and 
                  <span className="font-medium text-purple-600"> dashboard integrations</span>. Currently with 
                  <span className="font-semibold text-purple-700"> ShareChat via TeckValley</span>, modernizing tools that impact 
                  <span className="font-bold text-purple-600">100+ developers</span>.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-purple-100 shadow-sm">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Core Competencies
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Expert in writing <span className="font-medium text-purple-600">clean, maintainable code</span>, 
                  <span className="font-medium text-purple-600"> agile collaboration</span>, and driving productivity through 
                  <span className="font-medium text-purple-600"> intuitive UI/UX</span> and 
                  <span className="font-medium text-purple-600"> automation</span>. Passionate about building software that 
                  <span className="font-semibold text-purple-700"> improves team efficiency</span> and 
                  <span className="font-semibold text-purple-700"> saves engineering time</span>.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">EDU</span>
                </div>
                Education Background
              </h4>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">Bachelor of Computer Application</p>
                  <p className="text-purple-700 font-medium">Renaissance University, Indore</p>
                  <p className="text-sm text-gray-500 mt-1">2019 - 2022</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:from-purple-700 hover:to-blue-700 border border-purple-500/20"
              >
                <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg inline-block">
                  {item.icon}
                </div>
                <h4 className="text-3xl font-bold mb-2">{item.title}</h4>
                <p className="text-purple-100 text-sm font-medium">{item.description}</p>
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/60 rounded-full group-hover:animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
