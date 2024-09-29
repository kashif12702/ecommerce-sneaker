import React from "react";
import Navbar from "../../Components/Navbar";

export default function AuthLayout({ children }) {
  return (
    <>
      <div className="h-screen relative">
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div className="min-h-screen">{children}</div>
      </div>
    </>
  );
}
