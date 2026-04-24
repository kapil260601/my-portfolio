import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:kapil2601patel@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'kapil2601patel@gmail.com',
      link: 'mailto:kapil2601patel@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 9174570187',
      link: 'tel:+91 9174570187',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Indore, M.P, India',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            I'm always open to discussing <span className="font-semibold text-purple-600">new projects</span>, 
            <span className="font-semibold text-purple-600">creative ideas</span>, or 
            <span className="font-semibold text-purple-600">opportunities</span> to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">
                Let's work together
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                I'm currently available for <span className="font-semibold text-purple-600">freelance work</span> and 
                <span className="font-semibold text-purple-600"> full-time opportunities</span>. If you have a project
                that you want to get started, think you need my help with something, or just fancy saying hey,
                then get in touch.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-purple-600 hover:text-purple-700 transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/kapil-patel-14789822a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all outline-none hover:border-purple-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all outline-none hover:border-purple-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all outline-none hover:border-purple-400"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition-all outline-none resize-none hover:border-purple-400"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl border border-purple-400/30"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="text-center">
          <p className="text-gray-700 text-lg">
            Designed & Built with <span className="text-purple-600">❤️</span> by <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Kapil Patel</span>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
