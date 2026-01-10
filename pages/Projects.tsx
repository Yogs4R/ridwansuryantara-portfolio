import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const filters = ['All', 'Web Dev', 'Mobile Apps', 'Design Systems', 'Open Source', 'AI'];

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // Pagination Logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done': return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'In Progress': return 'bg-primary/10 text-primary border-primary/20';
      case 'Planning': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="flex-grow">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col">
        {/* Header */}
        <section className="px-4 md:px-8 py-12 md:py-20 flex flex-col items-center justify-center text-center animate-fade-in-up">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 text-slate-900 dark:text-white">
              Built for Impact.
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              I transform complex problems into elegant digital solutions. Here is a selection of my best work across web, mobile, and system design.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="px-4 md:px-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  filter === f
                    ? 'bg-primary text-slate-900 shadow-lg shadow-primary/20'
                    : 'bg-white dark:bg-[#233648] hover:bg-gray-100 dark:hover:bg-[#2f455a] border border-gray-200 dark:border-transparent text-slate-700 dark:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 md:px-8 py-8 mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {displayedProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {displayedProjects.map((project: Project) => (
                <article key={project.id} className="group flex flex-col bg-white dark:bg-[#1a2633] rounded-2xl overflow-hidden border border-gray-200 dark:border-[#2a3b4d] hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 duration-500"></div>
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("${project.imageUrl}")` }}
                    ></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-3 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 py-1 rounded bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-200 text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                      {/* Status Badge */}
                      <div className={`self-start px-2.5 py-1 rounded border text-[10px] font-black uppercase tracking-widest ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                      {project.demoUrl && (
                        <a href={project.demoUrl} className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-primary hover:bg-primary-dark text-slate-900 text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                          Demo
                        </a>
                      )}
                      <a href={project.codeUrl} className={`flex-1 flex items-center justify-center gap-2 h-10 rounded-lg bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#2f455a] text-gray-900 dark:text-white text-sm font-bold transition-colors ${!project.demoUrl ? 'w-full' : ''}`}>
                        <span className="material-symbols-outlined text-[18px]">code</span>
                        {project.demoUrl ? 'Code' : 'View on GitHub'}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">folder_off</span>
              <p className="text-xl font-bold text-slate-600 dark:text-slate-400">No projects found in this category.</p>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#233648] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-600 dark:text-slate-300"
              >
                <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`size-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                    currentPage === pageNum
                      ? 'bg-primary text-slate-900 shadow-md'
                      : 'bg-transparent border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-[#233648]'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="size-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#233648] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-600 dark:text-slate-300"
              >
                <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Projects;