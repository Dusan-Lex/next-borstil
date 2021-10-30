import React, { useContext, useEffect, useRef, useState } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import Checkbox from "./Checkbox";
import IndividualForm from "./IndividualForm";
import LegalEntityForm from "./LegalEntityForm";

import { OrderType, OrderTypeBox, StyledStep2 } from "./Step2Styles";

const Step2 = ({ setAllowed }) => {
  const legalEntityRef = useRef();
  const orderInfoCtx = useContext(OrderInfoContext);

  useEffect(() => {
    let validate = true;
    for (const i in orderInfoCtx.individualInfo.formError) {
      if (orderInfoCtx.individualInfo.formError[i]) {
        validate = false;
        break;
      }
    }

    if (orderInfoCtx.legalEntity) {
      for (const i in orderInfoCtx.legalEntityInfo.formError) {
        if (orderInfoCtx.legalEntityInfo.formError[i]) {
          validate = false;
          break;
        }
      }
    }

    validate ? setAllowed(true) : setAllowed(false);
  }, [
    orderInfoCtx.individualInfo.formError,
    orderInfoCtx.legalEntityInfo.formError,
    orderInfoCtx.legalEntity,
  ]);

  return (
    <StyledStep2>
      <IndividualForm />
      <OrderTypeBox>
        <Checkbox
          label1="Poručujem kao fizičko lice"
          padding="0.4rem"
          onClick={() => {
            orderInfoCtx.setLegalEntity(false);
          }}
          className={!orderInfoCtx.legalEntity ? "active" : undefined}
        />
        <Checkbox
          label1="Poručujem kao pravno lice"
          onClick={() => {
            orderInfoCtx.setLegalEntity(true);
            setTimeout(() => {
              legalEntityRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            }, 70);
          }}
          className={orderInfoCtx.legalEntity ? "active" : undefined}
        />
      </OrderTypeBox>
      {orderInfoCtx.legalEntity && <LegalEntityForm ref={legalEntityRef} />}
    </StyledStep2>
  );
};

export default Step2;
