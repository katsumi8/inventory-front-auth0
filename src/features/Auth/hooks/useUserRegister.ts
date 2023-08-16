import {
  RegisterInput,
  registerSchema,
} from "@/features/Auth/schema/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import useStore from "@/features/Auth/store";
import { signUpUserFn } from "../api/authApi";

export const useUserRegister = () => {
  const setRequestLoading = useStore((state) => state.setRequestLoading);
  const isLoading = useStore((state) => state.requestLoading);

  // ? Calling the Register Mutation
  const {
    mutate: registerUser,
    data,
    isSuccess,
  } = useMutation((userData: RegisterInput) => signUpUserFn(userData), {
    onMutate(variables) {
      setRequestLoading(true);
    },
    onSuccess(data) {
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

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
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

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    registerUser(values);
  };

  return { data, isSuccess, methods, handleSubmit, onSubmitHandler, isLoading };
};
