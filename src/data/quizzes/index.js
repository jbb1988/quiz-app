import { generalKnowledgeQuiz } from './general-knowledge';

export const quizzes = [
  generalKnowledgeQuiz,
  // Add more quizzes here
];

export const getQuizById = (id) => {
  return quizzes.find(quiz => quiz.id === id);
};
