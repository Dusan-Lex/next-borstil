import React from "react";
import { Label1, Label2, StyledCheckbox } from "./CheckboxStyles";

const Checkbox = ({ label1, label2, onClick, className, padding }) => {
  return (
    <StyledCheckbox
      onClick={onClick}
      className={className}
      label2={label2}
      padding={padding}
    >
      <Label1>
        <span className={className}></span>
        <h4>{label1}</h4>
      </Label1>
      <Label2 className={className}>
        <p>{label2}</p>
      </Label2>
    </StyledCheckbox>
  );
};

export default Checkbox;
