import React from "react";
import authImage from "./../../assets/images/landing_page_Image.png";

const ImageSection = () => {
  return (
    <div className="hidden lg:flex gap-2 flex-col justify-center items-center w-[60%] bg-primary-color min-h-screen">
      <img src={authImage} alt={"landing_image"} className="w-1/2 mx-auto" />
      <h3 className="text-2xl font-semibold text-center text-white">
        Welcome to our shop
      </h3>
      <p className="text-base font-light text-center text-white">
        Purchase imported shoes
      </p>
    </div>
  );
};

export default ImageSection;
