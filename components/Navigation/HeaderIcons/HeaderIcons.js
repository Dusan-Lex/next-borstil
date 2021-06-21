import { useState, useContext } from "react";
import useTranslation from "next-translate/useTranslation";
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
import Facebook from "../../../shared/components/svgs/Facebook";
import Instagram from "../../../shared/components/svgs/Instagram";

import Popup from "../Popup/Popup";
import PopupContext from "../../../store/popupContext";

const HeaderIcons = () => {
  const [icons, setIcons] = useState([0, 0, 0]);
  const popupCtx = useContext(PopupContext);
  const { t } = useTranslation();

  return (
    <StyledHeaderIcons
      // sidebar
      onMouseLeave={() => {
        setIcons([0, 0, 0]);
        popupCtx.hidePopup();
      }}
    >
      <HeaderIcon
        onMouseEnter={() => {
          setIcons([1, 0, 0]);
          popupCtx.showPopup({
            title: t("common:popup.phone"),
            text1: "0638454956 - Ljubomir",
            text2: "‎0631145484 - Ivica",
          });
        }}
      >
        {icons[0] === 1 ? <PhoneAnimate /> : <Phone />}
      </HeaderIcon>
      <HeaderIcon
        onMouseEnter={() => {
          setIcons([0, 1, 0]);
          popupCtx.showPopup({
            title: t("common:popup.mail"),
            text1: <a href="mailto:borstil@yahoo.com">borstil@yahoo.com</a>,
          });
        }}
      >
        {icons[1] === 1 ? <MailAnimate /> : <Mail />}
      </HeaderIcon>
      <HeaderIcon
        onMouseEnter={() => {
          setIcons([0, 0, 1]);
          popupCtx.showPopup({
            title: t("common:popup.follow"),
            text1: (
              <a
                href="https://www.facebook.com/BorStil.Stolarija/"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <span>
                  <Facebook />
                  Facebook
                </span>
              </a>
            ),
            text2: (
              <a
                href="https://www.instagram.com/borstilstolarija/"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                <span style={{ marginLeft: "0.5rem" }}>
                  <Instagram />
                  Instagram
                </span>
              </a>
            ),
          });
        }}
      >
        {icons[2] === 1 ? <FollowAnimate /> : <Follow />}
      </HeaderIcon>
      <Popup />
    </StyledHeaderIcons>
  );
};

export default HeaderIcons;
