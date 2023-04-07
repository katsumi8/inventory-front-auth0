import React from "react";

function Placeholder() {
  return (
    <div className="relative w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
      <svg
        className="absolute w-12 h-12 text-gray-500 -left-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" // define shape
          clipRule={"evenodd"}
        ></path>
      </svg>
    </div>
  );
}

export default Placeholder;
