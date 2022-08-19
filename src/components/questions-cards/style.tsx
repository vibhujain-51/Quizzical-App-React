import styled from "styled-components";

export const QuestionCardContainer = styled.div`
  background-color: #2e2e2e;
  margin-bottom: 10px;
  padding: 10px;
  color: #ffffff;
  border-radius: 10px;
  user-select: none;

  .primary-card-content-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .question-wrapper {
    }

    .option-container {
      display: flex;
      gap: 30px;

      .option-wrapper {
        border: 1px solid red;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        transition: all 0.3s;
        :hover {
          transform: scale(1.05);
        }
      }
    }

    .question-meta-info-container {
      display: flex;
      gap: 20px;
      .category-wrapper {
        font-size: 10px;
      }

      .difficulty-wrapper {
        font-size: 10px;
      }

      .type-wrapper {
        font-size: 10px;
      }
    }
  }
`;
