export const PROJECTS = [
  {
    id: 'spendr',
    buildId: 'BUILD_001',
    sysId: 'SYS_001',
    name: 'SPENDR',
    category: 'FINTECH / AI',
    year: 2026,
    tagline: 'Financial platform combining budgeting, financial education, AI assistance and paper trading.',
    oneLiner: 'Financial platform combining budgeting, financial education, AI assistance and paper trading.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    preview: null,
    active: true,
    caseStudy: {
      overview: {
        title: '01 — Overview',
        what: 'Spendr is a next-generation wealth management and paper-trading platform engineered for young investors.',
        who: 'Built for Gen-Z and first-time investors who find traditional brokerage dashboards overwhelming.',
        problem: 'Traditional financial platforms overload users with dense tables and jargon without contextual education or risk-free testing grounds.'
      },
      problem: {
        title: '02 — Problem',
        description: 'Young investors face a 70% churn rate on traditional trading apps due to high volatility anxiety, complex UI, and lack of real-time simulation.'
      },
      solution: {
        title: '03 — Solution',
        description: 'An integrated web ecosystem that combines live paper-trading market simulation, AI-driven portfolio insights, and structured financial micro-lessons.'
      },
      contribution: {
        title: '04 — My Contribution',
        details: [
          'Architected the full-stack real-time paper-trading engine handling mock order execution with low latency.',
          'Designed the dark, high-contrast dashboard with responsive telemetry and WebSocket price feeds.',
          'Implemented the AI assistant context provider using streaming Gemini responses for portfolio analysis.'
        ]
      },
      features: [
        { name: 'Live Simulation', desc: 'Real-time WebSocket market ticker feed with zero financial risk.' },
        { name: 'AI Tutor', desc: 'Contextual risk assessment for every trade placing orders.' },
        { name: 'Visual Analytics', desc: 'Interactive asset allocation charts with responsive dark design.' }
      ],
      architecture: {
        title: '06 — Architecture',
        nodes: ['React Frontend', 'WebSocket API Gateway', 'Node.js Engine', 'PostgreSQL / Redis Cache']
      },
      technicalDecisions: [
        { decision: 'Redis for Price Caching', rationale: 'Sub-millisecond access to simulated order book data under high simulated load.' },
        { decision: 'PostgreSQL Relational Storage', rationale: 'ACID compliance required for ledger history and balance mutations.' }
      ],
      challenges: {
        title: '08 — Challenges',
        description: 'Handling race conditions during rapid simulated market order bursts. Solved by implementing optimistic UI updates paired with idempotent backend ledger transactions.'
      },
      results: {
        title: '09 — Results',
        metrics: [
          { label: 'Avg Session Duration', value: '4.2 min' },
          { label: 'Simulated Orders Processed', value: '50k+' },
          { label: 'UI Latency', value: '< 45ms' }
        ]
      },
      futureImprovements: {
        title: '10 — Future Improvements',
        points: [
          'Add multi-asset crypto & options simulation.',
          'Implement social leaderboard & collaborative portfolio leagues.'
        ]
      },
      interviewNotes: {
        pitch: 'Spendr bridges financial education and live market simulation into a single frictionless web experience.',
        keyChallenge: 'Managing state consistency between client-side WebSocket streams and immutable ledger backends.',
        keyDecision: 'Using Redis pub/sub for instant order book broadcasts instead of querying the database directly.',
        biggestLesson: 'Optimistic UI updates drastically improve perceived performance in real-time finance applications.',
        scalabilityQuestion: 'How would you handle 100,000 concurrent trading bots submitting orders simultaneously?'
      }
    }
  },
  {
    id: 'campuscare',
    buildId: 'BUILD_002',
    sysId: 'SYS_002',
    name: 'CAMPUSCARE',
    category: 'HEALTH / REAL-TIME',
    year: 2025,
    tagline: 'Real-time campus safety and emergency response dispatch platform.',
    oneLiner: 'Real-time campus safety and emergency response dispatch platform.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    preview: null,
    active: false
  },
  {
    id: 'medicare',
    buildId: 'BUILD_003',
    sysId: 'SYS_003',
    name: 'MEDICARE',
    category: 'HEALTHTECH / AI',
    year: 2025,
    tagline: 'AI-powered hospital operations and predictive staffing management platform.',
    oneLiner: 'AI-powered hospital operations and predictive staffing management platform.',
    techStack: ['React', 'AI', 'Python'],
    preview: null,
    active: false
  },
  {
    id: 'searchx',
    buildId: 'BUILD_004',
    sysId: 'SYS_004',
    name: 'SEARCHX',
    category: 'SYSTEMS / DISTRIBUTED',
    year: 2024,
    tagline: 'Distributed inverted-index search engine designed for handling massive datasets.',
    oneLiner: 'Distributed inverted-index search engine designed for handling massive datasets.',
    techStack: ['Python', 'Distributed Systems', 'MongoDB'],
    preview: null,
    active: false
  }
];
