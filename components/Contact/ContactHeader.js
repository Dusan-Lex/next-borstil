import {
  StyledContactHeader,
  ContactHeaderTitle,
  ContactHeaderSubtitle,
} from "./ContactHeaderStyles";

const ContactHeader = () => {
  return (
    <StyledContactHeader>
      <ContactHeaderTitle>Kuća dobre stolarije</ContactHeaderTitle>
      <ContactHeaderSubtitle>
        Mi znamo da dobar kvalitet znači dobar biznis
      </ContactHeaderSubtitle>
    </StyledContactHeader>
  );
};

export default ContactHeader;
