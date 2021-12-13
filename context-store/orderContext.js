import { createContext, useEffect, useReducer } from "react";

const OrderContext = createContext({
  order: [],
});

const initialState = [];

const initializer = (initialValue = initialState) => {};
// JSON.parse(localStorage.getItem("order")) || initialValue;

const orderReducer = (orderState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = orderState.find(
        (item) =>
          item.doortype === action.payload.doortype &&
          item.doorcolor === action.payload.doorcolor &&
          item.doorhandle === action.payload.doorhandle &&
          item.doorlock === action.payload.doorlock
      );
      if (exists) {
        return orderState.map((item) =>
          item.doortype === action.payload.doortype &&
          item.doorcolor === action.payload.doorcolor &&
          item.doorhandle === action.payload.doorhandle &&
          item.doorlock === action.payload.doorlock
            ? {
                ...item,
                doorquantity: item.doorquantity + action.payload.doorquantity,
              }
            : item
        );
      } else {
        return [...orderState, action.payload];
      }
    }
    case "REMOVE_FROM_CART":
      return orderState.filter((x, index) => index !== action.payload);

    case "ADD_ITEM": {
      return orderState.map((item, index) =>
        index === action.payload
          ? {
              ...item,
              doorquantity: +item.doorquantity + 1,
            }
          : item
      );
    }

    case "REMOVE_ITEM":
      return orderState.map((item, index) =>
        index === action.payload && item.doorquantity > 1
          ? {
              ...item,
              doorquantity: +item.doorquantity - 1,
            }
          : item
      );
    case "SET_ITEM":
      return orderState.map((item, index) =>
        index === action.payload.index
          ? {
              ...item,
              doorquantity: +action.payload.value,
            }
          : item
      );

    case "SET_FROM_LOCALSTORAGE":
      return action.payload;

    case "RESET_CART":
      return [];

    default:
      throw new Error();
  }
};

export const OrderContextProvider = (props) => {
  const [order, dispatch] = useReducer(orderReducer, []);
  console.log("order context - ", order);

  useEffect(() => {
    const localData = localStorage.getItem("order");
    localData &&
      dispatch({
        type: "SET_FROM_LOCALSTORAGE",
        payload: JSON.parse(localData),
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("order", JSON.stringify(order));
  }, [order]);

  const context = {
    order,
    dispatch,
  };
  return (
    <OrderContext.Provider value={context}>
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
