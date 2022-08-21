import styled from "styled-components";

export const QuizSiderContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000;
  /* padding: 20px; */
  color: #ffffff;
  user-select: none;
  .sider-primary-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .quiz-sider-header-container {
      color: #e66220;
      font-size: 80px;
      font-weight: 800;
      /* text-align: center; */

      .sider-app-name-wrapper {
        cursor: pointer;
        transition: all 0.3s;

        :hover {
          transform: scale(1.05);
        }
      }

      .back-btn-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        font-size: 14px;
        font-weight: 600;
        color: red;
        cursor: pointer;
        transition: all 0.3s;
        :hover {
          transform: scale(1.1);
        }

        .sider-back-arrow-wrapper {
          display: flex;
          align-items: center;
        }
        @media only screen and (max-width: 700px) {
          font-size: 10px;
        }
      }

      @media only screen and (max-width: 1115px) {
        font-size: 70px;
        align-self: flex-start;
        /* text-align: center; */
        padding-left: 30px;
      }
    }

    .questions-progress-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      font-size: 20px;
      margin-top: 15px;
      width: fit-content;

      .questions-info-wrapper {
        display: flex;
        justify-content: space-between;
        width: 180px;
        border-bottom: 1px solid red;
        padding: 10px 5px;
        .question-count-text {
          color: #f2ff43;
        }
        .answered {
          color: #e66220;
        }
        .correct-answer {
          color: #28ff28;
        }
        .wrong-answer {
          color: red;
        }
        @media only screen and (max-width: 700px) {
          width: 100px;
          font-size: 12px;
        }
      }
      .quiz-status-wrapper {
        color: red;
        font-weight: 800;
        text-align: center;
        animation: blink-animation 1s linear infinite;
      }

      @keyframes blink-animation {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
      @media only screen and (max-width: 1115px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 700px) {
        flex-direction: row;
        /* flex: 50%; */
        flex-wrap: wrap;
        margin-left: 10px;
        font-size: 15px;
        /* width: 50%; */
        gap: 25px;
        .questions-info-wrapper {
          flex: 30%;
        }
      }
    }

    .submit-quiz-btn-container {
      position: absolute;
      bottom: 25px;
      /* margin-bottom: 25px; */
      @media only screen and (max-width: 700px) {
        /* position: relative; */
        bottom: 0;
        left: 12px;
      }
    }
    @media only screen and (max-width: 700px) {
      flex-direction: row;
      gap: 30px;
    }
  }
`;
