import React, { useState } from "react";
import Star from "../../../../../shared/components/svgs/Star";
import {
  cityValidation,
  emailValidation,
  nameValidation,
} from "../../../../../shared/utils/validation";
import {
  Step2Form,
  Step2FormGroup,
  Step2FormInput,
  Step2FormLabel,
  StyledStep2,
} from "./Step2Styles";

//"^\\d{5}$"
//"/^(\d{5,6})$/"

const Step2 = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalcode: "",
    city: "",
  });
  const [formError, setFormError] = useState({
    name: true,
    email: true,
    phone: true,
    address: true,
    postalcode: true,
    city: true,
  });

  const changeNameHandler = (event) => {
    setForm((prevState) => {
      return { ...prevState, name: event.target.value };
    });
    nameValidation(event.target.value.trim())
      ? setFormError((prevState) => {
          return { ...prevState, name: false };
        })
      : setFormError((prevState) => {
          return { ...prevState, name: true };
        });
  };
  const changeEmailHandler = (event) => {
    setForm((prevState) => {
      return { ...prevState, email: event.target.value };
    });
    emailValidation(event.target.value.trim())
      ? setFormError((prevState) => {
          return { ...prevState, email: false };
        })
      : setFormError((prevState) => {
          return { ...prevState, email: true };
        });
  };
  const changePhoneHandler = (event) => {
    setForm((prevState) => {
      return { ...prevState, phone: event.target.value };
    });
  };
  const changeAddressHandler = (event) => {
    setForm((prevState) => {
      return { ...prevState, address: event.target.value };
    });
  };
  const changePostalcodeHandler = (event) => {
    setForm((prevState) => {
      return { ...prevState, postalcode: event.target.value };
    });
  };
  const changeCityHandler = (event) => {
    setForm((prevState) => {
      return { ...prevState, city: event.target.value };
    });
    cityValidation(event.target.value.trim())
      ? setFormError((prevState) => {
          return { ...prevState, city: false };
        })
      : setFormError((prevState) => {
          return { ...prevState, city: true };
        });
  };

  return (
    <StyledStep2>
      <Step2Form>
        <Step2FormGroup>
          <Step2FormLabel htmlFor="name">
            Ime i prezime
            <Star color="red" />
          </Step2FormLabel>
          <Step2FormInput
            type="text"
            id="name"
            value={form.name}
            onChange={changeNameHandler}
            className={formError.name ? "error" : null}
          />
        </Step2FormGroup>
        <Step2FormGroup>
          <Step2FormLabel htmlFor="email">
            E-mail
            <Star color="red" />
          </Step2FormLabel>
          <Step2FormInput
            type="email"
            id="email"
            value={form.email}
            onChange={changeEmailHandler}
            className={formError.email ? "error" : null}
          />
        </Step2FormGroup>
        <Step2FormGroup>
          <Step2FormLabel htmlFor="phone">
            Telefon
            <Star color="red" />
          </Step2FormLabel>
          <Step2FormInput
            type="phone"
            id="phone"
            value={form.phone}
            onChange={changePhoneHandler}
            className={formError.phone ? "error" : null}
          />
        </Step2FormGroup>
        <Step2FormGroup>
          <Step2FormLabel htmlFor="address">
            Adresa
            <Star color="red" />
          </Step2FormLabel>
          <Step2FormInput
            type="text"
            id="address"
            value={form.address}
            onChange={changeAddressHandler}
            className={formError.address ? "error" : null}
          />
        </Step2FormGroup>
        <div style={{ gridColumn: "1/-1" }}>
          <Step2FormGroup className="postal-code">
            <Step2FormLabel htmlFor="postal-code">
              Poštanski broj
              <Star color="red" />
            </Step2FormLabel>
            <Step2FormInput
              type="text"
              id="postal-code"
              value={form.postalcode}
              onChange={changePostalcodeHandler}
              className={formError.postalcode ? "error" : null}
            />
          </Step2FormGroup>
          <Step2FormGroup className="city">
            <Step2FormLabel htmlFor="city">
              Grad
              <Star color="red" />
            </Step2FormLabel>
            <Step2FormInput
              type="text"
              id="city"
              value={form.city}
              onChange={changeCityHandler}
              className={formError.city ? "error" : null}
            />
          </Step2FormGroup>
        </div>
      </Step2Form>
    </StyledStep2>
  );
};

export default Step2;
