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

const Products = ({ doors }) => {
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
        <div>
          <div>
            {doors.map((item) => (
              <img
                src={item.image_url}
                alt="vrata"
                style={{ display: "none" }}
                key={item._id}
              />
            ))}
          </div>
        </div>
      </DoorsSection>
    </React.Fragment>
  );
};

export default Products;
