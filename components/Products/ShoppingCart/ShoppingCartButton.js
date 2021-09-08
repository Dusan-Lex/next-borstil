import { useContext, useEffect, useState } from "react";
import ShoppingCartSvg from "../../../shared/components/svgs/Shopping-Cart";
import DoorContext from "../../../store/doorContext";
import {
  ShoppingCartBtn,
  ShoppingCartSvgAnimate,
} from "./ShoppingCartButtonStyles";

const ShoppingCartButton = (props) => {
  const [hover, setHover] = useState(false);
  const doorCtx = useContext(DoorContext);
  console.log(doorCtx);

  useEffect(() => {
    setHover(true);
    setTimeout(() => {
      setHover(false);
    }, 700);
  }, [doorCtx.door.doorquantity]);
  return (
    <ShoppingCartBtn className={props.className}>
      <span>{doorCtx.door.doorquantity}</span>

      {hover ? <ShoppingCartSvgAnimate /> : <ShoppingCartSvg />}
    </ShoppingCartBtn>
  );
};

export default ShoppingCartButton;
