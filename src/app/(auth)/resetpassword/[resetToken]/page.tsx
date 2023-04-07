"use client";
import { FormProvider } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useResetPassword } from "@/features/Auth/hooks/useResetPassword";
import TitleSectionOnTopOfCard from "@/features/Auth/components/TitleSectionOnTopOfCard";
import LoadingSpinner from "@/features/Common/components/LoadingSpinner";
import Card from "@/features/Auth/components/Card";
import FormInput from "@/features/Auth/components/FormInput";

const ResetPasswordPage = () => {
  const currentPathName = usePathname() as string;
  const resetToken = currentPathName.split("/").slice(-1)[0];
  const { isLoading, handleSubmit, onSubmitHandler, methods } =
    useResetPassword(resetToken);

  const formInputList = [
    {
      name: "password",
      type: "password",
      placeholder: "",
      label: "Password",
    },
    {
      name: "passwordConfirm",
      type: "password",
      placeholder: "",
      label: "Confirm Password",
    },
  ];

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <TitleSectionOnTopOfCard
        title={"Reset Password"}
        subMessage={"Please enter a new password."}
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
                  label={item.label}
                />
              ))}
            </div>
            <button
              type="submit"
              className="mt-5 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200 w-full text-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Reset password
            </button>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};

export default ResetPasswordPage;
