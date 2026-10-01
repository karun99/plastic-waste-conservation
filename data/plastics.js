/**
 * Reference data on the main plastic families, how they are made, and
 * how long they persist. Used by the Plastic Literacy page (M1) and by the
 * Impact Calculator (M4).
 */

export const polymers = [
  {
    name: 'Polyethylene (PE / HDPE / LDPE)',
    monomer: 'Ethylene',
    density: '0.91-0.96 g/cm3',
    source: 'Crude oil or natural gas (ethane)',
    process: 'Steam cracking -> ethylene -> addition polymerisation',
    life: '~10-20 yrs in landfill, 400+ yrs to fragment',
    uses: 'Bottles, carrier bags, milk pouches, detergent bottles',
    recycling: 'High - widely recycled (HDPE)',
    accent: '#2f9e6e'
  },
  {
    name: 'Polypropylene (PP)',
    monomer: 'Propylene',
    density: '0.90-0.92 g/cm3',
    source: 'Crude oil or natural gas (propane)',
    process: 'Steam cracking -> propylene -> addition polymerisation',
    life: '~20-30 yrs in landfill',
    uses: 'Caps, food containers, straws, bottle caps, ropes',
    recycling: 'Moderate - but often confused with PE',
    accent: '#4c9f70'
  },
  {
    name: 'Polyvinyl Chloride (PVC)',
    monomer: 'Vinyl chloride',
    density: '1.3-1.4 g/cm3',
    source: 'Natural gas (ethylene) + salt (chlorine)',
    process: 'Ethylene + chlorine -> VCM -> addition polymerisation',
    life: '~40-50 yrs in landfill',
    uses: 'Pipes, cable insulation, toys, medical tubing',
    recycling: 'Low - difficult and often downcycled',
    accent: '#7aa860'
  },
  {
    name: 'Polystyrene (PS)',
    monomer: 'Styrene',
    density: '1.05-1.12 g/cm3',
    source: 'Crude oil (benzene)',
    process: 'Steam cracking -> styrene -> addition polymerisation',
    life: '~30-50 yrs in landfill',
    uses: 'Foam cups, food trays, packaging, school kits',
    recycling: 'Low - EPS foam is almost never recycled',
    accent: '#9a8f4a'
  },
  {
    name: 'PET (Polyethylene Terephthalate)',
    monomer: 'Terephthalic acid + ethylene glycol',
    density: '1.3-1.4 g/cm3',
    source: 'Crude oil / natural gas',
    process: 'Polyesterification + polycondensation',
    life: '~450 yrs to fragment',
    uses: 'Water/soda bottles, food trays, polyester fibre',
    recycling: 'High - mechanical + chemical recycling viable',
    accent: '#c2a13a'
  }
];

export const problems = [
  {
    title: 'Persistence',
    body: 'Conventional plastics take roughly 400-1000 years to degrade in nature. They rarely disappear - they only fragment into smaller and smaller pieces.'
  },
  {
    title: 'Microplastics',
    body: 'Sunlight (photodegradation) and friction fragment plastic into particles 5 mm or smaller that wash into soil and water systems.'
  },
  {
    title: 'Soil Contamination',
    body: 'Soil microplastic levels are reported 4-23x higher than in oceans, disrupting microbial communities and nutrient cycling.'
  },
  {
    title: 'Ocean Gyres',
    body: 'The Great Pacific Garbage Patch spans about 1.6 million km2 and holds an estimated 1.8 trillion pieces of plastic.'
  },
  {
    title: 'Open Burning',
    body: 'In many Indian cities plastic is still burned openly, releasing dioxins, furans, and particulate matter directly into the air people breathe.'
  },
  {
    title: 'Single-Use Culture',
    body: 'Around 40% of plastic produced is used once and thrown away within minutes, which is the root cause of the waste stream.'
  }
];

/**
 * Impact factors for the M4 Impact Calculator.
 * Sources: OECD Global Plastics Outlook, UNEP, and IPCC-style
 * well-to-wheel type factors. Numbers are order-of-magnitude estimates
 * meant for classroom demonstration, not audited reporting.
 */
export const impactFactors = {
  // kg CO2-equivalent saved per kg of plastic diverted from the environment
  co2SavedPerKg: 2.5,
  // litres of petroleum feedstock embodied in 1 kg of common plastic
  oilLitresPerKg: 1.5,
  // decomposition timescale used for the "still in the environment" figure
  breakdownYears: 500,
  // kg CO2-equivalent avoided per litre of diesel not burned
  co2PerLitreDiesel: 2.68
};
