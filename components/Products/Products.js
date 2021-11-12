import React, { useContext, useEffect } from "react";
import { color } from "../../shared/utils/styles";
import ImaginedHeader from "../../shared/components/ImaginedHeader/ImaginedHeader";

import {
  DoorsSection,
  DoorsTitle,
  DoorsHeader,
  ShoppingCartBtnNotNav,
} from "./ProductsStyles";

import Checkout from "./Checkout/Checkout";
import CheckoutContext from "../../context-store/checkoutContext";
import Doors from "./Doors";
import AllDoorsContext from "../../context-store/allDoors";

const Products = () => {
  const checkoutCtx = useContext(CheckoutContext);
  const allDoorsCtx = useContext(AllDoorsContext);

  useEffect(() => {
    return () => {
      checkoutCtx.setCheckout(false);
    };
  }, []);

  return (
    <React.Fragment>
      <ImaginedHeader />
      <DoorsSection>
        {allDoorsCtx.alldoors.map((item) => (
          <img
            src={`/images/Products/door-${item.srcImgId}.jpg`}
            alt="vrata"
            style={{ display: "none" }}
            key={item.srcImgId}
          />
        ))}
        <DoorsHeader>
          <DoorsTitle
            effectClass="two"
            startDelay={0.3}
            id="sdjfyek56hfh"
            color1={color.primary}
            color2={color.secondary}
          >
            Izaberite&nbsp;Vaša&nbsp;vrata
          </DoorsTitle>
          <ShoppingCartBtnNotNav onClick={checkoutCtx.toggleCheckout} />
        </DoorsHeader>
        <Doors />
        <Checkout />
      </DoorsSection>
    </React.Fragment>
  );
};

export default Products;
