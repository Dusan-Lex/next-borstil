import {
  CheckoutBack,
  CheckoutFront,
  ProgressContent,
  StyledCheckout,
} from "./CheckoutStyles";

import { useContext, useState } from "react";
import CheckoutContext from "../../../store/checkoutContext";
import OrderContext from "../../../store/orderContext";
import StepProgressBar from "./StepProgressBar";
import CheckoutButtons from "./CheckoutButtons";
import Step1 from "./CheckoutContent/Step1/Step1";

const steps = [
  "stavke iz korpe",
  "podaci o kupcu",
  "način plaćanja",
  "pregled korpe",
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const checkoutCtx = useContext(CheckoutContext);
  const orderCtx = useContext(OrderContext);

  return (
    <StyledCheckout>
      <CheckoutBack
        show={checkoutCtx.checkout}
        onClick={checkoutCtx.toggleCheckout}
      />
      <CheckoutFront show={checkoutCtx.checkout}>
        <StepProgressBar
          steps={steps}
          activeStep={activeStep}
          show={checkoutCtx.checkout}
        />
        <ProgressContent show={checkoutCtx.checkout}>
          {activeStep === 1 ? <Step1 /> : null}
          {/* {activeStep === 2 ? <Step2 /> : null}
          {activeStep === 3 ? <Step3 /> : null}
          {activeStep === 4 ? <Step4 /> : null} */}
        </ProgressContent>
        <CheckoutButtons
          stepsLength={steps.length}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          show={checkoutCtx.checkout}
        />
      </CheckoutFront>
    </StyledCheckout>
  );
};

export default Checkout;
