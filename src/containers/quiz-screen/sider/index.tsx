import React, { FC } from "react";
import PrimaryButton from "../../../components/common/button";
import { QuizSiderContainer } from "./style";

interface SiderPropsType {
  handleSubmitQuiz: () => void;
  handleNewQuiz: () => void;
  isSubmitted: boolean;
  totalQuestion: number;
  answerQuestions: number;
  totalCorrectAnswers: number;
}

const QuizSider: FC<SiderPropsType> = (_props) => {
  const {
    handleSubmitQuiz,
    handleNewQuiz,
    isSubmitted,
    totalQuestion,
    answerQuestions,
    totalCorrectAnswers,
  } = _props;

  return (
    <QuizSiderContainer>
      <div className="sider-primary-container">
        <div className="quiz-sider-header-container">QUIZ</div>
        <div className="questions-progress-container">
          <div className="questions-info-wrapper">
            <div>Total Question:</div>
            <div className="question-count-text">{totalQuestion}</div>
          </div>
          <div className="questions-info-wrapper">
            <div>Answered:</div>
            <div className="question-count-text">{answerQuestions}</div>
          </div>
          <div className="questions-info-wrapper">
            <div>Unanswered:</div>
            <div className="question-count-text">
              {totalQuestion - answerQuestions}
            </div>
          </div>
          <div className="questions-info-wrapper">
            <div>Correct Answers{isSubmitted ? ":" : ""}</div>
            <div className="question-count-text">
              {isSubmitted ? totalCorrectAnswers : ""}
            </div>
          </div>
          <div className="questions-info-wrapper">
            <div>Wrong Questions{isSubmitted ? ":" : ""}</div>
            <div className="question-count-text">
              {isSubmitted ? answerQuestions - totalCorrectAnswers : ""}
            </div>
          </div>
          {isSubmitted ? (
            <div className="quiz-status-wrapper">QUIZ COMPLETED</div>
          ) : (
            <></>
          )}
        </div>
        <div className="submit-quiz-btn-container">
          <PrimaryButton
            text={isSubmitted ? "Start New Quiz" : "Submit Quiz"}
            backgroundColor="#f2ff43"
            fontWeight="800"
            fontSize="18px"
            boxShadow="0px 4px 4px #ff8c5b"
            width="fit-content"
            height="fit-content"
            padding="20px"
            onClick={isSubmitted ? handleNewQuiz : handleSubmitQuiz}
          />
        </div>
      </div>
    </QuizSiderContainer>
  );
};

export default QuizSider;
