import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const testingCapabilities = [
  {
    title: 'ED XRF Spectrometer',
    description: 'Energy Dispersive X-Ray Fluorescence for rapid, non-destructive elemental analysis of alloy composition with high precision.',
  },
  {
    title: 'Wet Chemical Analysis',
    description: 'Classical wet analysis setup for accurate determination of Magnesium, Silicon, Rare Earths, and other key trace elements.',
  },
  {
    title: 'Physical Testing',
    description: 'Size grading, moisture content, and bulk density checks on every batch to ensure consistency in lump and powder products.',
  },
];

const qaChecklist = [
  'Incoming raw material inspection and supplier qualification',
  'In-process chemical verification at each stage of production',
  'Batch-wise traceability from raw material to finished goods',
  'Compliance with ISO 9001:2015 Quality Management System',
  'Customer-specific SOP adherence and documentation',
  'Pre-dispatch testing certificate issued for every shipment',
];

export default function QualityView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full space-y-0"
      id="quality-view"
    >
      {/* Hero */}
      <div className="bg-brand-primary w-full py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <h1 className="font-display font-extrabold uppercase leading-none tracking-tight">
            <span className="block text-white/30" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>Quality</span>
            <span className="block text-white" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Assurance</span>
          </h1>
          <div className="w-16 h-1.5 bg-industrial-red rounded mt-6"></div>
        </div>
      </div>

      {/* Intro + Image */}
      <div className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-16 h-1.5 bg-industrial-red rounded"></div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark-navy leading-tight">
              In-House Testing Laboratory
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We ensure uncompromising quality through rigorous raw material testing, supplier verification,
              and advanced process monitoring. Our in-house laboratory is equipped with an <strong>ED XRF Spectrometer</strong> and
              a <strong>Wet Chemical Analysis</strong> setup, enabling complete chemical verification of every batch
              before dispatch. Each shipment is backed by a full test certificate with traceability to raw material lots.
            </p>
          </div>
          <div className="border border-surface-variant p-3 bg-surface-low rounded shadow-md group overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}qualityassuranceimage.jpeg`}
              alt="FeX Foundry Alloys Quality Assurance Laboratory"
              className="w-full object-cover rounded group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Testing Capabilities */}
      <div className="bg-slate-50 w-full border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Testing Equipment</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-navy mt-2">Our Testing Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingCapabilities.map((item) => (
              <div key={item.title} className="bg-white rounded border border-slate-200 p-6 space-y-3 hover:border-industrial-red hover:shadow-md transition-all duration-200">
                <div className="w-8 h-1 bg-industrial-red rounded"></div>
                <h3 className="font-display font-bold text-dark-navy text-base">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* QA Process Checklist */}
      <div className="bg-white w-full border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Process</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-navy mt-2">Quality Control Process</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {qaChecklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-industrial-red shrink-0 mt-0.5" size={18} />
                <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </motion.div>
  );
}
