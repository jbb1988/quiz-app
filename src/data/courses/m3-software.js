export const m3SoftwareCourse = {
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
          id: 'm3_intro_basics',
          title: 'M3 Basics',
          description: 'Test your knowledge of M3 fundamentals',
          questions: [
            {
              id: 1,
              question: "What does M3 stand for?",
              options: [
                "MARS Meter Management",
                "Meter Monitoring Module",
                "MARS Measurement Manager",
                "Meter Management Module"
              ],
              correctAnswer: "MARS Meter Management",
              explanation: "M3 stands for MARS Meter Management, our comprehensive meter management solution."
            },
            {
              id: 2,
              question: "Which of the following is NOT a core feature of M3?",
              options: [
                "Meter Data Collection",
                "Social Media Integration",
                "Calibration Management",
                "Performance Analytics"
              ],
              correctAnswer: "Social Media Integration",
              explanation: "M3 focuses on meter management features and does not include social media integration."
            },
            {
              id: 3,
              question: "What type of database does M3 use?",
              options: [
                "SQLite",
                "MongoDB",
                "PostgreSQL",
                "MySQL"
              ],
              correctAnswer: "PostgreSQL",
              explanation: "M3 uses PostgreSQL for its robust reliability and advanced features."
            }
          ]
        }
      ]
    },
    {
      id: 'data_collection',
      title: 'Data Collection',
      description: 'Learn about M3 data collection features',
      quizzes: [
        {
          id: 'm3_data_basics',
          title: 'Data Collection Basics',
          description: 'Understanding M3 data collection fundamentals',
          questions: [
            {
              id: 1,
              question: "What is the primary method of data collection in M3?",
              options: [
                "Manual Entry",
                "Automated Scanning",
                "Real-time Monitoring",
                "Batch Processing"
              ],
              correctAnswer: "Real-time Monitoring",
              explanation: "M3 primarily uses real-time monitoring for accurate and timely data collection."
            },
            {
              id: 2,
              question: "How often does M3 sync data by default?",
              options: [
                "Every Hour",
                "Every 15 Minutes",
                "Every 5 Minutes",
                "Every Minute"
              ],
              correctAnswer: "Every 5 Minutes",
              explanation: "M3's default sync interval is 5 minutes to balance accuracy and system performance."
            }
          ]
        }
      ]
    },
    {
      id: 'reporting',
      title: 'Reporting & Analytics',
      description: 'Master M3 reporting capabilities',
      quizzes: [
        {
          id: 'm3_reporting_basics',
          title: 'Reporting Fundamentals',
          description: 'Learn about M3 reporting features',
          questions: [
            {
              id: 1,
              question: "Which file formats can M3 export reports in?",
              options: [
                "PDF only",
                "Excel only",
                "PDF and CSV",
                "PDF, Excel, and CSV"
              ],
              correctAnswer: "PDF, Excel, and CSV",
              explanation: "M3 supports multiple export formats including PDF, Excel, and CSV for flexibility."
            },
            {
              id: 2,
              question: "What is the maximum time range for a single report?",
              options: [
                "1 Month",
                "6 Months",
                "1 Year",
                "No Limit"
              ],
              correctAnswer: "No Limit",
              explanation: "M3 does not impose a time limit on reports, though larger ranges may take longer to process."
            }
          ]
        }
      ]
    }
  ]
};
