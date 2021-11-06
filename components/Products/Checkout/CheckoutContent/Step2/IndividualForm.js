import React, { useContext, useState } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import FormGroup from "./FormGroup";
import {
  PostalcodeCityBox,
  StyledIndividualForm,
} from "./IndividualFormStyles";

const IndividualForm = () => {
  const orderInfoCtx = useContext(OrderInfoContext);

  return (
    <StyledIndividualForm>
      <FormGroup
        id="name"
        label="Ime i prezime"
        type="text"
        value={orderInfoCtx.individualInfo.form.name}
        onChange={(event) =>
          orderInfoCtx.changeHandler(event, "name", "individual")
        }
        inputClassName={
          orderInfoCtx.individualInfo.formError.name ? "error" : null
        }
        required
      />
      <FormGroup
        id="email"
        label="E-mail"
        type="email"
        value={orderInfoCtx.individualInfo.form.email}
        onChange={(event) =>
          orderInfoCtx.changeHandler(event, "email", "individual")
        }
        inputClassName={
          orderInfoCtx.individualInfo.formError.email ? "error" : null
        }
        required
      />
      <FormGroup
        id="phone"
        label="Telefon"
        type="phone"
        value={orderInfoCtx.individualInfo.form.phone}
        onChange={(event) =>
          orderInfoCtx.changeHandler(event, "phone", "individual")
        }
        inputClassName={
          orderInfoCtx.individualInfo.formError.phone ? "error" : null
        }
        required
      />
      <FormGroup
        id="address"
        label="Adresa montaže"
        type="text"
        value={orderInfoCtx.individualInfo.form.address}
        onChange={(event) =>
          orderInfoCtx.changeHandler(event, "address", "individual")
        }
        inputClassName={
          orderInfoCtx.individualInfo.formError.address ? "error" : null
        }
        required
      />

      <PostalcodeCityBox>
        <FormGroup
          id="postalcode"
          label="Poštanski broj"
          type="text"
          value={orderInfoCtx.individualInfo.form.postalcode}
          onChange={(event) =>
            orderInfoCtx.changeHandler(event, "postalcode", "individual")
          }
          className="postalcode"
          inputClassName={
            orderInfoCtx.individualInfo.formError.postalcode ? "error" : null
          }
          required
        />
        <FormGroup
          id="city"
          label="Grad"
          type="text"
          value={orderInfoCtx.individualInfo.form.city}
          onChange={(event) =>
            orderInfoCtx.changeHandler(event, "city", "individual")
          }
          className="city"
          inputClassName={
            orderInfoCtx.individualInfo.formError.city ? "error" : null
          }
          required
        />
      </PostalcodeCityBox>
    </StyledIndividualForm>
  );
};

export default IndividualForm;
