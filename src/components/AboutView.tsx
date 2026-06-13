import React from 'react';
import { motion } from 'motion/react';
import { Factory, Truck, CheckCircle } from 'lucide-react';

export default function AboutView() {
  const values = [
    { num: '1', title: 'Excellence in Every Endeavor', desc: 'Striving for the highest standards in quality & performance.' },
    { num: '2', title: 'People-Centric Approach', desc: 'Empowering our team with skills, knowledge & opportunities.' },
    { num: '3', title: 'Customer-First Mindset', desc: 'Ensuring satisfaction through personalized solutions & dedicated service.' },
    { num: '4', title: 'Collaborative Growth', desc: 'Encouraging teamwork to drive collective success.' },
    { num: '5', title: 'Continuous Evolution', desc: 'Committing to innovation and improvement at every stage.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 space-y-16"
      id="about-view"
    >
      {/* Header */}
      <div className="text-center md:text-left space-y-3">
        <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Our Heritage</span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-brand-primary">FeX Foundry Alloys Pvt Ltd</h1>
<div className="w-20 h-1.5 bg-industrial-red rounded"></div>
      </div>

      {/* Company Snapshot */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Industry', value: 'Chemical Manufacturing' },
          { label: 'Company Size', value: '201–500 Employees' },
          { label: 'Headquarters', value: 'Delhi, Haryana' },
          { label: 'Specialties', value: 'Nodulizers, Inoculants, Mould Powder, Preconditioners' },
        ].map((item) => (
          <div key={item.label} className="bg-surface-low border border-surface-variant rounded-lg p-5 space-y-1">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-industrial-red">{item.label}</p>
            <p className="text-sm font-display font-bold text-dark-navy leading-snug">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Story + Quote card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm md:text-base">
          <p className="font-medium text-lg text-slate-900 leading-relaxed">
            Founded in the year 2008, FeX Foundry Alloys Pvt Ltd has a plant with production capacity of
            1,500 MT/month located in Sonipat, Haryana for manufacturing various high quality premium
            foundry alloys including various grades of Ferro Silico Magnesium (FeSiMg), Ni-Mg,
            Mould Powders, Inoculants and more.
          </p>

          {/* Features */}
          <div className="space-y-3 pt-2">
            <h3 className="font-display font-bold text-dark-navy text-base uppercase tracking-wide">Features</h3>
            <div className="space-y-3">
              {[
                'We are a producer in India who collectively manufactures different Foundry Alloys — Nickel Magnesium, Ferro Silicon Magnesium and Ferro Silicon based Inoculants.',
                'We are dedicatedly catering to the need of Steel & Cast Iron foundry industries.',
                'We assure our customers for consistent quality and excellent performance capabilities.',
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-industrial-red shrink-0 mt-0.5" size={16} />
                  <p className="text-sm text-slate-600">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Director quote card */}
        <div className="lg:col-span-5 bg-white border border-surface-variant/40 rounded p-8 shadow-md relative">
          <div className="absolute top-4 right-4 text-surface-variant font-display text-8xl font-extrabold select-none opacity-20">"</div>
          <h3 className="font-display text-lg font-bold text-dark-navy mb-4">A Message from the Director</h3>
          <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
            "An alloy is more than just raw components thrown together in heat. It is a formula of trust. When a bridge casting or a wind turbine shaft depends on ductile sound structure, there is zero room for trace magnesium variability. That is why at FeX, every ounce of material undergoes chemical audit prior to ship."
          </p>
          <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
              FX
            </div>
            <div>
              <h5 className="font-display font-extrabold text-dark-navy text-sm">Company Director</h5>
              <p className="text-xs text-slate-500">FeX Foundry Alloys Private Limited</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface-low border border-surface-variant rounded-lg p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-industrial-red/10 rounded flex items-center justify-center shrink-0">
              <Factory className="text-industrial-red" size={20} />
            </div>
            <h3 className="font-display font-bold text-dark-navy text-base uppercase tracking-wide">Location Advantage</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our works is located in Sonipat, just 20 km from the heart of India — Delhi. We are surrounded
            by major foundry hubs including Haryana, Rajasthan, Punjab, UP &amp; Uttarakhand.
          </p>
        </div>
        <div className="bg-surface-low border border-surface-variant rounded-lg p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-industrial-red/10 rounded flex items-center justify-center shrink-0">
              <Truck className="text-industrial-red" size={20} />
            </div>
            <h3 className="font-display font-bold text-dark-navy text-base uppercase tracking-wide">Logistics Network</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            We have domestic and international presence across India. Two International Cargo Hubs —
            Tughlakabad and Loni ICD, Delhi — support our strategic imports and exports. We are also
            centrally located among major domestic transporters, enabling timely and economical deliveries.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-brand-primary rounded-lg overflow-hidden">
        <div className="p-8 md:p-12 space-y-10">
          <div>
            <p className="font-display font-bold text-white/50 text-sm uppercase tracking-widest">Our</p>
            <h2 className="font-display font-extrabold text-white text-5xl md:text-6xl uppercase tracking-tight leading-none">Values</h2>
          </div>
          <p className="text-slate-300 text-sm max-w-xl">
            Our success is built upon a strong foundation of values that define our culture:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.num} className="flex items-start gap-4">
                <span className="font-display font-extrabold text-industrial-red text-3xl leading-none shrink-0">{v.num}.</span>
                <div>
                  <h4 className="font-display font-bold text-white text-sm leading-snug">{v.title}</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed italic">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 space-y-4 text-slate-300 text-sm leading-relaxed">
            <p>
              Driven by an entrepreneurial mindset, we have swiftly positioned ourselves as an industry leader
              by identifying opportunities and adapting to market dynamics with agility. Our goal is to establish
              FeX Foundry Alloys as a name synonymous with trust, quality, and commitment in the foundry industry.
            </p>
            <p>
              With a relentless pursuit of excellence, we remain dedicated to optimizing client satisfaction
              and setting new benchmarks in the industry.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
