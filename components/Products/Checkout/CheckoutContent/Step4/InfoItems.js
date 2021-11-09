import React, { useContext } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import { StyledInfoItem, AboutCompany } from "./InfoItemsStyles";

const items = ["Ime i prezime", "Adresa", "Mesto", "Telefon", "E-mail"];
const legalEntityItems = [
  "Ime kompanije",
  "Predstavnik kompanije",
  "PIB",
  "Broj računa",
];

const InfoItems = () => {
  const orderInfoCtx = useContext(OrderInfoContext);
  const itemsArr = [
    orderInfoCtx.individualInfo.form.name,
    orderInfoCtx.individualInfo.form.address,
    orderInfoCtx.individualInfo.form.postalcode +
      " " +
      orderInfoCtx.individualInfo.form.city,
    orderInfoCtx.individualInfo.form.phone,
    orderInfoCtx.individualInfo.form.email,
  ];

  return (
    <>
      {items.map((item, index) => (
        <StyledInfoItem key={index}>
          <span>{item}</span> : {itemsArr[index]}
        </StyledInfoItem>
      ))}
      {orderInfoCtx.legalEntity && (
        <>
          <AboutCompany>Podaci o kompaniji</AboutCompany>
          {legalEntityItems.map(
            (item, index) =>
              Object.entries(orderInfoCtx.legalEntityInfo.form)[index][1] && (
                <StyledInfoItem key={index}>
                  <span>{item}</span> :{" "}
                  {Object.entries(orderInfoCtx.legalEntityInfo.form)[index][1]}
                </StyledInfoItem>
              )
          )}
        </>
      )}
    </>
  );
};

export default InfoItems;
