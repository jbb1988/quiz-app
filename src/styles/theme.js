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
              },
              {
                id: 3,
                question: "How often should users be encouraged to change their passwords?",
                options: [
                  "Every 30 days",
                  "Every 90 days",
                  "Every 6 months",
                  "Only when they forget it"
                ],
                correctAnswer: "Every 90 days",
                explanation: "Best practice is to change passwords every 90 days to maintain security."
              },
              {
                id: 4,
                question: "What is the first step when logging in to the M3 Web App?",
                options: [
                  "Enter the job number",
                  "Launch the M3 Web App",
                  "Select the 'Users & Roles' menu",
                  "Enter the meter details"
                ],
                correctAnswer: "Launch the M3 Web App",
                explanation: "The first step in the login process is launching the M3 Web App."
              },
              {
                id: 5,
                question: "How can an Administrator create a new user?",
                options: [
                  "By selecting 'Add New User' under the 'Test Parameters' menu",
                  "By selecting 'Add New User' under the 'Users & Roles' menu",
                  "By exporting a user list and modifying it",
                  "By resetting a forgotten password"
                ],
                correctAnswer: "By selecting 'Add New User' under the 'Users & Roles' menu",
                explanation: "Administrators can create new users through the 'Users & Roles' menu."
              },
              {
                id: 6,
                question: "What should you do if a user no longer requires access to the M3 system?",
                options: [
                  "Reassign their role to Operator",
                  "Delete their account immediately",
                  "Deactivate their account",
                  "Change their password"
                ],
                correctAnswer: "Deactivate their account",
                explanation: "The proper procedure is to deactivate the account rather than deleting it or changing permissions."
              },
              {
                id: 7,
                question: "Which of the following is a best practice for user management?",
                options: [
                  "Allow users to share login credentials",
                  "Regularly audit user access",
                  "Assign multiple roles to each user",
                  "Use generic usernames for faster logins"
                ],
                correctAnswer: "Regularly audit user access",
                explanation: "Regular auditing of user access is a security best practice for system management."
              },
              {
                id: 8,
                question: "How can you prevent frequent login errors in the M3 system?",
                options: [
                  "Share login credentials with team members",
                  "Use secure and regularly updated passwords",
                  "Disable account security settings",
                  "Avoid changing passwords for consistency"
                ],
                correctAnswer: "Use secure and regularly updated passwords",
                explanation: "Using secure and regularly updated passwords helps prevent login errors and maintain security."
              },
              {
                id: 9,
                question: "What information should you have ready when contacting MARS support?",
                options: [
                  "System configurations",
                  "Error codes, logs, and a detailed issue description",
                  "Previous user login history",
                  "Database backup files"
                ],
                correctAnswer: "Error codes, logs, and a detailed issue description",
                explanation: "Having error codes, logs, and a detailed description helps MARS support resolve issues efficiently."
              },
              {
                id: 10,
                question: "Why is regular maintenance of user roles important?",
                options: [
                  "To increase login speed",
                  "To maintain accountability and system security",
                  "To reduce system load",
                  "To allow multiple users per account"
                ],
                correctAnswer: "To maintain accountability and system security",
                explanation: "Regular maintenance of user roles ensures proper accountability and system security."
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
