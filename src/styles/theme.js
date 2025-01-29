export const theme = {
  colors: {
    primary: '#008ACC',    // MARS Blue
    secondary: '#004F87',  // MARS Dark Blue
    background: {
      light: '#f0f4f8',
      dark: '#e2e8f0',
      gradient: 'linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)',
      card: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      hover: 'rgba(0, 138, 204, 0.05)'
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
      light: '#718096'
    },
    success: {
      light: '#9ae6b4',
      default: '#48bb78',
      dark: '#2f855a',
      gradient: 'linear-gradient(135deg, #48bb78 0%, #2f855a 100%)'
    },
    error: {
      light: '#feb2b2',
      default: '#f56565',
      dark: '#c53030',
      gradient: 'linear-gradient(135deg, #f56565 0%, #c53030 100%)'
    },
    warning: {
      light: '#fbd38d',
      default: '#ed8936',
      dark: '#c05621',
      gradient: 'linear-gradient(135deg, #ed8936 0%, #c05621 100%)'
    },
    mars: {
      blue: {
        100: '#e6f6ff',
        200: '#bae3ff',
        300: '#7cc4fa',
        400: '#47a9f5',
        500: '#008ACC',
        600: '#0072b0',
        700: '#004F87',
        800: '#003a66',
        900: '#002645'
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      }
    }
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 4px 6px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.08)',
    lg: '0 10px 15px rgba(0,0,0,0.04), 0 4px 6px rgba(0,0,0,0.08)',
    xl: '0 20px 25px rgba(0,0,0,0.04), 0 10px 10px rgba(0,0,0,0.04)',
    inner: 'inset 0 2px 4px rgba(0,0,0,0.06)'
  },
  transitions: {
    default: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  gradients: {
    primary: 'linear-gradient(135deg, #008ACC 0%, #004F87 100%)',
    secondary: 'linear-gradient(135deg, #004F87 0%, #002645 100%)',
    light: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
    dark: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)',
    blue: 'linear-gradient(135deg, #008ACC 0%, #004F87 100%)',
    hover: 'linear-gradient(135deg, rgba(0,138,204,0.1) 0%, rgba(0,79,135,0.1) 100%)'
  }
};

export const courseCategories = {
  software: {
    id: 'software',
    name: 'Software Training',
    color: theme.colors.mars.blue[500],
    gradient: theme.gradients.primary,
    description: 'Learn about MARS software solutions'
  },
  hardware: {
    id: 'hardware',
    name: 'Hardware Training',
    color: theme.colors.mars.blue[700],
    gradient: theme.gradients.secondary,
    description: 'Master MARS hardware systems'
  },
  company: {
    id: 'company',
    name: 'Company & Culture',
    color: theme.colors.mars.blue[600],
    gradient: 'linear-gradient(135deg, #2B6CB0 0%, #1A365D 100%)',
    description: 'Understand MARS values and practices'
  },
  mcc: {
    id: 'mcc',
    name: 'MCC',
    color: theme.colors.mars.blue[800],
    gradient: 'linear-gradient(135deg, #2C5282 0%, #1A365D 100%)',
    description: 'MARS Calibration & Certification'
  },
  sales: {
    id: 'sales',
    name: 'Sales',
    color: theme.colors.mars.blue[600],
    gradient: 'linear-gradient(135deg, #2B6CB0 0%, #1A365D 100%)',
    description: 'MARS sales methodologies'
  }
};

export const courses = {
  m3_software: {
    id: 'm3_software',
    title: 'M3 Software',
    subtitle: 'MARS Meter Management',
    category: 'software',
    description: 'Learn about MARS Meter Management software suite',
    modules: [
      {
        id: 'getting_started',
        title: 'Getting Started',
        description: 'Introduction and basic system access',
        quizzes: [
          {
            id: 'intro_system',
            title: 'Introduction to M3 System',
            description: 'Learn the fundamentals of the M3 system architecture and capabilities',
            questions: []
          }
        ]
      }
    ]
  },
  notion_101: {
    id: 'notion_101',
    title: 'Notion 101',
    subtitle: 'Getting Started with Notion',
    category: 'software',
    description: 'Learn how to use Notion for documentation and collaboration',
    modules: []
  },
  hardware_basics: {
    id: 'hardware_basics',
    title: 'Hardware Basics',
    subtitle: 'MARS Testing Equipment',
    category: 'hardware',
    description: 'Introduction to MARS testing equipment and hardware',
    modules: []
  },
  company_culture: {
    id: 'company_culture',
    title: 'MARS Culture',
    subtitle: 'Our Values & Practices',
    category: 'company',
    description: 'Understanding MARS company culture and values',
    modules: []
  },
  mcc_certification: {
    id: 'mcc_certification',
    title: 'MCC Program',
    subtitle: 'Certification Training',
    category: 'mcc',
    description: 'MARS Calibration & Certification program training',
    modules: []
  },
  strategic_selling: {
    id: 'strategic_selling',
    title: 'Strategic Selling',
    subtitle: 'MARS Sales Methodology',
    category: 'sales',
    description: 'Learn about MARS sales strategies and methodologies',
    modules: []
  }
};
