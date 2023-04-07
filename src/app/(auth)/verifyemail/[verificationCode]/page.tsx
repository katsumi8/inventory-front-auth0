"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import TitleSectionOnTopOfCard from "@/features/Auth/components/TitleSectionOnTopOfCard";
import FormInput from "@/features/Auth/components/FormInput";
import { FormProvider } from "react-hook-form";
import { useEmailVerification } from "@/features/Auth/hooks/useEmailVerification";
import Card from "@/features/Auth/components/Card";
import LoadingSpinner from "@/features/Common/components/LoadingSpinner";

const VerifyingPage = () => {
  const currentPathName = usePathname();
  const { reset, methods, onSubmitHandler, handleSubmit, isLoading } =
    useEmailVerification();
  useEffect(() => {
    if (currentPathName) {
      const verificationCode = currentPathName.split("/").slice(-1)[0];
      reset({ verificationCode });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <TitleSectionOnTopOfCard title={"Verify Email Address."} />
      <Card>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <FormInput
              name={"verificationCode"}
              placeholder={""}
              type={"text"}
              label={"Verification Code"}
            />
            <button
              type="submit"
              className="mt-5 bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-xl shadow-gray-400 rounded-xl uppercase p-3 px-4 hover:text-blue-200 w-full text-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Verify Your Email
            </button>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
export default VerifyingPage;
