import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'TeckValley India Pvt. Ltd (Client: ShareChat)',
      location: 'Indore, IN',
      period: 'Jan 2025 - Present',
      type: 'Current Role',
      achievements: [
        'Contributed to the modernization of ShareChat\'s internal Developer Portal, optimizing support workflows and boosting engineering efficiency across 4+ modules, directly impacting 100+ internal users',
        'Built the entire Helpdesk module to manage developer support tickets by domain and priority, improving ticket resolution workflows and saving significant developer time',
        'Designed a visual Application Hierarchy Graph to represent parent-child relationships, saving 40-50% of navigation and access time for large teams',
        'Integrated Grafana dashboards with custom filters, saving 30-40% time during investigations',
        'Implemented Notification Policy system with RBAC at Application, Pod, and Team levels',
        'Developed Feature Flag section for controlled UI rollouts and authorized user access',
        'Building Guided Setup (Odin Flow) for IAM, automating onboarding and reducing setup complexity by 50%',
      ],
    },
    {
      title: 'Software Development Engineer',
      company: 'DevSecRoot Technologies',
      location: 'Indore, IN',
      period: 'Oct 2021 - Jan 2025',
      type: 'Full-time',
      achievements: [
        'Designed and developed responsive, user-friendly web pages using custom CSS and Bootstrap',
        'Built dynamic, interactive user interfaces using React.js and Redux for efficient state management',
        'Designed and implemented RESTful APIs using Spring Boot and Node.js with Microservices architecture',
        'Developed intuitive Admin Panel with Material-Dashboard for managing application settings',
        'Implemented dynamic routing using React Router and route protection based on authentication',
        'Integrated i18next for multi-language support and Google Tag Manager for analytics',
        'Applied token-based authentication (JWT, OAuth2.0) to ensure secure routing',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium">Career Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Building impactful solutions and <span className="font-semibold text-purple-600">driving engineering excellence</span>
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-300 to-blue-300 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2"></div>

              <div className="relative md:w-1/2">
                <div className="hidden md:block absolute top-6 left-0 md:left-auto md:right-0 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg z-10 animate-pulse"></div>

                <div className="bg-white border border-purple-200 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-purple-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">{exp.title}</h3>
                        <p className="text-purple-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-purple-50 px-3 py-1 rounded-full">
                      <Calendar size={16} className="text-purple-600" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <span className={`px-4 py-2 text-sm rounded-full font-semibold border ${
                      exp.type === 'Current Role' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500' 
                        : 'bg-purple-100 text-purple-700 border-purple-300'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-purple-900 mb-3">Key Achievements:</h4>
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
