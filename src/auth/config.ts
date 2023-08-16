import { Auth0ClientOptions } from "@auth0/auth0-spa-js";

export const authConfig: Auth0ClientOptions = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
  authorizationParams: {
    redirect_uri: window.location.origin,
    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
  },
};
