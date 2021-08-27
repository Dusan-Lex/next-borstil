import { doors } from "./DoorsData";

export const findDoor = (doorType, doorColor) => {
  return doors.find(
    (door) => door.doortype === doorType && door.doorcolor === doorColor
  );
};
