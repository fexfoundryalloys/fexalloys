import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Star, ShieldCheck, Factory, Award, ZoomIn, X } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface HomeViewProps {
  setTab: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenCatalogueModal: () => void;
}

export default function HomeView({ setTab, onSelectProduct, onOpenCatalogueModal }: HomeViewProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; name: string } | null>(null);

  const homeProducts = PRODUCTS;

  return (
    <div id="home-view" className="w-full">
      {/* SECTION 1 - HERO */}
      <section className="bg-[#1A2A4A] py-16 md:py-24 w-full relative overflow-hidden flex items-center min-h-[75vh]" id="hero-section">
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Engineered Foundry Alloys. Consistent Chemistry. Global Delivery.
            </h1>
            <p className="font-sans text-lg text-surface-variant max-w-xl border-l-4 border-industrial-red pl-4 font-light">
              ISO 9001:2015 Certified | 25,000 MT/Year Capacity | 35+ Countries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setTab('products')}
                className="bg-industrial-red text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 text-center hover:bg-white hover:text-industrial-red transition-all duration-300 border-2 border-industrial-red shadow-lg active:scale-95 cursor-pointer"
                id="hero-explore-btn"
              >
                Explore Products
              </button>
              <button
                onClick={() => setTab('enquiry')}
                className="bg-transparent text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 text-center hover:bg-white hover:text-brand-primary transition-all duration-300 border-2 border-white active:scale-95 cursor-pointer"
                id="hero-contact-btn"
              >
                Contact Us
              </button>
              <button
                onClick={onOpenCatalogueModal}
                className="bg-transparent text-white font-sans text-xs tracking-wider uppercase font-bold py-4 px-8 text-center hover:bg-white hover:text-brand-primary transition-all duration-300 border-2 border-white/50 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                Download Catalogue
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block h-full relative border border-white/20 p-2 bg-[#101c33]/50 rounded shadow-2xl"
          >
            <img 
              alt="High-quality professional industrial photography of a modern metallurgical furnace." 
              className="w-full h-full object-cover aspect-[1.79] grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWDWsiCOviI-zK1iTVUipWKrduICr6Xv4-tRCG282cmxjO9ar2vgDQQKZW_pFrlHt9Y4gYkNjD-aP9bAXMwdfAewd_XnytlWv2bWtO3iMzuWvePhrXq0yNRYSoQKulZQTfuJabp_UvtkWNVUuoCIX0CvO0t4GyQ8oWQYfNO45QyAh6DE8_ajSAWl7778d8vQ0hrQ2NwbzMRsZDNuD_W7NOT5jmmrax_mkNSqCL0RNyAqq5Khy3lhmw5PzeFwX-kmLtrxvAnerUndo" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - STATS BAR */}
      <section className="bg-brand-primary border-t border-white/10 py-10 w-full shadow-md" id="stats-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="py-4 md:py-0 px-4">
              <span className="block font-display text-3xl md:text-4xl font-extrabold text-white mb-1">2008</span>
              <span className="font-sans text-xs tracking-wider text-surface-variant uppercase font-medium">Founded</span>
            </div>
            <div className="py-4 md:py-0 px-4">
              <span className="block font-display text-3xl md:text-4xl font-extrabold text-white mb-1">25,000 MT</span>
              <span className="font-sans text-xs tracking-wider text-surface-variant uppercase font-medium">Annual Capacity</span>
            </div>
            <div className="py-4 md:py-0 px-4">
              <span className="block font-display text-3xl md:text-4xl font-extrabold text-white mb-1">35+</span>
              <span className="font-sans text-xs tracking-wider text-surface-variant uppercase font-medium">Countries Served</span>
            </div>
            <div className="py-4 md:py-0 px-4">
              <span className="block font-display text-3xl md:text-4xl font-extrabold text-white mb-1">ISO 9001:2015</span>
              <span className="font-sans text-xs tracking-wider text-surface-variant uppercase font-medium">Certified Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - ABOUT SNIPPET */}
      <section className="bg-white py-20 md:py-28 w-full" id="about-snippet-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-navy" id="about-snippet-title">
              Consistent nodularity, controlled chemistry, and reliable performance across SG iron foundries worldwide
            </h2>
            <div className="w-16 h-1.5 bg-industrial-red"></div>
            <p className="font-sans text-base text-on-variant leading-relaxed text-slate-600">
              FeX Alloys stands at the forefront of metallurgical innovation. We specialize in the precise formulation and production of high-grade foundry alloys, ensuring structural integrity and performance in critical industrial applications worldwide. Our commitment to strict tolerances and consistent chemical composition makes us the trusted partner for foundries globally.
            </p>
            <p className="font-sans text-sm text-slate-500 italic">
              Our advanced induction platforms refine trace metallic elements down to decimal deviations.
            </p>
            <button 
              onClick={() => { setTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center font-sans text-xs tracking-wider uppercase font-bold text-industrial-red hover:text-dark-navy transition-all duration-200 group mt-4 cursor-pointer"
            >
              Read Our Story 
              <ArrowRight className="ml-2 transform group-hover:translate-x-1.5 transition-transform text-lg" size={16} />
            </button>
          </div>
          <div className="border border-surface-variant p-3 bg-surface-low rounded shadow-md group overflow-hidden">
            <img
              alt="FeX Foundry Alloys manufacturing facility"
              className="w-full object-cover aspect-[1.79] grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-[1.01]"
              src={`${import.meta.env.BASE_URL}infrastructure.png`}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 - PRODUCTS GRID */}
      <section className="bg-surface-low py-20 md:py-28 w-full" id="products-grid-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-dark-navy mb-4">
              Our Product Range
            </h2>
            <div className="w-16 h-1.5 bg-industrial-red mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:[&>*:nth-child(4)]:col-start-1 lg:[&>*:nth-child(5)]:col-start-2">
            {homeProducts.map((p) => (
              <motion.div 
                key={p.id}
                id={`home-prod-${p.id}`}
                whileHover={{ y: -6 }}
                className="bg-white p-8 border border-surface-variant/40 text-center hover:shadow-xl transition-all duration-300 rounded shadow-sm relative flex flex-col justify-between"
                onMouseEnter={() => setHoveredProduct(p.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div>
                  <div
                    className="relative w-32 h-32 rounded-full mx-auto mb-6 bg-slate-50 border-4 border-slate-100 overflow-hidden cursor-zoom-in group/img"
                    onClick={(e) => { e.stopPropagation(); setZoomedImage({ src: p.image, name: p.name }); }}
                  >
                    <img
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                      src={p.image}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" size={20} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-dark-navy mb-3">
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm text-on-variant mb-6 min-h-[48px] text-slate-500">
                    {p.shortDesc}
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => onSelectProduct(p)}
                    className="inline-flex items-center font-sans text-xs tracking-wider uppercase font-bold text-industrial-red hover:text-dark-navy transition-all duration-150 group cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="ml-1.5 transform group-hover:translate-x-1.5 transition-transform" size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - CERTIFICATIONS */}
      <section className="bg-white border-b border-slate-100 py-12 w-full" id="certifications-section">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Certifications</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-navy mt-2">Internationally Certified Quality</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management System', file: 'ISO 9001.pdf' },
              { name: 'ISO 14001:2015', desc: 'Environmental Management System', file: 'ISO 14001.pdf' },
              { name: 'ISO 45001:2018', desc: 'Occupational Health & Safety', file: 'ISO 45001.pdf' },
            ].map((cert) => (
              <div key={cert.name} className="flex flex-col items-center text-center border border-slate-200 rounded-lg p-6 bg-slate-50 hover:shadow-md transition-all duration-200 gap-4">
                <div className="w-14 h-14 rounded-full bg-industrial-red/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-industrial-red">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-dark-navy text-base">{cert.name}</h3>
                  <p className="text-slate-500 text-xs mt-1">{cert.desc}</p>
                </div>
                <a
                  href={`${import.meta.env.BASE_URL}certifications/${cert.file}`}
                  download={cert.file}
                  className="mt-auto inline-flex items-center gap-2 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded hover:bg-industrial-red transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - UPCOMING FACILITY */}
      <section className="w-full bg-[#031534] overflow-hidden relative" id="upcoming-facility-section">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
          {/* Left — text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20 space-y-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-industrial-red"></span>
              </span>
              <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Expansion</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Introducing our manufacturing facility with state of art new technology
            </h2>
            <div className="w-16 h-1 bg-industrial-red rounded"></div>
            <div className="space-y-1 pt-2">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-white">
                60,000 MT/Year <span className="text-surface-variant font-light text-xl">in Ahmedabad</span>
              </p>
              <div className="flex items-center gap-3 pt-4">
                <span className="text-xs uppercase tracking-widest font-bold text-surface-variant font-mono">Expected Launch</span>
                <span className="relative inline-flex">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-industrial-red opacity-40 rounded-sm"></span>
                  <span className="bg-industrial-red text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 font-mono relative">Coming Soon</span>
                </span>
              </div>
            </div>
          </div>
          {/* Mobile — factory image shown below text */}
          <div className="relative block lg:hidden w-full h-52 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#031534] via-[#031534]/30 to-transparent z-10"></div>
            <img
              src={`${import.meta.env.BASE_URL}infrastructure.png`}
              alt="Upcoming Ahmedabad manufacturing facility"
              className="w-full h-full object-cover grayscale opacity-70"
            />
          </div>
          {/* Desktop — industrial image on right */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#031534] via-[#031534]/40 to-transparent z-10"></div>
            <img
              src={`${import.meta.env.BASE_URL}infrastructure.png`}
              alt="Upcoming Ahmedabad manufacturing facility"
              className="w-full h-full object-cover grayscale opacity-60"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 - CTA STRIP */}
      <section className="bg-industrial-red py-12 w-full relative shadow-inner" id="cta-strip">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-white text-center md:text-left">
            Looking for high-quality foundry alloys? Let's talk.
          </h2>
          <button
            onClick={() => { setTab('enquiry'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="bg-white text-industrial-red font-sans text-xs tracking-wider uppercase font-extrabold py-4 px-8 text-center hover:bg-slate-100 hover:scale-105 transition-all duration-200 shadow-md whitespace-nowrap cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </section>
      {/* Image zoom modal */}
      <AnimatePresence>
        {zoomedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 cursor-zoom-out"
              onClick={() => setZoomedImage(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-8 pointer-events-none"
            >
              <div className="relative pointer-events-auto max-w-lg w-full">
                <button
                  onClick={() => setZoomedImage(null)}
                  className="absolute -top-4 -right-4 bg-white rounded-full p-1.5 shadow-lg text-slate-700 hover:text-industrial-red transition-colors cursor-pointer z-10"
                >
                  <X size={18} />
                </button>
                <img
                  src={zoomedImage.src}
                  alt={zoomedImage.name}
                  className="w-full h-auto rounded-lg shadow-2xl object-cover"
                />
                <p className="text-white text-center text-sm font-display font-bold mt-4 tracking-wide">{zoomedImage.name}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
