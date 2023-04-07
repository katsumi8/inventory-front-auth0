import {
  ForgotPasswordInput,
  forgotPasswordSchema,
} from "@/features/Auth/schema/user.schema";
import axios from "axios";
import { SERVER_ENDPOINT } from "@/utils/getServerEndpoint";
import { useEffect, useState } from "react";
import { ApiRequestHandler } from "../types";
import useStore from "@/features/Auth/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { forgotPasswordFn } from "../api/authApi";

type responseData = {
  status: string;
  message: string;
};

export const useForgotPassword = () => {
  const setRequestLoading = useStore((state) => state.setRequestLoading);
  const isLoading = useStore((state) => state.requestLoading);

  const methods = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const {
    mutate: forgotPassword,
    data,
    isSuccess,
  } = useMutation((email: string) => forgotPasswordFn(email), {
    onMutate(variables) {
      setRequestLoading(true);
    },
    onSuccess: (data) => {
      setRequestLoading(false);
      toast.success(data?.message);
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
  });

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

  const onSubmitHandler: SubmitHandler<ForgotPasswordInput> = ({ email }) => {
    // 👇 Executing the forgotPassword Mutation
    forgotPassword(email);
  };

  return { handleSubmit, onSubmitHandler, methods, isSuccess, data, isLoading };
};
