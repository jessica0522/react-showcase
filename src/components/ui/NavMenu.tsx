import React from "react";
import { MenuItem } from "../../static/menus";
import { NavigationLink } from "../../components";

interface NavMenuProps {
  menuItems: MenuItem[];
  customisedLinkClass?: string;
}

const NavMenu = ({ menuItems, customisedLinkClass }: NavMenuProps) => {
  return (
    <>
      {menuItems.map((item: MenuItem) => (
        <NavigationLink
          key={item.name}
          to={item.to}
          className={customisedLinkClass}
        >
          {item.name}
        </NavigationLink>
      ))}
    </>
  );
};

export default NavMenu;
