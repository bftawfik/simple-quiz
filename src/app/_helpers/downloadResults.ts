import { Question, Section } from "@/redux/questions/questionsSlice";
import { getTotalScore } from ".";

const getSectionScore = (questions: Question[]) => {
  const score = (getTotalScore(questions) / questions.length) * 10;
  const roundedScore = Math.round(score);
  return roundedScore;
};
export const createCsvFile = (results: string[], fileName: string) => {
  let csvContent = "";

  results.forEach((row) => {
    csvContent += row + "\n";
  });

  const blob = new Blob([csvContent], {
    endings: "native",
    type: "text/csv;charset=utf-8,",
  });
  const anchor = document.createElement("a");
  anchor.download = fileName + ".csv";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.style.display = "none";
  anchor.click();
};
export const resultFileDatatFormatter = (sectionsData: Section[]) => {
  const allQuestions = sectionsData.flatMap((section) => section.questions);
  const finalScore = getSectionScore(allQuestions);

  const EachQuestionScore = (questions: Question[]) =>
    questions.map(
      (question) => `"${question.question}",,,,,,,,${question.score}`
    );

  const sections = sectionsData.reduce((acc, curr) => {
    const quesions = EachQuestionScore(curr.questions);
    return [
      ...acc,
      `"${curr.section}",,,,,,,,${getSectionScore(curr.questions)}%`,
      ...quesions,
      "\n",
    ];
  }, [] as string[]);

  return [`"Final Score",,,,,,,,${finalScore}%\n`, ...sections];
};
