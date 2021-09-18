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
        <ProgressContent>
          {orderCtx.order.map((item, index) => (
            <div key={index}>
              tip:{item.doortype} boja:{item.doorcolor} Kvaka:{item.doorhandle}{" "}
              brava:{item.doorlock} kolicina :{item.doorquantity}
            </div>
          ))}
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
