import styled from "styled-components";

export const MainQuizContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  .primary-quiz-sider-container {
    height: 100%;
    min-width: 20%;
    max-width: 20%;
  }
  .quiz-content-primary-container {
    width: 80%;
    /* height: 100%; */
    padding: 20px;
    .primary-questions-container {
      height: calc(100vh - 40px);
      /* padding: 20px; */
      overflow: auto;
      * {
        scrollbar-width: thin;
        scrollbar-color: #6c6c6d #d4d4d3;
        :-webkit-scrollbar {
          width: 20px;
        }
        :-webkit-scrollbar-track {
          background: transparent;
        }
      }

      ::-webkit-scrollbar {
        width: 5px;
      }

      ::-webkit-scrollbar-track {
        background: #e66220;
        border-radius: 12px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #4b4b4b;
        border-radius: 20px;
        border: none;
      }
    }
    /* .submit-quiz-btn-container {
      margin-top: 10px;
      display: flex;
      justify-content: center;
    } */
  }
`;
