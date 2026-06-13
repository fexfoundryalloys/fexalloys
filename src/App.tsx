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
import CatalogueModal from './components/CatalogueModal';
import { Product } from './types';

export default function App() {
  const [currentTab, setTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [catalogueModalOpen, setCatalogueModalOpen] = useState(false);

  const catalogueUrl = `${import.meta.env.BASE_URL}FeX Catalogue 2026.pdf`;

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
            onOpenCatalogueModal={() => setCatalogueModalOpen(true)}
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
            onOpenCatalogueModal={() => setCatalogueModalOpen(true)}
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
        return <HomeView setTab={setTab} onSelectProduct={setSelectedProduct} onOpenCatalogueModal={() => setCatalogueModalOpen(true)} />;
    }
  };

  const handleTabChange = (tabId: string) => {
    setTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-warm font-sans text-on-surface antialiased pt-20 flex flex-col justify-between selection:bg-industrial-red selection:text-white">
      <CatalogueModal
        isOpen={catalogueModalOpen}
        onClose={() => setCatalogueModalOpen(false)}
        catalogueUrl={catalogueUrl}
      />
      {/* Top Navigation Panel */}
      <Navbar currentTab={currentTab} setTab={setTab} onSelectProduct={(product) => { setSelectedProduct(product); setTab('products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />

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
            <div className="md:col-span-4 space-y-6">
              <div
                onClick={() => handleTabChange('home')}
                className="cursor-pointer hover:opacity-80 transition-opacity inline-block"
              >
                <img
                  src={`${import.meta.env.BASE_URL}logo/logofexalloys.png`}
                  alt="FeX Foundry Alloys"
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                ISO 9001:2015 Certified manufacturer supplying high-performance nodularisers, customized inoculants, and specialty cored wires to automotive, aeronautical and structural foundries globally.
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C0202A] mb-2">German Collaboration</p>
                <a
                  href="https://www.fesil-deutschland.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-xs hover:text-white transition-colors leading-relaxed"
                >
                  FESIL — Hochwertige Schmelzzusätze für die Gießereiindustrie ↗
                </a>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="md:col-span-2 md:col-start-6 space-y-4">
              <h5 className="font-display font-extrabold text-[#C0202A] text-xs uppercase tracking-widest font-mono">Quick Links</h5>
              <ul className="space-y-3 text-sm text-slate-400 font-medium">
                {['home', 'about', 'products', 'infra', 'quality', 'careers'].map((lnk) => (
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

            {/* Column 3 - Addresses */}
            <div className="md:col-span-4 md:col-start-9 space-y-5">
              <h5 className="font-display font-extrabold text-[#C0202A] text-xs uppercase tracking-widest font-mono">Our Locations</h5>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-1">Registered Office</p>
                  <p className="text-sm text-slate-400 leading-relaxed">AN-64C, Shalimar Bagh,<br />New Delhi 110088</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-1">Manufacturing Site</p>
                  <p className="text-sm text-slate-400 leading-relaxed">Village Liwaspur, Post Bahalgarh,<br />Sonipat, Haryana 131021</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-1">Warehouse</p>
                  <p className="text-sm text-slate-400 leading-relaxed">MIDC, Shiroli, Pune-Bangalore Highway,<br />Kolhapur 416122</p>
                </div>
              </div>
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
