import styled from "styled-components";

export const MainQuizContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .quiz-primary-container {
    height: 100%;
    width: 100%;
    display: flex;

    .primary-quiz-sider-container {
      height: 100%;
      min-width: 20%;
      max-width: 20%;
      @media only screen and (max-width: 1039px) {
        min-width: 25%;
        max-width: 25%;
      }
      @media only screen and (max-width: 820px) {
        min-width: 30%;
        max-width: 30%;
      }
      @media only screen and (max-width: 700px) {
        min-width: 20%;
        max-width: 98%;
      }
    }
    .quiz-content-primary-container {
      height: 100%;
      width: 80%;
      padding: 20px 10px;

      .primary-questions-container {
        height: calc(100% - 45px);
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
      @media only screen and (max-width: 1039px) {
        width: 75%;
      }
      @media only screen and (max-width: 820px) {
        width: 70%;
      }
      @media only screen and (max-width: 700px) {
        width: 96%;
        height: calc(100vh - 145px);
      }
    }

    /* .submit-quiz-btn-container {
      margin-top: 10px;
      display: flex;
      justify-content: center;
    } */
    @media only screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
`;
