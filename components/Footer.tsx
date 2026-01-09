import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { FaXTwitter as Twitter, FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram, FaFacebook as Facebook } from 'react-icons/fa6'; 

const Footer: React.FC = () => {
  const socials = [
    { icon: Github, url: 'http://github.com/Yogs4R', label: 'GitHub', color: 'hover:bg-[#181717] hover:text-white' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/ridwansuryantara/', label: 'LinkedIn', color: 'hover:bg-[#0A66C2] hover:text-white' },
    { icon: Mail, url: 'mailto:ridwansuryantara@gmail.com', label: 'Email', color: 'hover:bg-[#EA4335] hover:text-white' },
    { icon: Instagram, url: 'https://www.instagram.com/r.yogss', label: 'Instagram', color: 'hover:bg-[#E4405F] hover:text-white' },
    { icon: Twitter, url: 'https://x.com/Yogs4R', label: 'Twitter/X', color: 'hover:bg-black hover:text-white' },
    { icon: Facebook, url: 'https://www.facebook.com/ridwan.suryantara', label: 'Facebook', color: 'hover:bg-[#1877F2] hover:text-white' },
  ];

  return (
    <footer className="w-full bg-white dark:bg-background-dark border-t border-gray-200 dark:border-border-dark pt-16 pb-8 mt-auto">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Ridwan Suryantara</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Everything is an idea. Imagination to reality.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className={`
                      size-10 flex items-center justify-center rounded-lg 
                      shadow-sm
                      bg-gray-100 text-slate-600 
                      dark:bg-slate-800 dark:text-white
                      dark:border dark:border-slate-700
                      transition-all duration-300 ease-out
                      hover:-translate-y-1 
                      hover:scale-110
                      hover:shadow-lg
                      active:scale-90 
                      active:duration-100
                      ${social.color}
                    `}
                >
                  <IconComponent className="size-5 dark:invert group-hover:invert-0 group-hover:brightness-0 transition-all" aria-hidden="true" />
                </a>
              );
            })}
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
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Skills</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-slate-600 dark:text-slate-400 text-sm">Data Analysis</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">Android Developer</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">n8n Enthusiast</li>
              <li className="text-slate-600 dark:text-slate-400 text-sm">Roblox Developer</li>
            </ul>
          </div>

          {/* Contact Me */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6">Contact Me</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <a 
              href="mailto:ridwansuryantara@gmail.com" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-slate-900 font-bold text-sm transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
              aria-label="Email Me"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              ridwansuryantara@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ridwan Suryantara. All rights reserved.
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