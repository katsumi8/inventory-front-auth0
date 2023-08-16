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
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;
  if (!orders) return <NoOrderFound />;
  return (
    <div className="p-4">
      <div className="flex-row-reverse hidden pb-4 xl:flex">
        <Link href="/orders/new">
          <div className="items-center hidden p-3 font-bold text-white bg-blue-500 rounded-full sm:flex">
            <CgMathPlus className="text-white" size={30} />
            <p className="">New Order</p>
          </div>
        </Link>
      </div>

      <div className="w-full p-4 m-auto overflow-y-auto bg-white rounded-lg">
        <div className="grid items-center justify-between grid-cols-2 p-2 my-3 cursor-pointer md:grid-cols-5 sm:grid-cols-3">
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
              className="grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-5 sm:grid-cols-3"
            >
              <div className="flex">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FaShoppingBag className="text-purple-800" />
                </div>
                <div className="pl-4 flex justify-center items-center">
                  <p className="font-bold text-gray-800 text-sm">{order.id}</p>
                </div>
              </div>
              <p className="text-right text-gray-600 sm:text-left">
                <span
                  className={
                    order.status === "proccessing"
                      ? "bg-green-200 p-2 rounded-lg"
                      : order.status === "completed"
                      ? "bg-blue-200 p-2 rounded-lg"
                      : "bg-yellow-200 p-2 rounded-lg"
                  }
                >
                  {order.status}
                </span>
              </p>
              <p className="hidden font-bold md:flex">{order.productName}</p>
              <p className="hidden md:flex">{formatDate(order.createdAt)}</p>
              <div className="items-center justify-between hidden sm:flex">
                <p>{order.supplier}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed right-0 z-50 flex flex-row-reverse p-4 bottom-10 xl:hidden">
        <div className="items-center bg-white rounded-full sm:hidden">
          <BsPlusCircleFill className="text-blue-700" size={50} />
        </div>
        <Link href="/orders/new">
          <div className="items-center hidden p-3 font-bold text-white bg-blue-500 rounded-full sm:flex">
            <CgMathPlus className="text-white" size={30} />
            <p className="">New Order</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ShowOrderHistory;
