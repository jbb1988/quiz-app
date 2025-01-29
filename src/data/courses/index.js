import { m3SoftwareCourse } from './m3-software';

export const allCourses = {
  'm3-software': {
    id: 'm3-software',
    title: 'M3 Software',
    category: 'software',
    description: 'Learn about MARS Meter Management software suite',
    modules: [
      {
        id: 'mcc',
        title: 'Maintenance Calibration & Certification',
        description: 'Learn about MARS hardware components, installation procedures, and maintenance',
        quizzes: [
          {
            id: 'mcc-basics',
            title: 'MCC Basics',
            questions: m3SoftwareCourse.modules[0].quizzes[0].questions
          }
        ]
      }
    ]
  },
  'hardware': {
    id: 'hardware',
    title: 'Hardware Training',
    subtitle: 'MARS Hardware Installation and Maintenance',
    category: 'hardware',
    description: 'Learn about MARS hardware components, installation procedures, and maintenance protocols.',
    modules: [
      {
        id: 'hardware-basics',
        title: 'Hardware Basics',
        description: 'Introduction to MARS hardware components',
        quizzes: []
      }
    ]
  },
  'company': {
    id: 'company',
    title: 'Company & Culture',
    subtitle: 'MARS Values and Practices',
    category: 'company',
    description: 'Understand MARS company values, culture, and best practices.',
    modules: [
      {
        id: 'company-basics',
        title: 'Company Values',
        description: 'Learn about our core values',
        quizzes: []
      }
    ]
  },
  'mcc': {
    id: 'mcc',
    title: 'MCC Training',
    subtitle: 'Meter Control Center Operations',
    category: 'mcc',
    description: 'Master the Meter Control Center operations and management.',
    modules: [
      {
        id: 'mcc-ops',
        title: 'MCC Operations',
        description: 'Learn MCC operations',
        quizzes: []
      }
    ]
  },
  'sales': {
    id: 'sales',
    title: 'Sales Training',
    subtitle: 'MARS Sales Techniques',
    category: 'sales',
    description: 'Learn effective sales techniques for MARS products.',
    modules: [
      {
        id: 'sales-basics',
        title: 'Sales Fundamentals',
        description: 'Basic sales training',
        quizzes: []
      }
    ]
  }
};
