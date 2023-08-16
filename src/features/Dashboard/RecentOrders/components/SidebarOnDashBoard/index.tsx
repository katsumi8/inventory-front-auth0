"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { getOrders } from "../../api";

function RecentOrdersOnSidebar() {
  const {
    isLoading,
    isError,
    data: orders,
  } = useQuery(["orders"], () => getOrders(), {
    select: (data) => data.data,
    cacheTime: 0,
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
  if (!orders) return <p>No orders found</p>;

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {orders.map((order, id) => (
          <li
            key={id}
            className="grid items-center justify-between grid-cols-2 p-2 my-3 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 md:grid-cols-4 sm:grid-cols-3"
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentOrdersOnSidebar;
