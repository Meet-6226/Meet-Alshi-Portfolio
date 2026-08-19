export const PROJECTS = [
  {
    id: 'spendr',
    slug: 'spendr',
    buildId: 'BUILD_001',
    sysId: 'SYS_001',
    num: '001',
    name: 'SPENDR',
    category: 'FINTECH / AI',
    year: '2025',
    role: 'FULL-STACK DEVELOPER',
    team: 'TEAM PROJECT',
    status: 'DEPLOYED',
    tagline: 'Financial platform combining budgeting, financial education, AI assistance and paper trading.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    caseStudy: {
      overview: [
        'Spendr is a comprehensive financial platform designed to make personal finance management intuitive, educational, and interactive.',
        'The platform bridges traditional budgeting with real-time paper trading simulations and AI-assisted financial advice, allowing users to build financial literacy without real-world monetary risk.'
      ],
      features: [
        { name: 'BUDGET TRACKING', desc: 'Real-time income, expense logging, and category-wise spending analytics.' },
        { name: 'GOAL TRACKING', desc: 'Automated savings milestones and visual target progress indicators.' },
        { name: 'FINANCE GAME', desc: 'Interactive gamified financial literacy micro-lessons and knowledge quizzes.' },
        { name: 'AI FINANCIAL ADVISOR', desc: 'Conversational portfolio insights and budget guidance powered by Gemini API.' },
        { name: 'PAPER TRADING', desc: 'Risk-free simulated stock market order execution engine with virtual portfolio balances.' },
        { name: 'COIN / REWARD STORE', desc: 'Gamified store allowing users to redeem points earned through financial learning.' }
      ],
      contribution: [
        'Architected the full-stack real-time paper trading order execution engine.',
        'Developed backend API endpoints for user budget management and financial goal calculation.',
        'Designed the responsive, dark high-contrast dashboard UI and telemetry displays.',
        'Integrated Gemini API streaming responses for conversational financial guidance.'
      ],
      architecture: [
        { title: 'FRONTEND', desc: 'React SPA with Tailwind CSS, custom state hooks, and low-latency chart rendering.' },
        { title: 'BACKEND', desc: 'Node.js & Express REST API handling auth, transaction ledgers, and order validation.' },
        { title: 'DATABASE', desc: 'MongoDB for user profiles and transaction history + Firebase Realtime DB for live feeds.' }
      ],
      challenges: [
        { title: 'State Synchronization', desc: 'Preventing race conditions during rapid simulated trading orders by implementing optimistic UI updates with backend ledger checks.' },
        { title: 'AI Contextual Guidance', desc: 'Structuring user financial data into secure, privacy-preserving prompts for real-time AI advice.' }
      ],
      outcome: 'Successfully delivered an integrated financial ecosystem combining budgeting, gamified learning, and paper trading into a unified web application.'
    }
  },
  {
    id: 'aayu-opd',
    slug: 'aayu-opd',
    buildId: 'BUILD_002',
    sysId: 'SYS_002',
    num: '002',
    name: 'AAYU-OPD',
    category: 'HEALTHTECH / OPD',
    year: '2025',
    role: 'FULL-STACK DEVELOPER',
    team: 'HEALTH TECH COLLABORATION',
    status: 'DEPLOYED',
    tagline: 'Outpatient department (OPD) management system for streamlining patient registration, doctor scheduling, and digital prescription workflows.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    caseStudy: {
      overview: [
        'AAYU-OPD is a specialized healthcare management platform built to digitize and automate daily outpatient operations in clinics and hospitals.',
        'The system eliminates paper queues by providing real-time patient registration, doctor consultation scheduling, and digital medical records access.'
      ],
      features: [
        { name: 'PATIENT REGISTRATION', desc: 'Digital patient onboarding, demographics recording, and medical history logging.' },
        { name: 'QUEUE & CONSULTATION DISPATCH', desc: 'Real-time outpatient queue tracking and doctor availability board.' },
        { name: 'ELECTRONIC PRESCRIPTIONS', desc: 'Digital prescription generator with standardized medication templates.' },
        { name: 'MEDICAL RECORDS ARCHIVE', desc: 'Centralized record storage allowing doctors instant access to past consultation notes.' }
      ],
      contribution: [
        'Designed and implemented Express.js REST API routes for patient registration and doctor queue management.',
        'Built responsive React dashboard components for clinic receptionists and attending physicians.',
        'Optimized database queries for fast patient record retrieval during peak morning consultation hours.'
      ],
      architecture: [
        { title: 'CLIENT LAYER', desc: 'React.js interface tailored for fast data entry by hospital staff.' },
        { title: 'SERVER LAYER', desc: 'Express.js backend enforcing role-based access control (Doctor, Receptionist, Admin).' },
        { title: 'STORAGE', desc: 'MongoDB indexed collections for patient records and doctor consultation logs.' }
      ],
      challenges: [
        { title: 'Queue Concurrency', desc: 'Managing simultaneous patient check-ins without duplicate token generation by implementing atomic counter increments.' }
      ],
      outcome: 'Streamlined OPD administration, reducing patient registration bottlenecks and digitizing prescription records.'
    }
  },
  {
    id: 'campuscare',
    slug: 'campuscare',
    buildId: 'BUILD_003',
    sysId: 'SYS_003',
    num: '003',
    name: 'CAMPUSCARE',
    category: 'REAL-TIME / SAFETY',
    year: '2025',
    role: 'FULL-STACK ENGINEER',
    team: 'SAFETY TECH PROJECT',
    status: 'DEPLOYED',
    tagline: 'Real-time campus safety and emergency response platform.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Firestore', 'Cloud Functions', 'FCM', 'Firebase Authentication'],
    caseStudy: {
      overview: [
        'CampusCare is a real-time safety and emergency dispatch system designed to protect students and staff across university campuses.',
        'In critical situations, users can trigger instantaneous SOS alerts that pinpoint location data and dispatch real-time notifications to campus security officers.'
      ],
      features: [
        { name: 'SOS ALERTS', desc: 'One-tap emergency trigger dispatching location data to campus security.' },
        { name: 'REAL-TIME ADMIN DASHBOARD', desc: 'Live command console displaying active emergency incidents on an interactive map.' },
        { name: 'PUSH NOTIFICATIONS', desc: 'Broadcasting high-priority safety alerts via Firebase Cloud Messaging (FCM).' },
        { name: 'ROLE-BASED ACCESS', desc: 'Granular permissions differentiating student apps, security responder feeds, and admin command.' },
        { name: 'LOCATION TRACKING', desc: 'GPS coordinate attachment during emergency SOS trigger events.' },
        { name: 'INCIDENT MANAGEMENT', desc: 'Lifecycle incident tracking from initial distress trigger to resolution verification.' }
      ],
      contribution: [
        'Integrated Firebase Cloud Firestore real-time listeners for instant incident updates on the security dashboard.',
        'Configured Firebase Cloud Messaging (FCM) push notification triggers via Cloud Functions.',
        'Developed role-based authentication rules using Firebase Auth.'
      ],
      architecture: [
        { title: 'FRONTEND', desc: 'Lightweight HTML5/CSS3/JavaScript interface for maximum mobile compatibility and instant load times.' },
        { title: 'BACKEND & DATABASE', desc: 'Firebase Cloud Functions triggered by Firestore document events for zero-server-maintenance scale.' },
        { title: 'NOTIFICATIONS', desc: 'FCM push notification infrastructure delivering emergency alerts.' }
      ],
      challenges: [
        { title: 'Sub-Second Dispatch Latency', desc: 'Ensuring emergency alerts reach security personnel instantly by leveraging Cloud Firestore snapshot listeners.' }
      ],
      outcome: 'Built a reliable emergency alert platform capable of immediate distress dispatch and live incident monitoring.'
    }
  },
  {
    id: 'banquet-management',
    slug: 'banquet-management',
    buildId: 'BUILD_004',
    sysId: 'SYS_004',
    num: '004',
    name: 'BANQUET MANAGEMENT SYSTEM',
    category: 'MANAGEMENT / FULL-STACK',
    year: '2024',
    role: 'FULL-STACK DEVELOPER',
    team: 'ENTERPRISE SOFTWARE',
    status: 'DEPLOYED',
    tagline: 'Full-stack banquet hall booking, event scheduling, catering coordination, and billing management platform.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    caseStudy: {
      overview: [
        'The Banquet Management System is an end-to-end operational platform designed for venue managers and event coordinators.',
        'It automates venue availability checking, event package customization, catering logistics, and customer billing generation into a single management console.'
      ],
      features: [
        { name: 'VENUE BOOKING CALENDAR', desc: 'Interactive scheduling grid preventing double-booking across venue halls.' },
        { name: 'CATERING & MENU MANAGEMENT', desc: 'Customizable food package calculator based on guest headcount.' },
        { name: 'BILLING & INVOICE GENERATOR', desc: 'Automated tax calculations, advance payment tracking, and itemized billing.' },
        { name: 'STAFF & RESOURCE SCHEDULING', desc: 'Event checklist allocation and banquet floor staff assignment.' }
      ],
      contribution: [
        'Developed backend REST APIs for booking reservations, availability checks, and billing processing.',
        'Created the interactive React booking calendar UI.',
        'Implemented MongoDB schema validation for complex banquet event packages.'
      ],
      architecture: [
        { title: 'FRONTEND', desc: 'React SPA providing venue managers with calendar and billing tools.' },
        { title: 'SERVER', desc: 'Node.js & Express API enforcing booking conflict checks and pricing calculations.' },
        { title: 'DATA STORE', desc: 'MongoDB collections storing customer reservations, venue configurations, and invoices.' }
      ],
      challenges: [
        { title: 'Double-Booking Prevention', desc: 'Creating reservation locking mechanisms during checkout to ensure venue dates remain mutually exclusive.' }
      ],
      outcome: 'Digitized venue management workflows, eliminating manual paper scheduling and automating invoice calculations.'
    }
  }
];
