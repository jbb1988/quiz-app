# MARS Learning Platform

A modern learning management system built with React, featuring course management, quizzes, and user progress tracking.

## Features

- **User Authentication**
  - Secure login and registration
  - User session management
  - Profile management

- **Course Management**
  - Categorized courses
  - Interactive course cards
  - Course filtering by category
  - Progress tracking

- **Quiz System**
  - Multiple choice questions
  - Timer with bonus points
  - Immediate feedback
  - Score tracking
  - Progress indicators

- **User Interface**
  - Modern, clean design
  - Responsive layout
  - Intuitive navigation
  - Professional styling

## Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   ├── Auth/           # Authentication components
│   │   ├── Dashboard/      # Dashboard and course views
│   │   ├── Layout/         # Common layout components
│   │   ├── Profile/        # User profile management
│   │   ├── Progress/       # Progress tracking
│   │   └── Quiz/           # Quiz components
│   ├── data/
│   │   ├── courses/        # Course data
│   │   └── quizzes/        # Quiz questions
│   ├── styles/
│   │   ├── index.css       # Global styles
│   │   └── theme.js        # Theme configuration
│   └── utils/              # Utility functions
└── public/                 # Static assets
```

## Technical Details

- Built with React and React Router
- Uses local storage for data persistence
- Custom styling with CSS variables
- Responsive design for all screen sizes
- Component-based architecture

## Recent Updates

1. Authentication System
   - Improved login and registration forms
   - Enhanced form validation
   - Better error handling

2. Dashboard Improvements
   - Enhanced course card styling
   - Better category filtering
   - Improved layout and spacing

3. User Experience
   - Consistent styling across components
   - Better form feedback
   - Improved navigation

## Development Guidelines

1. Code Organization
   - Follow component-based architecture
   - Keep components focused and reusable
   - Use consistent naming conventions

2. Styling
   - Use CSS variables for theming
   - Follow BEM naming convention
   - Maintain responsive design

3. Best Practices
   - Check documentation before making changes
   - Update files after significant changes
   - Record all changes in documentation
   - Test thoroughly before deployment

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`
4. Build for production: `npm run build`
5. Deploy to GitHub Pages: `npm run deploy`

## Deployment

The app is deployed to GitHub Pages and can be accessed at:
https://jbb1988.github.io/quiz-app/

## Future Improvements

- Backend integration for data persistence
- Advanced quiz types
- Course creation interface
- Enhanced progress analytics
- Social features
