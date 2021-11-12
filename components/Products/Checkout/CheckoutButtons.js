import React, { useContext } from "react";
import {
  CheckoutButton,
  CheckoutButtonBox,
  StyledCheckoutButtons,
} from "./CheckoutButtonsStyles";
import ArrowRight from "../../../shared/components/svgs/ArrowRight";
import ArrowLeft from "../../../shared/components/svgs/ArrowLeft";
import OrderContext from "../../../context-store/orderContext";
import OrderInfoContext from "../../../context-store/orderInfoContext";

const CheckoutButtons = ({
  stepsLength,
  activeStep,
  setActiveStep,
  show,
  allowed,
  setAllowed,
  scrollHandler,
}) => {
  const orderCtx = useContext(OrderContext);
  const orderInfoCtx = useContext(OrderInfoContext);

  const completeOrderHandler = async () => {
    const response = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        order: orderCtx.order,
        orderInfo: orderInfoCtx,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

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
              scrollHandler();
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
            className={allowed ? "" : "not-allowed"}
            onClick={() => {
              setActiveStep((prevStep) => {
                return prevStep < stepsLength ? prevStep + 1 : prevStep;
              });
              setAllowed(false);
              scrollHandler();
            }}
          >
            <span>Dalje</span> <ArrowRight />
          </CheckoutButton>
        ) : (
          <CheckoutButton onClick={completeOrderHandler}>
            <span>Završi</span> <ArrowRight />
          </CheckoutButton>
        )}
      </CheckoutButtonBox>
    </StyledCheckoutButtons>
  );
};

export default CheckoutButtons;
