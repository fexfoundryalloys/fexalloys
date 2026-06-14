import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Four induction furnaces with capacities of 500 kg, 750 kg, 1500 kg, and 2500 kg',
  'Overhead cranes for seamless operations',
  'Melting capacity of over 25,000 MT per year',
  'In-house testing laboratory upholding international standards',
  'Timely delivery backed by high-capacity production infrastructure',
];

export default function InfrastructureView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
      id="infrastructure-view"
    >
      {/* Hero — image with INFRASTRUCTURE overlay */}
      <div className="relative w-full min-h-[55vh] flex items-end overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}infrastructure.png`}
          alt="FeX Foundry Alloys Manufacturing Facility"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/60 to-transparent"></div>

        <div className="relative z-10 w-full flex items-center justify-center pb-12 pt-32">
          <h1 className="font-display font-extrabold text-white uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Infrastructure
          </h1>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — description */}
          <div className="space-y-6">
            <div className="w-16 h-1.5 bg-industrial-red rounded"></div>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              Our manufacturing facility is equipped with advanced technology, featuring four induction furnaces
              with capacities of 500 kg, 750 kg, 1500 kg, and 2500 kg, supported by overhead cranes for seamless operations.
              With a melting capacity of over 25,000 MT per year, we ensure timely delivery to our clients.
              Our in-house testing laboratory upholds international standards and customer specifications,
              guaranteeing the highest quality in every product we deliver.
            </p>
          </div>

          {/* Right — highlights */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-dark-navy text-lg uppercase tracking-wide">Key Capabilities</h3>
            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-industrial-red shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-brand-primary py-12 w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="py-4 md:py-0 px-4">
            <span className="block font-display text-3xl font-extrabold text-white mb-1">4</span>
            <span className="text-xs tracking-wider text-slate-400 uppercase font-medium">Induction Furnaces</span>
          </div>
          <div className="py-4 md:py-0 px-4">
            <span className="block font-display text-3xl font-extrabold text-white mb-1">2500 kg</span>
            <span className="text-xs tracking-wider text-slate-400 uppercase font-medium">Max Furnace Capacity</span>
          </div>
          <div className="py-4 md:py-0 px-4">
            <span className="block font-display text-3xl font-extrabold text-white mb-1">25,000 MT</span>
            <span className="text-xs tracking-wider text-slate-400 uppercase font-medium">Annual Output</span>
          </div>
          <div className="py-4 md:py-0 px-4">
            <span className="block font-display text-3xl font-extrabold text-white mb-1">In-House</span>
            <span className="text-xs tracking-wider text-slate-400 uppercase font-medium">Testing Laboratory</span>
          </div>
        </div>
      </div>

    </motion.div>
  );
}
