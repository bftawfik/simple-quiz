import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import data from "../../../data.json"

interface QuestionState {
 value:{}
}


const initialState: QuestionState = {
value: data,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<{}>) {
      state.value = action.payload;
    },
  },
});

export const { setQuestions } = questionsSlice.actions;

export const selectQuestions = (state: RootState) => state.questions.value;

export default questionsSlice.reducer