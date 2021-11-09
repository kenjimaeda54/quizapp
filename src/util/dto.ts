export interface Phrase {
  id: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const results = [
  {
    id: 1,
    category: 'Entertainment: Television',
    type: 'multiple',
    difficulty: 'medium',
    question:
      'What year did the television company BBC officially launch the channel BBC One?',
    correct_answer: '1936',
    incorrect_answers: ['1948', '1932', '1955'],
  },
];
