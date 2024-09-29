import React from "react";
import ProductItem from "../../Components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/products";

const ProductItems = ({ edit }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  React.useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className="flex gap-4 flex-wrap">
      {products?.map((item, index) => {
        return <ProductItem item={item} key={index} edit={edit} />;
      })}
    </div>
  );
};

export default ProductItems;
