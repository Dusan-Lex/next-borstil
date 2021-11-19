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

const Products = () => {
  const checkoutCtx = useContext(CheckoutContext);

  useEffect(() => {
    return () => {
      checkoutCtx.setCheckout(false);
    };
  }, []);

  return (
    <React.Fragment>
      <ImaginedHeader />
      <DoorsSection>
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
