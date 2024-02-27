import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../../data.json";

export interface Question {
  id: number;
  question: string;
  score: number;
}
export interface Section {
  id: number;
  section: string;
  questions: Question[];
}
export interface QuestionState {
  value: Section[];
}

const initialState: QuestionState = {
  value: data as Section[],
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Section[]>) => {
      state.value = action.payload;
    },

    setScore: (
      state,
      action: PayloadAction<{
        score: number;
        sectionId: number;
        questionId: number;
      }>
    ) => {
      const { score, sectionId, questionId } = action.payload;
      state.value[sectionId].questions[questionId].score = score;
    },
  },
});

export const { setQuestions, setScore } = questionsSlice.actions;

export default questionsSlice.reducer;
