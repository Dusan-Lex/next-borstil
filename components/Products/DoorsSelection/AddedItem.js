import React, { useContext } from "react";
import Check from "../../../shared/components/svgs/Check";
import CheckoutContext from "../../../store/checkoutContext";
import ModalContext from "../../../store/modalContext";
import { findDoor } from "../DoorsUtil";
import {
  ItemInfo,
  ItemPhoto,
  ItemTitle,
  StyledAddedItem,
  ItemButtons,
  ItemDesc,
  ItemDiv,
} from "./AddedItemStyles";

const AddedItem = ({ item }) => {
  const modalCtx = useContext(ModalContext);
  const checkoutCtx = useContext(CheckoutContext);
  const door = findDoor(item.doortype, item.doorcolor);
  const doorHandlePrice = item.doorhandle === "premium" ? 17 : 0;
  const doorLockPrice = item.doorlock === "premium" ? 7 : 0;
  const doorPrice = door.price + doorHandlePrice + doorLockPrice;
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
          <img src={`/images/Products/door-${door.id}.jpg`} alt="vrata" />
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
              <span>Cena</span>: {doorPrice}&#8364;
            </div>
            <div>
              <span>Količina</span>: {item.doorquantity}
            </div>
            <div>
              <span>Ukupna cena</span>: {doorPrice * item.doorquantity}&#8364;
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
              Nazad na pretragu
            </button>
          </ItemButtons>
        </ItemDiv>
      </ItemInfo>
    </StyledAddedItem>
  );
};

export default AddedItem;
