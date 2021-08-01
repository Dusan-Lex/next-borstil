import NavbarItem from "./NavbarItem/NavbarItem";
import { StyledNavbar } from "./NavbarStyles";

const navbarData = ["home", "about", "products", "gallery", "blog", "contact"];

function Navbar() {
  return (
    <StyledNavbar>
      {navbarData.map((item, index) => (
        <NavbarItem key={index} item={item} />
      ))}
    </StyledNavbar>
  );
}

export default Navbar;
