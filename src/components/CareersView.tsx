import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Briefcase, ChevronDown, ChevronUp, CheckCircle, Mail } from 'lucide-react';

const openings = [
  {
    id: 'executive-assistant-ceo',
    title: 'Executive Assistant to CEO',
    plant: 'Corporate Office',
    location: 'Shalimar Bagh, New Delhi',
    experience: '5–10 years',
    tag: 'Leadership Support',
    responsibilities: [
      'Provide high-level administrative and strategic support to the CEO',
      'Manage complex calendars, meetings, travel arrangements, and itineraries',
      'Prepare reports, presentations, and correspondence on behalf of the CEO',
      'Act as a liaison between the CEO and internal/external stakeholders',
      'Track key projects, follow-ups, and ensure timely execution',
      'Maintain confidentiality of sensitive information at all times',
      'Support decision-making through data organization and insights',
    ],
    requirements: [
      'Proven experience supporting senior executives or CXO-level leadership',
      'Exceptional communication and interpersonal skills',
      'Strong organizational and multitasking abilities',
      'Proficiency in MS Office (PowerPoint, Excel, Word)',
      'Ability to work independently with a high level of ownership',
      'Professional discretion and integrity',
    ],
    offer: [
      'Opportunity to work closely with top leadership',
      'High-impact role with strategic exposure',
      'Dynamic and growth-oriented work environment',
    ],
    email: 'info@fexalloys.com',
  },
  {
    id: 'ops-excellence-manager',
    title: 'Operational Excellence Manager',
    plant: 'Sonipat Plant',
    location: 'Sonipat, Haryana',
    experience: '4–10 years (Manufacturing/Operations)',
    tag: 'Operations',
    responsibilities: [
      'Lead and implement Operational Excellence initiatives across plant operations',
      'Drive Lean, Six Sigma, and continuous improvement methodologies',
      'Identify process gaps, inefficiencies, and cost-saving opportunities',
      'Monitor KPIs and develop strategies to improve productivity and quality',
      'Collaborate with cross-functional teams (Production, Quality, Supply Chain)',
      'Standardize processes and ensure adherence to best practices',
      'Conduct training and capability-building programs for teams',
      'Support digital transformation and automation initiatives',
    ],
    requirements: [
      'Strong background in manufacturing operations and process improvement',
      'Certification in Lean Green Belt / ISO QMS & EMS',
      'Analytical mindset with problem-solving expertise',
      'Proven track record of driving efficiency and cost optimization',
      'Excellent leadership and stakeholder management skills',
    ],
    offer: [
      'Opportunity to lead transformation at a high-capacity plant',
      'Strategic role with visible impact on business performance',
      'Growth-oriented and innovation-driven environment',
    ],
    email: 'info@fexalloys.com',
  },
];

export default function CareersView() {
  const [expanded, setExpanded] = useState<string | null>(null);

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
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Join Our Team</span>
          <h1 className="font-display font-extrabold uppercase leading-none tracking-tight mt-2">
            <span className="block text-white/30" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>We're</span>
            <span className="block text-white" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>Hiring</span>
          </h1>
          <div className="w-16 h-1.5 bg-industrial-red rounded mt-6"></div>
        </div>
      </div>

      {/* Openings */}
      <div className="bg-white w-full">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 space-y-6">

          <p className="text-slate-500 text-sm">
            {openings.length} open position{openings.length !== 1 ? 's' : ''} available
          </p>

          {openings.map((job) => {
            const isOpen = expanded === job.id;
            return (
              <div key={job.id} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">

                {/* Job header — always visible */}
                <button
                  onClick={() => setExpanded(isOpen ? null : job.id)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-industrial-red bg-red-50 px-2 py-0.5 rounded">
                      {job.tag}
                    </span>
                    <h3 className="font-display font-extrabold text-dark-navy text-lg leading-tight">
                      {job.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium">{job.plant}</p>
                    <div className="flex flex-wrap gap-4 pt-1">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin size={13} className="text-industrial-red" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Briefcase size={13} className="text-industrial-red" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 mt-1 text-slate-400">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {/* Expandable details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 pt-2 border-t border-slate-100 space-y-8">

                        {/* Responsibilities */}
                        <div className="space-y-3">
                          <h4 className="font-display font-bold text-dark-navy text-sm uppercase tracking-wide">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((r, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 bg-industrial-red rounded-full mt-2 shrink-0"></span>
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-3">
                          <h4 className="font-display font-bold text-dark-navy text-sm uppercase tracking-wide">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((r, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <CheckCircle size={14} className="text-industrial-red mt-0.5 shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What we offer */}
                        <div className="space-y-3">
                          <h4 className="font-display font-bold text-dark-navy text-sm uppercase tracking-wide">What We Offer</h4>
                          <ul className="space-y-2">
                            {job.offer.map((o, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 bg-industrial-red rounded-full mt-2 shrink-0"></span>
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply CTA */}
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <Mail className="text-industrial-red shrink-0" size={18} />
                            <div>
                              <p className="text-xs text-slate-500 font-medium">Interested? Share your CV at</p>
                              <a
                                href={`mailto:${job.email}`}
                                className="font-display font-bold text-dark-navy text-sm hover:text-industrial-red transition-colors"
                              >
                                {job.email}
                              </a>
                            </div>
                          </div>
                          <a
                            href={`mailto:${job.email}?subject=Application – ${job.title}`}
                            className="bg-industrial-red hover:bg-secondary-red text-white font-sans text-xs uppercase tracking-widest font-extrabold py-3 px-6 transition-all duration-200 shadow-md whitespace-nowrap"
                          >
                            Apply Now
                          </a>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
