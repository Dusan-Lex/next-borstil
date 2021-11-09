import {
  CheckoutBack,
  CheckoutFront,
  ProgressContent,
  StyledCheckout,
} from "./CheckoutStyles";

import { useContext, useEffect, useState } from "react";
import CheckoutContext from "../../../context-store/checkoutContext";
import StepProgressBar from "./StepProgressBar";
import CheckoutButtons from "./CheckoutButtons";
import Step1 from "./CheckoutContent/Step1/Step1";
import Step2 from "./CheckoutContent/Step2/Step2";
import { OrderInfoContextProvider } from "../../../context-store/orderInfoContext";
import Step3 from "./CheckoutContent/Step3/Step3";
import Step4 from "./CheckoutContent/Step4/Step4";

const steps = [
  "stavke iz korpe",
  "podaci o kupcu",
  "način plaćanja",
  "pregled korpe",
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [allowed, setAllowed] = useState(false);

  const checkoutCtx = useContext(CheckoutContext);

  return (
    <OrderInfoContextProvider>
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
            {activeStep === 1 ? <Step1 setAllowed={setAllowed} /> : null}
            {activeStep === 2 ? <Step2 setAllowed={setAllowed} /> : null}
            {activeStep === 3 ? <Step3 setAllowed={setAllowed} /> : null}
            {activeStep === 4 ? <Step4 setAllowed={setAllowed} /> : null}
          </ProgressContent>
          <CheckoutButtons
            stepsLength={steps.length}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            show={checkoutCtx.checkout}
            allowed={allowed}
            setAllowed={setAllowed}
          />
        </CheckoutFront>
      </StyledCheckout>
    </OrderInfoContextProvider>
  );
};

export default Checkout;
