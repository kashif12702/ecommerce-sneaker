import React, { useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import ImageSection from "./ImageSection";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN_PAGE_URL } from "../../Constants/Urls";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { initializeUsers, signUp } from "../../redux/user/index";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initializeUsers());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(signUp(data));
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col w-full lg:flex-row justify-between items-center min-h-fit lg:min-h-screen font-sans">
      <ImageSection />

      <div className="flex flex-col gap-8 justify-center items-center w-full lg:w-[40%] mx-auto min-h-[70vh] lg:min-h-screen max-w-[358px]">
        <h2 className="text-3xl font-semibold text-center">Registration</h2>
        <form
          className="flex flex-col items-center justify-center gap-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative w-full bg-white">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiOutlineMail color="gray" size={20} />
            </div>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`bg-white border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-base rounded-lg focus:outline-primary-color block w-full ps-10 p-2.5`}
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>

          <div className="relative w-full bg-white">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiOutlineMail color="gray" size={20} />
            </div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`bg-white border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-base rounded-lg focus:outline-primary-color block w-full ps-10 p-2.5`}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="relative w-full bg-white">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SlLock color="gray" size={20} />
            </div>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`bg-white border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-base rounded-lg focus:outline-primary-color block w-full ps-10 p-2.5`}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <div className="relative w-full bg-white">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SlLock color="gray" size={20} />
            </div>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Re-entering password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords don't match",
              })}
              className={`bg-white border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-base rounded-lg focus:outline-primary-color block w-full ps-10 p-2.5`}
              placeholder="Re-enter Password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <button
              type="submit"
              className="border-[1px] border-primary-color bg-primary-color text-white font-medium py-2 px-4 text-sm sm:text-base w-full rounded-full"
            >
              Create Account
            </button>
            <p className="text-gray-500 text-center">
              Already have an account?
            </p>
            <Link to={SIGN_IN_PAGE_URL} className="w-full">
              <button className="border-[1px] border-primary-color text-primary-color font-medium py-2 px-4 text-sm sm:text-base w-full rounded-full">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
