import { m3SoftwareCourse } from './m3-software';

export const hardwareTrainingCourse = {
  id: 'hardware_training',
  title: 'Hardware Training',
  subtitle: 'MARS Hardware Installation and Maintenance',
  category: 'hardware',
  description: 'Learn about MARS hardware components, installation procedures, and maintenance protocols.',
  modules: [
    {
      id: 'hardware_basics',
      title: 'Hardware Basics',
      description: 'Introduction to MARS hardware components and system architecture',
      quizzes: [
        {
          id: 'hardware_intro',
          title: 'Introduction to Hardware',
          description: 'Test your knowledge of basic MARS hardware components',
          questions: [
            {
              question: 'What is the primary function of the MARS meter interface unit?',
              options: [
                'To display meter readings',
                'To connect meters to the network',
                'To store meter data',
                'To calibrate meters'
              ],
              correctAnswer: 'To connect meters to the network'
            }
          ]
        }
      ]
    }
  ]
};

export const companyCultureCourse = {
  id: 'company_culture',
  title: 'Company & Culture',
  subtitle: 'MARS Values and Practices',
  category: 'company',
  description: 'Understand MARS company values, culture, and best practices.',
  modules: [
    {
      id: 'company_values',
      title: 'Company Values',
      description: 'Learn about MARS core values and mission',
      quizzes: [
        {
          id: 'values_quiz',
          title: 'MARS Values',
          description: 'Test your understanding of MARS company values',
          questions: [
            {
              question: 'What is the primary mission of MARS?',
              options: [
                'To maximize profit',
                'To provide reliable meter management solutions',
                'To expand globally',
                'To develop new technologies'
              ],
              correctAnswer: 'To provide reliable meter management solutions'
            }
          ]
        }
      ]
    }
  ]
};

export const mccCourse = {
  id: 'mcc_training',
  title: 'MCC Training',
  subtitle: 'Meter Control Center Operations',
  category: 'mcc',
  description: 'Master the Meter Control Center operations and management.',
  modules: [
    {
      id: 'mcc_basics',
      title: 'MCC Fundamentals',
      description: 'Learn the basics of MCC operations',
      quizzes: [
        {
          id: 'mcc_intro',
          title: 'MCC Introduction',
          description: 'Test your knowledge of MCC fundamentals',
          questions: [
            {
              question: 'What is the main purpose of the Meter Control Center?',
              options: [
                'To store meter data',
                'To monitor meter performance',
                'To centralize meter management operations',
                'To generate reports'
              ],
              correctAnswer: 'To centralize meter management operations'
            }
          ]
        }
      ]
    }
  ]
};

export const salesCourse = {
  id: 'sales_training',
  title: 'Sales Training',
  subtitle: 'MARS Sales and Customer Relations',
  category: 'sales',
  description: 'Learn effective sales techniques and customer relationship management.',
  modules: [
    {
      id: 'sales_basics',
      title: 'Sales Fundamentals',
      description: 'Master the basics of MARS product sales',
      quizzes: [
        {
          id: 'sales_intro',
          title: 'Sales Introduction',
          description: 'Test your understanding of MARS sales principles',
          questions: [
            {
              question: 'What is the key value proposition of MARS products?',
              options: [
                'Lowest price in the market',
                'Comprehensive meter management solution',
                'Fastest installation time',
                'Most features available'
              ],
              correctAnswer: 'Comprehensive meter management solution'
            }
          ]
        }
      ]
    }
  ]
};

export const allCourses = {
  m3_software: m3SoftwareCourse,
  hardware_training: hardwareTrainingCourse,
  company_culture: companyCultureCourse,
  mcc_training: mccCourse,
  sales_training: salesCourse
};
