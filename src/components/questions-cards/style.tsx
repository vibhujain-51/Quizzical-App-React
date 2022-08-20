import styled from "styled-components";

export const QuestionCardContainer = styled.div`
  background-color: #141414;
  margin-bottom: 15px;
  padding: 15px;
  color: #ffffff;
  border-radius: 10px;
  user-select: none;

  .primary-card-content-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    .question-wrapper {
      font-size: 20px;
      font-weight: 600;
    }

    .option-container {
      display: flex;
      gap: 30px;
      margin-left: 25px;
      .option-wrapper {
        border: 1px solid #e66220;
        background-color: #f2ff43;
        color: #000000;
        border-radius: 15px;
        padding: 10px 20px;
        text-align: center;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s;
        :hover {
          transform: scale(1.05);
        }
      }

      .selected-option {
        background-color: #ff6f28;
        border: 1px solid #f2ff43;
      }

      .submitted-correct {
        background-color: #28ff28;
        border: 1px solid #14aa00;
      }

      .submitted-incorrect {
        background-color: #ff2828;
        border: 1px solid #aa0000;
      }
    }

    .question-meta-info-container {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      font-size: 12px;
      gap: 20px;
      color: red;
      .category-wrapper {
        background-color: #28ff285f;
        padding: 7px;
        color: #ffffff;
        font-weight: 600;
        border-radius: 15px;
      }

      .difficulty-wrapper {
        background-color: #2845ff5f;
        padding: 7px;
        color: #ffffff;
        font-weight: 600;
        border-radius: 15px;
      }

      .type-wrapper {
        background-color: #ff28cd5f;
        padding: 7px;
        color: #ffffff;
        font-weight: 600;
        border-radius: 15px;
      }
    }
  }
`;
