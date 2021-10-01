import React, { useContext, useState } from "react";
import OrderContext from "../../../../../store/orderContext";
import OrderItem from "./OrderItem";
import { StyledStep1, TotalAmount } from "./Step1Styles";

const Step1 = () => {
  const orderCtx = useContext(OrderContext);
  const [totalAmount, setTotalAmount] = useState([]);
  console.log(totalAmount);
  return (
    <StyledStep1>
      {orderCtx.order.map((item, index) => (
        <OrderItem
          key={index}
          item={item}
          index={index}
          setTotalAmount={setTotalAmount}
        />
      ))}
      <TotalAmount>
        Iznos kupovine:
        <span>{totalAmount.reduce((s, x) => s + x, 0)}&#8364;</span>
      </TotalAmount>
    </StyledStep1>
  );
};

export default Step1;
