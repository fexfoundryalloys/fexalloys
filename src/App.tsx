import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ProductsView from './components/ProductsView';
import InfrastructureView from './components/InfrastructureView';
import QualityView from './components/QualityView';
import GlobalPresenceView from './components/GlobalPresenceView';
import EnquiryForm from './components/EnquiryForm';
import CareersView from './components/CareersView';
import { Product } from './types';

export default function App() {
  const [currentTab, setTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // High-fidelity transition wrapper
  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomeView
            setTab={(tab) => setTab(tab)}
            onSelectProduct={(elem) => {
              setSelectedProduct(elem);
              setTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
      case 'about':
        return <AboutView />;
      case 'products':
        return (
          <ProductsView
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            setTab={(tab) => setTab(tab)}
          />
        );
      case 'infra':
        return <InfrastructureView />;
      case 'quality':
        return <QualityView />;
      case 'global':
        return <GlobalPresenceView />;
      case 'careers':
        return <CareersView />;
      case 'enquiry':
        return <EnquiryForm />;
      default:
        return <HomeView setTab={setTab} onSelectProduct={setSelectedProduct} />;
    }
  };

  const handleTabChange = (tabId: string) => {
    setTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-warm font-sans text-on-surface antialiased pt-20 flex flex-col justify-between selection:bg-industrial-red selection:text-white">
      {/* Top Navigation Panel */}
      <Navbar currentTab={currentTab} setTab={setTab} />

      {/* Main interactive viewport wrapper with micro animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Elegant Industrial Footer matching high corporate design */}
      <footer className="bg-[#031534] text-white pt-20 pb-12 mt-16 border-t border-white/5 relative z-10" id="global-footer">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
            
            {/* Column 1 - Brand Summary */}
            <div className="md:col-span-5 space-y-6">
              <div
                onClick={() => handleTabChange('home')}
                className="cursor-pointer hover:opacity-80 transition-opacity inline-block"
              >
                <span className="font-display font-extrabold text-white tracking-tight leading-none" style={{ fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
                  <span>FeX</span>{' '}
                  <span className="tracking-widest" style={{ fontSize: '1.1rem', letterSpacing: '0.15em' }}>FOUNDRY ALLOYS</span>
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                ISO 9001:2015 Certified manufacturer supplying high-performance nodularisers, customized inoculants, and specialty cored wires to automotive, aeronautical and structural foundries globally.
              </p>
              <div className="text-slate-500 text-xs font-mono">
                REG NO: MET-25000-IND // OFF-OFFLINESECURE
              </div>
            </div>

            {/* Column 2 - Main Directories */}
            <div className="md:col-span-3 md:col-start-7 space-y-4">
              <h5 className="font-display font-extrabold text-[#C0202A] text-xs uppercase tracking-widest font-mono">Quick Links</h5>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                {['home', 'about', 'products', 'infra'].map((lnk) => (
                  <li key={lnk}>
                    <button
                      onClick={() => handleTabChange(lnk)}
                      className="hover:text-white transition-all hover:underline outline-none text-left capitalize cursor-pointer"
                    >
                      {lnk === 'infra' ? 'Infrastructure' : lnk}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - QA and Shipping */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="font-display font-extrabold text-[#C0202A] text-xs uppercase tracking-widest font-mono">Get In Touch</h5>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                {[
                  { id: 'quality', label: 'Quality Controls' },
                  { id: 'enquiry', label: 'Contact Sales / RFQ' }
                ].map((lnk) => (
                  <li key={lnk.id}>
                    <button
                      onClick={() => handleTabChange(lnk.id)}
                      className="hover:text-white transition-all hover:underline outline-none text-left cursor-pointer"
                    >
                      {lnk.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom attribution copyright line */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-slate-500 text-xs gap-4 font-mono">
            <div>
              © 2026 FeX Foundry Alloys Pvt Ltd. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/fex-foundry-alloys-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <span>•</span>
              <span>ISO 9001 Approved</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
