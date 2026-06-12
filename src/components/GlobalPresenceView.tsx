import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Anchor, Package, Compass, Ship, Clock, ShieldAlert, Globe } from 'lucide-react';
import { COUNTRIES } from '../data';

export default function GlobalPresenceView() {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('DE');

  const logisticsOptions = [
    {
      code: 'DE',
      country: 'Germany',
      mainPort: 'Hamburg / Rotterdam',
      transitDays: '26 - 30 Days (Ocean + Rhine Rail)',
      packingRec: '1.0 MT UV-Stabilized Polypropylene Big Bags with integrated lifting loops, palletized under moisture-barrier shrink wraps.',
      maxPayload: '24.5 MT per 20ft Cargo Container',
      customsRule: 'Standard EU import registration with REACH metallurgical declarations attached on each bill of lading.'
    },
    {
      code: 'JP',
      country: 'Japan',
      mainPort: 'Tokyo / Yokohama',
      transitDays: '14 - 18 Days (Direct Sea Lane)',
      packingRec: '250 kg Hermetically Sealed Steel Drums placed on IPPC-certified solid wood cradles (4 drums per pallet).',
      maxPayload: '22.0 MT per 20ft Cargo Container',
      customsRule: 'Japanese METI import verification certificates issued by FeX on export.'
    },
    {
      code: 'US',
      country: 'United States',
      mainPort: 'New York / Baltimore / Houston',
      transitDays: '22 - 27 Days (Direct Ocean)',
      packingRec: '1.25 MT Big Bags with heavy-gauge bottom discharges. Reinforced pallet support to prevent forklift punctures.',
      maxPayload: '21.5 MT per 20ft Container (Subject to regional road interstate axle limits)',
      customsRule: 'US EPA metallurgical import compliance filings, Toxic Substances Control Act (TSCA) inventory statements.'
    },
    {
      code: 'KR',
      country: 'South Korea',
      mainPort: 'Busan',
      transitDays: '12 - 15 Days (East China Sea Lane)',
      packingRec: '1.0 MT dual-layer big bags on heavy plastic pallets to facilitate wet shipyard environments.',
      maxPayload: '25.0 MT per 20ft Cargo Container',
      customsRule: 'Standard free trade agreement (FTA) certificates of origin verified on ship departure.'
    },
    {
      code: 'IT',
      country: 'Italy',
      mainPort: 'Genoa / Trieste',
      transitDays: '28 - 32 Days (Mediterranean routing)',
      packingRec: '1.0 MT heavy woven bags with side lifting loops, double-stitched corner bindings.',
      maxPayload: '24.0 MT per 20ft Cargo Container',
      customsRule: 'REACH registration documents and chemical risk sheets matching EU safety standards.'
    },
    {
      code: 'IN',
      country: 'India',
      mainPort: 'Nhava Sheva / Chennai / Kolkata',
      transitDays: '2 - 5 Days (Domestic Rail / Truck Fleet)',
      packingRec: '1.0 MT Big Bags or bulk pneumatic silo trucks for immediate delivery to central foundries.',
      maxPayload: '30.0 MT per Flatbed Cargo Truck',
      customsRule: 'Standard GST invoices and local state chemical logistics permits.'
    },
    {
      code: 'BR',
      country: 'Brazil',
      mainPort: 'Santos / Paranaguá',
      transitDays: '35 - 40 Days (South Atlantic Lane)',
      packingRec: '250 kg Steel drums painted and coated inside to prevent ambient high-humidity oxidation during equator crosses.',
      maxPayload: '20.0 MT per 20ft Container',
      customsRule: 'Mercosur import compliance codes and certified weighing certifications.'
    },
    {
      code: 'TR',
      country: 'Turkey',
      mainPort: 'Ambarli / Izmir',
      transitDays: '24 - 28 Days (Aegean Ocean)',
      packingRec: '1.0 MT Big Bags double wrap shrink-foiled to ensure dust-free operations inside local plant spaces.',
      maxPayload: '23.5 MT per 20ft Container',
      customsRule: 'Standard customs clearing certificate declarations and ATR certificate filing.'
    }
  ];

  const activeLogistics = logisticsOptions.find(o => o.code === selectedCountryCode) || logisticsOptions[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 space-y-16"
      id="global-presence-view"
    >
      {/* Header */}
      <div className="text-center md:text-left space-y-4">
        <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono font-semibold text-industrial-red">Oceanic Pipelines</span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-brand-primary">Our Global Presence</h1>
        <div className="w-20 h-1.5 bg-industrial-red rounded"></div>
      </div>

      {/* Map visual and quick highlights */}
      <div className="relative rounded-xl overflow-hidden bg-brand-primary border-2 border-indigo-950 p-3 shadow-2xl">
        <div className="aspect-[2.1] relative overflow-hidden group">
          <img
            alt="Global Presence Map"
            className="w-full h-full object-cover opacity-65 group-hover:scale-[1.01] transition-transform duration-1000 select-none"
            src="https://lh3.googleusercontent.com/aida/AP1WRLvHJUMeSp0MlLvlH7kST4ZvMifW2XiFqiNei5a5BYTZ3E9p7ICBEN_7Lmj0a81znL1tK9YzXwGPfxz65JvlbjYCXKCUROvbzgWFRFARc3EDeMfw2LF8aXc2ysLfvCy7_boCsOHt3Ik2qYSPXK4gHm8LvbF_38YYVguvSxGXMbOuKU4-ANxztZPgQKKBeG5kIBEs-Znhihku-8BABXgZZFHTlFO1PaPx0zl2mHgjGYvGGhP9tjnVJqyeYA"
            referrerPolicy="no-referrer"
          />
          {/* Subtle glowing marker dots over key industrial areas */}
          <div className="absolute top-[35%] left-[48%] w-3 h-3 bg-industrial-red rounded-full animate-ping"></div>
          <div className="absolute top-[35%] left-[48%] w-2 h-2 bg-industrial-red rounded-full"></div>
          
          <div className="absolute top-[30%] left-[18%] w-2 h-2 bg-[#C0202A] rounded-full"></div>
          <div className="absolute top-[33%] left-[75%] w-2 h-2 bg-[#C0202A] rounded-full"></div>
          <div className="absolute top-[68%] left-[28%] w-2 h-2 bg-[#C0202A] rounded-full"></div>

          <div className="absolute bottom-6 left-6 bg-slate-950/80 backdrop-blur-md p-4 rounded text-white text-xs space-y-1 font-sans border border-white/10 hidden md:block">
            <div className="font-bold text-sm tracking-tight text-industrial-red uppercase">FeX Cargo Status</div>
            <div className="font-light text-slate-300">Continuous custom vessels sailing weekly</div>
            <div className="text-[10px] font-mono text-slate-400">Hub coordinates: 2008-ACTIVE//MT-25K</div>
          </div>
        </div>
      </div>

      {/* Country selection chips */}
      <div className="space-y-6">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl font-bold text-dark-navy">Destination Shipping Estimator</h2>
          <p className="text-xs font-mono text-slate-500 uppercase mt-1">Select shipping node to review schedules, transit terms & packaging rules</p>
        </div>

        <div className="flex flex-wrap gap-2" id="country-presence-chips">
          {COUNTRIES.map((cnt) => {
            const isSelected = cnt.code === selectedCountryCode;
            return (
              <button
                key={cnt.code}
                onClick={() => setSelectedCountryCode(cnt.code)}
                className={`py-2.5 px-5 rounded font-sans text-xs uppercase font-extrabold tracking-wider transition outline-none cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1A2A4A] border-[#1A2A4A] text-white shadow-md'
                    : 'bg-white border-slate-250 text-slate-700 hover:bg-slate-50'
                }`}
                id={`country-btn-${cnt.code}`}
              >
                <Globe size={12} className={isSelected ? 'text-industrial-red' : 'text-slate-400'} />
                {cnt.name}
              </button>
            );
          })}
        </div>

        {/* Selected logistics details card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCountryCode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-slate-200/60 rounded-lg p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            id="logistics-estimator-pane"
          >
            {/* Header info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-industrial-red">{activeLogistics.code} Dispatch Hub</span>
                <h3 className="font-display text-xl font-bold text-dark-navy">{activeLogistics.country}</h3>
              </div>
              
              <div className="space-y-3 font-sans text-sm">
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-100">
                  <Anchor className="text-industrial-red shrink-0" size={18} />
                  <div>
                    <span className="text-[10px] text-slate-450 block uppercase font-bold">Standard Discharge Port:</span>
                    <span className="font-semibold text-slate-800 text-xs">{activeLogistics.mainPort}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-slate-50 p-3 rounded border border-slate-100">
                  <Clock className="text-industrial-red shrink-0" size={18} />
                  <div>
                    <span className="text-[10px] text-slate-450 block uppercase font-bold">Port-to-Port Transit:</span>
                    <span className="font-mono font-bold text-[#C0202A] text-xs">{activeLogistics.transitDays}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Packaging and payload rules summary */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-md space-y-3">
                <div className="flex items-center gap-2 text-indigo-900 border-b border-slate-200 pb-2">
                  <Package className="text-industrial-red" size={18} />
                  <h4 className="font-display font-extrabold text-[#1A2A4A] text-xs uppercase tracking-wider">Recommended Packaging</h4>
                </div>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">
                  {activeLogistics.packingRec}
                </p>
                <div className="bg-white p-2.5 rounded border border-slate-150/50 text-[11px] text-slate-500 font-light leading-relaxed">
                  *Our bags are treated with 120-kly UV stabilising elements to tolerate high temperature harbor yard storage.
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-md space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-indigo-900 border-b border-slate-200 pb-2">
                    <Ship className="text-industrial-red" size={18} />
                    <h4 className="font-display font-extrabold text-[#1A2A4A] text-xs uppercase tracking-wider">Payload & Custom Standards</h4>
                  </div>
                  <div className="leading-relaxed">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Maximum Payload limit:</span>
                    <span className="font-mono text-xs font-bold text-slate-800">{activeLogistics.maxPayload}</span>
                  </div>
                  <div className="leading-relaxed">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Regional regulation:</span>
                    <p className="font-sans text-xs text-slate-600 mt-1">{activeLogistics.customsRule}</p>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 italic flex items-center gap-1.5 pt-2 border-t border-slate-200">
                  <ShieldAlert size={12} className="text-industrial-red" />
                  We provide SGS assay reports with every lading bill.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
