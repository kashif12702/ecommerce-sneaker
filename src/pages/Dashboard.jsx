import React, { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CartButton from "../views/dashboard/CartButton";
import ProductItems from "../views/dashboard/ProductItems";
import CartPage from "../views/cart/CartPage";
import TopDashboardBanner from "../views/dashboard/TopDashboardBanner";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/user";
import { useNavigate } from "react-router-dom";
import { SIGN_IN_PAGE_URL } from "../Constants/Urls";

const Dashboard = () => {
  const [showCartPage, setShowCartPage] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate(SIGN_IN_PAGE_URL)
    }
  }, [currentUser, navigate]);

  return (
    <DashboardLayout>
      {showCartPage ? (
        <CartPage closeCart={() => setShowCartPage(false)} />
      ) : (
        <div className="py-6 md:py-10 px-4 md:px-6 flex flex-col gap-6">
          <CartButton openCart={() => setShowCartPage(true)} />
          <TopDashboardBanner />
          <ProductItems edit={false} />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
