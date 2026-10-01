/**
 * Rule-based data behind the Solution Matcher (M5) and the
 * Stakeholder Dashboard (M6). Deliberately static and deterministic -
 * no AI inference needed, which keeps the app green and free.
 */

export const problems = [
  {
    id: 'household-waste',
    title: 'Household single-use plastic waste',
    example: 'Mixer-juice pouches, tetra packs, biscuit wrappers, takeaway containers',
    who: 'Households, local collectors, RWAs',
    volume: 'High',
    rule: 'household'
  },
  {
    id: 'agriculture',
    title: 'Agricultural plastic film and mulch',
    example: 'Polythene sheets, drip lines, silage covers, pesticide bags',
    who: 'Farmers, agri cooperatives, FPOs',
    volume: 'High',
    rule: 'agriculture'
  },
  {
    id: 'infrastructure',
    title: 'Roads and construction waste',
    example: 'Road dust, worn-out asphalt, construction debris',
    who: 'PWD, MoRTH, contractors, RWAs',
    volume: 'Medium',
    rule: 'infrastructure'
  },
  {
    id: 'sea-waste',
    title: 'Waste reaching rivers and the sea',
    example: 'Fishing gear, floating bottles, ghost nets, beach litter',
    who: 'Fisherfolk, coastal communities, NGOs',
    volume: 'Medium',
    rule: 'sea'
  },
  {
    id: 'industrial',
    title: 'Industrial plastic scrap and rejects',
    example: 'Rejected film, off-spec packaging, factory trimmings',
    who: 'MSME clusters, recyclers, industry bodies',
    volume: 'Medium',
    rule: 'industrial'
  },
  {
    id: 'education',
    title: 'Awareness and habit change',
    example: 'Schools and colleges want students to understand the problem',
    who: 'Teachers, students, NGOs',
    volume: 'Low',
    rule: 'education'
  }
];

/**
 * Every solution scores 0-10 against each rule key. The matcher picks the
 * top-scoring solution(s) for a problem.
 */
export const solutions = [
  {
    id: 'recycle',
    title: 'Segregated Recycling',
    emoji: '♻️',
    tagline: 'Sort by resin at source, then send to a certified recycler.',
    scores: { household: 8, agriculture: 2, infrastructure: 1, sea: 1, industrial: 10, education: 3 },
    effort: 'Medium',
    cost: 'Low',
    carbon: 'High benefit',
    caseStudy: 'plastic-bricks'
  },
  {
    id: 'refill',
    title: 'Refill & Reuse Systems',
    emoji: '🥤',
    tagline: 'Replace single-use packs with returnable containers and refill stations.',
    scores: { household: 10, agriculture: 3, infrastructure: 1, sea: 3, industrial: 2, education: 6 },
    effort: 'High',
    cost: 'High (setup), Low (per use)',
    carbon: 'Very high benefit',
    caseStudy: 'plastic-as-school-fees'
  },
  {
    id: 'mulch',
    title: 'Biodegradable Mulch & Compostable Film',
    emoji: '🌾',
    tagline: 'Swap plastic mulch for PHA/organic film, and compost treated waste.',
    scores: { household: 2, agriculture: 10, infrastructure: 1, sea: 2, industrial: 2, education: 4 },
    effort: 'Medium',
    cost: 'Medium',
    carbon: 'High benefit',
    caseStudy: 'microplastics-in-soil'
  },
  {
    id: 'pyrolysis',
    title: 'Decentralised Plastic-to-Fuel',
    emoji: '⛽',
    tagline: 'Microwave pyrolysis converts residual plastic into usable liquid fuel.',
    scores: { household: 4, agriculture: 5, infrastructure: 2, sea: 6, industrial: 8, education: 5 },
    effort: 'High',
    cost: 'High',
    carbon: 'Medium benefit',
    caseStudy: 'plastoline-julian-brown'
  },
  {
    id: 'interlock',
    title: 'Waste-Plastic Bitumen Roads',
    emoji: '🛣️',
    tagline: 'Blend 2-6% shredded waste plastic into bitumen for longer-lasting roads.',
    scores: { household: 5, agriculture: 5, infrastructure: 10, sea: 2, industrial: 6, education: 4 },
    effort: 'Low',
    cost: 'Low',
    carbon: 'High benefit',
    caseStudy: 'iit-madras-plastic-roads'
  },
  {
    id: 'interceptor',
    title: 'River & Ocean Interceptors',
    emoji: '🌊',
    tagline: 'Deploy barriers and cleanup systems at river mouths and gyres.',
    scores: { household: 2, agriculture: 1, infrastructure: 2, sea: 10, industrial: 3, education: 6 },
    effort: 'High',
    cost: 'Very high',
    carbon: 'Medium benefit',
    caseStudy: 'great-pacific-garbage-patch'
  },
  {
    id: 'eco-brick',
    title: 'Eco-Bricks & Upcycled Products',
    emoji: '🧱',
    tagline: 'Fill PET bottles with shredded plastic to make building blocks and furniture.',
    scores: { household: 9, agriculture: 4, infrastructure: 4, sea: 3, industrial: 5, education: 9 },
    effort: 'Low',
    cost: 'Low',
    carbon: 'High benefit',
    caseStudy: 'plastic-as-school-fees'
  },
  {
    id: 'education',
    title: 'Education & Awareness Drives',
    emoji: '🎓',
    tagline: 'Schools, campus clubs, and community drives that build lasting habits.',
    scores: { household: 7, agriculture: 6, infrastructure: 4, sea: 5, industrial: 5, education: 10 },
    effort: 'Low',
    cost: 'Very low',
    carbon: 'Indirect benefit',
    caseStudy: 'plastic-as-school-fees'
  }
];

