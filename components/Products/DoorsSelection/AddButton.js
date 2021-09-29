import React, { useContext } from "react";
import DoorContext from "../../../store/doorContext";
import OrderContext from "../../../store/orderContext";
import ModalContext from "../../../store/modalContext";
import { AddDoorsButton, AddDoorsForm } from "./AddButtonStyles";

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
    doorCtx.dispatch({ type: "SET_QUANTITY", value: +event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    orderCtx.dispatch({ type: "ADD_TO_CART", payload: doorCtx.door });
    modalCtx.changeToPhoto(false);
    modalCtx.showModal(<AddedItem item={doorCtx.door} />);
  };

  return (
    <AddDoorsForm onSubmit={submitHandler}>
      <div>
        <div className="title">Količina:</div>
        <QuantityButton
          onMinusClick={minusClickHandler}
          onPlusClick={plusClickHandler}
          onChange={changeHandler}
          quantity={doorCtx.door.doorquantity}
        />
      </div>
      <AddDoorsButton type="submit">Dodaj u korpu</AddDoorsButton>
    </AddDoorsForm>
  );
};

export default AddButton;
