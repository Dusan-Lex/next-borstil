import { createContext, useEffect, useReducer } from "react";
import { doorFeatures } from "../components/Products/DoorsData";
import {
  calculateDoorPriceWithHandleLock,
  findDoor,
} from "../components/Products/DoorsUtil";

const DoorContext = createContext({
  doortype: null,
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
  doorprice: findDoor(
    "regular",
    doorFeatures.find((item) => item.doortype === "regular").doorcolors[0]
  ).price,
  doorid: findDoor(
    "regular",
    doorFeatures.find((item) => item.doortype === "regular").doorcolors[0]
  ).id,
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
        doorprice: doorState.doorprice,
        doorid: doorState.doorid,
      };
    case "CHANGE_DOORCOLOR":
      return {
        ...doorState,
        doorhandle: doorFeatures.find(
          (item) => item.doortype === doorState.doortype
        ).doorhandles[0],
        doorlock: doorFeatures.find(
          (item) => item.doortype === doorState.doortype
        ).doorlocks[0],
        doorcolor: action.value,
        doorquantity: 1,
      };
    case "CHANGE_DOORHANDLE":
      return { ...doorState, doorhandle: action.value, doorquantity: 1 };
    case "CHANGE_DOORLOCK":
      return { ...doorState, doorlock: action.value, doorquantity: 1 };
    case "INCREMENT_QUANTITY":
      return { ...doorState, doorquantity: +doorState.doorquantity + 1 };

    case "DECREMENT_QUANTITY":
      return {
        ...doorState,
        doorquantity:
          doorState.doorquantity <= 1
            ? +doorState.doorquantity
            : +doorState.doorquantity - 1,
      };
    case "SET_QUANTITY":
      return { ...doorState, doorquantity: action.value };
    case "CHANGE_PRICE":
      return {
        ...doorState,
        doorprice: calculateDoorPriceWithHandleLock(doorState),
        doorid: findDoor(doorState.doortype, doorState.doorcolor).id,
      };

    default:
      throw new Error();
  }
};

export const DoorContextProvider = (props) => {
  const [door, dispatch] = useReducer(doorReducer, initialDoorState);

  useEffect(() => {
    dispatch({ type: "CHANGE_PRICE" });
  }, [door.doortype, door.doorcolor, door.doorhandle, door.doorlock]);

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
