import { useRef, useState } from "react";
import {
  StyledContactForm,
  FormTitle,
  FormSubtitle,
  Form,
  FormGroup,
  FormInput,
  FormSpan,
  FormSelect,
  FormTextArea,
  FormButton,
  FormError,
} from "./ContactFormStyles";

const ContactForm = () => {
  const [form, setForm] = useState({
    errors: { name: "", email: "", number: "", select: "" },
    message: "",
    status: "",
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const selectRef = useRef();
  const textRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current.value,
        email: emailRef.current.value,
        number: numberRef.current.value,
        select: selectRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setForm(data);
  };
  return (
    <StyledContactForm>
      <FormSubtitle>Pitanja i zahtevi</FormSubtitle>
      <FormTitle>Kontaktirajte nas</FormTitle>
      <Form>
        <FormGroup>
          <FormInput
            ref={nameRef}
            type="text"
            placeholder="Vaše ime i prezime"
          />
          <FormSpan>{form.errors.name}</FormSpan>
        </FormGroup>
        <FormGroup>
          <FormInput
            ref={emailRef}
            type="email"
            placeholder="Vaša email adresa"
          />
          <FormSpan>{form.errors.email}</FormSpan>
        </FormGroup>
        <FormGroup>
          <FormInput ref={numberRef} type="text" placeholder="Broj telefona" />
          <FormSpan>{form.errors.number}</FormSpan>
        </FormGroup>
        <FormGroup>
          <FormSelect ref={selectRef}>
            <option value="Tema poruke">Tema poruke</option>
            <option value="question">Pitanje</option>
            <option value="request">Zahtev za ponudu</option>
            <option value="service">Servis</option>
          </FormSelect>
          <FormSpan>{form.errors.select}</FormSpan>
        </FormGroup>

        <FormTextArea ref={textRef} placeholder="Poruka" />

        <FormButton type="submit" onClick={submitHandler}>
          Pošalji
        </FormButton>

        {form.message && (
          <FormError status={form.status}>{form.message}</FormError>
        )}
      </Form>
    </StyledContactForm>
  );
};

export default ContactForm;
