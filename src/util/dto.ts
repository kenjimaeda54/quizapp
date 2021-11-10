export interface Phrase {
  id: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface UserAnswer {
  id: string;
  index: number;
  answerCorrect: string;
  answerSelect: string;
}

export interface TotalAnswer {
  id: string;
  answerTotalCorrect: number;
  answerTotalWrong: number;
  totalQuestions: number;
}

export const keyStorageReport = '@KeyQuizApp';

export const KeyTotalAnswers = '@KeyTotalAnswers';
