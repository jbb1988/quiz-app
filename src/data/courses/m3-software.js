export const m3SoftwareCourse = {
  id: 'm3_software',
  title: 'M3 Software (MARS Meter Management)',
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
        },
        {
          id: 'login_user_management',
          title: 'Logging In and User Management',
          description: 'Understanding user access, roles, and account management',
          questions: []
        }
      ]
    },
    {
      id: 'core_operations',
      title: 'Core Operations',
      description: 'Essential database and testing operations',
      quizzes: [
        {
          id: 'database_tools',
          title: 'Database Tools & Editing Remarks/Job Numbers',
          description: 'Working with database tools and managing job information',
          questions: []
        },
        {
          id: 'test_operations',
          title: 'Test Operations & Execution',
          description: 'Setting up and executing meter tests',
          questions: []
        },
        {
          id: 'meter_parameters',
          title: 'Meter Parameters Management',
          description: 'Managing and configuring meter parameters',
          questions: []
        }
      ]
    },
    {
      id: 'data_analysis',
      title: 'Data Analysis & Reporting',
      description: 'Working with data and generating reports',
      quizzes: [
        {
          id: 'reporting_analytics',
          title: 'Reporting, Analytics, and Exporting Data',
          description: 'Creating reports and analyzing meter data',
          questions: []
        }
      ]
    },
    {
      id: 'system_maintenance',
      title: 'System Maintenance & Advanced Features',
      description: 'System maintenance and advanced capabilities',
      quizzes: [
        {
          id: 'troubleshooting',
          title: 'Troubleshooting & Error Resolution',
          description: 'Identifying and resolving common system issues',
          questions: []
        },
        {
          id: 'backup_security',
          title: 'Data Backup, Security, and System Maintenance',
          description: 'Maintaining system security and data integrity',
          questions: []
        },
        {
          id: 'advanced_features',
          title: 'Advanced Features and Customization',
          description: 'Exploring advanced system capabilities and customization options',
          questions: []
        }
      ]
    }
  ]
};
