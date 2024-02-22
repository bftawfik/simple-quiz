"use client"
import { useSelector } from 'react-redux';
import StartScreen from './_components/startScreen/StartScreen';
import { RootState } from '@/redux/store';
export default function Home() {
  const question = useSelector((state: RootState) => state.questions.value)
console.log(question);

  return <StartScreen />;
}
