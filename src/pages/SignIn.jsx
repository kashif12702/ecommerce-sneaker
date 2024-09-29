import React from "react";
import SignInPage from "../views/Auth/SignInPage";
import AuthLayout from "../layouts/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout>
      <SignInPage />
    </AuthLayout>
  );
};

export default SignIn;
