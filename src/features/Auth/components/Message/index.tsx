import React from "react";

function Message({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ct-dark-100 mx-auto flex h-[20rem] w-[35rem] max-w-4xl flex-col items-center rounded-md py-12 px-8 text-center">
      <h3 className="mb-8 text-4xl font-semibold">Almost there!</h3>
      {children}
    </div>
  );
}

export default Message;
