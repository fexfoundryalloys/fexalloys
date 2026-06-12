import React, { useState } from 'react';
import { Menu, X, Landmark, Compass, Award, Database, Users, HelpCircle } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setTab }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'products', name: 'Products' },
    { id: 'infra', name: 'Infrastructure' },
    { id: 'quality', name: 'Quality' },
    { id: 'careers', name: 'Careers' },
  ];

  const handleTabClick = (id: string) => {
    setTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white dark:bg-brand-primary fixed w-full top-0 z-50 border-b border-surface-variant transition-colors duration-300 shadow-sm" id="top-navbar">
      <div className="flex justify-between items-center px-6 md:px-12 h-20 max-w-[1440px] mx-auto">
        <div
          onClick={() => handleTabClick('home')}
          className="cursor-pointer hover:opacity-80 transition-opacity"
          id="nav-logo"
        >
          <span className="font-display font-extrabold text-brand-primary tracking-tight leading-none" style={{ fontSize: '1.35rem', letterSpacing: '-0.01em' }}>
            <span>FeX</span>{' '}
            <span className="tracking-widest" style={{ fontSize: '1.1rem', letterSpacing: '0.15em' }}>FOUNDRY ALLOYS</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-4" id="nav-desktop-links">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleTabClick(item.id)}
                className={`font-sans text-xs tracking-wider uppercase font-semibold py-2 px-3 transition-all duration-200 outline-none cursor-pointer ${
                  isActive
                    ? 'text-industrial-red border-b-2 border-industrial-red pb-1'
                    : 'text-brand-primary hover:text-industrial-red dark:text-surface-variant dark:hover:text-industrial-red'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Enquire Now CTA Button */}
        <div className="hidden md:block" id="nav-enquire-cta">
          <button
            onClick={() => handleTabClick('enquiry')}
            className="font-sans text-xs tracking-wider uppercase font-bold bg-industrial-red hover:bg-secondary-red text-white py-3 px-6 transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-95"
          >
            ENQUIRE NOW
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-brand-primary dark:text-white p-2 focus:outline-none cursor-pointer"
            id="mobile-menu-burger"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown style */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-brand-primary border-b border-surface-variant py-4 px-6 absolute top-20 left-0 w-full z-40 shadow-xl transition-all duration-300" id="mobile-menu-panel">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`text-left font-sans text-sm font-semibold uppercase tracking-wide py-2 border-b border-gray-100 dark:border-gray-800 ${
                    isActive ? 'text-industrial-red font-bold' : 'text-brand-primary dark:text-surface-variant'
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
  );
}
