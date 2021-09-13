import {
  CheckoutBack,
  CheckoutContainer,
  CheckoutFront,
  StyledCheckout,
} from "./CheckoutStyles";

import { useContext } from "react";
import CheckoutContext from "../../../store/checkoutContext";
import OrderContext from "../../../store/orderContext";

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
        <CheckoutContainer>
          {orderCtx.order.map((item, index) => (
            <div key={index}>
              tip:{item.doortype} boja:{item.doorcolor} Kvaka:{item.doorhandle}{" "}
              brava:{item.doorlock} kolicina :{item.doorquantity}
            </div>
          ))}
        </CheckoutContainer>
      </CheckoutFront>
    </StyledCheckout>
  );
};

export default Checkout;
