import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard } from "react-icons/rx";
import { BsBuilding, BsCartCheck } from "react-icons/bs";
import { CgCoffee } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";

function SidebarPT({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="fixed flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="rounded-lg bg-purple-800 p-3 text-white">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="w-full border-b-[1px] border-gray-200 p-2"></span>
          <Link href="/">
            <div className="my-4 cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="my-4 cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <BsCartCheck size={20} />
            </div>
          </Link>
          <Link href="/products">
            <div className="my-4 cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <CgCoffee size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="my-4 cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <BsBuilding size={20} />
            </div>
          </Link>
          <Link href="/profile">
            <div className="my-4 cursor-pointer rounded-lg bg-gray-100 p-3 hover:bg-gray-200">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}

export default SidebarPT;
