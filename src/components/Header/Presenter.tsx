import React from "react";

function HeaderPT({ headerTitle }: { headerTitle: string }) {
  return (
    <div className="flex justify-between px-4 pt-4">
      <h2>{headerTitle}</h2>
      <h2>Welcome Back, mate</h2>
    </div>
  );
}

export default HeaderPT;
