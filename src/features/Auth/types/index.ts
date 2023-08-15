export type TitleSectionOnTopOfCardProps = {
  title: string;
  subMessage?: string;
};

export type ApiRequestHandler = {
  isLoading: boolean;
  isSuccess: boolean;
};

export interface IUser {
  name: string;
  email: string;
  id: string;
}

export const Providers = ["local", "Google", "Github", "Microsoft"] as const;

export type Provider = (typeof Providers)[number];

export interface ILoginResponse {
  status: string;
  message: string;
  verified?: boolean;
}

export interface IUserResponse {
  name: string;
  email: string;
  id: string;
}
