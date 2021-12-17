import { createContext, useEffect, useReducer, useState } from "react";
import { doorFeatures } from "../components/Products/DoorsData";

const DoorContext = createContext({});

const initialDoorState = {
  doortype: "regular",
  doorcolor: "brown",
  doorhandle: "classic",
  doorlock: "classic",
  doorquantity: 1,
  doorprice: 145,
  doorimageurl: "/images/products/door-1.jpg",
  doorid: "618da96bca8826f2a8af413e",
};

const doorReducer = (doorState, action) => {
  switch (action.type) {
    case "CHANGE_DOORTYPE":
      return {
        ...doorState,
        doortype: action.value,
        doorcolor: doorFeatures.find((item) => item.doortype === action.value)
          .doorcolors[0],
        doorhandle: doorFeatures.find((item) => item.doortype === action.value)
          .doorhandles[0],
        doorlock: doorFeatures.find((item) => item.doortype === action.value)
          .doorlocks[0],
        doorquantity: 1,
        doorprice: doorState.doorprice,
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
        doorprice: action.payload.doorprice,
        doorimageurl: action.payload.doorimageurl,
        doorid: action.payload.doorid,
      };

    default:
      throw new Error();
  }
};

export const DoorContextProvider = (props) => {
  const [door, dispatch] = useReducer(doorReducer, initialDoorState);
  const [loading, setLoading] = useState(false);
  // console.log("door context - ", door);
  useEffect(() => {
    const fetchDoor = async () => {
      setLoading(true);
      const response = await fetch("/api/door", {
        method: "POST",
        body: JSON.stringify({
          doortype: door.doortype,
          doorcolor: door.doorcolor,
          doorhandle: door.doorhandle,
          doorlock: door.doorlock,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      dispatch({ type: "CHANGE_PRICE", payload: data });
      setLoading(false);
    };
    fetchDoor();
  }, [door.doortype, door.doorcolor, door.doorhandle, door.doorlock]);

  const context = {
    door,
    loading,
    dispatch,
  };
  return (
    <DoorContext.Provider value={context}>
      {props.children}
    </DoorContext.Provider>
  );
};
export default DoorContext;
