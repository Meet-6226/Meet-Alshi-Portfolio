export const PROJECTS = [
  {
    id: 'aayu-opd',
    slug: 'aayu-opd',
    num: '01',
    buildId: 'BUILD_001',
    name: 'AAYU-OPD',
    category: 'HEALTHTECH / OPD',
    tagline: 'An outpatient department management system designed to streamline patient registration, doctor scheduling and digital prescription workflows.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    role: 'Full-Stack Developer',
    team: 'Development Team',
    type: 'Competition Project',
    year: '2025',
    status: '1ST RUNNER-UP',
    caseStudy: {
      heroStatement: 'Streamlining hospital outpatient workflows through digital registration, doctor scheduling, and electronic prescriptions.',
      whyHeader: 'WHY AAYU-OPD?',
      overview: [
        'AAYU-OPD is an outpatient department management system designed to streamline patient registration, doctor scheduling, digital prescriptions, and reduce manual reception coordination.',
        'Traditional outpatient departments face long reception queues and uncoordinated appointment tracking without centralized digital records.'
      ],
      problem: 'Traditional outpatient departments face queue bottlenecks, manual record handling, and uncoordinated appointment scheduling for patients and doctors.',
      solution: 'AAYU-OPD digitizes patient registration, structures doctor availability timetables, and provides a unified interface for issuing and storing digital prescriptions.',
      features: [
        { name: 'PATIENT REGISTRATION', desc: 'Digital onboarding and patient profile management.' },
        { name: 'DOCTOR SCHEDULING', desc: 'Timetable coordination and appointment booking workflow.' },
        { name: 'DIGITAL PRESCRIPTIONS', desc: 'Structured prescription generation and medical history access.' },
        { name: 'OPD WORKFLOW', desc: 'Centralized queue management for outpatient reception desks.' }
      ],
      technology: [
        { name: 'FRONTEND', desc: 'React for responsive dashboard interfaces and doctor/patient workflows.' },
        { name: 'BACKEND', desc: 'Node.js and Express REST APIs for appointment and prescription routing.' },
        { name: 'DATA & SERVICES', desc: 'MongoDB for patient records and doctor availability schedules.' }
      ],
      contribution: [
        { title: 'FULL-STACK DEVELOPMENT', desc: 'Contributed as a Full-Stack Developer on core React dashboard components and Express API routes.' },
        { title: 'CORE FEATURES', desc: 'Built key patient registration and appointment scheduling workflows.' },
        { title: 'WORKFLOW INTEGRATION', desc: 'Structured digital prescription templates and doctor schedule models.' }
      ],
      outcomeTitle: '1ST RUNNER-UP — AAYU-OPD',
      outcome: 'Awarded 1st Runner-Up for AAYU-OPD in project competition for OPD hospital workflow optimization.'
    }
  },
  {
    id: 'spendr',
    slug: 'spendr',
    num: '02',
    buildId: 'BUILD_002',
    name: 'SPENDR',
    category: 'FINTECH / AI',
    tagline: 'A financial platform designed for teenagers and beginner traders to improve financial literacy through budgeting, financial education, AI assistance and risk-free paper trading.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    role: 'Full-Stack Developer',
    team: 'Sakshi, Chaitanya, Jeevan & Meet',
    type: 'Team Project',
    year: '2025',
    status: 'SHOWCASED AT ITM',
    caseStudy: {
      heroStatement: 'Making financial learning practical through budgeting, AI assistance and risk-free trading.',
      whyHeader: 'WHY SPENDR?',
      overview: [
        'Spendr is a financial platform designed for teenagers and beginner traders to make financial literacy practical and engaging by combining financial management, education and risk-free experimentation.',
        'Young users and beginner traders need a safe environment to understand financial decisions before risking real money.'
      ],
      problem: 'Many young adults and beginner traders lack practical financial education and risk-free environments to practice budgeting, stock analysis, and portfolio management before risking real money.',
      solution: 'Spendr combines intuitive budget tracking, goal setting, interactive financial education games, an AI financial advisor with pros & cons stock recommendations, and real-time paper trading powered by a virtual coin-based reward system.',
      features: [
        { name: 'BUDGET TRACKING', desc: 'Personalized income and expense tracking for daily financial management.' },
        { name: 'GOAL TRACKING', desc: 'Set and monitor short-term and long-term financial saving targets.' },
        { name: 'FINANCIAL EDUCATION GAME', desc: 'Interactive gamified learning modules covering financial fundamentals.' },
        { name: 'AI FINANCIAL ADVISOR', desc: 'AI-assisted answers to financial questions with pros and cons for stock recommendations.' },
        { name: 'REAL-TIME PAPER TRADING', desc: 'Simulated stock market trading environment with virtual currency.' },
        { name: 'VIRTUAL REWARDS', desc: 'Coin-based reward store incentivizing financial education milestones.' }
      ],
      technology: [
        { name: 'FRONTEND', desc: 'React for dynamic web interfaces and interactive learning workflows.' },
        { name: 'BACKEND', desc: 'Node.js and Express REST APIs for user budgets, paper trading logic, and AI advisor endpoints.' },
        { name: 'DATA & SERVICES', desc: 'MongoDB for user profiles and budgets; Firebase for authentication and real-time sync.' }
      ],
      contribution: [
        { title: 'FULL-STACK DEVELOPMENT', desc: 'Built application features across the React frontend and Node.js/MongoDB backend.' },
        { title: 'CORE FEATURES', desc: 'Implemented budgeting and goal-management workflows.' },
        { title: 'TEAM INTEGRATION', desc: 'Worked with Sakshi, Chaitanya and Jeevan on integrating application services, testing, and overall product functionality.' }
      ],
      outcomeTitle: 'SHOWCASED AT ITM SKILLS UNIVERSITY',
      outcome: 'Spendr was showcased during the ITM Skills University Pre-Evolution Round and was later selected for showcase during the junior-batch inauguration.'
    }
  },
  {
    id: 'campuscare',
    slug: 'campuscare',
    num: '03',
    buildId: 'BUILD_003',
    name: 'CAMPUSCARE',
    category: 'REAL-TIME / SAFETY',
    tagline: 'Real-time campus safety and emergency response platform designed to connect students with campus authorities.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Cloud Firestore', 'Firebase Auth', 'FCM'],
    role: 'Project Developer',
    team: 'Academic Project',
    type: 'Examination Project',
    year: '2025',
    status: 'EXAM PROJECT',
    caseStudy: {
      heroStatement: 'Instant campus emergency SOS dispatch and real-time incident monitoring system.',
      whyHeader: 'WHY CAMPUSCARE?',
      overview: [
        'CampusCare is a real-time campus safety and emergency response platform built to help students report emergencies instantly and enable campus authorities to manage incidents efficiently.',
        'Students on large academic campuses need a fast, location-aware way to trigger emergency alerts and notify campus security.'
      ],
      problem: 'On large academic campuses, delayed emergency reporting and lack of real-time location sharing during incidents slow down security response times.',
      solution: 'CampusCare provides instant SOS triggers with geolocation API coordinates, Firestore real-time synchronization, FCM push notifications, and a security monitoring dashboard.',
      features: [
        { name: 'INSTANT SOS ALERTS', desc: 'One-touch emergency alert trigger for students.' },
        { name: 'LIVE LOCATION TRACKING', desc: 'Browser Geolocation API integration for sharing real-time coordinates.' },
        { name: 'PUSH NOTIFICATIONS', desc: 'Firebase Cloud Messaging (FCM) alerts sent to response teams.' },
        { name: 'REAL-TIME ADMIN DASHBOARD', desc: 'Live incident monitoring map for campus security admins.' },
        { name: 'ROLE-BASED ACCESS', desc: 'Firebase Authentication for Student and Security Authority roles.' },
        { name: 'INCIDENT MANAGEMENT', desc: 'Status tracking from emergency alert trigger to resolution.' }
      ],
      technology: [
        { name: 'FRONTEND', desc: 'HTML5, CSS3, and JavaScript utilizing Geolocation APIs.' },
        { name: 'BACKEND SERVICES', desc: 'Firebase Authentication, Cloud Functions for event triggers, and FCM.' },
        { name: 'DATA & SERVICES', desc: 'Cloud Firestore for real-time alert synchronization and Vercel hosting.' }
      ],
      contribution: [
        { title: 'APPLICATION ARCHITECTURE', desc: 'Designed and developed CampusCare as a second-year examination project.' },
        { title: 'FIREBASE SERVICES', desc: 'Implemented Firebase Auth, Cloud Functions, and FCM push notifications.' },
        { title: 'REAL-TIME DISPATCH', desc: 'Built Firestore real-time listeners for instant emergency SOS alert updates.' }
      ],
      outcomeTitle: 'SECOND-YEAR EXAMINATION PROJECT',
      outcome: 'Successfully delivered as a second-year examination project demonstrating real-time emergency response architecture for campus safety.'
    }
  },
  {
    id: 'externship-manager',
    slug: 'externship-manager',
    num: '04',
    buildId: 'BUILD_004',
    name: 'EXTERNSHIP MANAGER',
    category: 'MANAGEMENT / FULL-STACK',
    tagline: 'Full-stack venue and externship management platform designed to streamline booking, event scheduling, catering coordination and billing.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    role: 'Full-Stack Developer',
    team: 'Independent Project',
    type: 'Full-Stack Web App',
    year: '2025',
    status: 'COMPLETED',
    caseStudy: {
      heroStatement: 'Full-stack management for venue bookings, event scheduling, catering logistics, and automated billing.',
      whyHeader: 'WHY EXTERNSHIP MANAGER?',
      overview: [
        'A full-stack venue and externship management platform designed to manage the operational workflow of banquet and event venues.',
        'Venue operators frequently face double-booking conflicts, manual event scheduling, and disconnected catering/billing calculations.'
      ],
      problem: 'Venue and event operators face scheduling conflicts, manual reservation tracking, and uncoordinated catering logistics.',
      solution: 'A unified management dashboard consolidating venue availability calendars, catering packages, event timetables, and automated billing summaries.',
      features: [
        { name: 'VENUE BOOKING', desc: 'Venue reservation and availability schedule management.' },
        { name: 'EVENT SCHEDULING', desc: 'Timetable coordination for upcoming events and functions.' },
        { name: 'CATERING COORDINATION', desc: 'Menu package selection and catering logistics management.' },
        { name: 'BILLING MANAGEMENT', desc: 'Invoice generation and event expense calculation.' }
      ],
      technology: [
        { name: 'FRONTEND', desc: 'React for management dashboard UI and booking forms.' },
        { name: 'BACKEND', desc: 'Node.js and Express REST APIs for booking and schedule management.' },
        { name: 'DATA & SERVICES', desc: 'MongoDB for booking schedules, event details, and billing records.' }
      ],
      contribution: [
        { title: 'FULL-STACK DEVELOPMENT', desc: 'Built full-stack React components and Express/MongoDB backend models.' },
        { title: 'BOOKING LOGIC', desc: 'Implemented venue booking availability checks and scheduling routines.' },
        { title: 'BILLING WORKFLOWS', desc: 'Developed invoice generation and event expense calculation features.' }
      ],
      outcomeTitle: 'FULL-STACK BUSINESS APPLICATION',
      outcome: 'Completed full-stack management web application streamlining venue operations and scheduling workflows.'
    }
  }
];

export const EXPERIMENTS = [
  {
    id: 'stock-predictor',
    title: 'AI-POWERED STOCK PREDICTOR',
    event: 'Build & Grow AI Hackathon 2025',
    type: 'Solo Hackathon Experiment',
    description: 'Built during the Build & Grow AI Hackathon 2025 to explore machine learning and agentic AI. Developed a stock prediction model using TensorFlow trained on historical market data.',
    techStack: ['Python', 'TensorFlow', 'Market Data APIs', 'Agentic AI'],
  }
];
