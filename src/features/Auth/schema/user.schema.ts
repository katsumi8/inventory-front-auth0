import { object, string, TypeOf } from "zod";

export const registerSchema = object({
  name: string().min(2, "Full name is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const forgotPasswordSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
});

export const resetPasswordSchema = object({
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords do not match",
  path: ["passwordConfirm"],
});

export const verificationCodeSchema = object({
  verificationCode: string().min(1, "Verification code is required"),
});

export type LoginInput = TypeOf<typeof loginSchema>;
export type RegisterInput = TypeOf<typeof registerSchema>;
export type VerificationCodeInput = TypeOf<typeof verificationCodeSchema>;
export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>;
export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>;
