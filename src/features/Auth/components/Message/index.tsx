import React from "react";

function Message({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] w-[35rem] py-12 px-8 flex flex-col items-center text-center">
      <h3 className="mb-8 text-4xl font-semibold">Almost there!</h3>
      {children}
    </div>
  );
}

export default Message;
