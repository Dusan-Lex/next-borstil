import React, { forwardRef, useContext } from "react";
import OrderInfoContext from "../../../../../context-store/orderInfoContext";
import FormGroup from "./FormGroup";
import { StyledLegalEntityForm } from "./LegalEntityFormStyles";

const LegalEntityForm = forwardRef((props, ref) => {
  const orderInfoCtx = useContext(OrderInfoContext);

  return (
    <StyledLegalEntityForm ref={ref}>
      <FormGroup
        id="companyname"
        label="Ime kompanije"
        type="text"
        value={orderInfoCtx.legalEntityInfo.form.companyName}
        onChange={(event) => orderInfoCtx.changeHandler(event, "companyName")}
        inputClassName={
          orderInfoCtx.legalEntityInfo.formError.companyName ? "error" : null
        }
        required
        marginTop="1rem"
      />
      <FormGroup
        id="companyRepresentative"
        label="Predstavnik kompanije"
        type="text"
        value={orderInfoCtx.legalEntityInfo.form.companyRepresentative}
        onChange={(event) =>
          orderInfoCtx.changeHandler(event, "companyRepresentative")
        }
        marginTop="1rem"
      />
      <FormGroup
        id="pib"
        label="PIB"
        type="text"
        value={orderInfoCtx.legalEntityInfo.form.pib}
        onChange={(event) => orderInfoCtx.changeHandler(event, "pib")}
        inputClassName={
          orderInfoCtx.legalEntityInfo.formError.pib ? "error" : null
        }
        required
        marginTop="1rem"
      />
      <FormGroup
        id="accountNumber"
        label="Broj računa"
        type="text"
        value={orderInfoCtx.legalEntityInfo.form.accountNumber}
        onChange={(event) => orderInfoCtx.changeHandler(event, "accountNumber")}
        marginTop="1rem"
      />
    </StyledLegalEntityForm>
  );
});

export default LegalEntityForm;
