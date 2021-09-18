import { createContext, useReducer } from "react";

const OrderContext = createContext({
  order: [],
});

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
      return orderState;
    case "ADD_ITEM":
      return orderState;
    case "REMOVE_ITEM":
      return orderState;

    default:
      throw new Error();
  }
};

export const OrderContextProvider = (props) => {
  const [order, dispatch] = useReducer(orderReducer, []);

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
