import styled from "styled-components";

export const QuizSetupContainer = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-items-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    /* align-items: center; */
    /* justify-content: center; */
    color: #ffffff;

    .form-items-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
