import React, { useState } from 'react';
import { EDUCATION, ALL_TOOLS } from '../constants';

const About: React.FC = () => {
  const [activeToolCategory, setActiveToolCategory] = useState('All');
  
  const categories = ['All', 'Language', 'Frontend', 'Backend & DB', 'Data & Auto', 'Cloud & DevOps', 'Design', 'IDE & Tools'];
  
  const filteredTools = activeToolCategory === 'All' 
    ? ALL_TOOLS 
    : ALL_TOOLS.filter(t => t.category === activeToolCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col gap-12 md:gap-20 animate-fade-in-up">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-xl overflow-hidden shadow-2xl bg-surface-dark border border-border-dark">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop")' }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col text-center md:text-left flex-1">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">Available for hire</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4 tracking-tighter">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Alex</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            I build accessible, pixel-perfect, and performant web experiences. A Full-Stack Developer specializing in the JavaScript ecosystem, cloud architecture, and modern UI design.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { value: '5+', label: 'Years Experience' },
          { value: '20+', label: 'Projects Shipped' },
          { value: '12', label: 'Certifications' },
        ].map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-border-dark shadow-sm hover:border-primary/50 transition-colors group">
            <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{stat.value}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest mt-1">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* My Journey */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-8 w-1 bg-primary rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">My Journey</h2>
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
          <p className="mb-4">
            I started my coding journey 5 years ago during my college days. What began as a curiosity about how websites worked quickly turned into a passion for creating intuitive user experiences and robust backend systems.
          </p>
          <p>
            Over the years, I've had the privilege of working at a fast-paced start-up, a design studio, and essentially "wearing many hats" to deliver software solutions. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
        </div>
      </section>

      {/* Educational History */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-1 bg-primary rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Educational History</h2>
        </div>
        <div className="relative border-l-2 border-border-dark ml-3 md:ml-6 space-y-12 pb-4">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative pl-8 md:pl-12">
              <span className={`absolute -left-[9px] top-6 h-4 w-4 rounded-full border-2 bg-background-dark ${edu.color === 'border-primary' ? 'border-primary' : 'border-border-dark'}`}></span>
              
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* Logo Section */}
                <div className="shrink-0 p-1.5 bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark shadow-sm mt-1">
                  <img 
                    src={edu.logo} 
                    alt={`${edu.school} Logo`} 
                    className="size-12 rounded-lg object-cover" 
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                    <span className={`self-start sm:self-auto text-sm font-mono px-2 py-1 rounded whitespace-nowrap ${edu.color === 'border-primary' ? 'text-primary bg-primary/10' : 'text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-surface-dark'}`}>{edu.period}</span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-3">{edu.degree}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills - New Toolbox */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-1 bg-primary rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveToolCategory(cat)}
               className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                 activeToolCategory === cat
                   ? 'bg-primary text-slate-900 shadow-lg shadow-primary/20'
                   : 'bg-gray-100 dark:bg-surface-dark text-slate-500 hover:text-slate-900 dark:hover:text-white'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {filteredTools.map((tool) => (
            <a 
              key={tool.name}
              href={tool.url}
              className={`group flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-100 dark:border-border-dark transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-lg ${tool.color}`}
            >
              <div className="size-10 mb-3 transition-transform duration-500 group-hover:scale-110">
                <img src={tool.logo} alt={tool.name} className="size-full dark:invert group-hover:invert-0" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 group-hover:text-inherit text-center">{tool.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Profile Dashboard */}
      <section id="profile-dashboard">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-8 w-1 bg-primary rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">Profile Dashboard</h2>
        </div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          
          {/* 1. GitHub */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#2ea44f] hover:shadow-[0_0_20px_rgba(46,164,79,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#2ea44f]"></div>
            <div className="p-5 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-[#2ea44f]/10 text-[#2ea44f] flex items-center justify-center group-hover:bg-[#2ea44f] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">GitHub</h3>
                    <p className="text-xs text-gray-400 group-hover:text-[#2ea44f] transition-colors">@AlexDev</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-gray-500 group-hover:text-[#2ea44f] transition-colors">north_east</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-auto">
                 <div className="bg-[#161b22] p-3 rounded-lg border border-[#30363d] group-hover:border-[#2ea44f]/30 transition-colors">
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Repositories</div>
                    <div className="text-xl font-bold text-white">48</div>
                 </div>
                 <div className="bg-[#161b22] p-3 rounded-lg border border-[#30363d] group-hover:border-[#2ea44f]/30 transition-colors">
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Contributions</div>
                    <div className="text-xl font-bold text-[#2ec866]">1,832</div>
                 </div>
                 <div className="bg-[#161b22] p-3 rounded-lg border border-[#30363d] group-hover:border-[#2ea44f]/30 transition-colors">
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Followers</div>
                    <div className="text-xl font-bold text-white">124</div>
                 </div>
                 <div className="bg-[#161b22] p-3 rounded-lg border border-[#30363d] group-hover:border-[#2ea44f]/30 transition-colors">
                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">Starred</div>
                    <div className="text-xl font-bold text-[#e3b341]">340</div>
                 </div>
              </div>
            </div>
          </a>

          {/* 2. LinkedIn */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#0a66c2] hover:shadow-[0_0_20px_rgba(10,102,194,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#0a66c2]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#0a66c2]/10 text-[#0a66c2] flex items-center justify-center group-hover:bg-[#0a66c2] group-hover:text-white transition-colors">
                         <span className="material-symbols-outlined">work</span>
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">LinkedIn</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#0a66c2] transition-colors">Professional Network</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#0a66c2] transition-colors">north_east</span>
                </div>
                
                <div className="mt-auto space-y-4">
                   <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a66c2]/10 border border-[#0a66c2]/20">
                      <div className="flex items-center gap-2">
                         <span className="material-symbols-outlined text-[#0a66c2] text-lg">group</span>
                         <span className="text-xs font-bold text-white">Connections</span>
                      </div>
                      <span className="text-lg font-bold text-white">500+</span>
                   </div>
                   <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                         <div className="text-2xl font-bold text-white">1.2k</div>
                         <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Profile Views</div>
                      </div>
                       <div>
                         <div className="text-2xl font-bold text-white">12</div>
                         <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Certifications</div>
                      </div>
                   </div>
                </div>
             </div>
          </a>

          {/* 3. Microsoft Learn */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#0078d4] hover:shadow-[0_0_20px_rgba(0,120,212,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#0078d4]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#0078d4]/10 text-[#0078d4] flex items-center justify-center group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
                         <span className="material-symbols-outlined">school</span>
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">Microsoft Learn</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#0078d4] transition-colors">Achievement Profile</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#0078d4] transition-colors">north_east</span>
                </div>
                
                <div className="flex flex-col gap-5 mt-auto">
                   <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full border-4 border-[#0078d4] flex items-center justify-center text-[#0078d4] font-bold text-xs bg-[#0078d4]/10 group-hover:bg-[#0078d4] group-hover:text-white transition-colors">
                          Lvl 12
                      </div>
                      <div>
                          <div className="text-2xl font-bold text-white">142,500</div>
                          <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Total XP Points</div>
                      </div>
                   </div>
                   <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-700/50">
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">84</div>
                        <div className="text-[9px] text-gray-400 uppercase">Badges</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">12</div>
                        <div className="text-[9px] text-gray-400 uppercase">Certs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-lg">3</div>
                        <div className="text-[9px] text-gray-400 uppercase">Trophies</div>
                      </div>
                   </div>
                </div>
             </div>
          </a>

          {/* 4. LeetCode */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#ffa116] hover:shadow-[0_0_20px_rgba(255,161,22,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#ffa116]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#ffa116]/10 text-[#ffa116] flex items-center justify-center group-hover:bg-[#ffa116] group-hover:text-white transition-colors">
                         <span className="material-symbols-outlined">code_blocks</span>
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">LeetCode</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#ffa116] transition-colors">Problem Solving</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#ffa116] transition-colors">north_east</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-auto">
                   <div className="bg-[#283245] p-2 rounded-lg text-center group-hover:bg-[#ffa116]/10 transition-colors">
                      <div className="text-[#00b8a3] font-bold text-lg">150</div>
                      <div className="text-[9px] text-gray-400 uppercase font-bold">Easy</div>
                   </div>
                   <div className="bg-[#283245] p-2 rounded-lg text-center group-hover:bg-[#ffa116]/10 transition-colors">
                      <div className="text-[#ffc01e] font-bold text-lg">215</div>
                      <div className="text-[9px] text-gray-400 uppercase font-bold">Med</div>
                   </div>
                   <div className="bg-[#283245] p-2 rounded-lg text-center group-hover:bg-[#ffa116]/10 transition-colors">
                      <div className="text-[#ff375f] font-bold text-lg">45</div>
                      <div className="text-[9px] text-gray-400 uppercase font-bold">Hard</div>
                   </div>
                </div>
                <div className="text-center mt-3 pt-2 border-t border-gray-700/50">
                   <span className="text-gray-400 text-xs">Global Rank: <span className="text-white font-bold">Top 5%</span></span>
                </div>
             </div>
          </a>

          {/* 5. HackerRank */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#2ec866] hover:shadow-[0_0_20px_rgba(46,200,102,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#2ec866]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#2ec866]/10 text-[#2ec866] flex items-center justify-center group-hover:bg-[#2ec866] group-hover:text-white transition-colors">
                         <span className="material-symbols-outlined">terminal</span>
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">HackerRank</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#2ec866] transition-colors">Coding Skills</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#2ec866] transition-colors">north_east</span>
                </div>
                
                <div className="flex items-end justify-between mt-auto">
                   <div>
                      <div className="text-2xl font-bold text-white mb-1">5 Star</div>
                      <div className="text-xs text-gray-400">Problem Solving</div>
                      <div className="flex gap-2 mt-3">
                         <span className="px-2 py-1 rounded bg-[#2ec866]/20 text-[#2ec866] text-[9px] font-bold">Python (Gold)</span>
                         <span className="px-2 py-1 rounded bg-[#2ec866]/20 text-[#2ec866] text-[9px] font-bold">SQL (Gold)</span>
                      </div>
                   </div>
                   <div className="size-10 rounded-full border-2 border-[#2ec866] flex items-center justify-center text-[#2ec866] bg-[#2ec866]/5 group-hover:bg-[#2ec866] group-hover:text-white transition-colors mb-2">
                      <span className="material-symbols-outlined text-lg">star</span>
                   </div>
                </div>
             </div>
          </a>

          {/* 6. Google Developer */}
           <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#4285F4] hover:shadow-[0_0_20px_rgba(66,133,244,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#4285F4]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-white flex items-center justify-center">
                         <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg" className="size-6" alt="Google" />
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">Google Dev</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#4285F4] transition-colors">Badges Profile</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#4285F4] transition-colors">north_east</span>
                </div>
                
                <div className="mt-auto">
                   <div className="flex items-end gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">45</span>
                      <span className="text-xs text-gray-400 uppercase font-bold mb-1">Total Badges</span>
                   </div>
                   <div className="w-full h-1.5 bg-[#283245] rounded-full overflow-hidden mb-4">
                      <div className="h-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] w-[85%]"></div>
                   </div>
                   <div className="flex items-center gap-2 text-gray-400 pt-3 border-t border-gray-700/50">
                      <span className="material-symbols-outlined text-sm">groups</span>
                      <span className="text-[9px] font-medium uppercase tracking-wide">Member Google Developer Group Semarang</span>
                   </div>
                </div>
             </div>
          </a>

           {/* 7. FreeCodeCamp */}
           <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/freecodecamp.svg" className="size-8 invert" alt="fCC" />
                      <h3 className="text-white font-bold text-base">freeCodeCamp</h3>
                   </div>
                   <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[9px] font-bold uppercase border border-white/20">Verified</span>
                </div>
                <div className="mt-auto">
                   <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-white">6</span>
                      <span className="text-sm text-gray-400 font-medium group-hover:text-white transition-colors">Professional Certifications</span>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#283245] text-white text-[9px] font-bold uppercase tracking-wider border border-gray-700">RWD</span>
                      <span className="px-2.5 py-1 rounded bg-[#283245] text-white text-[9px] font-bold uppercase tracking-wider border border-gray-700">JS DSA</span>
                      <span className="px-2.5 py-1 rounded bg-[#283245] text-white text-[9px] font-bold uppercase tracking-wider border border-gray-700">Frontend</span>
                      <span className="px-2.5 py-1 rounded bg-[#283245] text-white text-[9px] font-bold uppercase tracking-wider border border-gray-700">Backend</span>
                   </div>
                </div>
             </div>
          </a>

           {/* 8. Roblox Studio */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#E2231A] hover:shadow-[0_0_20px_rgba(226,35,26,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#E2231A]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-white flex items-center justify-center">
                         <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/roblox.svg" className="size-6" alt="Roblox" />
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">Roblox Studio</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#E2231A] transition-colors">Developer</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#E2231A] transition-colors">north_east</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-auto">
                   <div className="flex flex-col items-center justify-center bg-[#E2231A]/10 p-3 rounded-lg border border-[#E2231A]/20 group-hover:bg-[#E2231A] group-hover:text-white transition-colors">
                      <div className="text-xl font-bold text-[#E2231A] group-hover:text-white">500k+</div>
                      <div className="text-[9px] text-gray-400 uppercase font-bold group-hover:text-white/80">Visits</div>
                   </div>
                   <div className="flex flex-col items-center justify-center bg-[#E2231A]/10 p-3 rounded-lg border border-[#E2231A]/20 group-hover:bg-[#E2231A] group-hover:text-white transition-colors">
                      <div className="text-xl font-bold text-[#E2231A] group-hover:text-white">8</div>
                      <div className="text-[9px] text-gray-400 uppercase font-bold group-hover:text-white/80">Games</div>
                   </div>
                </div>
             </div>
          </a>

          {/* 9. CognitiveClass */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#137fec] hover:shadow-[0_0_20px_rgba(19,127,236,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#137fec]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#137fec] text-white flex items-center justify-center font-bold text-xs border border-white/20">AI</div>
                      <div>
                         <h3 className="text-white font-bold text-base">CognitiveClass</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#137fec] transition-colors">IBM Training</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#137fec] transition-colors">north_east</span>
                </div>
                
                <div className="mt-auto">
                   <div className="flex items-center justify-between mb-4">
                      <div>
                         <div className="text-3xl font-black text-white">24</div>
                         <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Badges Earned</div>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="size-8 rounded-full bg-[#137fec] border-2 border-[#1e293b] flex items-center justify-center text-[9px] font-bold text-white">DS</div>
                        <div className="size-8 rounded-full bg-[#283245] border-2 border-[#1e293b] flex items-center justify-center text-[9px] font-bold text-white">PY</div>
                        <div className="size-8 rounded-full bg-[#1e293b] border-2 border-[#334155] flex items-center justify-center text-[9px] font-bold text-gray-400">+22</div>
                      </div>
                   </div>
                   <div className="w-full h-1.5 bg-[#283245] rounded-full overflow-hidden">
                      <div className="h-full bg-[#137fec] w-[85%]"></div>
                   </div>
                   <div className="flex justify-between mt-2 text-[9px] text-gray-400 uppercase font-bold">
                      <span>Progress</span>
                      <span className="text-[#137fec]">Top 10%</span>
                   </div>
                </div>
             </div>
          </a>

           {/* 10. SoloLearn */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#10C8FF] hover:shadow-[0_0_20px_rgba(16,200,255,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#10C8FF]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-white flex items-center justify-center">
                         <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sololearn.svg" className="size-6" alt="SoloLearn" />
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">SoloLearn</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#10C8FF] transition-colors">Skill Mastery</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#10C8FF] transition-colors">north_east</span>
                </div>
                
                <div className="mt-auto">
                   <div className="flex items-end justify-between mb-2">
                      <span className="text-3xl font-bold text-white">Lvl 15</span>
                      <span className="text-xs text-[#10C8FF] font-bold group-hover:text-white transition-colors">12k XP</span>
                   </div>
                   <div className="w-full h-1.5 bg-[#283245] rounded-full overflow-hidden mb-3">
                      <div className="h-full bg-[#10C8FF] w-[65%]"></div>
                   </div>
                   <div className="flex items-center justify-between text-[9px] text-gray-400 uppercase font-bold tracking-wider pt-2 border-t border-gray-700/50">
                      <span>Certificates</span>
                      <span className="text-white text-sm">15</span>
                   </div>
                </div>
             </div>
          </a>

          {/* 11. Coursera */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#0056d2] hover:shadow-[0_0_20px_rgba(0,86,210,0.2)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#0056d2]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#0056d2]/10 text-[#0056d2] flex items-center justify-center group-hover:bg-[#0056d2] group-hover:text-white transition-colors">
                         <span className="material-symbols-outlined">workspace_premium</span>
                      </div>
                      <div>
                         <h3 className="text-white font-bold text-base">Coursera</h3>
                         <p className="text-xs text-gray-400 group-hover:text-[#0056d2] transition-colors">Learning</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-[#0056d2] transition-colors">north_east</span>
                </div>
                
                <div className="space-y-4 mt-auto">
                   <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Certifications</span>
                      <span className="text-white font-bold">18</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Learning Hours</span>
                      <span className="text-white font-bold">450+</span>
                   </div>
                   <div className="w-full h-1.5 bg-[#283245] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0056d2] w-3/4"></div>
                   </div>
                   <div className="text-center">
                      <span className="text-[9px] text-gray-500 font-bold uppercase">Top 1% Learner in Tech</span>
                   </div>
                </div>
             </div>
          </a>

           {/* 12. Dicoding */}
          <a href="#" className="group relative overflow-hidden rounded-xl bg-[#1e293b] border border-[#334155] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 active:scale-95 flex flex-col h-full">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#2d3e50]"></div>
             <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#2d3e50] text-white flex items-center justify-center font-bold border border-white/20">D</div>
                      <div>
                         <h3 className="text-white font-bold text-base">Dicoding</h3>
                         <p className="text-xs text-gray-400 group-hover:text-white transition-colors">Academy Learner</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">north_east</span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mt-auto">
                   <div className="bg-[#283245] p-3 rounded-lg text-center group-hover:bg-[#2d3e50] transition-colors">
                      <div className="text-white font-bold text-xl">18</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold">Classes</div>
                   </div>
                   <div className="bg-[#283245] p-3 rounded-lg text-center group-hover:bg-[#2d3e50] transition-colors">
                      <div className="text-white font-bold text-xl">2.5k</div>
                      <div className="text-[10px] text-gray-400 uppercase font-bold">Points</div>
                   </div>
                </div>
             </div>
          </a>

        </div>
      </section>
    </div>
  );
};

export default About;