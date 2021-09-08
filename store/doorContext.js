import { createContext, useReducer } from "react";
import { doorFeatures } from "../components/Products/DoorsData";
const DoorContext = createContext({
  doortype: null,
  changeDoorType: () => {},
});

const initialDoorState = {
  doortype: "regular",
  doorcolor: doorFeatures.find((item) => item.doortype === "regular")
    .doorcolors[0],
  doorhandle: doorFeatures.find((item) => item.doortype === "regular")
    .doorhandles[0],
  doorlock: doorFeatures.find((item) => item.doortype === "regular")
    .doorlocks[0],
  doorquantity: 1,
};

const doorReducer = (doorState, action) => {
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
        doorquantity: 1,
      };
    case "CHANGE_DOORCOLOR":
      return { ...doorState, doorcolor: action.value, doorquantity: 1 };
    case "CHANGE_DOORHANDLE":
      return { ...doorState, doorhandle: action.value, doorquantity: 1 };
    case "CHANGE_DOORLOCK":
      return { ...doorState, doorlock: action.value, doorquantity: 1 };
    case "INCREMENT_QUANTITY":
      return { ...doorState, doorquantity: doorState.doorquantity + 1 };
    case "DECREMENT_QUANTITY":
      return {
        ...doorState,
        doorquantity:
          doorState.doorquantity === 1 ? 1 : doorState.doorquantity - 1,
      };
    case "SET_QUANTITY":
      return { ...doorState, doorquantity: action.value };
    default:
      throw new Error();
  }
};

export const DoorContextProvider = (props) => {
  const [door, dispatch] = useReducer(doorReducer, initialDoorState);

  const context = {
    door,
    dispatch,
  };
  return (
    <DoorContext.Provider value={context}>
      {props.children}
    </DoorContext.Provider>
  );
};
export default DoorContext;
