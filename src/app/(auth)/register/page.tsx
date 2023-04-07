"use client";
import { FormProvider } from "react-hook-form";
import Link from "next/link";
import TitleSectionOnTopOfCard from "@/features/Auth/components/TitleSectionOnTopOfCard";
import Message from "@/features/Auth/components/Message";
import FormInput from "@/features/Auth/components/FormInput";
import { useUserRegister } from "@/features/Auth/hooks/useUserRegister";
import LoadingSpinner from "@/features/Common/components/LoadingSpinner";
import Card from "@/features/Auth/components/Card";

const RegisterPage = () => {
  const { data, isSuccess, methods, handleSubmit, onSubmitHandler, isLoading } =
    useUserRegister();

  const formInputList = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
    {
      name: "passwordConfirm",
      type: "password",
      placeholder: "Password Confirm",
    },
  ];

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      {data && isSuccess ? (
        <Message>
          <p className="text-xl">{data.message}</p>
          <p className="mt-8">
            Already confirmed email address? Then you can{" "}
            <Link href="/login" className="text-blue-700 underline">
              Log in
            </Link>
          </p>
        </Message>
      ) : (
        <>
          <TitleSectionOnTopOfCard
            title={"Welcome to Your Inventory Management!"}
            subMessage={"Sign Up To Get Started!"}
          />
          <Card>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="py-1">
                  {formInputList.map((item, index) => (
                    <FormInput
                      key={index}
                      name={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200 w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign up
                </button>
              </form>
            </FormProvider>
            <Link
              href={"/login"}
              className="w-full p-3 px-4 mt-5 text-center text-gray-800 uppercase bg-gray-300 rounded-xl hover:text-blue-700"
            >
              Back
            </Link>
          </Card>
        </>
      )}
    </>
  );
};

export default RegisterPage;
