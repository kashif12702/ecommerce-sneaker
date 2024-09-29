import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import ImageSection from "./ImageSection";
import { SIGN_UP_PAGE_URL } from "../../Constants/Urls";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/user/index";

const SignInPage = () => {
  const { register, handleSubmit, setError } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await dispatch(logIn(data));
    console.log(result);
    if (result.error) {
      setError("email", { type: "manual", message: result.error });
    } else {
      navigate("/dashboard"); // Redirect to dashboard if login is successful
    }
  };

  return (
    <div className="flex flex-col w-full lg:flex-row justify-between items-center min-h-fit lg:min-h-screen font-sans">
      <ImageSection />
      <div className="flex flex-col gap-8 justify-center items-center w-full lg:w-[40%] mx-auto min-h-[70vh] lg:min-h-screen max-w-[358px]">
        <h2 className="text-3xl font-semibold text-center">Welcome</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 w-full"
        >
          <div className="relative w-full bg-white">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiOutlineMail color="gray" size={20} />
            </div>
            <input
              type="email"
              {...register("email", { required: true })}
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:outline-primary-color active:outline-primary-color active:border-primary-color block w-full ps-10 p-2.5"
              placeholder="Email"
              required
            />
          </div>
          <div className="relative w-full bg-white">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <SlLock color="gray" size={20} />
            </div>
            <input
              type="password"
              {...register("password", { required: true })}
              className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg focus:outline-primary-color active:outline-primary-color active:border-primary-color block w-full ps-10 p-2.5"
              placeholder="Password"
              required
            />
          </div>
          <p className="text-blue-500 w-full text-right">Forgot password?</p>
          <button
            type="submit"
            className="border-[1px] border-primary-color bg-primary-color text-white font-medium py-2 px-4 text-sm sm:text-base w-full rounded-full"
          >
            Log in
          </button>
        </form>
        <p className="text-gray-500 text-center">Have no account yet?</p>
        <Link to={SIGN_UP_PAGE_URL} className="w-full">
          <button className="border-[1px] border-primary-color text-primary-color font-medium py-2 px-4 text-sm sm:text-base w-full rounded-full">
            Registration
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
