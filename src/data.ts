import { Product, Facility, QualityTest, CountryPresence } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'fesm',
    name: 'Ferro Silicon Magnesium',
    shortDesc: 'High-performance nodulariser for ductile iron production.',
    longDesc: 'Ferro Silicon Magnesium alloys are master alloys of Magnesium with Iron and Silicon. They facilitate small additions of Magnesium to Iron, required to transform graphite flakes to spheroids. Our alloys are produced in induction furnaces and cast in permanent moulds to give homogeneity. We can offer the right alloy with controlled amounts of Ca and TRE, to reduce the severity of reaction and to improve Magnesium recovery. All alloys are analysed with the help of X-Ray Fluorescence spectrometer to ensure consistent quality.',
    image: '/products/ferro-silicon-magnesium.png',
    specifications: [
      { element: 'Silicon (Si)', range: '44.0% - 48.0%' },
      { element: 'Magnesium (Mg)', range: '5.5% - 9.0% (Customizable)' },
      { element: 'Calcium (Ca)', range: '1.0% - 2.5%' },
      { element: 'Rare Earth (RE)', range: '0.8% - 3.0%' },
      { element: 'Aluminum (Al)', range: '1.2% Max' },
      { element: 'Iron (Fe)', range: 'Balance' }
    ],
    applications: [
      { id: 1, text: 'Nodular graphite cast iron production (Spheroidal/Ductile Iron).' },
      { id: 2, text: 'Automotive castings like crankshafts, steering knuckles, and housings.' },
      { id: 3, text: 'Heavy duty industrial pumps, pipes, and windmill casting structures.' }
    ].map(a => a.text),
    physicalState: 'Deep Grey Lumps',
    standardSize: '5 - 30 mm, 10 - 40 mm (90% min passing)'
  },
  {
    id: 'inoc',
    name: 'Inoculants',
    shortDesc: 'Precision inoculants for superior metallurgical control.',
    longDesc: 'Inoculants are FeSi based alloys which contain carefully balanced amounts of active elements designed to control the microstructure and mechanical properties of cast irons. Through the correct inoculation of cast irons the formation of chill can be prevented and gas related porosity and shrinkage to a great extent controlled and minimized. Our inoculants are specially designed to serve most aspects of grey and ductile iron production, with defined contents of elements like Calcium and Barium.',
    image: '/products/inoculants.png',
    specifications: [
      { element: 'Silicon (Si)', range: '70.0% - 76.0%' },
      { element: 'Calcium (Ca)', range: '0.5% - 2.0%' },
      { element: 'Barium (Ba)', range: '1.0% - 3.0% (Or Barium-free)' },
      { element: 'Aluminum (Al)', range: '0.8% - 1.5%' },
      { element: 'Iron (Fe)', range: 'Balance' }
    ],
    applications: [
      { id: 1, text: 'Prevention of cementite formation in thin-walled castings.' },
      { id: 2, text: 'Grain refinement and cell-count maximization for gray cast iron.' },
      { id: 3, text: 'In-ladle and stream inoculation schemes for cast foundries.' }
    ].map(a => a.text),
    physicalState: 'Grey Crystalline Grains',
    standardSize: '0.2-0.7 mm / 1-3 mm / 2-6 mm / 6-15 mm (as per requirements)'
  },
  {
    id: 'mould',
    name: 'Mould Powder',
    shortDesc: 'Premium casting powders for optimal surface finish.',
    longDesc: 'Mould Powder is a crucial component in the production of ductile iron pipes. It is applied to the mould surface to facilitate easy removal of the casting, reduce friction, and control heat transfer. The powder helps prevent defects, such as sticking and scarring, and ensures a smooth casting process.',
    image: '/products/mould-powder.png',
    specifications: [
      { element: 'Carbon (C)', range: '4.0% - 8.0%' },
      { element: 'Silica (SiO2)', range: '30.0% - 35.0%' },
      { element: 'Calcium Oxide (CaO)', range: '32.0% - 38.0%' },
      { element: 'Alumina (Al2O3)', range: '5.0% - 10.0%' },
      { element: 'Fluorine (F)', range: '3.0% - 6.0%' }
    ],
    applications: [
      { id: 1, text: 'High-speed continuous casting processes (Billet & Slab casters).' },
      { id: 2, text: 'Prevention of thermal stress cracking on steel surfaces.' },
      { id: 3, text: 'Absorption of non-metallic alumina inclusions from liquid steel.' }
    ].map(a => a.text),
    physicalState: 'Fine Dark Powder or Granules',
    standardSize: 'Mesh -100 to -200 (Fluidized passing)'
  },
  {
    id: 'nimg',
    name: 'Nickel Magnesium',
    shortDesc: 'Specialty alloys for high-strength casting applications.',
    longDesc: 'Nickel Magnesium master alloys find their main application as a high quality nodulizer in the manufacturing of SG iron or nodular irons, predominantly in those containing nickel. The addition of master alloys more efficiently transfers Magnesium into the liquid cast iron than pure Magnesium metal because of a higher density of the master alloys. The improved treatment results in more efficient Magnesium recovery and minimizes MgO fume emission.',
    image: '/products/nickel-magnesium.png',
    specifications: [
      { element: 'Magnesium (Mg)', range: '14.0% - 20.0%' },
      { element: 'Rare Earth (TRE)', range: 'Optional (0.8% - 1.2%)' },
      { element: 'Nickel (Ni)', range: 'Balance' }
    ],
    applications: [
      { id: 1, text: 'Manufacturing of Ni-Resist austenitic ductile irons.' },
      { id: 2, text: 'High-corrosion offshore pump casings and marine components.' },
      { id: 3, text: 'Severe heat turbine parts and special aerospace foundry setups.' }
    ].map(a => a.text),
    physicalState: 'Shiny Silver Lumps',
    standardSize: '10-50 mm / 20-80 mm (Packed in 100 kg drums)'
  },
  {
    id: 'inwire',
    name: 'Inoculant Cored Wire',
    shortDesc: 'Efficient wire feeding solutions for precise inoculation.',
    longDesc: 'A type of cored wire used to introduce inoculants into molten iron. The wire contains a core of inoculant materials, such as ferrosilicon, calcium, or other elements, which help to improve the microstructure and properties of the cast iron. The cored wire is fed into the molten iron, where the steel sheath melts, releasing the inoculant core, which dissolves and distributes evenly, enhancing the quality of the cast iron.',
    image: '/products/inoculant-cored-wire.png',
    specifications: [
      { element: 'Sheath Steel', range: '0.35mm Steel strip overlay' },
      { element: 'Filling Ratio', range: '60% - 65% by weight' },
      { element: 'Active Material', range: 'Silicon-Barium-Calcium or customized alloy' },
      { element: 'Linear Density', range: '220 - 280 g/m' }
    ],
    applications: [
      { id: 1, text: 'Late-stage stream or ladle wire injection systems.' },
      { id: 2, text: 'High-production robotic ductile iron foundry lines.' },
      { id: 3, text: 'Strict control over graphite size distributions.' }
    ].map(a => a.text),
    physicalState: 'Perfect Wound Wire Coils',
    standardSize: 'Diameter 9mm or 13mm (+/- 0.2mm)'
  },
];

