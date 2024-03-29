import React from "react";
import { MenuItem } from "../../static/menus";
import { NavigationLink } from "../../components";

interface NavMenuProps {
  menuItems: MenuItem[];
  isMobile?: boolean;
  onClick?: () => void;
}

const mobileClassName =
  "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900";

const NavMenu = ({ menuItems, isMobile, onClick }: NavMenuProps) => {
  return (
    <>
      {menuItems.map((item: MenuItem) => (
        <div key={item.name}>
          <NavigationLink
            to={item.to}
            className={isMobile ? mobileClassName : ""}
            onClick={isMobile ? onClick : undefined}
          >
            {item.name}
          </NavigationLink>
        </div>
      ))}
    </>
  );
};

export default NavMenu;
