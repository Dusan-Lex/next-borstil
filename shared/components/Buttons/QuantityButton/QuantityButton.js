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
  disabled,
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
          type="number"
          min={1}
          value={quantity}
          onChange={onChange}
          disabled={disabled}
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
