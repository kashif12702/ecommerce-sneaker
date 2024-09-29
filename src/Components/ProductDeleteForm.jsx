import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, loadProducts } from "../redux/products";

const ProductDeleteForm = ({ toggleModal, productId }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = () =>{
        dispatch(deleteProduct(productId));
        dispatch(loadProducts());
    }

  return (
    <div>
      <div className="flex justify-between gap-4">
        <button type="submit" className="pink-button w-full" onClick={handleDeleteButton}>
          Delete
        </button>
        <button
          type="button"
          className="pink-outline-button w-full"
          onClick={toggleModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProductDeleteForm;
