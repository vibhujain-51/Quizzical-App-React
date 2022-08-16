import React, { useEffect, useState } from "react";
import { getQuizQuestions } from "../../api-client/services/setup-quiz";
import PrimaryButton from "../../components/common/button";
import { QuizSetupContainer } from "./style";

export interface FormValuesTypes {
  numberOfQuestions: number;
  questionCategory?: string;
  questionDifficulty?: string;
  questionsType?: string;
}

const QuizSetup = () => {
  const initialFormValues: FormValuesTypes = {
    numberOfQuestions: 5,
    questionCategory: "any",
    questionDifficulty: "any",
    questionsType: "any",
  };

  const getQuiz = async (formValues: FormValuesTypes) => {
    const response = await getQuizQuestions(formValues);
    console.log(response);
  };

  const [formValues, setFormValues] = useState<FormValuesTypes>(
    () => initialFormValues
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);

    setFormValues((prevState: any) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitQuizSetupForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    getQuiz(formValues);
  };

  return (
    <QuizSetupContainer>
      <form>
        <div className="form-items-container">
          <div className="form-items-wrapper number-of-questions-wrapper">
            <label htmlFor="numberOfQuestions">
              Select number of Questions
            </label>
            <select
              name="numberOfQuestions"
              // id="numberOfQuestions"
              value={formValues?.numberOfQuestions}
              onChange={handleOnChange}
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
            <label htmlFor="numberOfQuestions">Select Category</label>
            <select
              name="questionCategory"
              // id="numberOfQuestions"
              className=""
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
            <label htmlFor="numberOfQuestions">Select Difficulty</label>
            <select
              name="questionDifficulty"
              // id="numberOfQuestions"
              className=""
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
            <label htmlFor="numberOfQuestions">Select Type</label>
            <select
              name="questionsType"
              // id="numberOfQuestions"
              className=""
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
              text="Confirm &amp; Start Quiz "
              width="200px"
              onClick={handleSubmitQuizSetupForm}
            />
          </div>
        </div>
      </form>
    </QuizSetupContainer>
  );
};

export default QuizSetup;
