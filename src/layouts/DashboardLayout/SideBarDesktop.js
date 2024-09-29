import React from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "./../../assets/images/dashboard/profile_placeholder.jpeg";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../../redux/user";

function SideBarDesktop({ navigation }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const currentUser = useSelector(selectCurrentUser);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logOut());
  };

  return (
    <div
      className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col 
    drop-shadow-xl z-40 bg-white px-4"
    >
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto gap-5 my-6">
        <Link to={"/"}>
          <h2 className="text-3xl font-bold text-black cursor-pointer select-none">LOGO</h2>
        </Link>
        <div className="flex flex-shrink-0 items-center">
          <div className="flex gap-3">
            <img
              src={profile}
              alt="profile"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-1">
              <h2 className="text-[16px] font-[700] color-[#09090A] leading-5">
                {currentUser?.name || ""}
              </h2>
              <p className="text-[14px] font-[400] color-[#1F1F22] leading-5">
                {currentUser?.email || ""}
              </p>
            </div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link to={item.href} key={item.name}>
              <div
                className={classNames(
                  pathname === item?.href?.split("?")[0]
                    ? "bg-primary-color  text-white"
                    : " hover:text-gray-700",
                  "group flex items-center pl-4 py-4 rounded-lg cursor-pointer "
                )}
              >
                <item.icon
                  className={classNames(
                    pathname === item.href
                      ? "text-white font-medium"
                      : "hover:text-gray-700 ",
                    "mr-3  flex-shrink-0 h-[22px] w-[22px]"
                  )}
                  aria-hidden="true"
                />
                <p className="text-[16px] font-[400]">{item.name}</p>
              </div>
            </Link>
          ))}
        </nav>
      </div>
      <div onClick={handleLogout} className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 w-[100px] p-3 rounded-xl mx-4 my-10">
        <MdLogout size={25} />
        <h2 className="text-[16px] font-[400]">Logout</h2>
      </div>
    </div>
  );
}

export default SideBarDesktop;
