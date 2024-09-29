// , useState
import React from "react";
import { Link, useLocation } from "react-router-dom";

function BottomNavigation({ navigation }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { pathname } = useLocation();

  return (
    <div>
      <nav className="flex md:hidden bg-white justify-around fixed bottom-0 px-2 py-4 left-0 right-0 shadow-[0px_1px_35px_4px_#cbd5e0] z-[200]">
        {navigation.map((item) => (
          <Link to={item.href} key={item.name}>
            <div
              className={classNames(
                pathname === item.href
                  ? "text-primary-color font-semibold"
                  : " hover:text-gray-700 font-medium",
                "group flex gap-2 flex-col items-center text-sm font-medium rounded-md cursor-pointer "
              )}
            >
              <item.icon
                className={classNames(
                  pathname === item.href
                    ? "text-primary-color font-medium "
                    : " hover:text-gray-700",
                  "flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              {item.name}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default BottomNavigation;
