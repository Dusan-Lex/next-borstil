import React from "react";
import Star from "../../../../../shared/components/svgs/Star";
import {
  Step2Form,
  Step2FormGroup,
  Step2FormInput,
  Step2FormLabel,
  StyledStep2,
} from "./Step2Styles";

const Step2 = () => {
  return (
    <StyledStep2>
      <Step2Form>
        <Step2FormGroup>
          <Step2FormLabel for="name">
            Ime i prezime
            <Star width={9} height={9} color="red" />
          </Step2FormLabel>
          <Step2FormInput type="text" id="name" />
        </Step2FormGroup>
        <Step2FormGroup>
          <Step2FormLabel for="email">
            E-mail
            <Star width={9} height={9} color="red" />
          </Step2FormLabel>
          <Step2FormInput type="email" id="email" />
        </Step2FormGroup>
        <Step2FormGroup>
          <Step2FormLabel for="phone">
            Telefon
            <Star width={9} height={9} color="red" />
          </Step2FormLabel>
          <Step2FormInput type="phone" id="phone" />
        </Step2FormGroup>
        <Step2FormGroup>
          <Step2FormLabel for="address">
            Adresa
            <Star color="red" />
          </Step2FormLabel>
          <Step2FormInput type="text" id="address" />
        </Step2FormGroup>
      </Step2Form>
    </StyledStep2>
  );
};

export default Step2;
