import React from 'react';
import { motion } from 'motion/react';

export default function QualityView() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full space-y-0"
      id="quality-view"
    >
      {/* Hero — heading only */}
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

      {/* Content below hero */}
      <div className="bg-white w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <p className="text-slate-700 text-base md:text-lg leading-relaxed max-w-4xl">
            We ensure uncompromising quality through rigorous raw material testing, supplier verification,
            and advanced process monitoring. Our operations follow strict Standard Operating Procedures (SOPs),
            ensuring consistency and compliance with ISO and industry standards. Each batch undergoes chemical
            and physical testing, with complete traceability to guarantee reliability and customer satisfaction.
          </p>
        </div>
      </div>

    </motion.div>
  );
}
