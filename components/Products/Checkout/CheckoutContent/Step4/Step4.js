import React, { useContext } from "react";
import OrderContext from "../../../../../context-store/orderContext";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import DoorItems from "./DoorItems";
import InfoItems from "./InfoItems";
import Preview from "./Preview";
import { StyledStep4, Payment } from "./Step4Styles";

const orderInfo = ["adresa montaže", "način plaćanja", "stavke"];

const Step4 = () => {
  const orderInfoCtx = useContext(OrderInfoContext);
  const orderCtx = useContext(OrderContext);

  return (
    <StyledStep4>
      {orderInfo.map((item, index) => {
        return (
          <Preview title={item} key={index}>
            {item === "adresa montaže" && <InfoItems />}
            {item === "stavke" && <DoorItems doors={orderCtx.order} />}
            {item === "način plaćanja" && (
              <Payment>{orderInfoCtx.payment}</Payment>
            )}
          </Preview>
        );
      })}
    </StyledStep4>
  );
};

export default Step4;
