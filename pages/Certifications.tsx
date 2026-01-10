import React, { useState } from 'react';
import { CERTIFICATIONS } from '../constants';
import { Certification } from '../types';

const Certifications: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [publisherFilter, setPublisherFilter] = useState('all');

  const years = Array.from(new Set(CERTIFICATIONS.map(c => c.year))).sort().reverse();
  const publishers = Array.from(new Set(CERTIFICATIONS.map(c => c.issuer))).sort();

  const filteredCerts = CERTIFICATIONS.filter(cert => {
    const categoryMatch = categoryFilter === 'all' || categoryFilter.toLowerCase() === cert.type.toLowerCase();
    const yearMatch = yearFilter === 'all' || yearFilter === cert.year;
    const publisherMatch = publisherFilter === 'all' || cert.issuer === publisherFilter;
    return categoryMatch && yearMatch && publisherMatch;
  });

  const professionalCerts = filteredCerts.filter(c => c.type === 'Professional');
  const courseCerts = filteredCerts.filter(c => c.type === 'Course');
  const projectCerts = filteredCerts.filter(c => c.type === 'Project');

  return (
    <div className="w-full flex flex-col items-center animate-fade-in-up">
      <div className="w-full max-w-[960px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="text-slate-900 dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-tighter">
            Licenses & Certifications
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg font-normal leading-relaxed max-w-2xl">
            A showcase of my continuous learning journey, professional qualifications, and industry-recognized achievements.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[960px] px-4 sm:px-6 lg:px-8 mb-8 z-40">
        <div className="bg-white dark:bg-card-dark rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row gap-4 items-end justify-between">
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* Category Filter */}
            <div className="flex flex-col gap-1.5 w-full md:w-48">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Category</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111a22] text-slate-900 dark:text-white focus:border-primary focus:ring-primary text-sm py-2.5 pl-4 pr-10 cursor-pointer transition-shadow hover:shadow-sm"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="professional">Professional</option>
                  <option value="course">Course</option>
                  <option value="project">Project Certification</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xl">expand_more</span>
              </div>
            </div>

            {/* Publisher Filter */}
            <div className="flex flex-col gap-1.5 w-full md:w-48">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Publisher</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111a22] text-slate-900 dark:text-white focus:border-primary focus:ring-primary text-sm py-2.5 pl-4 pr-10 cursor-pointer transition-shadow hover:shadow-sm"
                  value={publisherFilter}
                  onChange={(e) => setPublisherFilter(e.target.value)}
                >
                  <option value="all">All Publishers</option>
                  {publishers.map(pub => (
                    <option key={pub} value={pub}>{pub}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xl">expand_more</span>
              </div>
            </div>

            {/* Year Filter */}
            <div className="flex flex-col gap-1.5 w-full md:w-32">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-1">Year</label>
              <div className="relative">
                <select 
                  className="w-full appearance-none rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#111a22] text-slate-900 dark:text-white focus:border-primary focus:ring-primary text-sm py-2.5 pl-4 pr-10 cursor-pointer transition-shadow hover:shadow-sm"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xl">expand_more</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto flex justify-end">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-surface-dark px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span>{filteredCerts.length} Items</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[960px] px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        {filteredCerts.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 dark:bg-card-dark rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
             <span className="material-symbols-outlined text-4xl text-gray-400 mb-4">search_off</span>
             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No certificates found</h3>
             <p className="text-slate-500 dark:text-gray-400">Try adjusting your filters to see more results.</p>
             <button 
               onClick={() => { setCategoryFilter('all'); setYearFilter('all'); setPublisherFilter('all'); }}
               className="mt-6 px-4 py-2 bg-primary text-slate-900 font-bold rounded-lg text-sm hover:bg-primary-dark transition-colors"
             >
               Clear Filters
             </button>
          </div>
        ) : (
          <>
            {professionalCerts.length > 0 && (
              <CertSection 
                title="Professional Certifications" 
                icon="verified" 
                data={professionalCerts} 
              />
            )}

            {courseCerts.length > 0 && (
              <CertSection 
                title="Course Certifications" 
                icon="school" 
                data={courseCerts} 
              />
            )}

            {projectCerts.length > 0 && (
              <CertSection 
                title="Project Certifications" 
                icon="architecture" 
                data={projectCerts} 
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const CertSection = ({ title, icon, data }: { title: string, icon: string, data: Certification[] }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
          <h2 className="text-slate-900 dark:text-white text-2xl font-black">{title}</h2>
        </div>
        
        {/* Simple Arrows Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1a2633] hover:bg-gray-200 dark:hover:bg-[#2a3b4d] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </button>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 px-2 whitespace-nowrap">
              {page} / {totalPages}
            </span>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="size-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1a2633] hover:bg-gray-200 dark:hover:bg-[#2a3b4d] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentItems.map((cert) => <CertCard key={cert.id} cert={cert} />)}
      </div>
    </section>
  );
};

const CertCard: React.FC<{ cert: Certification }> = ({ cert }) => (
  <div className={`group flex flex-col bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden ${cert.hoverColor ? cert.hoverColor : 'hover:border-primary/50 hover:shadow-primary/20'} hover:-translate-y-1`}>
    <div className="h-40 w-full bg-cover bg-center relative" style={{ backgroundImage: `url("${cert.imageUrl}")` }}>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
    </div>
    <div className="p-5 flex flex-col flex-1 gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-slate-900 dark:text-white text-lg font-black leading-tight group-hover:text-inherit transition-colors">{cert.title}</h3>
        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
           <span>{cert.issuer}</span>
           <span>•</span>
           <span>{cert.date}</span>
        </div>
        <p className="text-slate-500 dark:text-gray-400 text-xs mt-2 line-clamp-2">{cert.description}</p>
      </div>
      <a href={cert.credentialUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-lg h-10 px-4 bg-slate-100 dark:bg-[#233648] hover:bg-slate-200 dark:hover:bg-[#2f455a] text-slate-700 dark:text-white text-xs font-black uppercase tracking-widest transition-all">
        <span>Verify Credential</span>
        <span className="material-symbols-outlined text-[18px]">open_in_new</span>
      </a>
    </div>
  </div>
);

export default Certifications;