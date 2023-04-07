"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useStore from "@/features/Auth/store";
import { useEffect } from "react";
import Link from "next/link";
import {
  ForgotPasswordInput,
  forgotPasswordSchema,
} from "@/features/Auth/schema/user.schema";
import { useForgotPassword } from "@/features/Auth/hooks/useForgotPassword";
import TitleSectionOnTopOfCard from "@/features/Auth/components/TitleSectionOnTopOfCard";
import FormInput from "@/features/Auth/components/FormInput";
import Card from "@/features/Auth/components/Card";
import Message from "@/features/Auth/components/Message";
import LoadingSpinner from "@/features/Common/components/LoadingSpinner";

const ForgotPasswordPage = () => {
  const { isLoading, handleSubmit, onSubmitHandler, methods, isSuccess, data } =
    useForgotPassword();

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      {data && isSuccess ? (
        <Message>
          <p className="text-xl">{data.message}</p>
          <p className="mt-8">
            Didn't forget password{" "}
            <Link href={"/login"} className="text-blue-700 underline">
              Go back to the login
            </Link>
          </p>
        </Message>
      ) : (
        <>
          <TitleSectionOnTopOfCard
            title={"Forgot Password"}
            subMessage={
              "Enter your email address and we'll send you a link to reset your password."
            }
          />
          <Card>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <FormInput
                  name={"email"}
                  placeholder={""}
                  type={"email"}
                  label={"Email Address"}
                />
                <button
                  type="submit"
                  className="mt-5 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200 w-full text-lg"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Reset Password
                </button>
              </form>
            </FormProvider>
            <Link
              href={"/login"}
              className="w-full p-3 px-4 mt-5 text-center text-gray-800 bg-gray-300 rounded-xl hover:text-blue-700"
            >
              Back to Login
            </Link>
          </Card>
        </>
      )}
    </>
  );
};

export default ForgotPasswordPage;
