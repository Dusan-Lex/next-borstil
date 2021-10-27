import React from "react";
import Star from "../../../../../shared/components/svgs/Star";
import { FormInput, FormLabel, StyledFormGroup } from "./FormGroupStyles";

const FormGroup = ({
  id,
  type,
  label,
  value,
  onChange,
  className,
  inputClassName,
  required,
  width,
  marginTop,
}) => {
  return (
    <StyledFormGroup className={className} marginTop={marginTop}>
      <FormLabel htmlFor={id}>
        {label}
        {required && <Star color="red" />}
      </FormLabel>
      <FormInput
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={inputClassName}
        width={width}
      />
    </StyledFormGroup>
  );
};

export default FormGroup;
