import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Item } from "./NavbarItemStyles";

function NavbarItem({ item }) {
  const router = useRouter();
  const path = `/${item === "home" ? "" : item}`;
  const { t } = useTranslation();
  return (
    <Item>
      <Link href={path}>
        <a className={router.pathname === path ? "active" : ""}>
          <div className="visible">{t(`common:navigation.${item}`)}</div>
          <div className="invisible">{t(`common:navigation.${item}`)}</div>
        </a>
      </Link>
    </Item>
  );
}

export default NavbarItem;
