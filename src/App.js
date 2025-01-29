import React from 'react';
import Quiz from './components/Quiz/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-background py-8">
      <header className="container text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">LMS Quiz App</h1>
        <p className="text-text-light">
          Test your knowledge with our interactive quiz!
        </p>
      </header>

      <main>
        <Quiz />
      </main>

      <footer className="container text-center mt-8 text-text-light">
        <p>
          Built with React - Perfect for embedding in Notion and other LMS platforms
        </p>
      </footer>
    </div>
  );
}

export default App;
