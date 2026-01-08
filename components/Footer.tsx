import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socials = [
    { icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg', url: '#', label: 'GitHub', color: 'hover:bg-[#181717] hover:text-white' },
    { icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linkedin.svg', url: '#', label: 'LinkedIn', color: 'hover:bg-[#0A66C2] hover:text-white' },
    { icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gmail.svg', url: 'mailto:hello@alexdev.com', label: 'Email', color: 'hover:bg-[#EA4335] hover:text-white' },
    { icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg', url: '#', label: 'Instagram', color: 'hover:bg-[#E4405F] hover:text-white' },
    { icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/x.svg', url: '#', label: 'Twitter/X', color: 'hover:bg-black hover:text-white' },
    { icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg', url: '#', label: 'Facebook', color: 'hover:bg-[#1877F2] hover:text-white' },
  ];

  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-gray-200 dark:border-border-dark pt-16 pb-8 mt-auto">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">AlexDev</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Building digital experiences that matter. Focused on performance, accessibility, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a 
                  key={social.label}
                  href={social.url} 
                  className={`size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-surface-dark transition-all duration-300 group shadow-sm ${social.color}`}
                  aria-label={social.label}
                >
                  <img src={social.icon} alt={social.label} className="size-5 dark:invert group-hover:invert-0 group-hover:brightness-0 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors">Projects</Link></li>
              <li><Link to="/certifications" className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Services</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-slate-600 dark:text-slate-400 text-sm">Web Development</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">Mobile App Dev</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">UI/UX Design</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">Cloud Architecture</li>
            </ul>
          </div>

          {/* Contact Me */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Contact Me</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <a 
              href="mailto:hello@alexdev.com" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-slate-900 font-bold text-sm transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              hello@alexdev.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm text-center md:text-left">
            © 2023 AlexDev. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;