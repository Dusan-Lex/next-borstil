import React, { useContext } from "react";
import OrderContext from "../../../../store/orderContext";

const Step1 = () => {
  const orderCtx = useContext(OrderContext);
  return (
    <div>
      {orderCtx.order.map((item, index) => (
        <div key={index}>
          tip:{item.doortype} boja:{item.doorcolor} Kvaka:{item.doorhandle}{" "}
          brava:{item.doorlock} kolicina :{item.doorquantity}
        </div>
      ))}
    </div>
  );
};

export default Step1;
