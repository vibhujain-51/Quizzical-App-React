import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BottomBlueGraphics, TopYellowGraphics } from "../../assets/graphics";
import PrimaryButton from "../../components/common/button";
import Loader from "../../components/common/loader";
import { useApplicationContext } from "../../context/application-context";
import { WelcomeScreenContainer } from "./style";

const WelcomeScreen = () => {
  const { getToken, token } = useApplicationContext();
  const navigate = useNavigate();
  const [activateLoader, setActivateLoader] = useState(false);

  const handleStartQuiz = async () => {
    if (token === "") {
      setActivateLoader(true);
      const response = await getToken();
      if (response) {
        setActivateLoader(false);
        navigate("quiz-setup");
      }
    } else {
      navigate("quiz-setup");
    }
  };

  return (
    <WelcomeScreenContainer>
      <Loader activate={activateLoader} />
      <div className="welcome-screen-primary-wrapper">
        <div className="top-graphic-wrapper">
          <TopYellowGraphics />
        </div>
        <div className="app-name-wrapper">QUIZZICAL</div>
        <div className="welcome-info-text-wrapper">
          A place to test your knowledge
        </div>
        <div className="start-quiz-btn-wrapper">
          <PrimaryButton
            text="Start Quiz"
            backgroundColor="#f2ff43"
            fontWeight="800"
            fontSize="20px"
            width="250px"
            height="65px"
            boxShadow="0px 4px 4px #ff8c5b"
            onClick={handleStartQuiz}
          />
        </div>
        <div className="bottom-graphic-wrapper">
          <BottomBlueGraphics />
        </div>
      </div>
    </WelcomeScreenContainer>
  );
};

export default WelcomeScreen;
