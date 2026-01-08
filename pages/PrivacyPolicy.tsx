import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20 animate-fade-in-up">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
        <p><strong>Last Updated:</strong> October 2023</p>
        <p>Your privacy is important to us. This Privacy Policy explains how AlexDev ("we", "our", or "us") collects, uses, and protects your information when you visit our portfolio website.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
        <p>This is a portfolio website and we do not actively collect personal data unless you contact us directly via email. We may use third-party tools like Google Analytics to collect anonymous usage data to improve user experience.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. Cookies</h2>
        <p>We use cookies to save your theme preference (Dark/Light mode). These cookies are essential for the basic functionality of the site.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Third-Party Links</h2>
        <p>Our website contains links to other sites (LinkedIn, GitHub, etc.). We are not responsible for the privacy practices of these external websites.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@alexdev.com" className="text-primary hover:underline">hello@alexdev.com</a>.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;