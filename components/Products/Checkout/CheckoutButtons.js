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
import CheckoutContext from "../../../context-store/checkoutContext";

const CheckoutButtons = ({
  stepsLength,
  activeStep,
  setActiveStep,
  show,
  allowed,
  setAllowed,
  finished,
  setFinished,
  scrollHandler,
}) => {
  const orderCtx = useContext(OrderContext);
  const orderInfoCtx = useContext(OrderInfoContext);
  const checkoutCtx = useContext(CheckoutContext);

  const completeOrderHandler = async () => {
    const response = await fetch("/api/completeorder", {
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
    if (data.message === "finished") {
      setFinished(true);
      localStorage.setItem("order", JSON.stringify([]));
      orderCtx.dispatch({ type: "RESET_CART" });
      setTimeout(() => {
        checkoutCtx.setCheckout(false);
      }, 4000);
      setTimeout(() => {
        setFinished(false);
      }, 4500);
    }
  };

  return (
    <StyledCheckoutButtons show={show}>
      <CheckoutButtonBox finished={finished}>
        {activeStep !== 1 ? (
          <CheckoutButton
            left
            onClick={() => {
              setActiveStep((prevStep) => {
                return prevStep > 1 ? prevStep - 1 : prevStep;
              });
              setTimeout(scrollHandler, 200);
            }}
          >
            <ArrowLeft />
            <span>Nazad</span>
          </CheckoutButton>
        ) : null}
      </CheckoutButtonBox>
      <CheckoutButtonBox finished={finished}>
        {activeStep !== stepsLength ? (
          <CheckoutButton
            className={allowed ? "" : "not-allowed"}
            onClick={() => {
              if (allowed) {
                setActiveStep((prevStep) => {
                  return prevStep < stepsLength ? prevStep + 1 : prevStep;
                });
                setAllowed(false);
                setTimeout(scrollHandler, 200);
              }
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
