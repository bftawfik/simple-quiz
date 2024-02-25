"use client"
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'
import QuestionsSlider from './_components/questionSlide/QuestionSlide';

const Home = () => {
  const data = useSelector((state: RootState) => state.questions.value)
  return <QuestionsSlider data={data} />;
};

export default Home;
