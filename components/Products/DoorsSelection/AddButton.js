import React, { useContext } from "react";
import DoorContext from "../../../store/doorContext";
import {
  AddDoorsButton,
  AddDoorsForm,
  AddDoorsInput,
  AddDoorsQuantity,
  MinusButton,
  PlusButton,
} from "./AddButtonStyles";

const AddButton = () => {
  const doorCtx = useContext(DoorContext);

  const changeHandler = (event) => {
    doorCtx.dispatch({ type: "SET_QUANTITY", value: +event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(doorCtx.door);
  };

  return (
    <AddDoorsForm onSubmit={submitHandler}>
      <div className="title">Količina:</div>
      <AddDoorsQuantity>
        <div className="group">
          <MinusButton
            className="button minus"
            type="button"
            onClick={() => {
              doorCtx.dispatch({ type: "DECREMENT_QUANTITY" });
            }}
          >
            -
          </MinusButton>
          <AddDoorsInput
            type="text"
            value={doorCtx.door.doorquantity}
            onChange={changeHandler}
          ></AddDoorsInput>
          <PlusButton
            className="button plus"
            type="button"
            onClick={() => {
              doorCtx.dispatch({ type: "INCREMENT_QUANTITY" });
            }}
          >
            +
          </PlusButton>
        </div>
      </AddDoorsQuantity>
      <AddDoorsButton type="submit">Dodaj u korpu</AddDoorsButton>
    </AddDoorsForm>
  );
};

export default AddButton;
