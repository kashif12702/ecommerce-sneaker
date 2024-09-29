import React from "react";
import SideBarDesktop from "./SideBarDesktop";
import BottomNavigation from "./bottomNavigation";
import {
  DASHBOARD_PAGE_URL,
  NOTIFICATIONS_PAGE_URL,
  PRODUCTS_PAGE_URL,
} from "../../Constants/Urls";
import { BiHomeAlt, BiGridAlt, BiBell } from "react-icons/bi";
import Navbar from "../../Components/Navbar";

export default function DashboardLayout({ children }) {
  const navigation = [
    {
      name: "Dashboard",
      href: DASHBOARD_PAGE_URL,
      icon: BiHomeAlt,
    },
    {
      name: "Products",
      href: PRODUCTS_PAGE_URL,
      icon: BiGridAlt,
    },
    {
      name: "Notifications",
      href: NOTIFICATIONS_PAGE_URL,
      icon: BiBell,
    },
  ];

  return (
    <>
      <div>
        <div className="h-[100vh] relative">
          {/* Static sidebar for desktop */}
          <SideBarDesktop navigation={navigation} />
          <BottomNavigation navigation={navigation} />
          <div className="sticky top-0 md:hidden z-[200]">
            <Navbar />
          </div>
          {/* ----------Content-------------- */}
          <div className="flex flex-1 flex-col md:pl-64 ">
            <main className="flex-1 bg-secondary-color mb-20 sm:mb-0">
              <div className="min-h-screen">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
