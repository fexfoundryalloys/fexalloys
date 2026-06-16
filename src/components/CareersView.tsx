import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Lightbulb, Users, Heart, Factory, Briefcase, Building2, CheckCircle, ArrowRight, Mail, MapPin, Quote } from 'lucide-react';

const values = [
  { icon: Shield, label: 'Integrity in everything we do' },
  { icon: Award, label: 'Uncompromising quality standards' },
  { icon: Lightbulb, label: 'Continuous innovation' },
  { icon: Users, label: 'Long-term customer partnerships' },
  { icon: Heart, label: 'Respect for people and safety' },
];

const locations = [
  {
    city: 'AHMEDABAD',
    subtitle: 'NEW MANUFACTURING FACILITY',
    desc: 'Be part of a greenfield project from day one.',
    roles: ['Production', 'Melting Operations', 'Process Engineering', 'Electrical & Mechanical Maintenance', 'Quality Assurance', 'Supply Chain', 'Plant Administration'],
  },
  {
    city: 'SONIPAT',
    subtitle: 'MANUFACTURING OPERATIONS',
    desc: 'Join our established production team serving customers across India and international markets.',
    roles: ['Production', 'Maintenance', 'Quality Control', 'Warehouse', 'Procurement', 'Planning'],
  },
  {
    city: 'DELHI',
    subtitle: 'CORPORATE OFFICE',
    desc: 'Support our continued growth through leadership and business functions.',
    roles: ['Sales & Marketing', 'International Business', 'Finance', 'Human Resources', 'Procurement', 'Business Development'],
  },
];

const weValue = [
  'Take ownership',
  'Embrace challenges',
  'Pursue excellence',
  'Work collaboratively',
  'Think long term',
];

const testimonials = [
  {
    quote: 'Working at FeX Foundry Alloys Private Limited for the past 17 years has been an incredible journey of growth, learning, and fulfillment. From the very beginning, I was welcomed into a culture that values integrity, innovation, and teamwork. Over the years, I have had the privilege of contributing to projects that not only strengthened my professional skills but also gave me immense personal satisfaction.',
    name: 'Himanshu Chaudhary',
    role: 'Logistics Manager',
  },
  {
    quote: "Joining FeX Foundry Alloys Private Limited's Sales and Marketing team two and a half years ago was both a challenge and an opportunity. Coming from another organization, I was eager to adapt, contribute, and prove myself in a new environment. What I found here was a team that not only welcomed me but also empowered me to grow beyond my own expectations.",
    name: 'Manish Kumar',
    role: 'Sr. Manager, Sales & Marketing',
  },
  {
    quote: "For the past 14 years, working in the Accounts team at FeX Foundry Alloys has been a journey of dedication and growth. I've had the privilege of managing responsibilities that strengthened my expertise and sharpened my financial acumen. The supportive culture and collaborative colleagues made every challenge an opportunity to learn and excel. I feel proud to contribute to an organization that values integrity, precision, and long-term commitment.",
    name: 'Rishabh Agarwal',
    role: 'Accounts Manager',
  },
];

