export const Routes = [
  "/",
  "/products",
  "/orders",
  "/customers",
  "/profile",
] as const;

export type Route = (typeof Routes)[number];
