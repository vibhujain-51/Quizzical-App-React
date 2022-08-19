import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QuestionCard from "../../components/questions-cards";
import { StructuredQuestionType } from "../quiz-setup";
import { MainQuizContainer } from "./style";

interface DataType {
  state: StructuredQuestionType[];
}

const MainQuiz = () => {
  const { state } = useLocation() as DataType;

  const quizQuestions: StructuredQuestionType[] = [...state];
  // console.log(quizQuestions);

  //   const { state } = location as DataType;
  //   const [questions, setQuestions] = useState([]);
  //   setQuestions(state);

  return (
    <MainQuizContainer>
      <div className="primary-questions-container">
        {quizQuestions.map((item: StructuredQuestionType, index: number) => {
          return <QuestionCard key={index} quizQuestions={item} id={index} />;
        })}
      </div>
    </MainQuizContainer>
  );
};

export default MainQuiz;
