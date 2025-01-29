export const theme = {
  colors: {
    primary: '#008ACC',    // MARS Blue
    secondary: '#004F87',  // MARS Dark Blue
    background: '#f5f8fa', // Light gray-blue background
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
    success: '#48bb78',
    error: '#f56565',
    warning: '#ed8936',
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
};

export const courseCategories = {
  software: {
    id: 'software',
    name: 'Software Training',
    color: theme.colors.primary,
  },
  hardware: {
    id: 'hardware',
    name: 'Hardware Training',
    color: theme.colors.secondary,
  },
  company: {
    id: 'company',
    name: 'Company & Culture',
    color: '#2B6CB0',
  },
  certification: {
    id: 'certification',
    name: 'Certifications',
    color: '#2C5282',
  },
};

export const courses = {
  m3_software: {
    id: 'm3_software',
    title: 'M3 Software (MARS Meter Management)',
    category: 'software',
    description: 'Learn about MARS Meter Management software suite',
    modules: [
      // Add modules here
    ],
  },
  mars_test_bench: {
    id: 'mars_test_bench',
    title: 'MARS Test Bench Training',
    category: 'hardware',
    description: 'Comprehensive training for MARS Test Bench operation',
    modules: [],
  },
  mcc: {
    id: 'mcc',
    title: 'MCC (MARS Calibration & Certification)',
    category: 'certification',
    description: 'MARS Calibration and Certification procedures',
    modules: [],
  },
  mars_agreements: {
    id: 'mars_agreements',
    title: 'MARS Agreements',
    category: 'company',
    description: 'Understanding MARS company agreements and policies',
    modules: [],
  },
  notion_101: {
    id: 'notion_101',
    title: 'Notion 101',
    category: 'software',
    description: 'Getting started with Notion at MARS',
    modules: [],
  },
  company_overview: {
    id: 'company_overview',
    title: 'MARS Company Overview',
    category: 'company',
    description: 'Introduction to MARS Company culture and values',
    modules: [],
  },
  strategic_selling: {
    id: 'strategic_selling',
    title: 'MARS Strategic Selling',
    category: 'company',
    description: 'Learn about MARS sales strategies and methodologies',
    modules: [],
  },
};
