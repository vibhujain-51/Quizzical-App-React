import styled from "styled-components";

export const LoaderContainer = styled.div`
  #spinner:not([hidden]) {
    background-color: #00000085;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }

  #spinner::after {
    content: "";
    width: 100px;
    height: 100px;
    border: 2px solid #f3f3f3;
    border-top: 3px solid #ff2807;
    border-radius: 100%;
    will-change: transform;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
