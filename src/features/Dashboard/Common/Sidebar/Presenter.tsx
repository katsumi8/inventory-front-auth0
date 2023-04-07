import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { BsBuilding, BsCartCheck } from "react-icons/bs";
import { CgCoffee } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

function SidebarPT({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="p-3 text-white bg-purple-800 rounded-lg">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <BsCartCheck size={20} />
            </div>
          </Link>
          <Link href="/products">
            <div className="p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <CgCoffee size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <BsBuilding size={20} />
            </div>
          </Link>
          <Link href="/profile">
            <div className="p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="w-full ml-20">{children}</main>
    </div>
  );
}

export default SidebarPT;
