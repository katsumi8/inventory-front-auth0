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
    <div className="relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg p-4 lg:h-[70vh]">
      <h1>Recent Orders</h1>
      <ul>
        {orders.map((order, id) => (
          <li
            key={id}
            className="my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4"
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentOrdersOnSidebar;
