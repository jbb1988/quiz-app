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
            },
            {
              id: 'mcc-3',
              text: 'How often should meters be calibrated according to industry standards?',
              options: [
                'Every month',
                'Every year',
                'Every 5 years',
                'Only when they fail'
              ],
              correctAnswer: 1
            },
            {
              id: 'mcc-4',
              text: 'What information is included in a calibration certificate?',
              options: [
                'Only the calibration date',
                'Only the meter serial number',
                'Only the technician name',
                'All calibration data and measurements'
              ],
              correctAnswer: 3
            },
            {
              id: 'mcc-5',
              text: 'Which format can calibration certificates be exported in?',
              options: [
                'PDF only',
                'Excel only',
                'PDF and Excel',
                'No export options available'
              ],
              correctAnswer: 2
            },
            {
              id: 'mcc-6',
              text: 'What is the purpose of the maintenance schedule feature?',
              options: [
                'Track employee attendance',
                'Plan software updates',
                'Schedule meter calibrations and maintenance',
                'Monitor network performance'
              ],
              correctAnswer: 2
            },
            {
              id: 'mcc-7',
              text: 'How are calibration records stored in MCC?',
              options: [
                'In paper format only',
                'In a secure digital database',
                'On individual computers',
                'They are not stored'
              ],
              correctAnswer: 1
            },
            {
              id: 'mcc-8',
              text: 'What type of notifications does MCC provide?',
              options: [
                'Only email notifications',
                'Only SMS notifications',
                'Both email and SMS notifications',
                'No notifications'
              ],
              correctAnswer: 2
            },
            {
              id: 'mcc-9',
              text: 'Which of the following can be tracked in MCC?',
              options: [
                'Only meter locations',
                'Only calibration history',
                'Only maintenance records',
                'All of the above'
              ],
              correctAnswer: 3
            },
            {
              id: 'mcc-10',
              text: 'What is required to generate a calibration certificate?',
              options: [
                'Only meter information',
                'Only calibration data',
                'Only technician details',
                'All calibration measurements and meter data'
              ],
              correctAnswer: 3
            }
          ]
        }
      ]
    }
  ]
};
