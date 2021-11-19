import React, { useContext } from "react";
import X from "../../../../../shared/components/svgs/X";
import OrderContext from "../../../../../context-store/orderContext";

import {
  StyledOrderItem,
  OrderDoor,
  OrderDiv,
  OrderHandleLockBox,
  OrderFirstBox,
  OrderPriceQuantityBox,
  OrderQuantityButton,
  OrderRemoveTotalPriceBox,
  OrderRemoveBtn,
} from "./OrderItemStyles";

const OrderItem = ({ item, index }) => {
  const orderCtx = useContext(OrderContext);

  const minusClickHandler = () => {
    orderCtx.dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  const plusClickHandler = () => {
    orderCtx.dispatch({ type: "ADD_ITEM", payload: index });
  };

  const removeHandler = () => {
    orderCtx.dispatch({
      type: "REMOVE_FROM_CART",
      payload: index,
    });
  };

  return (
    <StyledOrderItem>
      <OrderFirstBox>
        <OrderDoor>
          <img src={item.doorimageurl} alt="vrata" />
        </OrderDoor>
        <OrderHandleLockBox>
          <OrderDiv>
            Kvaka: <span>{item.doorhandle}</span>
          </OrderDiv>
          <OrderDiv>
            Brava: <span>{item.doorlock}</span>
          </OrderDiv>
        </OrderHandleLockBox>

        <OrderPriceQuantityBox>
          <OrderDiv className="price">
            Cena: <span>{item.doorprice}&#8364;</span>
          </OrderDiv>
          <OrderQuantityButton
            onMinusClick={minusClickHandler}
            onPlusClick={plusClickHandler}
            quantity={item.doorquantity}
            disabled
          />
        </OrderPriceQuantityBox>
      </OrderFirstBox>
      <OrderRemoveTotalPriceBox>
        <OrderRemoveBtn onClick={removeHandler}>
          <X width="20" />
        </OrderRemoveBtn>
        <OrderDiv className="price">
          Ukupno: <span>{item.doorquantity * item.doorprice}&#8364;</span>
        </OrderDiv>
      </OrderRemoveTotalPriceBox>
    </StyledOrderItem>
  );
};

export default OrderItem;
