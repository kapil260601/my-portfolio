import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Internal Developer Portal - ShareChat',
      description:
        'Built and optimized internal tools used by ShareChat\'s developer teams including Helpdesk, Alert System, Notification Policies (RBAC-based), Feature Flags, Application Hierarchy Graph, Grafana Dashboard Integration, and IAM (Odin Flow).',
      technologies: ['React.js', 'Redux', 'Material-UI', 'Node.js', 'Grafana', 'WebSockets'],
      impact: '100+ internal users, 50% efficiency improvement',
      highlights: [
        'Helpdesk module for managing developer support tickets',
        'Visual Application Hierarchy Graph saving 40-50% navigation time',
        'Grafana integration with custom filters saving 30-40% investigation time',
        'RBAC-based Notification Policy system',
        'Feature Flags for controlled UI rollouts',
      ],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Autorox',
      description:
        'Mobile-based garage/workshop management software. Built admin panel and booking UI using React.js, Material-UI, and Node.js backend for seamless workshop operations.',
      technologies: ['React.js', 'Material-UI', 'Node.js', 'MongoDB', 'Express.js'],
      url: "https://www.autorox.ai/",
      impact: 'Complete admin and booking management solution',
      highlights: [
        'Comprehensive admin panel for workshop management',
        'User-friendly booking interface',
        'Real-time appointment scheduling',
        'Service tracking and management',
      ],
      gradient: 'from-green-500 to-green-700',
    },
    {
      title: 'Wayfair E-commerce Platform',
      description:
        'E-commerce platform offering home goods from 5000+ brands, including furniture, lighting, and cookware. Provides free shipping on most items, catering to diverse styles and budgets.',
      technologies: ['React.js', 'Redux', 'Bootstrap', 'RESTful APIs', 'Axios'],
      url: "https://www.wayfair.com/",
      impact: 'Large-scale e-commerce solution',
      highlights: [
        'Product catalog with 5000+ brands',
        'Dynamic product filtering and search',
        'Responsive design for all devices',
        'Seamless checkout experience',
      ],
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      title: 'SPYSS - Yoga Organization Platform',
      description:
        'Platform for SPYSS, a large yoga organization with 700+ branches worldwide and 40,000+ voluntary teachers. Built to manage branches, teachers, and millions of yoga practitioners.',
      technologies: ['React.js', 'Material-UI', 'Node.js', 'MongoDB', 'DataGrid'],
      impact: '700+ branches, 40,000+ teachers, millions of practitioners',
      highlights: [
        'Branch and teacher management system',
        'Practitioner enrollment and tracking',
        'Multi-location support',
        'Scalable architecture for global operations',
      ],
      gradient: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering impactful solutions across diverse domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-102 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Code className="w-6 h-6 text-gray-700" />
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-blue-600 mb-2">Impact:</p>
                  <p className="text-gray-700">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`px-8 py-4 bg-gradient-to-r ${project.gradient} bg-opacity-5`}>
                {project.url ? (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-white font-semibold"
  >
    View Details
    <ExternalLink size={16} />
  </a>
) : (
  <button className="flex items-center gap-2 text-white font-semibold">
    View Details
    <ExternalLink size={16} />
  </button>
)}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
