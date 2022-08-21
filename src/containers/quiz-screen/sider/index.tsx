import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useWindowSize } from "react-use";
import { BackArrowLinedIcon } from "../../../assets/icons/back-arrow-icon";
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
  const navigate = useNavigate();
  const {
    handleSubmitQuiz,
    handleNewQuiz,
    isSubmitted,
    totalQuestion,
    answerQuestions,
    totalCorrectAnswers,
  } = _props;
  const { width } = useWindowSize();

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <QuizSiderContainer>
      <div className="sider-primary-container">
        <div className="quiz-sider-header-container">
          <div>{width > 700 ? "QUIZ" : "Q"}</div>
          <div className="back-btn-wrapper" onClick={handleBackButton}>
            <div className="sider-back-arrow-wrapper">
              <BackArrowLinedIcon />
            </div>
            <div>BACK</div>
          </div>
        </div>
        <div className="questions-progress-container">
          <div className="questions-info-wrapper">
            <div>Total Question:</div>
            <div className="question-count-text">{totalQuestion}</div>
          </div>
          <div className="questions-info-wrapper">
            <div>Answered:</div>
            <div className="question-count-text answered">
              {answerQuestions}
            </div>
          </div>
          <div className="questions-info-wrapper">
            <div>Unanswered:</div>
            <div className="question-count-text">
              {totalQuestion - answerQuestions}
            </div>
          </div>
          <div className="questions-info-wrapper">
            <div>Correct Answers{isSubmitted ? ":" : ""}</div>
            <div className="question-count-text correct-answer">
              {isSubmitted ? totalCorrectAnswers : ""}
            </div>
          </div>
          <div className="questions-info-wrapper">
            <div>Wrong Questions{isSubmitted ? ":" : ""}</div>
            <div className="question-count-text wrong-answer">
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
            fontSize={width > 700 ? "18px" : "10px"}
            boxShadow="0px 4px 4px #ff8c5b"
            width="fit-content"
            height="fit-content"
            padding={width > 700 ? "20px" : "12px"}
            onClick={isSubmitted ? handleNewQuiz : handleSubmitQuiz}
          />
        </div>
      </div>
    </QuizSiderContainer>
  );
};

export default QuizSider;
