import React, { useContext, useState } from "react";
import OrderContext from "../../../../../store/orderContext";
import OrderItem from "./OrderItem";
import { StyledStep1, TotalAmount, EmptyCart } from "./Step1Styles";
import ShoppingCartSvg from "../../../../../shared/components/svgs/Shopping-Cart";

const Step1 = () => {
  const orderCtx = useContext(OrderContext);
  const [totalAmountArr, setTotalAmountArr] = useState([]);
  const totalAmount = totalAmountArr.reduce((s, x) => s + x, 0);
  return (
    <StyledStep1>
      {orderCtx.order.map((item, index) => (
        <OrderItem
          key={index}
          item={item}
          index={index}
          setTotalAmount={setTotalAmountArr}
        />
      ))}

      {totalAmount ? (
        <TotalAmount>
          Iznos kupovine:
          <span>{totalAmount}&#8364;</span>
        </TotalAmount>
      ) : (
        <EmptyCart>
          <ShoppingCartSvg />
          <p>Vaša korpa je prazna !</p>
        </EmptyCart>
      )}
    </StyledStep1>
  );
};

export default Step1;
