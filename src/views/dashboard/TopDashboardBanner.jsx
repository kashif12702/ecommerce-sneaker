import React from "react";
import shoes from "../../assets/images/dashboard/shoes.png";
import fiftyPercentOff from "../../assets/images/dashboard/fiftyPercentOff.png";
import girl_running from "../../assets/images/dashboard/girl_running.png";

const TopDashboardBanner = () => {
  return (
    <div className="flex gap-6 flex-col xl:flex-row">
      <div className="relative flex flex-col sm:flex-row gap-4 items-center justify-center overflow-hidden bg-[#111111] flex-[65%] p-4 3xl:p-8 rounded-3xl">
        <div className="flex items-center justify-center flex-[50%] relative max-h-[304px] ">
          <img
            src={shoes}
            alt="shoes"
            className="w-full sm:max-w-[250px] xl:max-w-[270px] 3xl:max-w-[400px] 3xl:max-h-[261px] 3xl:ml-12 mt-3 relative z-20"
          />
          <div className="w-[1000px] sm:w-[80px] xl:w-[100px] h-[100px] sm:h-[808px] bg-primary-color absolute top:[20%] sm:-top-[150px] -left-[100%] sm:left-[30%] z-10" />
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2 3xl:gap-6 flex-[50%]">
          <h2 className="text-[30px] xl:text-[35px] 3xl:text-[51px] font-[700] text-white xl:leading-[45px] 3xl:leading-[60px] text-center sm:text-left">
            ESSENTIAL ITEMS FOR
          </h2>
          <div className="flex justify-center items-center bg-primary-color w-[70px] 3xl:w-[135px] h-[30px] 3xl:h-[58px] rounded-xl">
            <p className="text-[20px] xl:text-[20px] 3xl:text-[44px] font-[700] text-white">
              $99
            </p>
          </div>
          <p className="text-[20px] xl:text-[12px] 3xl:text-[14px] font-[400] color-white text-center sm:text-left max-w-full 3xl:max-w-[285px] text-white">
            Nulla accumsan malesuada egestas nam dignissim. Quis vulputate
            blandit duis
          </p>
          <button className="px-[32] py-[12] text-[10.5px] font-[700] h-[36px] w-full sm:w-[121px] bg-white rounded-xl cursor-pointer z-20 leading-10">
            ADD TO CART
          </button>
        </div>
        <h1 className="select-none absolute opacity-15 -top-[190px] left-[5%] text-[200px] text-wra font-bold text-white">
          MAYHEM
        </h1>
        <h1 className="select-none absolute opacity-15 -bottom-[150px] left-[5%] text-[200px] text-wra font-bold text-white">
          MAYHEM
        </h1>
      </div>
      <div className="flex justify-around items-baseline p-4 xl:py-6 xl: px-4 relative bg-[#E4E4E4] flex-[35%] rounded-3xl">
        <img
          src={girl_running}
          alt="girl_running"
          className="h-auto w-[50%] flex-1 object-contain max-h-[200px]"
        />
        <img
          src={fiftyPercentOff}
          alt="fiftyPercentOff"
          className="h-auto object-contain w-[50%] flex-1 max-h-[150px]"
        />
      </div>
    </div>
  );
};

export default TopDashboardBanner;
