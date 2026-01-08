import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resumeRef.current && !resumeRef.current.contains(event.target as Node)) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const handleDownload = (type: 'image' | 'word' | 'pdf') => {
    const content = `This is a placeholder content for the ${type.toUpperCase()} version of AlexDev's Resume.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    let extension = type === 'image' ? 'png' : type === 'word' ? 'docx' : 'pdf';
    a.download = `AlexDev_Resume.${extension}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    setIsResumeOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b border-solid border-gray-200 dark:border-border-dark bg-white/90 dark:bg-background-dark/95 backdrop-blur-sm transition-all duration-300">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <header className="flex items-center justify-between whitespace-nowrap py-4">
          <div className="flex items-center gap-3">
            <h2 className="text-slate-900 dark:text-white text-xl font-black leading-tight tracking-tighter">AlexDev</h2>
          </div>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-bold text-sm leading-normal"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="size-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-surface-dark text-slate-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-[#2a4055] transition-colors"
                aria-label="Toggle theme"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </button>

              <div className="relative hidden sm:block" ref={resumeRef}>
                <button 
                  onClick={() => setIsResumeOpen(!isResumeOpen)}
                  className={`h-10 px-5 cursor-pointer items-center justify-center rounded-lg bg-primary hover:bg-primary-dark text-slate-900 text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20 flex ${isResumeOpen ? 'scale-105 ring-2 ring-primary/50' : ''}`}
                >
                  <span className="mr-2 material-symbols-outlined text-[20px]">download</span>
                  <span>Resume</span>
                  <span className="ml-1 material-symbols-outlined text-[16px]">{isResumeOpen ? 'expand_less' : 'expand_more'}</span>
                </button>

                {isResumeOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#1c2b39] rounded-xl shadow-xl border border-gray-100 dark:border-border-dark overflow-hidden animate-fade-in-up origin-top-right">
                    <div className="py-1">
                      {['image', 'word', 'pdf'].map((type) => (
                        <button 
                          key={type}
                          onClick={() => handleDownload(type as any)}
                          className="w-full text-left px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-[#2a4055] hover:text-primary transition-colors flex items-center gap-3 capitalize"
                        >
                          <span className="material-symbols-outlined text-lg">
                            {type === 'image' ? 'image' : type === 'word' ? 'description' : 'picture_as_pdf'}
                          </span>
                          Save as {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                className="md:hidden text-slate-900 dark:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-border-dark p-4 shadow-xl">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold text-base"
                    : "text-slate-600 dark:text-slate-300 font-medium text-base"
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
               <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Download Resume</div>
               <div className="grid grid-cols-1 gap-2">
                 {['image', 'word', 'pdf'].map((type) => (
                   <button 
                     key={type}
                     onClick={() => handleDownload(type as any)}
                     className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-[#111a22] hover:bg-gray-100 dark:hover:bg-[#1a2633] text-slate-700 dark:text-slate-200 transition-colors border border-gray-200 dark:border-gray-800 capitalize"
                   >
                     <span className="material-symbols-outlined">
                        {type === 'image' ? 'image' : type === 'word' ? 'description' : 'picture_as_pdf'}
                     </span>
                     <span className="text-sm font-bold">{type} Format</span>
                   </button>
                 ))}
               </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;