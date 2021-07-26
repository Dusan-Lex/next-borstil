import { StyledContactInfo, MapIFrame, Contact } from "./ContactInfoStyles";

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <Contact></Contact>
      <MapIFrame src="https://maps.google.com/maps?q=43.00754,21.95196&z=15&output=embed"></MapIFrame>
    </StyledContactInfo>
  );
};

export default ContactInfo;
