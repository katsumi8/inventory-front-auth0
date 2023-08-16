import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-full flex-col justify-center overflow-y-auto rounded-xl bg-white p-12 shadow-lg md:w-8/12 md:max-w-xl">
      {children}
    </div>
  );
}

export default Card;
