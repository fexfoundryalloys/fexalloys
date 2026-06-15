import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Mail, MapPin, Zap, TrendingUp, Globe, Lightbulb, Award } from 'lucide-react';

const hiringAreas = [
  {
    dept: 'Manufacturing & Operations',
    roles: ['Plant Head', 'Production Managers', 'Shift Engineers', 'Furnace Operators', 'Production Supervisors'],
  },
  {
    dept: 'Quality & R&D',
    roles: ['Quality Assurance Manager', 'Metallurgical Engineers', 'Laboratory Technicians', 'Product Development Engineers'],
  },
  {
    dept: 'Maintenance & Utilities',
    roles: ['Mechanical Engineers', 'Electrical Engineers', 'Instrumentation Engineers', 'Maintenance Technicians'],
  },
  {
    dept: 'Supply Chain & Procurement',
    roles: ['Purchase Managers', 'Store Officers', 'Logistics Coordinators'],
  },
  {
    dept: 'Sales & Business Development',
    roles: ['Regional Sales Managers', 'Export Managers', 'Technical Sales Engineers'],
  },
  {
    dept: 'Corporate Functions',
    roles: ['HR Professionals', 'Finance & Accounts', 'IT & ERP Specialists', 'EHS (Environment, Health & Safety) Professionals'],
  },
];

const whyJoin = [
  { icon: MapPin, text: 'Work at a state-of-the-art manufacturing facility.' },
  { icon: Award, text: 'Opportunity to contribute to a landmark project in the metallurgical industry.' },
  { icon: TrendingUp, text: 'Competitive compensation and growth opportunities.' },
  { icon: Globe, text: 'Exposure to domestic and international markets.' },
  { icon: Lightbulb, text: 'Innovation-driven and entrepreneurial culture.' },
];

const facilityProducts = [
  'FeSiMg Alloys',
  'Foundry Inoculants',
  'Continuous Casting Mould Powders',
  'Nickel Magnesium Alloys',
  'Cored Wire Products',
];

export default function CareersView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
      id="careers-view"
    >
      {/* Hero */}
      <div className="bg-brand-primary w-full py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Join Our Team</span>
          <h1 className="font-display font-extrabold text-white leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Build the Future of Foundry Alloys with FeX
          </h1>
          <div className="w-16 h-1.5 bg-industrial-red rounded"></div>
          <div className="max-w-3xl bg-white/5 border border-white/10 rounded-lg p-6 space-y-3">
            <div className="flex items-start gap-3">
              <Zap className="text-industrial-red shrink-0 mt-0.5" size={18} />
              <p className="text-white font-display font-bold text-base leading-relaxed">
                We're Hiring for India's Largest Integrated Manufacturing Plant for FeSiMg, Inoculants, Mould Powder, Nickel Magnesium & Cored Wire in Ahmedabad.
              </p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pl-7">
              Join a fast-growing team that is transforming the foundry and metallurgical industry through innovation, quality, and global reach.
            </p>
          </div>
        </div>
      </div>

      {/* Why Join FeX */}
      <div className="bg-white w-full border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Reasons to Join</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-navy mt-2">Why Join FeX?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyJoin.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-lg p-5 hover:border-industrial-red hover:shadow-sm transition-all duration-200">
                <div className="w-9 h-9 bg-industrial-red/10 rounded flex items-center justify-center shrink-0">
                  <Icon className="text-industrial-red" size={18} />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Hiring Areas */}
      <div className="bg-slate-50 w-full border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Open Positions</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-navy mt-2">Current Hiring Areas</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringAreas.map((area) => (
              <div key={area.dept} className="bg-white border border-slate-200 rounded-lg p-6 space-y-4 hover:border-industrial-red hover:shadow-md transition-all duration-200">
                <div className="w-8 h-1 bg-industrial-red rounded"></div>
                <h3 className="font-display font-bold text-dark-navy text-base">{area.dept}</h3>
                <ul className="space-y-2">
                  {area.roles.map((role) => (
                    <li key={role} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-industrial-red mt-0.5 shrink-0" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Announcement */}
      <div className="bg-brand-primary w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-4xl space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Special Announcement</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-2">Be Part of a Historic Manufacturing Project</h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              FeX is establishing what will be one of India's largest and most advanced facilities dedicated to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {facilityProducts.map((product) => (
                <div key={product} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  <span className="w-2 h-2 bg-industrial-red rounded-full shrink-0"></span>
                  <span className="text-white text-sm font-medium">{product}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We are seeking experienced professionals and ambitious young talent to join us during this exciting expansion phase.
            </p>
          </div>
        </div>
      </div>

      {/* Apply CTA */}
      <div className="bg-white w-full border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Apply Now</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-dark-navy">Submit Your CV</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Send your resume along with your current designation, years of experience, and preferred function to our careers team.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 space-y-4">
              <Mail className="text-industrial-red mx-auto" size={28} />
              <p className="text-slate-500 text-sm">Email your CV to</p>
              <a
                href="mailto:careers@fexalloys.com?subject=Job Application – FeX Foundry Alloys"
                className="font-display font-extrabold text-dark-navy text-xl hover:text-industrial-red transition-colors block"
              >
                careers@fexalloys.com
              </a>
              <a
                href="mailto:careers@fexalloys.com?subject=Job Application – FeX Foundry Alloys"
                className="inline-block bg-industrial-red hover:bg-secondary-red text-white font-sans text-xs uppercase tracking-widest font-extrabold py-3 px-8 transition-all duration-200 shadow-md mt-2"
              >
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
}
