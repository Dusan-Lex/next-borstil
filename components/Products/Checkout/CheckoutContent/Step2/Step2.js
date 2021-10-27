import React, { useContext, useEffect, useRef, useState } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import IndividualForm from "./IndividualForm";
import LegalEntityForm from "./LegalEntityForm";

import { OrderType, OrderTypeBox, StyledStep2 } from "./Step2Styles";

const Step2 = ({ setAllowed }) => {
  const legalEntityRef = useRef();
  const orderInfoCtx = useContext(OrderInfoContext);

  useEffect(() => {
    console.log("effect");
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
        <OrderType
          onClick={() => {
            orderInfoCtx.setLegalEntity(false);
          }}
        >
          <div
            className={!orderInfoCtx.legalEntity ? "active" : undefined}
          ></div>
          Poručujem kao fizičko lice
        </OrderType>
        <OrderType
          onClick={() => {
            orderInfoCtx.setLegalEntity(true);
            setTimeout(() => {
              legalEntityRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            }, 70);
          }}
        >
          <div
            className={orderInfoCtx.legalEntity ? "active" : undefined}
          ></div>
          Poručujem kao pravno lice
        </OrderType>
      </OrderTypeBox>
      {orderInfoCtx.legalEntity && <LegalEntityForm ref={legalEntityRef} />}
    </StyledStep2>
  );
};

export default Step2;
