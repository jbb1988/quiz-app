export const theme = {
  colors: {
    primary: '#008ACC',    // MARS Blue
    secondary: '#004F87',  // MARS Dark Blue
    background: {
      light: '#f8fafc',
      dark: '#f1f5f9',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
      card: '#ffffff',
      hover: 'rgba(0, 138, 204, 0.05)'
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
      light: '#718096'
    },
    success: '#48bb78',
    error: '#f56565',
    warning: '#ed8936'
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.05), 0 4px 6px rgba(0,0,0,0.05)',
    xl: '0 20px 25px rgba(0,0,0,0.05), 0 10px 10px rgba(0,0,0,0.02)'
  },
  transitions: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out'
  }
};

export const courseCategories = {
  software: {
    id: 'software',
    name: 'Software Training',
    color: theme.colors.primary,
    description: 'Learn about MARS software solutions'
  },
  hardware: {
    id: 'hardware',
    name: 'Hardware Training',
    color: theme.colors.secondary,
    description: 'Master MARS hardware systems'
  },
  company: {
    id: 'company',
    name: 'Company & Culture',
    color: '#2B6CB0',
    description: 'Understand MARS values and practices'
  },
  mcc: {
    id: 'mcc',
    name: 'MCC',
    color: '#2C5282',
    description: 'MARS Calibration & Certification'
  },
  sales: {
    id: 'sales',
    name: 'Sales',
    color: '#2A4365',
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
            questions: [
              {
                id: 1,
                question: "What is the primary purpose of the M3 system?",
                options: [
                  "To generate marketing reports for municipalities",
                  "To manage and control MARS test benches used by municipalities",
                  "To provide a platform for online training sessions",
                  "To track sales and inventory"
                ],
                correctAnswer: "To manage and control MARS test benches used by municipalities",
                explanation: "The M3 system's primary purpose is to manage and control MARS test benches used by municipalities for meter testing and management."
              },
              {
                id: 2,
                question: "Which of the following roles has full control over the M3 system's settings and permissions?",
                options: [
                  "Operator",
                  "Supervisor",
                  "Administrator",
                  "Technician"
                ],
                correctAnswer: "Administrator",
                explanation: "The Administrator role has full control over system settings and permissions in the M3 system."
              }
            ]
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
