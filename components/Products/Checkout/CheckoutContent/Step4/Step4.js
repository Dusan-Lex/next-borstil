import React, { useContext } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import InfoItems from "./InfoItems";
import ItemPreview from "./ItemPreview";
import { StyledStep4 } from "./Step4Styles";

const orderInfo = ["stavke", "adresa montaže", "način plaćanja"];

const Step4 = () => {
  const orderInfoCtx = useContext(OrderInfoContext);

  return (
    <StyledStep4>
      {orderInfo.map((item, index) => {
        return (
          <ItemPreview title={item} key={index}>
            {item === "stavke" && <p>Stavke</p>}
            {item === "adresa montaže" && <InfoItems />}
            {item === "način plaćanja" && <p>{orderInfoCtx.payment}</p>}
          </ItemPreview>
        );
      })}
    </StyledStep4>
  );
};

export default Step4;
