import styled from "styled-components";

interface PrimaryButtonStyleProps {
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  boxShadow?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  height?: string;
  border?: string;
}

export const PrimaryButtonContainer = styled.div<PrimaryButtonStyleProps>`
  .primary-btn-wrapper {
    cursor: pointer;
    width: ${(props) => (props.width ? props.width : "100px")};
    height: ${(props) => (props.height ? props.height : "50px")};
    border-radius: ${(props) =>
      props.borderRadius ? props.borderRadius : "12px"};
    padding: ${(props) => (props.padding ? props.padding : "15px")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
    font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#ffffff"};
    color: ${(props) => (props.color ? props.color : "#000000")};
    border: ${(props) => (props.border ? props.border : "none")};
    box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
    transition: all 0.3s;

    :hover {
      transform: scale(1.05);
    }

    :active {
      transform: scale(0.9);
    }
  }
`;

// ${({
//     backgroundColor,
//     color,
//     borderRadius,
//     padding,
//     boxShadow,
//     fontSize,
//     fontWeight,
//     width,
//     height,
//     border,
//   }) => `
//   .primary-btn-wrapper {
//     width:${width ? width : "100px"};
//     height:${height ? height : "50px"};
//     border-radius: ${borderRadius ? borderRadius : "12px"};
//     padding: ${padding ? padding : "15px"};
//     font-size: ${fontSize ? fontSize : "14px"};
//     font-weight:${fontWeight ? fontWeight : "500"};
//     background-color: ${backgroundColor ? backgroundColor : "#ffffff"};
//     color: ${color ? color : "#000000"};
//     border: ${border ? border : "none"};
//     box-shadow: ${boxShadow ? boxShadow : "0px 2px 4px #ffffff"};
//   }
// `}
