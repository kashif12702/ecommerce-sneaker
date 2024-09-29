import React from "react";
import { Link } from "react-router-dom";
import landingImage from "./../assets/images/landing_page_Image.png";
import { selectCurrentUser } from "../redux/user";
import { useSelector } from "react-redux";
import { DASHBOARD_PAGE_URL, SIGN_IN_PAGE_URL } from "../Constants/Urls";

const HomePageBanner = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <section className=" flex flex-col-reverse md:flex-row gap-5 items-center justify-around relative mx-auto max-w-screen-xl px-4 py-10 md:py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-6">
      <div className="max-w-xl text-center sm:text-left">
        <h1 className="text-6xl font-extrabold text-primary-color text-center sm:text-left">
          Let's find your Product.
        </h1>

        <p className="mt-4 max-w-lg text-gray-700 sm:text-xl/relaxed text-center sm:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="mt-8 flex justify-center md:justify-start flex-wrap gap-4 text-center">
          <Link to={`${currentUser ? DASHBOARD_PAGE_URL : SIGN_IN_PAGE_URL}`}>
            <button className="pink-button">
              {currentUser ? "Dashboard" : "Get Started"}
            </button>
          </Link>

          <button className="white-button">Learn More</button>
        </div>
      </div>
      <img src={landingImage} alt={"landing_image"} className=" w-[80%] md:w-1/3" />
    </section>
  );
};

export default HomePageBanner;
