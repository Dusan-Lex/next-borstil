import React, { useState } from "react";
import {
  HorizontalLine,
  StepDescription,
  StepNumber,
  StepWrapper,
  StyledStepProgressBar,
} from "./StepProgressBarStyles";

const StepProgressBar = ({ steps, show }) => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <StyledStepProgressBar show={show}>
      {steps.map((step, index) => {
        const stepClass =
          index < activeStep - 1
            ? "completed"
            : index < activeStep
            ? "active"
            : "";
        return (
          <StepWrapper key={index}>
            <StepNumber className={stepClass}>{index + 1}</StepNumber>
            <StepDescription className={stepClass}>{step}</StepDescription>
            {index !== steps.length - 1 ? (
              <HorizontalLine
                className={index < activeStep - 1 ? "active" : ""}
              />
            ) : null}
          </StepWrapper>
        );
      })}
    </StyledStepProgressBar>
  );
};

export default StepProgressBar;
