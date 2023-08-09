import { createAuth0Client } from "@auth0/auth0-spa-js";
import { authConfig } from "./config";

export const getAccessToken = async () => {
  try {
    const client = await createAuth0Client(authConfig);
    const accessToken = await client.getTokenSilently();
    return accessToken;
  } catch (error) {
    console.error(error);
  }
};
