import React from "react";
import { Dialog } from "@headlessui/react";
import { menus } from "../../static/menus";
import { CloseButton, NavMenu, NavigationLink } from "..";

interface NavMobileProps {
  open: boolean;
  onClose: () => void;
}

const NavMobile = ({ open, onClose }: NavMobileProps) => {
  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={onClose}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <NavigationLink to="/" className="-m-1.5 p-1.5">
            <img className="h-8 w-auto" src="/logo192.png" alt="" />
          </NavigationLink>
          <CloseButton onClick={onClose} />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-slate-200">
            <div className="space-y-2 py-6">
              <NavMenu
                menuItems={menus}
                customisedLinkClass="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900"
              />
            </div>
            <div className="py-6">
              <NavigationLink
                to="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900"
              >
                Log in
              </NavigationLink>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NavMobile;
