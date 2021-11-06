import React, { useContext, useEffect } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import Checkbox from "../Step2/Checkbox";
import { StyledStep3 } from "./Step3Styles";

const Step3 = ({ setAllowed }) => {
  const orderInfoCtx = useContext(OrderInfoContext);
  useEffect(() => {
    orderInfoCtx.payment ? setAllowed(true) : setAllowed(false);
  }, []);

  return (
    <StyledStep3>
      <Checkbox
        label1="Plaćanje prilikom montaže."
        label2="Plaćanje nakon što naši montažeri montiraju Vaša vrata."
        padding="1.5rem"
        onClick={() => {
          orderInfoCtx.setPayment("Plaćanje prilikom montaže");
          setAllowed(true);
        }}
        className={
          orderInfoCtx.payment === "Plaćanje prilikom montaže"
            ? "active"
            : undefined
        }
      />
      <Checkbox
        label1="Plaćanje platnom karticom."
        label2="Sigurnost plaćanja je zagarantovana. Kompletan proces plaćanja karticom se odvija kroz online servis banke. Borstil ni u jednom trenutku nema pristup podacima sa Vaše kartice."
        padding="1.5rem"
        onClick={() => {
          orderInfoCtx.setPayment("Plaćanje platnom karticom");
          setAllowed(true);
        }}
        className={
          orderInfoCtx.payment === "Plaćanje platnom karticom"
            ? "active"
            : undefined
        }
      />
      <Checkbox
        label1="Uplata na tekući račun."
        label2="Nakon što završite proces naručivanja, na vašu e-mail adresu će stići uplatnica popunjena sa svim potrebnim podacima za uplatu. Uplatu možete izvršiti u svim bankama i poštama u Srbiji."
        padding="1.5rem"
        onClick={() => {
          orderInfoCtx.setPayment("Uplata na tekući račun");
          setAllowed(true);
        }}
        className={
          orderInfoCtx.payment === "Uplata na tekući račun"
            ? "active"
            : undefined
        }
      />
    </StyledStep3>
  );
};

export default Step3;
