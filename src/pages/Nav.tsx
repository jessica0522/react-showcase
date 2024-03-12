import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../state/selectors";

import { menus } from "../static/menus";
import {
  NavigationLink,
  NavMenu,
  HamburgerButton,
  NavMobile,
  UserAvatar,
} from "../components";

const Nav = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useSelector(selectUser);

  return (
    <header className="z-50 border-b border-slate-200 hover:border-b-2">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavigationLink to="/" className=" ">
            <img className="h-8 w-auto" src="/logo192.png" alt="" />
          </NavigationLink>
        </div>
        <div className="flex lg:hidden">
          <HamburgerButton onClick={() => setMobileMenuOpen(true)} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavMenu menuItems={menus} />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user.email ? (
            <UserAvatar onClick={() => navigate("/user")} />
          ) : (
            <NavigationLink to="/login">
              Log in <span aria-hidden="true">&rarr;</span>
            </NavigationLink>
          )}
        </div>
      </nav>
      <NavMobile
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Nav;
