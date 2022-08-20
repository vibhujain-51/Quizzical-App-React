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
      text-align: center;
    }

    .questions-progress-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 45px;
      font-size: 20px;
      margin-top: 15px;

      .questions-info-wrapper {
        display: flex;
        justify-content: space-between;
        width: 180px;
        border-bottom: 1px solid red;
        padding: 10px 5px;
        .question-count-text {
          color: #f2ff43;
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
    }

    .submit-quiz-btn-container {
      position: absolute;
      bottom: 25px;
      /* margin-bottom: 25px; */
    }
  }
`;
