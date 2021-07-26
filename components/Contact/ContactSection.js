import { StyledContactSection, ContactTitle } from "./ContactSectionStyles";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <StyledContactSection>
      <ContactHeader />
      <ContactTitle>Kontakt informacije</ContactTitle>
      <ContactInfo />
      <ContactForm />
    </StyledContactSection>
  );
};

export default ContactSection;
