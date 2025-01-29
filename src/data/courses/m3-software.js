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
        },
        {
          id: 'login_user_management',
          title: 'Logging In and User Management',
          description: 'Understanding user access, roles, and account management',
          questions: [
            {
              id: 1,
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
              id: 2,
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
              id: 3,
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
              id: 4,
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
              id: 5,
              question: "Which of the following is a best practice for user management?",
              options: [
                "Allow users to share login credentials",
                "Regularly audit user access",
                "Assign multiple roles to each user",
                "Use generic usernames for faster logins"
              ],
              correctAnswer: "Regularly audit user access",
              explanation: "Regular auditing of user access is a security best practice for system management."
            }
          ]
        }
      ]
    }
  ]
};
