import React, { useContext } from "react";
import DoorContext from "../../context-store/doorContext";
import DoorsSelection from "./DoorsSelection/DoorsSelection";
import {
  Door,
  DoorDescription,
  DoorsBackground,
  DoorsContainer,
} from "./DoorsStyles";
import Spinner from "../../shared/components/Spinner/Spinner";

const Doors = () => {
  const doorCtx = useContext(DoorContext);

  return (
    <DoorsContainer>
      <DoorsBackground>
        <img
          sizes="(max-width: 1999px) 100vw, 1999px"
          srcSet="
    /images/products/background-3_t9dbpn_c_scale,w_190.jpg 190w,
    /images/products/background-3_t9dbpn_c_scale,w_647.jpg 647w,
    /images/products/background-3_t9dbpn_c_scale,w_957.jpg 957w,
    /images/products/background-3_t9dbpn_c_scale,w_1235.jpg 1235w,
    /images/products/background-3_t9dbpn_c_scale,w_1387.jpg 1387w,
    /images/products/background-3_t9dbpn_c_scale,w_1528.jpg 1528w,
    /images/products/background-3_t9dbpn_c_scale,w_1679.jpg 1679w,
    /images/products/background-3_t9dbpn_c_scale,w_1833.jpg 1833w,
    /images/products/background-3_t9dbpn_c_scale,w_1999.jpg 1999w"
          src="/images/products/background-3_t9dbpn_c_scale,w_1999.jpg"
          alt="vrata u pozadini sobe"
        />

        <Door>
          <img src={doorCtx.door.doorimageurl} alt="vrata" />
        </Door>
        <DoorDescription>
          <div>Cena</div>
          <div>
            {doorCtx.loading ? (
              <Spinner width="2.6rem" height="2.6rem" />
            ) : (
              <p>{doorCtx.door.doorprice}&#8364;</p>
            )}
          </div>
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

export default React.memo(Doors);
