import Link from "next/link";
import Logo from "../../../shared/components/svgs/Logo";
import { StyledHeaderLogo } from "./HeaderLogoStyles";

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <Link href="/">
        <a>
          <Logo />
          Logo
        </a>
      </Link>
      <div>
        <p>Bor Stil</p>
      </div>
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;
