import { useContext } from "react";
import SidebarContext from "../../../../store/sidebarContext";
import { Item } from "./SidebarItemStyles";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
const SidebarItem = (props) => {
  const sidebarCtx = useContext(SidebarContext);
  const path = `/${props.item === "home" ? "" : props.item}`;
  const { t } = useTranslation();
  return (
    <div>
      <Item sidebar={sidebarCtx.sidebar}>
        <Link className={props.className} href={path}>
          <a onClick={sidebarCtx.toggleSidebar}>
            {t(`common:navigation.${props.item}`)}
          </a>
        </Link>
      </Item>
    </div>
  );
};

export default SidebarItem;
