import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface ProductsViewProps {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  setTab: (tab: string) => void;
}

export default function ProductsView({ selectedProduct, setSelectedProduct, setTab }: ProductsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  
  const tags = ['All', 'Ferrosilicon Magnesium', 'Inoculants & Cored Wire', 'Nickel Magnesium', 'Mould Powder'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    if (selectedTag === 'All') return matchesSearch;
    return matchesSearch && p.name === selectedTag;
  });


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 space-y-16"
      id="products-view"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Expert formulations</span>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-brand-primary">Our Metallurgical Solutions</h1>
          <div className="w-20 h-1.5 bg-industrial-red rounded"></div>
        </div>
        
        {/* Search + Download */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:max-w-lg items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-3 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search alloys, states..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white pl-10 pr-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:border-industrial-red font-sans text-sm outline-none"
              id="search-alloys-input"
            />
          </div>
          <a
            href={`${import.meta.env.BASE_URL}FeX Catalogue 2026.pdf`}
            download="FeX Catalogue 2026.pdf"
            className="whitespace-nowrap bg-brand-primary text-white font-sans text-xs tracking-wider uppercase font-bold py-2.5 px-5 hover:bg-industrial-red transition-all duration-200 cursor-pointer flex items-center gap-2 rounded"
          >
            Download Catalogue
          </a>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-slate-200" id="filter-tag-chips">
        <SlidersHorizontal className="text-slate-400 mr-2" size={16} />
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              selectedTag === tag
                ? 'bg-industrial-red text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* List / Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="products-catalog-grid">
        
        {/* Products Grid Column */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => {
              const isSelected = selectedProduct?.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedProduct(p)}
                  className={`bg-white rounded border cursor-pointer hover:shadow-lg transition-all p-6 text-left relative ${
                    isSelected ? 'border-2 border-industrial-red shadow' : 'border-slate-200/60'
                  }`}
                  id={`product-card-${p.id}`}
                >
                  <div className="relative w-24 h-24 rounded-full mx-auto mb-5 bg-slate-50 border-4 border-slate-100 overflow-hidden">
                    <img
                      alt={p.name}
                      src={p.image}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="mb-3">
                    <h3 className="font-display font-extrabold text-dark-navy text-sm md:text-base leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                    {p.shortDesc}
                  </p>
                  {p.grades && p.grades.length > 0 && (
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-industrial-red mb-2">Available Grades</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.grades.map((grade) => (
                          <span key={grade} className="text-[10px] font-mono font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                            {grade}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="col-span-2 py-12 text-center bg-white rounded border border-slate-200/50">
              <p className="text-slate-400 font-display font-medium text-base">No matching products found.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedTag('All'); }}
                className="mt-4 text-xs font-bold text-industrial-red underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Selected Product Specification Details Pane */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <AnimatePresence mode="wait">
            {selectedProduct ? (
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-slate-100 rounded-lg p-6 shadow-xl space-y-6"
                id="selected-product-pane"
              >
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-display font-extrabold text-dark-navy text-lg leading-tight">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="text-xs text-slate-400 hover:text-slate-600 bg-slate-50 p-1.5 rounded cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                <div className="space-y-3">
                  <p className="font-sans text-xs text-slate-600 leading-relaxed">
                    {selectedProduct.longDesc}
                  </p>
                </div>

              </motion.div>
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-300 rounded-lg p-8 text-center text-slate-500 flex flex-col items-center justify-center min-h-[300px]">
                <Sparkles className="text-slate-300 mb-4" size={32} />
                <h4 className="font-display font-medium text-slate-700 text-sm mb-1">Interactive Specification Pane</h4>
                <p className="text-xs text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                  Select an alloy card from the left grid to render its element breakdown and applications.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </motion.div>
  );
}
