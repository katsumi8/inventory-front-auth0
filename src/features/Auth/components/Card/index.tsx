import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center h-full p-12 mx-auto overflow-y-auto bg-white shadow-lg md:w-8/12 rounded-xl md:max-w-xl">
      {children}
    </div>
  );
}

export default Card;
