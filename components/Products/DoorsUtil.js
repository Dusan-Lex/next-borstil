import { doors } from "./DoorsData";

export const findDoor1 = (doorType, doorColor) => {
  return doors.find(
    (door) => door.doortype === doorType && door.doorcolor === doorColor
  );
};

export const findDoor = (allDoors, doorType, doorColor) => {
  return allDoors.find(
    (door) => door.doortype === doorType && door.doorcolor === doorColor
  );
};

export const calculateDoorPriceWithHandleLock = (door) => {
  const selectedDoor = findDoor1(door.doortype, door.doorcolor);
  const selectedDoorHandlePrice = door.doorhandle === "premium" ? 17 : 0;
  const selectedDoorLockPrice = door.doorlock === "premium" ? 7 : 0;
  return selectedDoor.price + selectedDoorHandlePrice + selectedDoorLockPrice;
};
