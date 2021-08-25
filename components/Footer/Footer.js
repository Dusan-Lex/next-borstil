import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import Instagram from "../../shared/components/svgs/Instagram";
import Facebook from "../../shared/components/svgs/Facebook";

import {
  StyledFooter,
  FooterWrapper,
  FooterNav,
  FooterContact,
  FooterLogo,
  FooterSocial,
  FooterCopyright,
} from "./FooterStyles";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterNav>
          <ul>
            {["about", "products", "products"].map((el, i) => (
              <li key={i}>
                <Link href={`/${el}`}>
                  <a>
                    {t(`common:footer.nav.${i}`)} <span>&#10095;</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </FooterNav>
        <FooterContact>
          <h3>Kontakt</h3>
          <ul>
            <li>
              <span>{t(`common:footer.contact.0`)}</span> : Durmitorska bb
              Leskovac
            </li>
            <li>
              <span>{t(`common:footer.contact.1`)}</span> : 0638454956 i
              0631145484
            </li>
            <li>
              <span>E-mail</span>: borstil@yahoo.com
            </li>
          </ul>
        </FooterContact>
        <FooterLogo>
          <h3>Bor Stil</h3>
          <span>{t(`common:footer.logo`)}</span>
        </FooterLogo>
        <FooterSocial>
          <a
            href="https://www.facebook.com/BorStil.Stolarija/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            title="facebook"
          >
            <Facebook />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/borstilstolarija/"
            target="_blank"
            rel="noopener nofollow noreferrer"
            title="instagram"
          >
            <Instagram />
            Instagram
          </a>
        </FooterSocial>
        <FooterCopyright>
          <div className="box">
            Copyright © 2021 BorStil. All rights reserved.
          </div>
          <div>Website by DušanLex</div>
        </FooterCopyright>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
