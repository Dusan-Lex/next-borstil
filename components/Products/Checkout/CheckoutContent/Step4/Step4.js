import React, { useContext, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [checkedOrder, setCheckedOrder] = useState(null);

  useEffect(() => {
    const completeOrder = async () => {
      setLoading(true);
      const response = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
          order: orderCtx.order,
          orderInfo: orderInfoCtx,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setCheckedOrder(data);
      setLoading(false);
    };
    completeOrder();
  }, []);

  return (
    <StyledStep4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        orderInfo.map((item, index) => {
          return (
            <Preview title={item} key={index}>
              {item === "adresa montaže" && <InfoItems />}
              {item === "stavke" && <DoorItems doors={checkedOrder.order} />}
              {item === "način plaćanja" && (
                <Payment>{checkedOrder.orderInfo.payment}</Payment>
              )}
            </Preview>
          );
        })
      )}
    </StyledStep4>
  );
};

export default Step4;
