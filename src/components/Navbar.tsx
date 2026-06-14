import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
}

export default function Navbar({ currentTab, setTab, onSelectProduct }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'products', name: 'Products' },
    { id: 'infra', name: 'Infrastructure' },
    { id: 'quality', name: 'Quality' },
    { id: 'careers', name: 'Careers' },
  ];

  const searchResults = searchQuery.trim().length > 1
    ? PRODUCTS.filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.longDesc.toLowerCase().includes(q) ||
          p.grades?.some((g) => g.toLowerCase().includes(q))
        );
      })
    : [];

  const handleTabClick = (id: string) => {
    setTab(id);
    setMobileMenuOpen(false);
    closeSearch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery('');
  };

  const openSearch = () => {
    setSearchOpen(true);
    setMobileMenuOpen(false);
    setTimeout(() => inputRef.current?.focus(), 80);
  };

  const handleSelectProduct = (product: Product) => {
    onSelectProduct(product);
    setTab('products');
    closeSearch();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      {/* Search overlay backdrop */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={closeSearch}
        />
      )}

      <nav className="bg-white fixed w-full top-0 z-50 border-b border-surface-variant shadow-sm" id="top-navbar">
        <div className="flex justify-between items-center px-6 md:px-12 h-20 max-w-[1440px] mx-auto">

          {/* Logo */}
          <div
            onClick={() => handleTabClick('home')}
            className="cursor-pointer hover:opacity-80 transition-opacity shrink-0"
            id="nav-logo"
          >
            <span className="text-dark-navy select-none" style={{ fontFamily: "'Oswald', sans-serif", fontSize: '21px', fontWeight: 700, letterSpacing: '0.06em' }}>
              FeX FOUNDRY ALLOYS
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4" id="nav-desktop-links">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`font-sans text-xs tracking-wider uppercase font-semibold py-2 px-3 transition-all duration-200 outline-none cursor-pointer ${
                    isActive
                      ? 'text-industrial-red border-b-2 border-industrial-red pb-1'
                      : 'text-brand-primary hover:text-industrial-red'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search trigger */}
            <button
              onClick={openSearch}
              className="text-brand-primary hover:text-industrial-red transition-colors cursor-pointer p-2"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Enquire Now */}
            <button
              onClick={() => handleTabClick('enquiry')}
              className="font-sans text-xs tracking-wider uppercase font-bold bg-industrial-red hover:bg-secondary-red text-white py-3 px-6 transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* Mobile right icons */}
          <div className="md:hidden flex items-center gap-1">
            <button onClick={openSearch} className="text-brand-primary p-2 cursor-pointer">
              <Search size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-primary p-2 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Search bar — slides down below navbar when open */}
        {searchOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-lg z-50 px-6 md:px-12 py-4">
            <div className="max-w-[1440px] mx-auto">
              <div className="relative max-w-xl">
                <Search className="absolute left-3.5 top-3 text-slate-400" size={16} />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products or grades e.g. XBAR, Inoculants, Nickel..."
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-slate-300 rounded-lg outline-none focus:border-industrial-red font-sans"
                  autoComplete="off"
                />
                <button
                  onClick={closeSearch}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Results */}
              {searchQuery.trim().length > 1 && (
                <div className="mt-3 max-w-xl">
                  {searchResults.length > 0 ? (
                    <div className="bg-white border border-slate-200 rounded-lg shadow-md overflow-hidden">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 px-4 pt-3 pb-1">
                        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                      </p>
                      {searchResults.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => handleSelectProduct(p)}
                          className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors flex items-center gap-3 border-t border-slate-100 cursor-pointer"
                        >
                          <img src={p.image} alt={p.name} className="w-9 h-9 rounded-full object-cover shrink-0 bg-slate-100" />
                          <div>
                            <p className="text-sm font-display font-bold text-dark-navy leading-tight">{p.name}</p>
                            <p className="text-[11px] text-slate-400 line-clamp-1">{p.shortDesc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-400 py-2">No products found for "<span className="font-medium">{searchQuery}</span>"</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-surface-variant py-4 px-6 absolute top-20 left-0 w-full z-40 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`text-left font-sans text-sm font-semibold uppercase tracking-wide py-2 border-b border-gray-100 ${
                      isActive ? 'text-industrial-red font-bold' : 'text-brand-primary'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <button
                onClick={() => handleTabClick('enquiry')}
                className="font-sans text-sm tracking-wider uppercase font-bold bg-industrial-red text-white py-3 px-6 text-center shadow-md block w-full"
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
