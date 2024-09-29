import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalButton from "./ModalButton";
import ProductForm from "./ProductForm";
import ProductDeleteForm from "./ProductDeleteForm";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cart";
import { Link } from "react-router-dom";
import { getRandomSneakerImage } from "../utils/sneakerImage";

const ProductItem = ({ item, edit }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div
      key={item.id}
      className="flex flex-col w-[220px] min-w-full md:min-w-[220px] 2xl:max-w-[295px] 2xl:min-w-[295px] bg-white rounded-xl"
    >
      <div>
        <img
          src={getRandomSneakerImage()}
          className="w-full h-[180px] 2xl:h-[280px] object-cover rounded-tl-xl rounded-tr-xl"
          alt="product"
        />
      </div>
      {edit ? null : (
        <div className="flex items-center">
          <p
            onClick={handleAddToCart}
            className="flex-1 text-center cursor-pointer hover:bg-slate-900 text-[10px] 3xl:text-[13px] font-[700] bg-black text-white h-[38px] 3xl:h-[49px] flex justify-center items-center"
          >
            ADD TO CART
          </p>
          <p className="flex-1 text-center cursor-pointer hover:bg-[#a333b7] text-[10px] 3xl:text-[13px] font-[700] bg-primary-color text-white h-[38px] 3xl:h-[49px] flex justify-center items-center">
            QUICK VIEW
          </p>
        </div>
      )}
      <div className="m-2">
        <div className="flex justify-between items-center border-b-2 mb-2 pb-2">
          <p className="text-black text-[14px] 2xl:text-[20px] font-[700]">
            {item.title}
          </p>
          <div className="flex items-center gap-1">
            <FaHeart className="text-primary-color" />
            <p className="text-black text-[14px] 2xl:text-[20px] font-[700]">
              ${item.price}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black text-[14px] 2xl:text-[17px] italic font-[400]">
            {item.type}
          </p>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((item) => (
              <FaStar className="w-3 h-3 2xl:w-4 2xl:h-4" />
            ))}
          </div>
        </div>
        {edit && (
          <div className="flex justify-between space-x-4 border-t-2 mt-2 pt-2">
            <ModalButton
              title={`Edit Product ${item.title}`}
              Button={({ toggleModal }) => (
                <button onClick={() => toggleModal()}>
                  <div className="flex items-center space-x-1 text-green-600 cursor-pointer ">
                    <FiEdit />
                    <h6 className="font-medium">Edit</h6>
                  </div>
                </button>
              )}
              Content={({ toggleModal }) => (
                <ProductForm toggleModal={toggleModal} product={item} />
              )}
            />
            <ModalButton
              title="Are you sure you want to delete this Product"
              Button={({ toggleModal }) => (
                <button onClick={() => toggleModal()}>
                  <div className="flex items-center space-x-1 text-red-600 cursor-pointer ">
                    <RiDeleteBin6Line />
                    <h6 className="font-medium">Delete</h6>
                  </div>
                </button>
              )}
              Content={({ toggleModal }) => (
                <ProductDeleteForm
                  toggleModal={toggleModal}
                  productId={item.id}
                />
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
