import { forwardRef } from "react";
import Home from "../../shared/components/svgs/Home";
import Phone from "../../shared/components/svgs/Phone";
import File from "../../shared/components/svgs/File";
import {
  StyledContactInfo,
  MapIFrame,
  Contact,
  ContactBox,
} from "./ContactInfoStyles";

const ContactInfo = forwardRef((props, ref) => {
  return (
    <StyledContactInfo>
      <Contact ref={ref}>
        <ContactBox>
          <Home />
          <div>
            <p>BorStil d.o.o.</p>
            <p>Durmitorska bb</p>
            <p>16000 Leskovac</p>
          </div>
        </ContactBox>
        <ContactBox>
          <Phone />
          <div>
            <p>Tel: ‎0638454956 </p>
            <p>Tel: 0631145484 </p>
            <p>E-mail: borstil@yahoo.com</p>
          </div>
        </ContactBox>
        <ContactBox>
          <File />
          <div>
            <p>Matični broj: 55100896 </p>
            <p>PIB: 100408509</p>
          </div>
        </ContactBox>
      </Contact>
      <MapIFrame
        title="google map"
        src="https://maps.google.com/maps?q=43.00754,21.95196&z=15&output=embed"
      ></MapIFrame>
    </StyledContactInfo>
  );
});

export default ContactInfo;
