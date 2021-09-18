import React from "react";
import {
  CheckoutButton,
  CheckoutButtonBox,
  StyledCheckoutButtons,
} from "./CheckoutButtonsStyles";
import ArrowRight from "../../../shared/components/svgs/ArrowRight";
import ArrowLeft from "../../../shared/components/svgs/ArrowLeft";

const CheckoutButtons = ({ stepsLength, activeStep, setActiveStep, show }) => {
  return (
    <StyledCheckoutButtons show={show}>
      <CheckoutButtonBox>
        {activeStep !== 1 ? (
          <CheckoutButton
            left
            onClick={() => {
              setActiveStep((prevStep) => {
                return prevStep > 1 ? prevStep - 1 : prevStep;
              });
            }}
          >
            <ArrowLeft />
            <span>Nazad</span>
          </CheckoutButton>
        ) : null}
      </CheckoutButtonBox>
      <CheckoutButtonBox>
        {activeStep !== stepsLength ? (
          <CheckoutButton
            // className="not-allowed"
            onClick={() => {
              setActiveStep((prevStep) => {
                return prevStep < stepsLength ? prevStep + 1 : prevStep;
              });
            }}
          >
            <span>Dalje</span> <ArrowRight />
          </CheckoutButton>
        ) : (
          <CheckoutButton onClick={() => {}}>
            <span>Završi</span> <ArrowRight />
          </CheckoutButton>
        )}
      </CheckoutButtonBox>
    </StyledCheckoutButtons>
  );
};

export default CheckoutButtons;
