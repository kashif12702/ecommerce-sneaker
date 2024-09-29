import React from "react";
import profile from "./../assets/images/dashboard/profile_placeholder.jpeg";
import materCard from "./../assets/images/cart/masterCard.png";
import visa from "./../assets/images/cart/visa.png";
import rupay from "./../assets/images/cart/rupay.png";
import { IoArrowForward } from "react-icons/io5";

const CardDetailItem = ({cartItems}) => {
  const cardDetails = [
    { id: 1, src: materCard },
    { id: 2, src: visa },
    { id: 3, src: rupay },
  ];

  const totalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total || 0;
  };

  const TitleAndValue = ({ title, value }) => {
    return (
      <div className="flex justify-between items-center">
        <h2 className="inputTitleStyles">{title}</h2>
        <p className="inputTitleStyles">{value}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between h-full min-h-[550px] bg-primary-color rounded-2xl p-4 font-sans">
      <div className="flex justify-between items-center">
        <h2 className="text-[16px] 2xl:text-[22px] font-[600] text-white">
          Card Details
        </h2>
        <img
          src={profile}
          alt="profile"
          className="w-[30px] h-[30px] 2xl:w-[50px] 2xl:h-[50px] rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[12px] 2xl:text-[14px] font-[400] text-white">
          Card type
        </p>
        <div className="flex gap-3">
          {cardDetails.map((item) => {
            return (
              <img
                key={item.id}
                src={item.src}
                alt="card"
                className="w-[40px] h-[30px] 2xl:w-[75px] 2xl:h-[55px] rounded-md"
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="inputTitleStyles">Name on Card</h4>
        <input placeholder="Name"  className="inputStyles" />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="inputTitleStyles">Card Number</h4>
        <input placeholder="1111 2222 3333 4444"  className="inputStyles" />
      </div>
      <div className="flex justify-between gap-2 border-b-2 border-[#BA68C8] pb-5">
        <div className="flex flex-1 flex-col gap-2 mt-3">
          <h4 className="inputTitleStyles">Expiration date</h4>
          <input placeholder="mm/yy"  className="inputStyles" />
        </div>
        <div className="flex flex-1 flex-col gap-2 mt-3">
          <h4 className="inputTitleStyles">CVV</h4>
          <input placeholder="123"  className="inputStyles" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <TitleAndValue title="Subtotal" value={totalAmount()} />
        <TitleAndValue title="Shipping" value="$4" />
        <TitleAndValue title="Total (Tax incl.)" value={`$${totalAmount() + 4}`} />
      </div>
      <div className="flex justify-between items-center bg-[#BA68C8] p-2 rounded-lg">
        <h3 className="text-[14px] 2xl:text-[18px] font-[400] text-white">
          ${totalAmount() + 4}
        </h3>
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] 2xl:text-[18px] font-[400] text-white">
            Checkout
          </h3>
          <IoArrowForward color={"#fff"} />
        </div>
      </div>
    </div>
  );
};

export default CardDetailItem;