export const FACILITIES: Facility[] = [
  {
    id: 'furnaces',
    name: 'Medium Frequency Induction Furnaces',
    type: 'Alloy Smelting',
    capacity: '25,000 Metric Tons / Year',
    details: 'Equipped with custom PLC temperature governors and modern electromagnetic stirring modules. This ensures identical chemical homogenization across every cast batch before tapping.',
    equipment: ['2 x Inductotherm 10-Ton Induction Melting Systems', 'High-accuracy continuous temperature sensors (up to 1800°C)'],
    features: ['Auto-stoppage control to avoid alloy over-smelting.', 'Electrode-free heating preventing trace carbon contamination.']
  },
  {
    id: 'wire_milling',
    name: 'Automatic Cored Wire Fabrication Lines',
    type: 'Cored Wire Drawing & Sheathing',
    capacity: '12,000 Meters / Day',
    details: 'Equipped with dual compression sheathing chambers that continuously compress metallurgical powders inside state-of-the-art cold-rolled low-carbon steel casing.',
    equipment: ['3 x Heavy-Duty Multi-tier drawing stations', 'Continuous ultrasonic seam scanning monitors'],
    features: ['Perfect double-lock sheathing locks to prevent powder leaking.', 'Real-time linear weight calibration.']
  },
  {
    id: 'crush_screening',
    name: 'Sizing & Screening Facilities',
    type: 'Crushing & Sizing',
    capacity: '100 Metric Tons / Day',
    details: 'Closed-circuit crushing facilities designed to size alloy lumps to clean particle specs under argon blanket layers, which protects magnesium from ambient oxidation.',
    equipment: ['Jaw Crushers, Roll Crushers & Sieve Classifiers', 'Vacuum dust and fine powder capture hoods'],
    features: ['Extremely low size variation (+/- 5% tolerance).', 'Argon-inert atmosphere inside crushing cabinets to preserve active alloy elements.']
  }
];

