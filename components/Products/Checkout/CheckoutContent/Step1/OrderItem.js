import React, { useContext, useEffect } from "react";
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
  OrderRemoveTotalPriceBox,
  OrderRemoveBtn,
} from "./OrderItemStyles";

const OrderItem = ({ item, index, setTotalAmount }) => {
  const orderCtx = useContext(OrderContext);

  const door = findDoor(item.doortype, item.doorcolor);
  const doorHandlePrice = item.doorhandle === "premium" ? 17 : 0;
  const doorLockPrice = item.doorlock === "premium" ? 7 : 0;
  const doorPrice = door.price + doorHandlePrice + doorLockPrice;

  useEffect(() => {
    setTotalAmount((prevState) => {
      const newArr = [...prevState];
      newArr[index] = item.doorquantity * doorPrice;
      return newArr;
    });
  }, [item.doorquantity]);

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
    setTotalAmount((prevState) => {
      const newArr = [...prevState];
      newArr.splice(index, 1);
      return newArr;
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
          Ukupno: <span>{item.doorquantity * doorPrice}&#8364;</span>
        </OrderDiv>
      </OrderRemoveTotalPriceBox>
    </StyledOrderItem>
  );
};

export default OrderItem;
