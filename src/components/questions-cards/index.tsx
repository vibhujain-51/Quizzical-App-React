import React, { FC } from "react";
import { StructuredQuestionType } from "../../containers/quiz-setup";
import { QuestionCardContainer } from "./style";

interface QuestionCardProps {
  quizQuestions: StructuredQuestionType;
  id: number;
}

const QuestionCard: FC<QuestionCardProps> = (_props) => {
  const { quizQuestions, id } = _props;
  const { question, option, correctAnswer, difficulty, category, type } =
    quizQuestions;
  console.log(option);
  return (
    <QuestionCardContainer>
      <div className="primary-card-content-container">
        <div className="question-wrapper">{question}</div>
        <div className="option-container">
          {option.map((item, index) => {
            return (
              <div className="option-wrapper" key={index}>
                {item}
              </div>
            );
          })}
        </div>
        <div className="question-meta-info-container">
          <div className="category-wrapper">Category: {category}</div>
          <div className="difficulty-wrapper">Difficulty:{difficulty}</div>
          <div className="type-wrapper">Type: {type}</div>
        </div>
      </div>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