export const QUALITY_TESTS: QualityTest[] = [
  {
    id: 'spectro',
    name: 'X-Ray Fluorescence (XRF) & ICP-OES Spectroscopy',
    equipmentUsed: 'SPECTROMAXx Spark Spectrometer & Shimadzu XRF-1800',
    methodology: 'Every tapped ladle batch is sampled twice. Coins are cast and spark-tested immediately in our on-site lab to determine absolute element ranges before solidifying.',
    tolerance: '+/- 0.05% of elemental weight content',
    importance: 'Guarantees the exact required magnesium and rare earth compositions, protecting customer foundries from unexpected nodularisation failures.'
  },
  {
    id: 'size_verify',
    name: 'Laser Diffraction & Sieve Analyzer Testing',
    equipmentUsed: 'Rotap Sieve Shaker & Malvern Mastersizer 3000',
    methodology: 'Samples from each batch bags undergo automated mechanical sifting to verify the uniform size requested. All ultra-fine particles are strictly removed to prevent fast burn-off during metal foundry treatment.',
    tolerance: '92% min pass-through within specific range bounds',
    importance: 'Fines cause violent ignition and splash hazards; exact sizing ensures calm, safe, and efficient metallurgical assimilation.'
  },
  {
    id: 'micro',
    name: 'In-Mold Simulation & Metallographic Microscope analysis',
    equipmentUsed: 'Olympus GX53 Metallurgical Microscope with digital analyzer',
    methodology: 'We cast real mock test bars of ductile iron on-site, analyze nodule counts, nodularity percentage (target >90%), and ferrite/pearlite proportions under high magnification.',
    tolerance: '>90% spherical graphite shape count',
    importance: 'Confirms empirical metallurgical performance of our Ferro Silicon Magnesium prior to global shipping.'
  }
];

export const COUNTRIES: CountryPresence[] = [
  { name: 'Germany', code: 'DE', marketShare: 'High', mainProducts: ['Ferro Silicon Magnesium', 'Inoculants'] },
  { name: 'Japan', code: 'JP', marketShare: 'Premium', mainProducts: ['Nickel Magnesium', 'FeSiMg Cored Wire'] },
  { name: 'United States', code: 'US', marketShare: 'Core Partner', mainProducts: ['Inoculants', 'Ferro Silicon Magnesium'] },
  { name: 'South Korea', code: 'KR', marketShare: 'High', mainProducts: ['Mould Powder', 'Inoculant Cored Wire'] },
  { name: 'Italy', code: 'IT', marketShare: 'Volume Lead', mainProducts: ['Ferro Silicon Magnesium'] },
  { name: 'India', code: 'IN', marketShare: 'Major Hub', mainProducts: ['All Range Alloys', 'Cored Wires'] },
  { name: 'Brazil', code: 'BR', marketShare: 'High Growth', mainProducts: ['Inoculant Cored Wire'] },
  { name: 'Turkey', code: 'TR', marketShare: 'Active Partner', mainProducts: ['Ferro Silicon Magnesium', 'Mould Powder'] }
];
