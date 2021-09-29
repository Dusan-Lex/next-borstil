import React, { useContext } from "react";
import Trash from "../../../../../shared/components/svgs/Trash";
import X from "../../../../../shared/components/svgs/X";
import OrderContext from "../../../../../store/orderContext";

import { findDoor } from "../../../DoorsUtil";
import {
  StyledOrderItem,
  OrderDoor,
  OrderDiv,
  OrderHandleLockBox,
  OrderFirstBox,
  OrderPriceQuantityBox,
  OrderQuantityButton,
  OrderRemove,
  OrderRemoveTotalPriceBox,
  OrderRemoveBtn,
} from "./OrderItemStyles";

const OrderItem = ({ item, index }) => {
  const orderCtx = useContext(OrderContext);

  const door = findDoor(item.doortype, item.doorcolor);
  const doorHandlePrice = item.doorhandle === "premium" ? 17 : 0;
  const doorLockPrice = item.doorlock === "premium" ? 7 : 0;
  const doorPrice = door.price + doorHandlePrice + doorLockPrice;

  const minusClickHandler = () => {
    orderCtx.dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  const plusClickHandler = () => {
    orderCtx.dispatch({ type: "ADD_ITEM", payload: index });
  };

  const changeHandler = (event) => {
    orderCtx.dispatch({
      type: "SET_ITEM",
      payload: { index: index, value: +event.target.value },
    });
  };

  const removeHandler = () => {
    console.log("jkk");
    orderCtx.dispatch({
      type: "REMOVE_FROM_CART",
      payload: index,
    });
  };

  return (
    <StyledOrderItem>
      <OrderFirstBox>
        <OrderDoor>
          <img src={`/images/Products/door-${door.id}.jpg`} alt="vrata" />
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
            Cena: <span>{doorPrice}&#8364;</span>
          </OrderDiv>
          <OrderQuantityButton
            onMinusClick={minusClickHandler}
            onPlusClick={plusClickHandler}
            onChange={changeHandler}
            quantity={item.doorquantity}
          />
        </OrderPriceQuantityBox>
      </OrderFirstBox>
      <OrderRemoveTotalPriceBox>
        {/* <Trash /> */}
        <OrderRemoveBtn onClick={removeHandler}>
          <X width="18" />
        </OrderRemoveBtn>

        <OrderDiv className="price">
          Ukupno: <span>{item.doorquantity * doorPrice}&#8364;</span>
        </OrderDiv>
      </OrderRemoveTotalPriceBox>
    </StyledOrderItem>
  );
};

export default OrderItem;