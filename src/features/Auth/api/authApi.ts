import { apiClient } from "@/backendApi";
import {
  LoginInput,
  RegisterInput,
  ResetPasswordInput,
} from "@/features/Auth/schema/user.schema";
import { GenericResponse } from "@/types";
import { ILoginResponse, IUserResponse } from "../types";

export const refreshAccessTokenFn = async () => {
  const response = await apiClient.get<ILoginResponse>("auth/refresh");
  return response.data;
};

export const signUpUserFn = async (user: RegisterInput) => {
  const response = await apiClient.post<GenericResponse>("auth/register", user);
  return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await apiClient.post<ILoginResponse>("auth/login", user);
  return response.data;
};

export const verifyEmailFn = async (verificationCode: string) => {
  const response = await apiClient.get<GenericResponse>(
    `auth/verifyemail/${verificationCode}`,
  );
  return response.data;
};

export const getMeFn = async () => {
  const response = await apiClient.get<IUserResponse>("users/me");
  return response.data;
};

export const forgotPasswordFn = async (email: string) => {
  const response = await apiClient.post<GenericResponse>(
    "auth/forgotpassword",
    {
      email,
    },
  );
  return response.data;
};

export const resetPasswordFn = async (
  data: ResetPasswordInput,
  resetCode: string,
) => {
  const response = await apiClient.patch<GenericResponse>(
    `auth/resetpassword/${resetCode}`,
    data,
  );
  return response.data;
};
