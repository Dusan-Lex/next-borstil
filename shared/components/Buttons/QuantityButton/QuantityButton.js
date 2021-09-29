import React from "react";
import {
  MinusQuantityButton,
  PlusQuantityButton,
  QuantityInput,
  StyledQuantityButton,
} from "./QuantityButtonStyles";

const QuantityButton = ({
  className,
  onMinusClick,
  onPlusClick,
  onChange,
  quantity,
}) => {
  return (
    <StyledQuantityButton className={className}>
      <div className="group">
        <MinusQuantityButton
          className="button minus"
          type="button"
          onClick={onMinusClick}
        >
          -
        </MinusQuantityButton>
        <QuantityInput
          type="text"
          value={quantity}
          onChange={onChange}
        ></QuantityInput>
        <PlusQuantityButton
          className="button plus"
          type="button"
          onClick={onPlusClick}
        >
          +
        </PlusQuantityButton>
      </div>
    </StyledQuantityButton>
  );
};

export default QuantityButton;
