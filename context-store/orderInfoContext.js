import { useState, createContext } from "react";
import {
  cityValidation,
  emailValidation,
  nameValidation,
  phoneNumberValidation,
  pibValidation,
  postalCodeValidation,
} from "../shared/utils/validation";

const OrderInfoContext = createContext({
  individualInfo: { form: null, formError: null },
  legalEntity: null,
  setLegalEntity: () => {},
  legalEntityInfo: { form: null, formError: null },
  payment: null,
  setPayment: () => {},
  changeHandler: (event, field, type) => {},
});

export const OrderInfoContextProvider = (props) => {
  const [legalEntity, setLegalEntity] = useState(false);
  const [payment, setPayment] = useState(null);
  const [individualForm, setIndividualForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalcode: "",
    city: "",
  });
  const [individualFormError, setIndividualFormError] = useState({
    name: true,
    email: true,
    phone: true,
    address: true,
    postalcode: true,
    city: true,
  });
  const [legalEntityForm, setLegalEntityForm] = useState({
    companyName: "",
    companyRepresentative: "",
    pib: "",
    accountNumber: "",
  });
  const [legalEntityFormError, setLegalEntityFormError] = useState({
    companyName: true,
    pib: true,
  });

  const changeHandler = (event, field, type) => {
    type === "individual"
      ? setIndividualForm((prevState) => {
          return { ...prevState, [field]: event.target.value };
        })
      : setLegalEntityForm((prevState) => {
          return { ...prevState, [field]: event.target.value };
        });
    let validate;

    switch (field) {
      case "name": {
        validate = nameValidation(event.target.value.trim());
        break;
      }
      case "email": {
        validate = emailValidation(event.target.value.trim());
        break;
      }
      case "phone": {
        validate = phoneNumberValidation(event.target.value.trim());
        break;
      }
      case "address": {
        validate = event.target.value.trim();
        break;
      }
      case "postalcode": {
        validate = postalCodeValidation(event.target.value.trim());
        break;
      }
      case "city": {
        validate = cityValidation(event.target.value.trim());
        break;
      }
      case "companyName": {
        validate = event.target.value.trim();

        break;
      }
      case "pib": {
        validate = pibValidation(event.target.value.trim());
        break;
      }
    }

    validate
      ? type === "individual"
        ? setIndividualFormError((prevState) => {
            return { ...prevState, [field]: false };
          })
        : setLegalEntityFormError((prevState) => {
            return { ...prevState, [field]: false };
          })
      : type === "individual"
      ? setIndividualFormError((prevState) => {
          return { ...prevState, [field]: true };
        })
      : (field === "companyName" || field === "pib") &&
        setLegalEntityFormError((prevState) => {
          return { ...prevState, [field]: true };
        });
  };
  const context = {
    individualInfo: { form: individualForm, formError: individualFormError },
    legalEntity,
    setLegalEntity,
    legalEntityInfo: { form: legalEntityForm, formError: legalEntityFormError },
    payment,
    setPayment,
    changeHandler,
  };
  // console.log("orderInfo context", context);
  return (
    <OrderInfoContext.Provider value={context}>
      {props.children}
    </OrderInfoContext.Provider>
  );
};
export default OrderInfoContext;
