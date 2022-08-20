import styled from "styled-components";

export const WelcomeScreenContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  .welcome-screen-primary-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
    .app-name-wrapper {
      color: #e66220;
      font-size: 80px;
      font-weight: 800;
      @media only screen and (max-width: 471px) {
        font-size: 60px;
      }
    }
    .welcome-info-text-wrapper {
      color: #e47e4c;
      font-size: 20px;
      @media only screen and (max-width: 471px) {
        font-size: 18px;
      }
    }
    .start-quiz-btn-wrapper {
      margin-top: 10px;
    }
    .top-graphic-wrapper {
      position: absolute;
      top: 0;
      right: 0;
    }
    .bottom-graphic-wrapper {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  @media only screen and (max-width: 471px) {
    overflow: hidden;
  }
`;
