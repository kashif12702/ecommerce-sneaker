import React from "react";
import { Link } from "react-router-dom";
import { SIGN_IN_PAGE_URL, SIGN_UP_PAGE_URL } from "../Constants/Urls";
import { logOut, selectCurrentUser } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);

  const navLinks = [
    { label: "Dashboard", url: "/dashboard" },
    { label: "Products", url: "/products" },
  ];
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logOut());
  };

  return (
    <section className="sticky top-0 z-[999] flex justify-center">
      <header className="flex items-center justify-between gap-2 w-full sm:px-8 px-4 py-4 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg text-[#202226] shadow-md">
        <Link to={"/"}>
          <h2 className="text-3xl font-bold text-black cursor-pointer">LOGO</h2>
        </Link>
        <div className="mx-auto hidden md:flex justify-center items-center">
          <ul className="flex space-x-8">
            {currentUser &&
              navLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>
                    <span className="text-gray-600 hover:text-gray-400 cursor-pointer font-medium transition duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        {currentUser ? (
          <button onClick={handleLogout} className="pink-button">
            Log out
          </button>
        ) : (
          <div className="flex gap-2">
            <Link to={SIGN_IN_PAGE_URL}>
              <button className="pink-outline-button">Log in</button>
            </Link>
            <Link to={SIGN_UP_PAGE_URL}>
              <button className="pink-button">Register</button>
            </Link>
          </div>
        )}
      </header>
    </section>
  );
};

export default Navbar;
