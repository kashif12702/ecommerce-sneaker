import React, { useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import CartItem from "../../Components/CartItem";
import CardDetailItem from "../../Components/CardDetailItem";
import { useDispatch, useSelector } from "react-redux";
import { loadCartItems } from "../../redux/cart";

const CartPage = ({ closeCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || []; 

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return cartItems.map((item) => {
      return <CartItem key={item.id} item={item} />; 
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 bg-white rounded-2xl my-10 mx-6 p-4 min-h-[70vh]">
      <div className="flex flex-col gap-3 w-full md:w-[50%] lg:w-[70%]">
        <div
          onClick={closeCart}
          className="flex gap-2 items-center cursor-pointer border-b-2 pb-3 mb-3 min-w-[50%]"
        >
          <FaChevronLeft />
          <h2>Shopping Continue</h2>
        </div>
        <div>
          <h2 className="text-[16px] 2xl:text-[20px] font-[700]">
            Shopping Cart
          </h2>
          <p className="text-[12px] 2xl:text-[14px] font-[400]">
            You have 3 items in your cart
          </p>
        </div>
        <div className="flex flex-col gap-3">{renderCartItems()}</div>
      </div>
      <div className="w-full md:w-[50%] lg:w-[30%]">
        <CardDetailItem cartItems={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
