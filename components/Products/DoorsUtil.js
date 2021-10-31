import { doors } from "./DoorsData";

export const findDoor = (doorType, doorColor) => {
  return doors.find(
    (door) => door.doortype === doorType && door.doorcolor === doorColor
  );
};

export const calculateDoorPriceWithHandleLock = (door) => {
  const selectedDoor = findDoor(door.doortype, door.doorcolor);
  const selectedDoorHandlePrice = door.doorhandle === "premium" ? 17 : 0;
  const selectedDoorLockPrice = door.doorlock === "premium" ? 7 : 0;
  return selectedDoor.price + selectedDoorHandlePrice + selectedDoorLockPrice;
};
