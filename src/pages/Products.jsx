import React, { useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { FiPlus } from "react-icons/fi";
import ModalButton from "../Components/ModalButton";
import ProductForm from "../../src/Components/ProductForm";
import ProductItems from "../views/dashboard/ProductItems";
import { useNavigate } from "react-router-dom";
import { SIGN_IN_PAGE_URL } from "../Constants/Urls";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user";

const ProductsPage = () => {
  const currentUser = useSelector(selectCurrentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if(!currentUser) navigate(SIGN_IN_PAGE_URL)
  }, [currentUser, navigate])

  return (
    <DashboardLayout>
      <div className="p-3 sm:p-6 2xl:p-8">
        <h2 className="text-3xl font-semibold mb-4">All products</h2>
        <ModalButton
          title={`Create New Product`}
          Content={({ toggleModal }) => {
            return <ProductForm toggleModal={toggleModal} />;
          }}
          Button={({ toggleModal }) => {
            return (
              <button
                onClick={() => {
                  toggleModal();
                }}
              >
                <div
                  className="flex items-center justify-start space-x-1 cursor-pointer bg-primary-color px-3 py-2 rounded-lg mb-6"
                  title="Add Education"
                >
                  <FiPlus className="text-white text-2xl" />
                  <h6 className="text-white font-medium">Add New Product</h6>
                </div>
              </button>
            );
          }}
        />
        <ProductItems edit={true} />
      </div>
    </DashboardLayout>
  );
};

export default ProductsPage;
