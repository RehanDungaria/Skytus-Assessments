import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const linksGroup = [
    { title: 'Company', links: ['About', 'Careers', 'Brand Kit'] },
    { title: 'Resources', links: ['Documentation', 'Guides', 'API Status'] }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Box 1: Profile Brand Summary */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              SaaSify
            </Link>
            <p className="text-sm leading-relaxed">
              Pioneering asynchronous computational environments for hyper-growth teams.
            </p>
          </div>

          {/* Boxes 2 & 3: Modular Group Loops */}
          {linksGroup.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-4">
              <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
                {group.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {group.links.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Box 4: Contact/Newsletter Context */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Contact
            </h4>
            <p className="text-sm">
              support@saasify.io<br />
              +1 (555) 234-5678
            </p>
          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        {/* Footer Meta Details Bottom-bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 order-last sm:order-first">
            &copy; {currentYear} SaaSify Inc. All rights reserved. Made using Tailwind configurations.
          </p>
          
          <div className="flex space-x-5">
            <a href="#twitter" aria-label="Twitter Account" className="text-slate-500 hover:text-white transition-colors duration-200 text-lg">
              <FaTwitter />
            </a>
            <a href="#github" aria-label="GitHub Repository" className="text-slate-500 hover:text-white transition-colors duration-200 text-lg">
              <FaGithub />
            </a>
            <a href="#linkedin" aria-label="LinkedIn Profile" className="text-slate-500 hover:text-white transition-colors duration-200 text-lg">
              <FaLinkedin />
            </a>
            <a href="#discord" aria-label="Discord Server" className="text-slate-500 hover:text-white transition-colors duration-200 text-lg">
              <FaDiscord />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default React.memo(Footer);