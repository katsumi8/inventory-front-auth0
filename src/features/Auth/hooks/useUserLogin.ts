import { LoginInput, loginSchema } from "@/features/Auth/schema/user.schema";
import { useRouter } from "next/navigation";
import useStore from "@/features/Auth/store";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { loginUserFn } from "../api/authApi";

export const useUserLogin = () => {
  const router = useRouter();
  const isLoading = useStore((state) => state.requestLoading);
  const setRequestLoading = useStore((state) => state.setRequestLoading);
  const from = "/profile";
  const verifyEmail = "/verifyemail";

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  //  API Login Mutation
  const { mutate: loginUser, data } = useMutation(
    (userData: LoginInput) => loginUserFn(userData),
    {
      onMutate(variables) {
        setRequestLoading(true);
      },
      onSuccess: (data) => {
        setRequestLoading(false);
        toast.success(data?.message);
        if (data?.verified) {
          router.push(from);
        } else {
          router.push(verifyEmail);
        }
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

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    // ? Executing the loginUser Mutation
    loginUser(values);
  };

  return { isLoading, methods, handleSubmit, onSubmitHandler, from };
};
