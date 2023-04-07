import React from "react";

function AuthSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen pt-20 bg-ct-blue-600">
      <div className="container flex flex-col items-center justify-center h-full p-6 mx-auto">
        {children}
      </div>
    </section>
  );
}

export default AuthSection;
