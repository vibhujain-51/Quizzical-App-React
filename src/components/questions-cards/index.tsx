import React, { FC, useState } from "react";
import { StructuredQuestionType } from "../../containers/quiz-setup";
import { QuestionCardContainer } from "./style";
import parse from "html-react-parser";
import { nanoid } from "nanoid";

interface QuestionCardProps {
  quizQuestions: StructuredQuestionType;
  isSubmitted: boolean;
  questionNumber: number;
  questionsMarked: string[];
  setQuestionsMarked: React.Dispatch<React.SetStateAction<string[]>>;
  setTotalCorrectAnswers: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionCard: FC<QuestionCardProps> = (_props) => {
  const {
    quizQuestions,
    isSubmitted,
    questionNumber,
    questionsMarked,
    setQuestionsMarked,
    setTotalCorrectAnswers,
  } = _props;
  const { question, option, correctAnswer, difficulty, category, type } =
    quizQuestions;
  // console.log(quizQuestions);
  const [selectedOption, setSelectedOption] = useState("");
  // const [isCorrect, setIsCorrect] = useState(false);

  const checkCorrectAnswer = (optionIndex: number) => {
    const isCorrect = option[optionIndex].option === correctAnswer;
    if (isCorrect) {
      setTotalCorrectAnswers((prevState) => {
        return prevState + 1;
      });
    }
  };

  const handleOptionClick = (
    id: string,
    questionId: string,
    optionIndex: number
  ) => {
    setSelectedOption(id);
    if (!questionsMarked?.find((item) => item === questionId)) {
      let newArray = [...questionsMarked];
      newArray.push(questionId);
      setQuestionsMarked(newArray);
    }
    checkCorrectAnswer(optionIndex);
    // console.log(id);
  };

  const classNameProvider = (
    selectedOption: string,
    optionId: string,
    value: string
  ) => {
    if (isSubmitted) {
      if (selectedOption === optionId) {
        if (value === correctAnswer) {
          // setIsCorrect(true);
          return "submitted-correct";
        }
      }
    }
    if (isSubmitted) {
      if (selectedOption === optionId) {
        if (value !== correctAnswer) {
          // setIsCorrect(true);
          return "submitted-incorrect";
        }
      }
    }
    if (!isSubmitted) {
      if (selectedOption === optionId) return "selected-option";
    }
    // if (isSubmitted && !isCorrect && selectedOption === optionId)
    //   return "submitted-incorrect";
  };

  return (
    <QuestionCardContainer>
      <div className="primary-card-content-container">
        <div className="question-wrapper">
          Q{questionNumber}. {parse(`${question.question}`)}
        </div>
        <div className="option-container">
          {option.map((item, index) => {
            return (
              <div
                key={item.optionId}
                onClick={() =>
                  handleOptionClick(item.optionId, question.questionId, index)
                }
                className={`option-wrapper ${classNameProvider(
                  selectedOption,
                  item.optionId,
                  item.option
                )}`}
                style={isSubmitted ? { pointerEvents: "none" } : {}}
              >
                {parse(`${item.option}`)}
              </div>
            );
          })}
        </div>
        <div className="question-meta-info-container">
          <div className="category-wrapper">Category: {category}</div>
          <div className="difficulty-wrapper">
            Difficulty:&nbsp;
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </div>
          <div className="type-wrapper">
            Type: {type === "boolean" ? "True/False" : "Multiple Choice"}
          </div>
        </div>
      </div>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
