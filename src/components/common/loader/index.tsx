import React, { FC } from "react";
import { LoaderContainer } from "./style";

interface LoaderPropType {
  activate: boolean;
}

const Loader: FC<LoaderPropType> = (_props) => {
  const { activate } = _props;
  return (
    <LoaderContainer>
      <div hidden={activate ? false : true} id="spinner"></div>
    </LoaderContainer>
  );
};

export default Loader;
