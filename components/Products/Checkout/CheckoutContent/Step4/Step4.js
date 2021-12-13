import React, { useContext, useEffect, useState } from "react";
import OrderContext from "../../../../../context-store/orderContext";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import DoorItems from "./DoorItems";
import InfoItems from "./InfoItems";
import Preview from "./Preview";
import { StyledStep4, Payment, SpinnerBox, FinishedBox } from "./Step4Styles";
import Spinner from "../../../../../shared/components/Spinner/Spinner";
import Logo from "../../../../../shared/components/svgs/Logo";
import CheckoutContext from "../../../../../context-store/checkoutContext";

const orderInfo = ["adresa montaže", "način plaćanja", "stavke"];

const Step4 = ({ finished }) => {
  const orderInfoCtx = useContext(OrderInfoContext);
  const orderCtx = useContext(OrderContext);
  const checkoutCtx = useContext(CheckoutContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [checkedOrder, setCheckedOrder] = useState(null);

  useEffect(() => {
    const completeOrder = async () => {
      setLoading(true);
      const response = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify({
          order: orderCtx.order,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.message);
      if (data.message !== "error") {
        setCheckedOrder(data);
        localStorage.setItem("order", JSON.stringify(data));
        orderCtx.dispatch({ type: "SET_FROM_LOCALSTORAGE", payload: data });
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
        localStorage.setItem("order", JSON.stringify([]));
        orderCtx.dispatch({ type: "RESET_CART", payload: [] });
        setTimeout(() => {
          checkoutCtx.setCheckout(false);
        }, 3000);
      }
    };
    completeOrder();
  }, []);

  return (
    <StyledStep4>
      {!finished ? (
        loading ? (
          <SpinnerBox>
            <Spinner width="6rem" height="6rem" />
          </SpinnerBox>
        ) : error ? (
          <SpinnerBox>Došlo je do greške</SpinnerBox>
        ) : (
          orderInfo.map((item, index) => {
            return (
              <Preview title={item} key={index}>
                {item === "adresa montaže" && (
                  <InfoItems orderInfoCtx={orderInfoCtx} />
                )}
                {item === "stavke" && <DoorItems doors={checkedOrder} />}
                {item === "način plaćanja" && (
                  <Payment>{orderInfoCtx.payment}</Payment>
                )}
              </Preview>
            );
          })
        )
      ) : (
        <FinishedBox>
          <h4>Vaša porudžbina je uspešno kreirana.</h4>
          <p>Hvala Vam na ukazanom poverenju.</p>
          <h6>
            <div>
              Vaš <span>BorStil</span>
            </div>
            <Logo />
          </h6>
        </FinishedBox>
      )}
    </StyledStep4>
  );
};

export default Step4;
