import React, { useContext } from "react";
import OrderContext from "../../../../../store/orderContext";
import OrderItem from "./OrderItem";
import { StyledStep1 } from "./Step1Styles";

const Step1 = () => {
  const orderCtx = useContext(OrderContext);
  return (
    <StyledStep1>
      {orderCtx.order.map((item, index) => (
        <OrderItem key={index} item={item} index={index} />
      ))}
    </StyledStep1>
  );
};

export default Step1;
