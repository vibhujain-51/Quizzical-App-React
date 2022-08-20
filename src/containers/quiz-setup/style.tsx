import styled from "styled-components";

export const QuizSetupContainer = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;

  /* align-items: center; */
  overflow-y: auto;
  /* justify-content: center; */
  .quiz-setup-primary-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* gap: 10px; */

    .quiz-setup-heading-wrapper {
      color: #e66220;
      font-size: 80px;
      font-weight: 800;
      align-self: center;
      margin: 5px 0px -40px 0px;
      @media only screen and (max-width: 530px) {
        font-size: 60px;
      }
    }

    .form-items-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 35px;
      /* align-items: center; */
      /* justify-content: center; */
      color: #ffffff;
      padding: 50px 50px 0px 50px;

      .form-items-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .select-info-text-wrapper {
          color: #f2ff43;
          font-size: 20px;
          font-weight: 700;
          @media only screen and (max-width: 430px) {
            font-size: 16px;
          }
        }

        .input-select {
          border: none;
          padding: 8px;
          border-radius: 10px;
          font-size: 20px;
          background-color: #16131b;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          :hover {
            transform: scale(1.01);
          }
        }
      }
      .submit-btn-wrapper {
        align-self: center;
      }
    }
  }
`;
