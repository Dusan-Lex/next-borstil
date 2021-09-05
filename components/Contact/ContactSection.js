import { useRef } from "react";
import {
  StyledContactSection,
  ScrollInto,
  StyledTitleEffect,
} from "./ContactSectionStyles";
import ContactHeader from "./ContactHeader";
import ArrowDownScroll from "../../shared/components/svgs/ArrowDownScroll";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { color } from "../../shared/utils/styles";

const ContactSection = () => {
  const contactInfoRef = useRef();

  return (
    <StyledContactSection>
      <ContactHeader />
      <StyledTitleEffect
        effectClass="one"
        startDelay={1}
        id="dsfgdfsg"
        color1={color.primary}
        color2={color.secondary}
      >
        Kontakt&nbsp;informacije
      </StyledTitleEffect>
      <ScrollInto>
        <div
          style={{ overflow: "hidden" }}
          onClick={() => {
            contactInfoRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        >
          <ArrowDownScroll width="50" height="50" />
        </div>
      </ScrollInto>
      <ContactInfo ref={contactInfoRef} />
      <ContactForm />
    </StyledContactSection>
  );
};

export default ContactSection;
