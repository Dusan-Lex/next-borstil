import React, { useContext } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import ItemPreview from "./ItemPreview";
import { StyledStep4 } from "./Step4Styles";

const orderInfo = ["stavke", "adresa montaže", "način plaćanja"];

const Step4 = () => {
  const orderInfoCtx = useContext(OrderInfoContext);
  console.log(orderInfoCtx);
  return (
    <StyledStep4>
      {orderInfo.map((item, index) => {
        return (
          <ItemPreview title={item} key={index}>
            {index === 1 && orderInfoCtx.individualInfo.form.name}
            {index === 2 && <p>{orderInfoCtx.payment}</p>}
          </ItemPreview>
        );
      })}
    </StyledStep4>
  );
};

export default Step4;
