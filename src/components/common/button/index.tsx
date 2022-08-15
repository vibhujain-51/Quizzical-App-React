import React, { FC } from "react";
import { PrimaryButtonContainer } from "./style";

interface PrimaryButtonProps {
  text: string;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = (_props) => {
  const {
    text,
    onClick,
    backgroundColor,
    color,
    borderRadius,
    padding,
    boxShadow,
    fontSize,
    fontWeight,
    width,
    height,
    border,
  } = _props;

  return (
    <PrimaryButtonContainer
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      boxShadow={boxShadow}
      fontSize={fontSize}
      fontWeight={fontWeight}
      width={width}
      height={height}
      border={border}
    >
      <button className="primary-btn-wrapper" onClick={onClick}>
        {text}
      </button>
    </PrimaryButtonContainer>
  );
};

export default PrimaryButton;
