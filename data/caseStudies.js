/**
 * The six case studies that anchor this project.
 * Kept in one plain-JS module so it can be imported by server components,
 * the chatbot context builder, and the rule-based solution matcher.
 */

export const caseStudies = [
  {
    slug: 'plastic-as-school-fees',
    title: 'Plastic Waste as School Fees',
    emoji: '🏫',
    place: 'Akshar Forum School, Pamohi, Assam, India',
    tag: 'Education',
    year: '2023',
    summary:
      'Students pay 20-25 plastic items per week instead of money. The school collects ~9 kg plastic/month and converts it into eco-bricks and upcycled products.',
    details: [
      'Founded by Mazin Mukhtar and Parmita Sarma to reduce plastic burning in Pamohi.',
      'Families deposit single-use plastic at the school gate.',
      'Collected plastic is shredded and stuffed into PET bottles to form eco-bricks.',
      'Eco-bricks are used for school furniture, planters, and boundary walls.',
      'Lesson: circular economy can fund education.'
    ],
    lesson:
      'Community incentive design can turn waste into a resource and revenue stream.',
    links: [
      { label: 'Akshar Forum (official)', url: 'https://aksharforum.org' }
    ]
  },
  {
    slug: 'great-pacific-garbage-patch',
    title: 'Great Pacific Garbage Patch (GPGP)',
    emoji: '🌊',
    place: 'North Pacific Ocean, between California and Hawaii',
    tag: 'Ocean Pollution',
    year: '1997-',
    summary:
      'The GPGP spans ~1.6 million km2 and contains an estimated 1.8 trillion plastic pieces, mostly microplastics and abandoned fishing nets.',
    details: [
      'Discovered by Charles Moore in 1997.',
      'Composed of ~46% fishing nets, ~52% other plastics, ~2% unclassified.',
      'Ocean currents (North Pacific Gyre) concentrate debris.',
      'Microplastics enter the food chain via plankton -> fish -> humans.',
      'The Ocean Cleanup project is testing large floating barriers.'
    ],
    lesson:
      'Ocean gyres act as plastic traps; source reduction is cheaper than cleanup.',
    links: [{ label: 'The Ocean Cleanup', url: 'https://theoceancleanup.com' }]
  },
  {
    slug: 'microplastics-in-soil',
    title: 'Microplastics in Soil',
    emoji: '🌱',
    place: 'Global research (China, Germany, India)',
    tag: 'Soil Health',
    year: '2019-',
    summary:
      'Soil microplastic concentration can be 4-23x higher than in oceans. Microplastics alter soil microbial communities and reduce basal respiration.',
    details: [
      'Sources: mulching films, sewage sludge, tyre wear, plastic litter.',
      'Fragments <5 mm disrupt the fungal-bacterial balance.',
      'Reduced nitrogen fixation affects crop yields.',
      'Microplastics can leach into groundwater.',
      'Mitigation: biodegradable mulch, sludge pre-treatment, soil filters.'
    ],
    lesson:
      'Terrestrial microplastic pollution is under-reported and directly threatens food security.',
    links: [
      {
        label: 'UNEP - From Pollution to Solution',
        url: 'https://www.unep.org/resources/pollution-solution-global-assessment-marine-litter-and-plastic-pollution'
      }
    ]
  },
  {
    slug: 'iit-madras-plastic-roads',
    title: 'Plastic Roads - IIT Madras / MoRTH',
    emoji: '🛣️',
    place: 'Rural India (43,700 km+ completed by 2025)',
    tag: 'Infrastructure',
    year: '2015-',
    summary:
      'Waste plastic (2-6% by weight) is blended with bitumen to build stronger, water-resistant roads.',
    details: [
      'Polymer-modified bitumen increases binding strength.',
      'Plastic roads show reduced ravelling, cracking, and potholes.',
      'Process uses shredded LDPE/HDPE waste.',
      'Cost-competitive with conventional roads.',
      'Scaled under the Pradhan Mantri Gram Sadak Yojana.'
    ],
    lesson:
      'Plastic can be a valuable construction input if segregated and processed correctly.',
    links: [
      {
        label: 'MoRTH - Waste Plastic Utilisation',
        url: 'https://morth.nic.in'
      }
    ]
  },
  {
    slug: 'plastic-bricks',
    title: 'Plastic Bricks (HDPE/LDPE + Sand + Kaolin)',
    emoji: '🧱',
    place: 'Global research (Indonesia, India, UK)',
    tag: 'Construction',
    year: '2016-',
    summary:
      'Melted plastic mixed with sand and kaolin clay produces bricks with lower water absorption and adequate compressive strength.',
    details: [
      'HDPE/LDPE are shredded and melted at ~180-220 C.',
      'Sand:plastic ratio is typically 70:30.',
      'Bricks are lighter and cheaper than clay bricks.',
      'Reuse prevents plastic from entering landfills.',
      'Concern: fumes during melting require safe ventilation.'
    ],
    lesson:
      'Low-tech plastic-to-brick conversion is viable at community scale.',
    links: []
  },
  {
    slug: 'plastoline-julian-brown',
    title: 'Plastoline - Plastic to Fuel (NatureJAB)',
    emoji: '⛽',
    place: 'United States (mobile microwave pyrolysis reactor)',
    tag: 'Fuel Innovation',
    year: '2023-',
    summary:
      'A microwave pyrolysis reactor converts plastic into a 110-octane liquid fuel, and has been demonstrated running a Dodge Challenger. A trailer-mounted mobile version is in development.',
    details: [
      'Pyrolysis heats plastic without oxygen to break long polymer chains.',
      'Produces liquid fuel, syngas, and char.',
      'Microwave heating means the plastic itself absorbs the energy.',
      'Demonstrated in a sports car (Dodge Challenger).',
      'Portable version aims at on-site waste-to-fuel conversion.'
    ],
    lesson:
      'Decentralised plastic-to-fuel can close the loop where recycling infrastructure is missing.',
    links: [{ label: 'NatureJAB', url: 'https://www.naturejab.com' }]
  }
];

export const tags = ['All', ...Array.from(new Set(caseStudies.map((c) => c.tag)))];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

/** Flat text digest of every case study, injected into the chatbot system prompt. */
export function caseStudyContext() {
  return caseStudies
    .map(
      (c) =>
        `${c.title} (${c.place}, ${c.tag}) - ${c.summary} Key points: ${c.details.join(' ')}`
    )
    .join('\n');
}
