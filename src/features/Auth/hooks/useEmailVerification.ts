import {
  VerificationCodeInput,
  verificationCodeSchema,
} from "@/features/Auth/schema/user.schema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { verifyEmailFn } from "../api/authApi";
import useStore from "../store";
import axios from "axios";

export const useEmailVerification = () => {
  const setRequestLoading = useStore((state) => state.setRequestLoading);
  const isLoading = useStore((state) => state.requestLoading);
  const router = useRouter();
  const methods = useForm<VerificationCodeInput>({
    resolver: zodResolver(verificationCodeSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  const { mutate: verifyEmail } = useMutation(
    (verificationCode: string) => verifyEmailFn(verificationCode),
    {
      onMutate(variables) {
        setRequestLoading(true);
      },
      onSuccess: (data) => {
        setRequestLoading(false);
        toast.success(data?.message);
        router.push("/login");
      },
      onError(error: any) {
        setRequestLoading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.data) {
            console.log("error body: ", error.response.data);
            toast.error(error.response.data.message, {
              position: "top-right",
            });
          }
          console.log("error message: ", error.message);
          toast.error(error.message, {
            position: "top-right",
          });
        } else {
          console.log("unexpected error: ", error);
          toast.error((error as any).response.data.message, {
            position: "top-right",
          });
        }
      },
    },
  );

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<VerificationCodeInput> = ({
    verificationCode,
  }) => {
    // ? Executing the verifyEmail Mutation
    verifyEmail(verificationCode);
  };

  return { reset, methods, onSubmitHandler, handleSubmit, isLoading };
};
