import { useContext } from "react";
import SidebarContext from "../../../../store/sidebarContext";
import { ItemBox, Item } from "./SidebarItemStyles";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
const SidebarItem = (props) => {
  const sidebarCtx = useContext(SidebarContext);
  const path = `/${props.item === "home" ? "" : props.item}`;
  const { t } = useTranslation();
  return (
    <ItemBox>
      <Item sidebar={sidebarCtx.sidebar} index={props.index}>
        <Link className={props.className} href={path}>
          <a onClick={sidebarCtx.toggleSidebar}>
            {t(`common:navigation.${props.item}`)}
          </a>
        </Link>
      </Item>
    </ItemBox>
  );
};

export default SidebarItem;
