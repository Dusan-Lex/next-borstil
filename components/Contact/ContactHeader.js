import Image from "next/image";
import { color } from "../../shared/utils/styles";
import {
  StyledContactHeader,
  ContactHeaderTitle,
  ContactHeaderSubtitle,
} from "./ContactHeaderStyles";

const ContactHeader = () => {
  return (
    <StyledContactHeader>
      {/* <Image
        src="/images/contact/Borstil-contact-2.jpg"
        layout="fill"
        objectFit="cover"
        alt="kuća dobre stolarije"
      /> */}
      <ContactHeaderTitle>Kuća dobre stolarije</ContactHeaderTitle>
      <ContactHeaderSubtitle>
        Mi znamo da dobar kvalitet znači dobar biznis
      </ContactHeaderSubtitle>
    </StyledContactHeader>
  );
};

export default ContactHeader;
