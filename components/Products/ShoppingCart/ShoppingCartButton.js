import { useContext, useEffect, useState } from "react";
import ShoppingCartSvg from "../../../shared/components/svgs/Shopping-Cart";
import OrderContext from "../../../context-store/orderContext";
import {
  ShoppingCartBtn,
  ShoppingCartSvgAnimate,
} from "./ShoppingCartButtonStyles";

const ShoppingCartButton = (props) => {
  const [hover, setHover] = useState(false);
  const orderCtx = useContext(OrderContext);
  const totalQuantity = orderCtx.order.reduce((s, x) => s + x.doorquantity, 0);
  useEffect(() => {
    setHover(true);
    setTimeout(() => {
      setHover(false);
    }, 700);
  }, [totalQuantity]);
  return (
    <ShoppingCartBtn className={props.className} onClick={props.onClick}>
      <span>{totalQuantity}</span>

      {hover ? <ShoppingCartSvgAnimate /> : <ShoppingCartSvg />}
    </ShoppingCartBtn>
  );
};

export default ShoppingCartButton;
