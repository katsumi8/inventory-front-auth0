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
  role: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  provider: Provider;
}

export const Providers = ["local", "Google", "Github", "Microsoft"] as const;

export type Provider = typeof Providers[number];

export interface GenericResponse {
  status: string;
  message: string;
}

export interface ILoginResponse {
  status: string;
  message: string;
  verified?: boolean;
}

export interface IUserResponse {
  status: string;
  data: {
    user: IUser;
  };
}
