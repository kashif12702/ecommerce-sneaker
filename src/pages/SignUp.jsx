import React from "react";
import SignUpPage from "../views/Auth/SignUpPage";
import AuthLayout from "../layouts/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <SignUpPage />
    </AuthLayout>
  );
};

export default SignUp;
