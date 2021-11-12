import React from "react";
import { StyledPreview } from "./PreviewStyles";

const Preview = ({ title, children }) => {
  return (
    <StyledPreview>
      <h3>{title}</h3>
      {children}
    </StyledPreview>
  );
};

export default Preview;
