import { useState, useContext } from "react";
import {
  StyledHeaderIcons,
  HeaderIcon,
  PhoneAnimate,
  MailAnimate,
  FollowAnimate,
} from "./HeaderIconsStyles";
import Phone from "../../../shared/components/svgs/Phone";
import Mail from "../../../shared/components/svgs/Mail";
import Follow from "../../../shared/components/svgs/Follow";
import PopupContext from "../../../store/popupContext";

const HeaderIcons = () => {
  const [icons, setIcons] = useState([0, 0, 0]);
  const popupCtx = useContext(PopupContext);
  console.log(popupCtx);
  return (
    <StyledHeaderIcons>
      <HeaderIcon
        onMouseEnter={() => {
          setIcons([1, 0, 0]);
        }}
        onMouseLeave={() => setIcons([0, 0, 0])}
      >
        {icons[0] === 1 ? <PhoneAnimate /> : <Phone />}
      </HeaderIcon>
      <HeaderIcon
        onMouseEnter={() => setIcons([0, 1, 0])}
        onMouseLeave={() => setIcons([0, 0, 0])}
      >
        {icons[1] === 1 ? <MailAnimate /> : <Mail />}
      </HeaderIcon>
      <HeaderIcon
        onMouseEnter={() => setIcons([0, 0, 1])}
        onMouseLeave={() => setIcons([0, 0, 0])}
      >
        {icons[2] === 1 ? <FollowAnimate /> : <Follow />}
      </HeaderIcon>
    </StyledHeaderIcons>
  );
};

export default HeaderIcons;
