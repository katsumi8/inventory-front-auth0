"use client";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsPlusCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { CgMathPlus } from "react-icons/cg";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api";
import NoOrderFound from "./noOrderFound";

function ShowOrderHistory() {
  const {
    isLoading,
    isError,
    data: orders,
  } = useQuery(["orders"], () => getOrders(), {
    select: (data) => data.data,
    retry: false,
  });

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript.
    const yy = String(date.getFullYear()).slice(-2); // Get last two digits of year.

    return `${dd}.${mm}.${yy}`;
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }
  if (!orders) {
    return <NoOrderFound />;
  }
  return (
    <div className="p-4">
      <div className="hidden flex-row-reverse pb-4 xl:flex">
        <Link href="/orders/new">
          <div className="hidden items-center rounded-full bg-blue-500 p-3 font-bold text-white sm:flex">
            <CgMathPlus className="text-white" size={30} />
            <p className="">New Order</p>
          </div>
        </Link>
      </div>

      <div className="m-auto w-full overflow-y-auto rounded-lg bg-white p-4">
        <div className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-5">
          <span>OrderID</span>
          <span className="text-right sm:text-left">Status</span>
          <span className="hidden md:grid">Product Name</span>
          <span className="hidden sm:grid">Last Order</span>
          <span className="hidden sm:grid">Supplier</span>
        </div>
        <ul>
          {orders.map((order, id) => (
            <li
              key={id}
              className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-5"
            >
              <div className="flex">
                <div className="rounded-lg bg-purple-100 p-3">
                  <FaShoppingBag className="text-purple-800" />
                </div>
                <div className="flex items-center justify-center pl-4">
                  <p className="text-sm font-bold text-gray-800">{order.id}</p>
                </div>
              </div>
              <p className="text-right text-gray-600 sm:text-left">
                <span
                  className={
                    order.status === "proccessing"
                      ? "rounded-lg bg-green-200 p-2"
                      : order.status === "completed"
                      ? "rounded-lg bg-blue-200 p-2"
                      : "rounded-lg bg-yellow-200 p-2"
                  }
                >
                  {order.status}
                </span>
              </p>
              <p className="hidden font-bold md:flex">{order.productName}</p>
              <p className="hidden md:flex">{formatDate(order.createdAt)}</p>
              <div className="hidden items-center justify-between sm:flex">
                <p>{order.supplier}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed right-0 bottom-10 z-50 flex flex-row-reverse p-4 xl:hidden">
        <div className="items-center rounded-full bg-white sm:hidden">
          <BsPlusCircleFill className="text-blue-700" size={50} />
        </div>
        <Link href="/orders/new">
          <div className="hidden items-center rounded-full bg-blue-500 p-3 font-bold text-white sm:flex">
            <CgMathPlus className="text-white" size={30} />
            <p className="">New Order</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShowOrderHistory;
