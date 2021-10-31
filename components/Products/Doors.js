import { useContext } from "react";
import DoorContext from "../../context-store/doorContext";
import DoorsSelection from "./DoorsSelection/DoorsSelection";
import {
  Door,
  DoorDescription,
  DoorsBackground,
  DoorsContainer,
} from "./DoorsStyles";
import { findDoor } from "./DoorsUtil";

const Doors = () => {
  const doorCtx = useContext(DoorContext);
  const door = findDoor(doorCtx.door.doortype, doorCtx.door.doorcolor);

  return (
    <DoorsContainer>
      <DoorsBackground>
        <img
          sizes="(max-width: 1999px) 100vw, 1999px"
          srcSet="
    /images/Products/background-3_t9dbpn_c_scale,w_190.jpg 190w,
    /images/Products/background-3_t9dbpn_c_scale,w_647.jpg 647w,
    /images/Products/background-3_t9dbpn_c_scale,w_957.jpg 957w,
    /images/Products/background-3_t9dbpn_c_scale,w_1235.jpg 1235w,
    /images/Products/background-3_t9dbpn_c_scale,w_1387.jpg 1387w,
    /images/Products/background-3_t9dbpn_c_scale,w_1528.jpg 1528w,
    /images/Products/background-3_t9dbpn_c_scale,w_1679.jpg 1679w,
    /images/Products/background-3_t9dbpn_c_scale,w_1833.jpg 1833w,
    /images/Products/background-3_t9dbpn_c_scale,w_1999.jpg 1999w"
          src="/images/Products/background-3_t9dbpn_c_scale,w_1999.jpg"
          alt="vrata u pozadini sobe"
        />

        <Door>
          <img src={`/images/Products/door-${door.id}.jpg`} alt="vrata" />
        </Door>
        <DoorDescription>
          <div>Cena</div>
          <div>{doorCtx.door.doorprice}&#8364;</div>
          <div>sa PDV-om</div>
          <div>
            * cena uključuje {doorCtx.door.doorhandle} kvaku i{" "}
            {doorCtx.door.doorlock !== doorCtx.door.doorhandle
              ? doorCtx.door.doorlock
              : ""}{" "}
            bravu.
          </div>
        </DoorDescription>
      </DoorsBackground>
      <DoorsSelection />
    </DoorsContainer>
  );
};

export default Doors;
