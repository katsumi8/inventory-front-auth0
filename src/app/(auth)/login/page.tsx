"use client";
import Image from "next/image";
import GitHubLogo from "../../../../public/assets/github.svg";
import GoogleLogo from "../../../../public/assets/google.svg";
// import { getGitHubUrl } from "../utils/getGithubUrl";
import { getGoogleUrl } from "@/utils/getGoogleUrl";
import { FormProvider } from "react-hook-form";
import Link from "next/link";
import { useUserLogin } from "@/features/Auth/hooks/useUserLogin";
import TitleSectionOnTopOfCard from "@/features/Auth/components/TitleSectionOnTopOfCard";
import LoadingSpinner from "@/features/Common/components/LoadingSpinner";
import Card from "@/features/Auth/components/Card";
import FormInput from "@/features/Auth/components/FormInput";

const LoginPage = () => {
  const { isLoading, methods, handleSubmit, onSubmitHandler, from } =
    useUserLogin();
  const formInputList = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <TitleSectionOnTopOfCard
        title={"Welcome Back!"}
        subMessage={"Login to have access."}
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
            <div className="flex items-center justify-between mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                  id="remenberMe"
                />
                <label
                  className="inline-block text-gray-800 form-check-label"
                  htmlFor="exampleCheck2"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="/forgotpassword"
                className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200 w-full text-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign in
            </button>

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="mx-4 mb-0 font-semibold text-center">OR</p>
            </div>

            <a
              className="flex items-center w-full px-6 py-2 mb-3 font-medium text-blue-500 uppercase bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg"
              href={getGoogleUrl(from)}
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <Image src={GoogleLogo} height={50} width={50} alt={""} />
              <p className="w-full text-lg text-center">Continue with Google</p>
            </a>
            <a
              className="flex items-center justify-between w-full px-6 py-2 mb-3 font-medium text-blue-500 uppercase bg-white border border-gray-300 rounded-md shadow-md hover:shadow-lg"
              // href={getGitHubUrl(from)}
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <Image src={GitHubLogo} height={50} width={50} alt={""} />
              <p className="w-full text-lg text-center">Continue with GitHub</p>
            </a>
          </form>
        </FormProvider>
      </Card>
      <div className="pt-5 text-xl text-blue-500">
        <Link href={"/register"}>You don't have an account yet?</Link>
      </div>
    </>
  );
};

export default LoginPage;
