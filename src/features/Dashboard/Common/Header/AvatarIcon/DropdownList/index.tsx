import { useAuth0 } from "@auth0/auth0-react";
import Link from "next/link";
import React from "react";

type Props = {
  userName: string;
  UserEmail: string;
};

function DropdownList({ userName, UserEmail }: Props) {
  const { logout } = useAuth0();
  const clickableList = [
    { name: "Dashboard", link: "/" },
    { name: "Orders", link: "/orders" },
    { name: "Settings", link: "/profile" },
  ];

  return (
    <div
      id="userDropdown"
      className="absolute right-0 z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
    >
      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
        <div>{userName}</div>
        <div className="truncate font-medium">{UserEmail}</div>
      </div>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        {clickableList.map((list, index) => (
          <li
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            key={index}
          >
            <Link href={list.link}>{list.name}</Link>
          </li>
        ))}
      </ul>
      <div className="py-1 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
        <button
          className="px-4 py-2 text-sm"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default DropdownList;