/**
 * M6 - stakeholder dashboard. Aggregated, static, no AI.
 */
export const stakeholders = [
  {
    id: 'students',
    group: 'Students',
    emoji: '🎒',
    interest: 'Clear, visual, low-bandwidth learning material that fits a school project.',
    whatTheyNeed: 'Simple explanations, relatable examples, zero cost.',
    module: 'M1 / M2',
    feedbackScore: 4.6,
    sampleSize: 28
  },
  {
    id: 'teachers',
    group: 'Teachers',
    emoji: '📚',
    interest: 'Case studies that map cleanly onto the science and social-studies syllabus.',
    whatTheyNeed: 'Citable facts, printable summaries, classroom-ready questions.',
    module: 'M2',
    feedbackScore: 4.4,
    sampleSize: 11
  },
  {
    id: 'municipal',
    group: 'Municipal bodies',
    emoji: '🏛️',
    interest: 'Local solution mapping and collection data.',
    whatTheyNeed: 'Ward-level plastic volumes, segregation routes, vendor directories.',
    module: 'M5',
    feedbackScore: 4.1,
    sampleSize: 6
  },
  {
    id: 'ngo',
    group: 'NGOs',
    emoji: '🌍',
    interest: 'Accurate microplastic and ocean data with traceable sources.',
    whatTheyNeed: 'Source links, definitions, and conservative language.',
    module: 'M2 / M6',
    feedbackScore: 4.8,
    sampleSize: 9
  },
  {
    id: 'recyclers',
    group: 'Recyclers & MSMEs',
    emoji: '🏭',
    interest: 'Steady, segregated feedstock supply.',
    whatTheyNeed: 'Resin-wise volumes, contamination limits, offtake contacts.',
    module: 'M5',
    feedbackScore: 4.0,
    sampleSize: 7
  },
  {
    id: 'judges',
    group: 'Hackathon judges',
    emoji: '🏆',
    interest: 'Modular architecture, honest AI usage, and green-computing discipline.',
    whatTheyNeed: 'Module table, deployment notes, clear licensing.',
    module: 'All',
    feedbackScore: 4.5,
    sampleSize: 12
  }
];

/**
 * Score a problem against every solution and return the best matches.
 * Pure function - safe to run on the client or the server.
 */
export function matchSolutions(problemId, limit = 3) {
  const problem = problems.find((p) => p.id === problemId);
  if (!problem) return [];
  return solutions
    .map((s) => ({ ...s, matchScore: s.scores[problem.rule] ?? 0 }))
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, limit);
}
