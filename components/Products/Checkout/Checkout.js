import {
  CheckoutBack,
  CheckoutFront,
  ProgressContent,
  StyledCheckout,
} from "./CheckoutStyles";

import { useContext } from "react";
import CheckoutContext from "../../../store/checkoutContext";
import OrderContext from "../../../store/orderContext";
import StepProgressBar from "./StepProgressBar";

const Checkout = () => {
  const checkoutCtx = useContext(CheckoutContext);
  const orderCtx = useContext(OrderContext);
  console.log(orderCtx);
  return (
    <StyledCheckout>
      <CheckoutBack
        show={checkoutCtx.checkout}
        onClick={checkoutCtx.toggleCheckout}
      />
      <CheckoutFront show={checkoutCtx.checkout}>
        <StepProgressBar
          steps={["korpa", "podaci kupca", "pregled korpe"]}
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
      </CheckoutFront>
    </StyledCheckout>
  );
};

export default Checkout;
