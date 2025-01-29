export const m3SoftwareCourse = {
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
          questions: [
            {
              id: 'mcc-1',
              text: 'What is the primary function of MCC?',
              options: [
                'Data storage only',
                'Meter calibration and certification',
                'Network monitoring',
                'User management'
              ],
              correctAnswer: 1
            },
            {
              id: 'mcc-2',
              text: 'Which of the following is NOT a feature of MCC?',
              options: [
                'Calibration scheduling',
                'Certificate generation',
                'Social media integration',
                'Maintenance tracking'
              ],
              correctAnswer: 2
            }
          ]
        }
      ]
    }
  ]
};
