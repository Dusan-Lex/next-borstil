import { createContext, useReducer } from "react";
// import { doorFeatures } from "../components/Products/DoorsData";
const OrderContext = createContext({
  order: [],
  addDoors: () => {},
});

const initialOrderState = {
  doortype: "regular",
  doorcolor: doorFeatures.find((item) => item.doortype === "regular")
    .doorcolors[0],
  doorhandle: doorFeatures.find((item) => item.doortype === "regular")
    .doorhandles[0],
  doorlock: doorFeatures.find((item) => item.doortype === "regular")
    .doorlocks[0],
};

const orderReducer = (orderState, action) => {
  switch (action.type) {
    case "CHANGE_DOORTYPE":
      return {
        doorcolor: doorFeatures.find((item) => item.doortype === action.value)
          .doorcolors[0],
        doorhandle: doorFeatures.find((item) => item.doortype === action.value)
          .doorhandles[0],
        doorlock: doorFeatures.find((item) => item.doortype === action.value)
          .doorlocks[0],
        doortype: action.value,
      };
    case "CHANGE_DOORCOLOR":
      return { ...doorState, doorcolor: action.value };
    case "CHANGE_DOORHANDLE":
      return { ...doorState, doorhandle: action.value };
    case "CHANGE_DOORLOCK":
      return { ...doorState, doorlock: action.value };
    default:
      throw new Error();
  }
};

export const OrderContextProvider = (props) => {
  const [order, dispatch] = useReducer(orderReducer, initialOrderState);

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
