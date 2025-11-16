import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Material-UI', level: 88 },
        { name: 'Redux', level: 85 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    backend: {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'MongoDB', level: 85 },
        { name: 'Mongoose', level: 82 },
        { name: 'WebSockets', level: 75 },
        { name: 'JWT & OAuth2.0', level: 80 },
      ],
    },
    tools: {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Jenkins', level: 75 },
        { name: 'Spinnaker', level: 70 },
        { name: 'SonarQube', level: 75 },
        { name: 'ESLint & Prettier', level: 85 },
        { name: 'Grafana', level: 78 },
        { name: 'Storybook', level: 80 },
      ],
    },
    other: {
      title: 'Other Skills',
      skills: [
        { name: 'Code Reviews', level: 90 },
        { name: 'RBAC Implementation', level: 85 },
        { name: 'Performance Optimization', level: 88 },
        { name: 'Agile Methodologies', level: 85 },
        { name: 'UI/UX Best Practices', level: 82 },
        { name: 'i18next', level: 75 },
      ],
    },
  };

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set across the full development stack
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map(
              (skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-sm font-semibold text-blue-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animation: 'fillBar 1s ease-out',
                      }}
                    ></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all">
            <p className="text-3xl font-bold mb-2">MERN</p>
            <p className="text-blue-100">Stack Specialist</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all">
            <p className="text-3xl font-bold mb-2">50%</p>
            <p className="text-green-100">Efficiency Gain</p>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all">
            <p className="text-3xl font-bold mb-2">100+</p>
            <p className="text-orange-100">Users Impacted</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-xl text-white text-center transform hover:scale-105 transition-all">
            <p className="text-3xl font-bold mb-2">4+</p>
            <p className="text-purple-100">Major Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
