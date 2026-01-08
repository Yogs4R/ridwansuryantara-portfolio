import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20 animate-fade-in-up">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
        <p><strong>Effective Date:</strong> October 2023</p>
        <p>By accessing the AlexDev portfolio website, you agree to the following terms and conditions.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Use of Website</h2>
        <p>The content on this website is for informational purposes only. You may view and share the links, but you may not claim the projects or certifications displayed as your own.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Intellectual Property</h2>
        <p>The designs, branding, and code specific to this portfolio are the property of AlexDev. All project materials, logos, and trademarks mentioned belong to their respective owners.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Disclaimer of Liability</h2>
        <p>We strive to keep information accurate, but we do not guarantee the completeness or reliability of any content. Use the site at your own risk.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time without prior notice. Continued use of the site signifies your acceptance of the updated terms.</p>
      </div>
    </div>
  );
};

export default TermsOfService;