import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/common/button";
import QuestionCard from "../../components/questions-cards";
import { useApplicationContext } from "../../context/application-context";
import { StructuredQuestionType } from "../quiz-setup";
import QuizSider from "./sider";
import { MainQuizContainer } from "./style";
import useWindowSize from "react-use/lib/useWindowSize";

interface DataType {
  state: StructuredQuestionType[];
}

const MainQuiz = () => {
  const { token } = useApplicationContext();
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  const { state } = useLocation() as DataType;
  const quizQuestions: StructuredQuestionType[] = [...state];
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [questionsMarked, setQuestionsMarked] = useState<string[]>([]);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState<number>(0);

  // console.log(quizQuestions);

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
  };

  const handleNewQuiz = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   if (!token) {
  //     navigate(-2);
  //   }
  // }, []);

  const totalQuestion: number = quizQuestions.length;
  const answerQuestions: number = questionsMarked.length;

  return (
    <MainQuizContainer>
      {isSubmitted ? (
        <div>
          <Confetti width={width - 10} height={height - 10} />
        </div>
      ) : (
        <></>
      )}

      <div className="primary-quiz-sider-container">
        <QuizSider
          handleSubmitQuiz={handleSubmitQuiz}
          handleNewQuiz={handleNewQuiz}
          isSubmitted={isSubmitted}
          totalQuestion={totalQuestion}
          answerQuestions={answerQuestions}
          totalCorrectAnswers={totalCorrectAnswers}
        />
      </div>
      <div className="quiz-content-primary-container">
        <div className="primary-questions-container">
          {quizQuestions.map((item: StructuredQuestionType, index: number) => {
            return (
              <QuestionCard
                key={index}
                quizQuestions={item}
                isSubmitted={isSubmitted}
                questionNumber={index + 1}
                questionsMarked={questionsMarked}
                setQuestionsMarked={setQuestionsMarked}
                setTotalCorrectAnswers={setTotalCorrectAnswers}
              />
            );
          })}
        </div>
        {/* <div className="submit-quiz-btn-container">
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
        </div> */}
      </div>
    </MainQuizContainer>
  );
};

export default MainQuiz;
