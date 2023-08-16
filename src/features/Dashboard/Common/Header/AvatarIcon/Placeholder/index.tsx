import React from "react";

function Placeholder() {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
      <svg
        className="absolute -left-1 h-12 w-12 text-gray-500"
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
