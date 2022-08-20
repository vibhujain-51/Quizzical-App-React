import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getQuizQuestions,
  getSessionToken,
} from "../../api-client/services/setup-quiz";
import PrimaryButton from "../../components/common/button";
import { useApplicationContext } from "../../context/application-context";
import { QuizSetupContainer } from "./style";

export interface FormValuesTypes {
  numberOfQuestions: number;
  questionCategory?: string;
  questionDifficulty?: string;
  questionsType?: string;
}

export interface StructuredQuestionType {
  question: Question;
  option: Options[];
  correctAnswer: string;
  difficulty: string;
  category: string;
  type: string;
}

export interface Options {
  option: string;
  optionId: string;
}

export interface Question {
  question: string;
  questionId: string;
}

// let value: StructuredQuestionType = {
//   question: "",
//   option: [],
//   correctAnswer: "",
//   difficulty: "",
//   category: "",
//   type: "",
// };

const QuizSetup = () => {
  const navigate = useNavigate();
  const { token } = useApplicationContext();
  // const [structuredQuestions, setStructuredQuestions] = useState<
  //   StructuredQuestionType[]
  // >([value]);

  const initialFormValues: FormValuesTypes = {
    numberOfQuestions: 5,
    questionCategory: "any",
    questionDifficulty: "any",
    questionsType: "any",
  };

  const [formValues, setFormValues] = useState<FormValuesTypes>(
    () => initialFormValues
  );

  useEffect(() => {
    if (!token) {
      navigate(-1);
    }
  }, []);

  // console.log(structuredQuestions);

  const structureOption = (value: string[]) => {
    let tempOptionArray: Options[] = [];
    value.map((item) => {
      let tempOption: Options = {
        option: item,
        optionId: nanoid(),
      };
      tempOptionArray.push(tempOption);
      for (let i = tempOptionArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [tempOptionArray[i], tempOptionArray[j]] = [
          tempOptionArray[j],
          tempOptionArray[i],
        ];
      }
    });
    return tempOptionArray;
  };

  const getQuiz = async (formValues: FormValuesTypes) => {
    const response = await getQuizQuestions(formValues, token);
    console.log(response);
    let tempArray: StructuredQuestionType[] = [];
    response?.data.results.map((item: any) => {
      let options = [...item.incorrect_answers];
      options.push(item.correct_answer);
      const response = structureOption(options);
      let tempQuestion: Question = {
        question: item.question,
        questionId: nanoid(),
      };
      let tempObj: StructuredQuestionType = {
        question: tempQuestion,
        option: [...response],
        correctAnswer: item.correct_answer,
        category: item.category,
        difficulty: item.difficulty,
        type: item.type,
      };
      tempArray.push(tempObj);
    });
    console.log(tempArray);
    // await setStructuredQuestions(tempArray);
    return tempArray;
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);

    setFormValues((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitQuizSetupForm = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const response = await getQuiz(formValues);
    // console.log(response);
    // console.log(response);
    if (response) {
      navigate("/main-quiz", { state: response });
    }
  };

  return (
    <QuizSetupContainer>
      <div className="quiz-setup-heading-wrapper">QUIZ SETUP</div>
      <form>
        <div className="form-items-container">
          <div className="form-items-wrapper number-of-questions-wrapper">
            <div className="select-info-text-wrapper">
              SELECT NUMBER OF QUESTIONS
            </div>
            <select
              name="numberOfQuestions"
              id="numberOfQuestions"
              value={formValues?.numberOfQuestions}
              onChange={handleOnChange}
              className="input-select"
            >
              {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-items-wrapper">
            <div className="select-info-text-wrapper">SELECT CATEGORY</div>
            <select
              name="questionCategory"
              // id="numberOfQuestions"
              className="input-select"
              value={formValues?.questionCategory}
              onChange={handleOnChange}
            >
              <option value="any">Any Category</option>
              <option value="9">General Knowledge</option>
              <option value="10">Entertainment: Books</option>
              <option value="11">Entertainment: Film</option>
              <option value="12">Entertainment: Music</option>
              <option value="13">Entertainment: Musicals &amp; Theatres</option>
              <option value="14">Entertainment: Television</option>
              <option value="15">Entertainment: Video Games</option>
              <option value="16">Entertainment: Board Games</option>
              <option value="17">Science &amp; Nature</option>
              <option value="18">Science: Computers</option>
              <option value="19">Science: Mathematics</option>
              <option value="20">Mythology</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
              <option value="24">Politics</option>
              <option value="25">Art</option>
              <option value="26">Celebrities</option>
              <option value="27">Animals</option>
              <option value="28">Vehicles</option>
              <option value="29">Entertainment: Comics</option>
              <option value="30">Science: Gadgets</option>
              <option value="31">
                Entertainment: Japanese Anime &amp; Manga
              </option>
              <option value="32">
                Entertainment: Cartoon &amp; Animations
              </option>
            </select>
          </div>

          <div className="form-items-wrapper">
            <div className="select-info-text-wrapper">SELECT DIFFICULTY</div>
            <select
              name="questionDifficulty"
              // id="numberOfQuestions"
              className="input-select"
              value={formValues?.questionDifficulty}
              onChange={handleOnChange}
            >
              <option value="any">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="form-items-wrapper">
            <div className="select-info-text-wrapper">SELECT TYPE</div>
            <select
              name="questionsType"
              // id="numberOfQuestions"
              className="input-select"
              value={formValues?.questionsType}
              onChange={handleOnChange}
            >
              <option value="any">Any Type</option>
              <option value="multiple">Multiple Choice</option>
              <option value="boolean">True / False</option>
            </select>
          </div>
          <div className="submit-btn-wrapper">
            <PrimaryButton
              text="Confirm &amp; Start Quiz"
              backgroundColor="#f2ff43"
              fontWeight="800"
              fontSize="20px"
              boxShadow="0px 4px 4px #ff8c5b"
              width="fit-content"
              height="fit-content"
              padding="20px"
              onClick={handleSubmitQuizSetupForm}
            />
          </div>
        </div>
      </form>
    </QuizSetupContainer>
  );
};

export default QuizSetup;
