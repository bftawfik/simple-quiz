export const getTotalScore = (items: { score: number }[]) =>
  items.reduce((acc, curr) => acc + curr.score, 0);

export const getScoreAndLength = (items: { score: number }[]) => [
  getTotalScore(items),
  items.length,
];
