import React from 'react';
import { HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaDiscord, FaWhatsapp, FaWeixin } from 'react-icons/fa';

const Contact = () => {
  const contactMethods = [
    {
      icon: HiMail,
      title: 'Email',
      subtitle: 'armanislam88@gmail.com',
      link: 'mailto:armanislam88@gmail.com',
      bgColor: 'bg-red-500/10',
      iconColor: 'text-red-500'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      subtitle: '@armanislams',
      link: 'https://github.com/armanislams',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-500'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      subtitle: 'Md Arman Islam',
      link: 'https://linkedin.com/in/armanislam',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-500'
    },
    {
      icon: FaDiscord,
      title: 'Discord',
      subtitle: 'Join Server',
      link: '#',
      bgColor: 'bg-indigo-500/10',
      iconColor: 'text-indigo-500'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      subtitle: 'Chat on WhatsApp',
      link: 'https://wa.me/',
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-500'
    },
    {
      icon: FaWeixin,
      title: 'WeChat',
      subtitle: 'Add on WeChat',
      link: '#',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen mt-14 bg-neutral-950 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Cursor Animation */}
        <div className="flex justify-center mb-12">
          <div className="relative">
             <svg width="40" height="40" viewBox="0 0 24 24" className="animate-bounce text-rose-500" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-rose-500 to-transparent"></div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <div className="flex justify-center mb-4">
            <div className="h-1 w-32 bg-gradient-to-r from-rose-500 via-rose-500 to-rose-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-lg">
            Feel Free To Contact Me
          </p>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all duration-300 hover:bg-neutral-900/80 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className={`${method.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${method.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {method.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {method.subtitle}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-rose-400 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;