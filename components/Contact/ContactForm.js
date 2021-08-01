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
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: "",
    select: "subject",
  });
  const [form, setForm] = useState({
    errors: { name: "", email: "", number: "", select: "" },
    message: "",
    status: "",
  });

  const textRef = useRef();

  const changeInputHandler = (event) => {
    setInputs((prevInputs) => {
      return { ...prevInputs, [event.target.id]: event.target.value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: inputs.name,
        email: inputs.email,
        number: inputs.number,
        select: inputs.select,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setForm(data);
    data.errors.number && document.getElementById("number").focus();
    data.errors.email && document.getElementById("email").focus();
    data.errors.name && document.getElementById("name").focus();
    data.status === "success" &&
      setInputs({
        name: "",
        email: "",
        number: "",
        select: "subject",
      });
  };
  return (
    <StyledContactForm>
      <FormSubtitle>Pitanja i zahtevi</FormSubtitle>
      <FormTitle>Kontaktirajte nas</FormTitle>
      <Form>
        <FormGroup>
          <FormInput
            type="text"
            placeholder="Vaše ime i prezime"
            value={inputs.name}
            onChange={changeInputHandler}
            id="name"
          />
          <FormSpan>{form.errors.name}</FormSpan>
        </FormGroup>
        <FormGroup>
          <FormInput
            type="email"
            placeholder="Vaša email adresa"
            value={inputs.email}
            onChange={changeInputHandler}
            id="email"
          />
          <FormSpan>{form.errors.email}</FormSpan>
        </FormGroup>
        <FormGroup>
          <FormInput
            type="text"
            placeholder="Broj telefona"
            value={inputs.number}
            onChange={changeInputHandler}
            id="number"
          />
          <FormSpan>{form.errors.number}</FormSpan>
        </FormGroup>
        <FormGroup>
          <FormSelect
            value={inputs.select}
            onChange={changeInputHandler}
            id="select"
          >
            <option value="subject">Tema poruke</option>
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
