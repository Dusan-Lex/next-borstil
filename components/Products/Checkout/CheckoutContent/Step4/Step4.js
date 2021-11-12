import React, { useContext } from "react";
import OrderContext from "../../../../../context-store/orderContext";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import DoorItems from "./doorItems";
import InfoItems from "./InfoItems";
import Preview from "./Preview";
import { StyledStep4 } from "./Step4Styles";

const orderInfo = ["stavke", "adresa montaže", "način plaćanja"];

const Step4 = () => {
  const orderInfoCtx = useContext(OrderInfoContext);
  const orderCtx = useContext(OrderContext);

  return (
    <StyledStep4>
      {orderInfo.map((item, index) => {
        return (
          <Preview title={item} key={index}>
            {item === "stavke" && <DoorItems doors={orderCtx.order} />}
            {item === "adresa montaže" && <InfoItems />}
            {item === "način plaćanja" && <p>{orderInfoCtx.payment}</p>}
          </Preview>
        );
      })}
    </StyledStep4>
  );
};

export default Step4;
