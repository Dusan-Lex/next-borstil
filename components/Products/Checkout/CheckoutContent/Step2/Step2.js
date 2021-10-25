import React, { useState } from "react";
import Star from "../../../../../shared/components/svgs/Star";
import {
  cityValidation,
  emailValidation,
  nameValidation,
  phoneNumberValidation,
  postalCodeValidation,
} from "../../../../../shared/utils/validation";
import {
  PostalcodeCityBox,
  Step2Form,
  Step2FormGroup,
  Step2FormInput,
  Step2FormLabel,
  StyledStep2,
} from "./Step2Styles";

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

  const changeHandler = (event, field) => {
    setForm((prevState) => {
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
    }

    validate
      ? setFormError((prevState) => {
          return { ...prevState, [field]: false };
        })
      : setFormError((prevState) => {
          return { ...prevState, [field]: true };
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
            onChange={(event) => changeHandler(event, "name")}
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
            onChange={(event) => changeHandler(event, "email")}
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
            onChange={(event) => changeHandler(event, "phone")}
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
            onChange={(event) => changeHandler(event, "address")}
            className={formError.address ? "error" : null}
          />
        </Step2FormGroup>
        <PostalcodeCityBox>
          <Step2FormGroup className="postal-code">
            <Step2FormLabel htmlFor="postal-code">
              Poštanski broj
              <Star color="red" />
            </Step2FormLabel>
            <Step2FormInput
              type="text"
              id="postal-code"
              value={form.postalcode}
              onChange={(event) => changeHandler(event, "postalcode")}
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
              onChange={(event) => changeHandler(event, "city")}
              className={formError.city ? "error" : null}
            />
          </Step2FormGroup>
        </PostalcodeCityBox>
      </Step2Form>
    </StyledStep2>
  );
};

export default Step2;
