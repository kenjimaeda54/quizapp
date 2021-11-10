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

export const keyStorageReport = '@KeyQuizApp';

export const KeyTotalCorrect = '@KeyTotalCorrect';

export const KeyTotalWrong = '@keyTotalWrong';

export const KeyTotalReport = '@KeyTotalQuestion';
