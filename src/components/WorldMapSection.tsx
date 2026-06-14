import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const GEO_URL = '/countries-110m.json';

const HIGHLIGHTED = [
  // USA
  'United States of America',
  // UK
  'United Kingdom',
  // European Union
  'Germany', 'France', 'Italy', 'Spain', 'Poland', 'Netherlands', 'Belgium',
  'Sweden', 'Portugal', 'Greece', 'Austria', 'Czechia', 'Romania', 'Hungary',
  'Denmark', 'Finland', 'Ireland', 'Croatia', 'Slovakia', 'Bulgaria',
  // Turkey
  'Turkey',
  // Middle East
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Jordan', 'Iraq',
  // India
  'India',
  // Additional
  'Mexico', 'Brazil', 'Malaysia', 'Indonesia', 'South Africa', 'Morocco',
];

const MARKERS: { name: string; coordinates: [number, number] }[] = [
  { name: 'USA', coordinates: [-100, 40] },
  { name: 'UK', coordinates: [-2, 54] },
  { name: 'EU', coordinates: [12, 50] },
  { name: 'Turkey', coordinates: [35, 39] },
  { name: 'Middle East', coordinates: [47, 25] },
  { name: 'India', coordinates: [78, 22] },
  { name: 'Mexico', coordinates: [-102, 24] },
  { name: 'Brazil', coordinates: [-52, -10] },
  { name: 'Malaysia', coordinates: [109, 4] },
  { name: 'Indonesia', coordinates: [118, -2] },
  { name: 'S. Africa', coordinates: [25, -29] },
  { name: 'Morocco', coordinates: [-7, 32] },
];

export default function WorldMapSection() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <section className="bg-[#0a1628] py-8 w-full border-b-4 border-industrial-red" id="global-map-section">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-2">
          <span className="text-xs uppercase tracking-widest font-extrabold text-industrial-red font-mono">Global Reach</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mt-2">Trusted in 35+ Countries</h2>
          <p className="text-slate-400 text-sm mt-2">Supplying premium foundry alloys across automotive, energy and heavy engineering sectors worldwide</p>
        </div>

        <div className="relative w-full">
          {tooltip && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-industrial-red text-white text-xs font-bold px-3 py-1.5 rounded z-10 pointer-events-none whitespace-nowrap">
              {tooltip}
            </div>
          )}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 110, center: [15, 20] }}
            style={{ width: '100%', height: '600px' }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isHighlighted = HIGHLIGHTED.includes(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => { if (isHighlighted) setTooltip(geo.properties.name); }}
                      onMouseLeave={() => setTooltip(null)}
                      style={{
                        default: {
                          fill: isHighlighted ? '#C0202A' : '#1e3358',
                          stroke: '#0a1628',
                          strokeWidth: 0.6,
                          outline: 'none',
                        },
                        hover: {
                          fill: isHighlighted ? '#e5283a' : '#253d6b',
                          stroke: '#0a1628',
                          strokeWidth: 0.6,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            {MARKERS.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={4} fill="#ffffff" stroke="#C0202A" strokeWidth={2} />
                <text
                  textAnchor="middle"
                  y={-8}
                  style={{ fontSize: '9px', fill: '#ffffff', fontWeight: 'bold' }}
                >
                  {name}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>

        {/* Country tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {['USA', 'UK', 'European Union', 'Turkey', 'Middle East', 'India', 'Mexico', 'Brazil', 'Malaysia', 'Indonesia', 'South Africa', 'Morocco', '& more'].map((c) => (
            <span key={c} className="text-xs font-mono font-semibold bg-white/10 text-slate-300 px-3 py-1 rounded-full border border-white/10">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
