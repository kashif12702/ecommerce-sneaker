import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct, loadProducts } from "../redux/products";

const ProductForm = ({ toggleModal, product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setValue("title", product.title);
      setValue("price", product.price);
      setValue("type", product.type);
      setValue("description", product.description);
    }
  }, [product, setValue]);

  const onSubmit = (data) => {
    if (product) {
      dispatch(updateProduct({ ...product, ...data }));
    } else {
      dispatch(addProduct(data));
    }
    reset();
    dispatch(loadProducts());
    toggleModal();
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Title */}
        <div className="mb-4">
          <label className="block text-normal font-semibold text-gray-700">
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-3 px-2"
            placeholder="Enter product title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label className="block text-normal font-semibold text-gray-700">
            Price
          </label>
          <input
            {...register("price", { required: "Price is required", min: 1 })}
            type="number"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-3 px-2"
            placeholder="Enter product price"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Product Type */}
        <div className="mb-4">
          <label className="block text-normal font-semibold text-gray-700">
            Type
          </label>
          <select
            {...register("type", { required: "Type is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-3 px-2 cursor-pointer"
          >
            <option value="">Select Type</option>
            <option value="running">Running</option>
            <option value="walking">Walking</option>
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        {/* Product Description */}
        <div className="mb-4">
          <label className="block text-normal font-semibold text-gray-700">
            Description
          </label>
          <textarea
            {...register("description", { required: "Description is required" })}
            rows={5}
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm sm:text-sm py-3 px-2"
            placeholder="Enter product description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-between gap-4">
          <button type="submit" className="pink-button w-full">
            {product ? "Update" : "Create"}
          </button>
          <button
            type="button"
            className="pink-outline-button w-full"
            onClick={toggleModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
