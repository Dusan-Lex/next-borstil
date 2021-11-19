import React, { useContext } from "react";
import Check from "../../../shared/components/svgs/Check";
import CheckoutContext from "../../../context-store/checkoutContext";
import ModalContext from "../../../context-store/modalContext";
import {
  ItemInfo,
  ItemPhoto,
  ItemTitle,
  StyledAddedItem,
  ItemButtons,
  ItemDesc,
  ItemDiv,
} from "./AddedItemStyles";

import DoorContext from "../../../context-store/doorContext";

const AddedItem = ({ item }) => {
  const modalCtx = useContext(ModalContext);
  const checkoutCtx = useContext(CheckoutContext);
  const doorCtx = useContext(DoorContext);

  return (
    <StyledAddedItem>
      <ItemTitle>
        <span>
          <Check width={30} height={30} />
        </span>
        Proizvod je dodat u korpu
      </ItemTitle>
      <ItemInfo>
        <ItemPhoto>
          <img src={doorCtx.door.doorimageurl} alt="vrata" />
        </ItemPhoto>
        <ItemDiv>
          <ItemDesc>
            <div>
              <span>Kvaka</span>: {item.doorhandle}
            </div>
            <div>
              <span>Brava</span>: {item.doorlock}
            </div>
            <div>
              <span>Cena</span>: {item.doorprice}&#8364;
            </div>
            <div>
              <span>Količina</span>: {item.doorquantity}
            </div>
            <div>
              <span>Ukupno</span>: {item.doorprice * item.doorquantity}&#8364;
            </div>
          </ItemDesc>
          <ItemButtons>
            <button
              onClick={() => {
                modalCtx.hideModal();
                checkoutCtx.setCheckout(true);
              }}
            >
              Idi u korpu
            </button>
            <button
              onClick={() => {
                modalCtx.hideModal();
              }}
            >
              Nazad
            </button>
          </ItemButtons>
        </ItemDiv>
      </ItemInfo>
    </StyledAddedItem>
  );
};

export default AddedItem;
