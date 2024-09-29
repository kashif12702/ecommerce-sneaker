import React, { useEffect } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { loadCartItems } from "../../redux/cart";
import { selectCurrentUser } from "../../redux/user";
import profile from "./../../assets/images/dashboard/profile_placeholder.jpeg";

const CartButton = ({ openCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between items-center">
          <div className="flex gap-3 md:hidden">
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
        <div />
        <div
          onClick={openCart}
          className="flex items-center gap-2 py-2 px-3 bg-white hover:bg-slate-50 rounded-full cursor-pointer relative"
        >
          <PiShoppingCart size={20} />
          <p>My Cart</p>
          {cartItems.length > 0 && (
            <div className="absolute -top-2 -right-1 w-5 h-5 bg-primary-color rounded-full text-white flex justify-center items-center">
              {cartItems.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartButton;
