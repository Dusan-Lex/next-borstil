import React from "react";
import { StyledItemPreview } from "./ItemPreviewStyles";

const ItemPreview = ({ title, children }) => {
  return (
    <StyledItemPreview>
      <h3>{title}</h3>
      {children}
    </StyledItemPreview>
  );
};

export default ItemPreview;
