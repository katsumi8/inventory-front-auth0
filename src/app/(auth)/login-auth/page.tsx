"use client";
import TitleSectionOnTopOfCard from "@/features/Auth/components/TitleSectionOnTopOfCard";
import Card from "@/features/Auth/components/Card";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <TitleSectionOnTopOfCard
        title={"Welcome Back!"}
        subMessage={"Login to have access."}
      />
      <Card>
        <p>This is the test login</p>
        <button onClick={() => loginWithRedirect()}>Log In</button>;
      </Card>
    </>
  );
};

export default LoginPage;
