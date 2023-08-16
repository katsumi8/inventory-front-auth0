import React from "react";

function AuthSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-ct-blue-600 min-h-screen pt-20">
      <div className="container mx-auto flex h-full flex-col items-center justify-center p-6">
        {children}
      </div>
    </section>
  );
}

export default AuthSection;