export default function CareersView() {
  const opportunitiesRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full" id="careers-view">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}infrastructure.png`}
          alt="FeX Manufacturing"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031534]/90 via-[#031534]/70 to-transparent"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full py-24">
          <div className="max-w-2xl space-y-6">
            <h1 className="font-display font-extrabold leading-none tracking-tight">
              <span className="block text-white" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>BUILD THE</span>
              <span className="block text-industrial-red" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>FUTURE WITH US</span>
            </h1>
            <p className="text-white font-display font-bold text-lg md:text-xl leading-snug">
              Join the team shaping the next generation of foundry alloys.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
              As FeX enters a new phase of growth, we are expanding our teams across manufacturing, engineering, quality, operations, exports, and corporate functions. With a new world-class manufacturing facility coming up in Ahmedabad and continued expansion in Sonipat and Delhi, we are looking for ambitious people who want to build something meaningful.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo(opportunitiesRef)}
                className="bg-industrial-red text-white font-sans text-xs tracking-widest uppercase font-extrabold py-3.5 px-7 border-2 border-industrial-red hover:bg-white hover:text-industrial-red transition-all duration-200"
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY FEX ── */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <span className="text-sm tracking-widest font-extrabold text-industrial-red font-mono">Why FeX</span>
              <h2 className="font-display font-extrabold text-dark-navy leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}>
                More than a workplace.<br />A place to build your legacy.
              </h2>
              <div className="w-10 h-1 bg-industrial-red rounded"></div>
              <p className="text-slate-600 text-sm leading-relaxed">
                For over two decades, FeX has delivered trusted metallurgical solutions to foundries around the world. Today, our products support critical applications across infrastructure, transportation, energy, and engineering industries.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                As we continue to grow, we remain guided by the same principles that built our reputation:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
              {values.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center">
                    <Icon className="text-brand-primary" size={20} />
                  </div>
                  <p className="text-xs text-slate-600 leading-snug font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING LANDMARK ── */}
      <section className="bg-amber-50 border-y border-amber-100 py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-700 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block"></span>
                Upcoming Facility
              </span>
            </div>
            <h2 className="font-display font-extrabold text-brand-primary leading-tight uppercase" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              A New Manufacturing Landmark Is Taking Shape
            </h2>
            <div className="w-10 h-1 bg-industrial-red rounded"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our upcoming Ahmedabad facility represents the next chapter in FeX's journey.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Designed with modern production systems, advanced quality control laboratories, and industry-leading manufacturing technology, the facility will significantly expand our production capabilities and support our growing global customer base.
            </p>
            <p className="text-slate-700 text-sm font-bold leading-relaxed border-l-4 border-industrial-red pl-4">
              Now is a unique opportunity to join a project at its foundation and help shape its future.
            </p>
          </div>
          <div className="rounded overflow-hidden shadow-lg border border-amber-200">
            <img
              src={`${import.meta.env.BASE_URL}infrastructure.png`}
              alt="FeX New Facility"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── OPPORTUNITIES ACROSS LOCATIONS ── */}
      <section ref={opportunitiesRef} className="bg-slate-50 py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-display font-extrabold text-dark-navy uppercase tracking-wide text-xl md:text-2xl">
              Opportunities Across Locations
            </h2>
            <div className="w-10 h-1 bg-industrial-red rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <div key={loc.city} className="bg-white border border-slate-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${loc.city === 'DELHI' ? 'delhiofficeimage.avif' : 'infrastructure.png'}`}
                    alt={loc.city}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-primary/60"></div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center border-2 border-white/30">
                    {i === 0 ? <Factory className="text-white" size={18} /> : i === 1 ? <Briefcase className="text-white" size={18} /> : <Building2 className="text-white" size={18} />}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-dark-navy text-lg">{loc.city}</h3>
                    <p className="text-industrial-red text-[10px] font-mono font-bold uppercase tracking-widest">{loc.subtitle}</p>
                  </div>
                  <p className="text-slate-500 text-sm">{loc.desc}</p>
                  <ul className="space-y-1.5 flex-1">
                    {loc.roles.map((role) => (
                      <li key={role} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-industrial-red shrink-0"></span>
                        {role}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:careers@fexalloys.com?subject=Application – ${loc.city} – ${loc.subtitle}`}
                    className="mt-4 inline-flex items-center gap-2 text-brand-primary border border-brand-primary text-xs font-bold uppercase tracking-wider py-2.5 px-4 hover:bg-brand-primary hover:text-white transition-all duration-200"
                  >
                    Apply for {loc.city.charAt(0) + loc.city.slice(1).toLowerCase()}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT BY PEOPLE ── */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-5">
          <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Why Work With Us</span>
          <h2 className="font-display font-extrabold text-dark-navy leading-tight text-xl md:text-2xl">
            Built by people who take pride in their work
          </h2>
          <div className="w-10 h-1 bg-industrial-red rounded"></div>
          <p className="text-slate-600 text-sm leading-relaxed">
            At FeX, success is driven by individuals who believe in accountability, teamwork, and continuous improvement.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Whether on the shop floor, in the laboratory, or in the boardroom, every role contributes to delivering products our customers can trust.
          </p>
        </div>
        <div className="bg-slate-50 px-8 py-10 space-y-5 rounded-lg border border-slate-100">
          <p className="font-display font-bold text-dark-navy text-sm uppercase tracking-wide">We value people who:</p>
          <ul className="space-y-3">
            {weValue.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle className="text-industrial-red shrink-0" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        </div>
      </section>

      {/* ── APPLY DIRECTLY BANNER ── */}
      <section className="bg-brand-primary py-10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
              <Shield className="text-white" size={22} />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-white text-lg uppercase tracking-wide">Apply Directly. No Agents. No Fees.</h3>
              <p className="text-slate-300 text-sm">FeX never charges candidates any recruitment fee.</p>
              <p className="text-slate-300 text-sm">We do not authorize agents, brokers, or intermediaries to collect money on our behalf.</p>
              <p className="text-slate-300 text-sm font-semibold">All recruitment is conducted directly through official FeX channels.</p>
            </div>
          </div>
          <div className="text-right space-y-3 shrink-0">
            <p className="text-slate-300 text-sm">If anyone claims otherwise, please report it immediately.</p>
            <a
              href="mailto:careers@fexalloys.com"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-bold py-2.5 px-5 hover:bg-white hover:text-brand-primary transition-all duration-200"
            >
              <Mail size={15} />
              careers@fexalloys.com
            </a>
          </div>
        </div>
      </section>

      {/* ── JOIN TALENT NETWORK ── */}
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Apply Now</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark-navy">Submit your CV</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Send your resume along with your current designation, years of experience, and preferred function to our careers team.
            </p>
            <div className="inline-flex items-center gap-2.5 bg-red-50 border border-industrial-red/30 rounded-full px-5 py-2.5 mx-auto">
              <span className="w-2 h-2 rounded-full bg-industrial-red shrink-0 animate-pulse"></span>
              <p className="text-industrial-red text-xs sm:text-sm font-bold leading-snug">
                Recommended: Send a less than 60 sec video about yourself and work experience along with your CV.
              </p>
            </div>
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
      </section>

      {/* ── VOICES FROM FeX ── */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-display font-extrabold text-dark-navy text-xl md:text-2xl tracking-wide">VOICES FROM FeX</h2>
            <div className="w-10 h-1 bg-industrial-red rounded mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role }) => (
              <div key={name} className="bg-white border border-slate-200 rounded-lg p-7 space-y-4 flex flex-col">
                <Quote className="text-industrial-red shrink-0" size={24} />
                <p className="text-slate-600 text-sm leading-relaxed italic flex-1">"{quote}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-display font-bold text-dark-navy text-sm">{name}</p>
                  <p className="text-xs text-industrial-red font-mono font-semibold uppercase tracking-widest mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </motion.div>
  );
}
