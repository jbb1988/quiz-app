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
  mcc: {
    id: 'mcc',
    name: 'MCC',
    color: '#2C5282',
  },
  sales: {
    id: 'sales',
    name: 'Sales',
    color: '#2A4365',
  },
};

export const courses = {
  m3_software: {
    id: 'm3_software',
    title: 'M3 Software (MARS Meter Management)',
    category: 'software',
    description: 'Learn about MARS Meter Management software suite',
    modules: [
      {
        id: 'introduction',
        title: 'Introduction to M3',
        description: 'Overview of MARS Meter Management software',
        quizzes: [
          {
            id: 'intro_system',
            title: 'Introduction to M3 System',
            description: 'Learn the fundamentals of the M3 system',
          },
          {
            id: 'login_user_management',
            title: 'Logging In and User Management',
            description: 'Understanding user access and management',
          }
        ]
      },
      {
        id: 'core_features',
        title: 'Core Features',
        description: 'Essential M3 functionalities',
        quizzes: [
          {
            id: 'database_tools',
            title: 'Database Tools & Editing Remarks/Job Numbers',
            description: 'Working with database tools and job management',
          },
          {
            id: 'test_operations',
            title: 'Test Operations & Execution',
            description: 'Managing and executing tests in M3',
          },
          {
            id: 'meter_parameters',
            title: 'Meter Parameters Management',
            description: 'Configuring and managing meter parameters',
          }
        ]
      },
      {
        id: 'advanced_features',
        title: 'Advanced Features',
        description: 'Advanced M3 capabilities',
        quizzes: [
          {
            id: 'reporting_analytics',
            title: 'Reporting, Analytics, and Exporting Data',
            description: 'Working with reports and data analysis',
          },
          {
            id: 'troubleshooting',
            title: 'Troubleshooting & Error Resolution',
            description: 'Resolving common issues in M3',
          },
          {
            id: 'system_maintenance',
            title: 'Data Backup, Security, and System Maintenance',
            description: 'System maintenance and security practices',
          },
          {
            id: 'advanced_customization',
            title: 'Advanced Features and Customization',
            description: 'Customizing M3 for specific needs',
          }
        ]
      }
    ]
  },
  notion_101: {
    id: 'notion_101',
    title: 'Notion 101',
    category: 'software',
    description: 'Getting started with Notion at MARS',
    modules: []
  },
  strategic_selling: {
    id: 'strategic_selling',
    title: 'MARS Strategic Selling',
    category: 'sales',
    description: 'Learn about MARS sales strategies and methodologies',
    modules: []
  }
};
