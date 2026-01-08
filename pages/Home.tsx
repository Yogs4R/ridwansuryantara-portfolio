import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-slide-down">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-40 py-12 lg:py-20">
        <div className="@container">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 flex-1 text-center lg:text-left">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                  Building digital experiences that <span className="text-primary inline-block">matter</span>.
                </h1>
                <h2 className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently focused on accessible, human-centered products.
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <Link to="/projects" className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-slate-900 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                  <span className="truncate">Check out my work</span>
                </Link>
                <Link to="/about" className="flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-gray-300 dark:border-[#3e4f61] hover:bg-gray-100 dark:hover:bg-[#233648] text-slate-900 dark:text-white text-base font-bold transition-all duration-300 transform hover:-translate-y-1">
                  <span className="truncate">More about me</span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div 
                className="w-full max-w-[500px] aspect-square lg:aspect-[4/3] rounded-2xl bg-cover bg-center shadow-2xl shadow-black/20 relative overflow-hidden group transition-all duration-500 hover:shadow-primary/20"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop")' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 w-full max-w-[1280px] mx-auto pb-12">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center">
              My Developer Brands
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Fuenzer Studio',
                  desc: 'Creating immersive and interactive experiences on the Roblox platform. We build games that bring communities together through fun and creativity.',
                  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
                },
                {
                  title: 'Fuenzer Apps',
                  desc: 'Developing useful and engaging mobile applications for the Google Play Store. Focused on utility, user experience, and solving everyday problems.',
                  image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop'
                }
              ].map((brand, idx) => (
                <a key={idx} href="#" className="group relative block overflow-hidden rounded-xl border border-gray-200 dark:border-[#233648] hover:border-primary hover:ring-1 hover:ring-primary bg-white dark:bg-[#15202b] p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                   <div className="relative z-10 flex flex-col h-full gap-4">
                      <div className="flex items-center gap-3">
                         <div className="size-12 rounded-lg overflow-hidden shrink-0 shadow-sm border border-gray-100 dark:border-gray-800">
                           <img src={brand.image} alt={brand.title} className="w-full h-full object-cover" />
                         </div>
                         <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{brand.title}</h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                         {brand.desc}
                      </p>
                      <div className="pt-2">
                         <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
                            View Work
                            <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
                         </span>
                      </div>
                   </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;