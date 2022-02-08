export const combineShuffledAnswers = (incorrectAnswers, correctAnswer) => {
  const answers = [...incorrectAnswers, correctAnswer];
  const combineShuffledAnswers = [];

  answers.forEach(answer => {
    combineShuffledAnswers.push({
      text: answer,
      isCorrect: correctAnswer === answer,
    });
  });
  return combineShuffledAnswers;
};
