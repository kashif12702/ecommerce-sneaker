import React, { useState } from "react";
import { VscTriangleUp } from "react-icons/vsc";
import { VscTriangleDown } from "react-icons/vsc";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { updateQuantityOfCartItem, removeItemFromCart } from "../redux/cart";
import { getRandomSneakerImage } from "../utils/sneakerImage";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const handleUpdateQuantity = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    dispatch(updateQuantityOfCartItem({ id: item.id, quantity: newQuantity }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className="flex justify-between items-center w-full border-2 border-[#EDEDED] rounded-2xl px-3 py-2">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
        <img
          src={getRandomSneakerImage()}
          className="h-[65px] w-[65px] 2xl:h-[120px] 2xl:w-[120px] object-cover rounded-2xl"
          alt="cartItem"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-[16px] 2xl:text-[20px] font-[700]">
            {item.title}
          </h2>
          <p className="text-[12px] 2xl:text-[14px] font-[400] italic">
            {item.type}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-end lg:items-center gap-6">
        <div className="flex items-center gap-3">
          <p>{quantity}</p>
          <div className="flex flex-col justify-center gap-3">
            <VscTriangleUp
              onClick={() => handleUpdateQuantity(quantity + 1)}
              className="cursor-pointer text-black hover:text-gray-700"
            />
            <VscTriangleDown
              onClick={() => handleUpdateQuantity(quantity - 1)}
              className="cursor-pointer text-black hover:text-gray-700"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p>${(item.price * quantity).toFixed(2)}</p>{" "}
          {/* Display total price */}
          <ImBin
            size={20}
            className="cursor-pointer text-black hover:text-gray-700"
            onClick={handleRemoveItem} // Remove item on click
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
