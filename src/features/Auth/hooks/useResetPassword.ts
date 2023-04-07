import {
  ResetPasswordInput,
  resetPasswordSchema,
} from "@/features/Auth/schema/user.schema";
import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "../store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { resetPasswordFn } from "../api/authApi";

export const useResetPassword = (resetToken: string) => {
  const router = useRouter();
  const setRequestLoading = useStore((state) => state.setRequestLoading);
  const isLoading = useStore((state) => state.requestLoading);

  const methods = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate: resetPassword } = useMutation(
    (data: ResetPasswordInput) => resetPasswordFn(data, resetToken!),
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
    }
  );

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<ResetPasswordInput> = (values) => {
    resetPassword(values);
  };

  return { isLoading, handleSubmit, onSubmitHandler, methods };
};
