import Link from "next/link";
import Logo from "../../../shared/components/svgs/Logo";
import { StyledHeaderLogo } from "./HeaderLogoStyles";

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <Link href="/">
        <a>
          <Logo size="58" />
        </a>
      </Link>
      <div>
        <h3 className="header-logo__text">Bor Stil</h3>
      </div>
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;
