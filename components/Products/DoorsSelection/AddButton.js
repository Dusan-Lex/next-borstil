import React, { useContext } from "react";
import DoorContext from "../../../store/doorContext";
import OrderContext from "../../../store/orderContext";
import ModalContext from "../../../store/modalContext";
import {
  AddDoorsButton,
  AddDoorsForm,
  AddDoorsQuantity,
} from "./AddButtonStyles";

import AddedItem from "./AddedItem";
import QuantityButton from "../../../shared/components/Buttons/QuantityButton/QuantityButton";

const AddButton = () => {
  const doorCtx = useContext(DoorContext);
  const orderCtx = useContext(OrderContext);
  const modalCtx = useContext(ModalContext);

  const minusClickHandler = () => {
    doorCtx.dispatch({ type: "DECREMENT_QUANTITY" });
  };
  const plusClickHandler = () => {
    doorCtx.dispatch({ type: "INCREMENT_QUANTITY" });
  };

  const changeHandler = (event) => {
    let val = +event.target.value;

    if (val < 0) {
      val = -val;
    }
    if (val === 0) {
      val = "";
    }

    doorCtx.dispatch({ type: "SET_QUANTITY", value: val });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (doorCtx.door.doorquantity === "") return;
    orderCtx.dispatch({ type: "ADD_TO_CART", payload: doorCtx.door });
    modalCtx.changeToPhoto(false);
    modalCtx.showModal(<AddedItem item={doorCtx.door} />);
  };

  return (
    <AddDoorsForm onSubmit={submitHandler}>
      <AddDoorsQuantity>
        <div className="title">Količina:</div>
        <div style={{ position: "relative" }}>
          <QuantityButton
            onMinusClick={minusClickHandler}
            onPlusClick={plusClickHandler}
            onChange={changeHandler}
            quantity={doorCtx.door.doorquantity}
          />

          <p>
            {doorCtx.door.doorquantity === ""
              ? "Količina mora biti najmanje 1"
              : ""}
          </p>
        </div>
      </AddDoorsQuantity>
      <AddDoorsButton type="submit">Dodaj u korpu</AddDoorsButton>
    </AddDoorsForm>
  );
};

export default AddButton;
